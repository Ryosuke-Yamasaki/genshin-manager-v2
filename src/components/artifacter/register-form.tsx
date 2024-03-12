"use client";

import { useForm } from "react-hook-form";
import { Form } from "../ui/form";
import { postArtifacterSchema } from "@/lib/zodschema";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { ArtifacterRegisterFormProps } from "@/lib/interface";
import { PostArtifacters } from "@/actions/postArtifacters";
import { useTransition } from "react";
import SelectArtifactType from "./select-type";
import SelectArtifactMainStat from "./select-main-stat";
import { StarFilledIcon } from "@radix-ui/react-icons";
import SelectArtifact from "./select-artifact";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import SubOptionForm from "./sub-option-form";
import useArtifactById from "@/hooks/useArtifactById";
import useArtifactMainStatById from "@/hooks/useArtifactMainStatById";
import { FormatPercent } from "@/lib/utils";
import { PostArtifacterSubOptions } from "@/actions/postArtifacterSubOptions";

const mainStatsDefaultValues = [
  { typeId: "1", value: 101 },
  { typeId: "2", value: 201 },
  { typeId: "3", value: 203 },
  { typeId: "4", value: 1251 },
  { typeId: "5", value: 600 },
];

const ArtifacterRegisterForm: React.FC<ArtifacterRegisterFormProps> = ({
  userId,
  typeId,
  setId,
  types,
  icons,
  stats,
}) => {
  const [isPending, startTransition] = useTransition();

  const mainStatId = mainStatsDefaultValues.find(
    (stat) => stat.typeId == typeId
  )?.value;

  const form = useForm<z.infer<typeof postArtifacterSchema>>({
    resolver: zodResolver(postArtifacterSchema),
    defaultValues: {
      userId: userId,
      typeId: Number(typeId),
      setId: Number(setId),
      artifactId: Number(typeId + setId),
      mainStatId,
      subOptions: [
        { statId: "600", value: "3.9" },
        { statId: "700", value: "7.8" },
        { statId: "203", value: "5.8" },
        { statId: "500", value: "6.5" },
      ],
    },
  });

  const onSubmit = (values: z.infer<typeof postArtifacterSchema>) => {
    startTransition(async () => {
      const data = await PostArtifacters(values);
      const { id } = data;
      await PostArtifacterSubOptions(id, values.subOptions);
    });
  };

  const mainStatValue = useArtifactMainStatById(form.watch("mainStatId"));
  const artifact = useArtifactById(Number(typeId + setId));
  const icon = icons.find((icon) => icon.artifactId === Number(typeId + setId));

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="max-w-[300px] shadow-lg"
      >
        <div className="bg-[#bd6833] p-0.5">
          <div className="border-2 border-[#9f5427] text-white">
            <div className="ml-2">{artifact?.name}</div>
          </div>
        </div>
        <div className="bg-gradient-to-tl from-[#e2ac53] to-[#6b5453]">
          <div className="flex items-center justify-between text-white">
            <div className="space-y-2 mx-3">
              <SelectArtifactType
                typeId={Number(typeId)}
                setId={setId}
                types={types}
              />
              <SelectArtifactMainStat typeId={typeId} />
              <div className="text-2xl">
                {mainStatValue?.star5! < 1
                  ? FormatPercent(mainStatValue?.star5!)
                  : mainStatValue?.star5}
              </div>
              <div className="flex">
                <StarFilledIcon color="#fecc32" />
                <StarFilledIcon color="#fecc32" />
                <StarFilledIcon color="#fecc32" />
                <StarFilledIcon color="#fecc32" />
                <StarFilledIcon color="#fecc32" />
              </div>
            </div>
            <SelectArtifact typeId={typeId} icons={icons} icon={icon!} />
          </div>
        </div>
        <div className="h-1 bg-gradient-to-r from-[#816c58] to-[#b79056]" />
        <div className="bg-[#ece5d7] px-4 py-2 space-y-2">
          <div className="flex items-center justify-between">
            <Badge className="text-base">+20</Badge>
            <Button
              variant="outline"
              size="free"
              type="submit"
              className="border-muted-foreground text-base"
              disabled={isPending}
            >
              登録
            </Button>
          </div>
          <SubOptionForm stats={stats} />
          <div className="text-[#64af5d]">{artifact?.ArtifactSets.name}</div>
          <ul className="list-inside list-disc">
            <li className="text-[#727781]">
              {artifact?.ArtifactSets.twoPieceBonuses}
            </li>
            <li className="text-[#727781]">
              {artifact?.ArtifactSets.fourPieceBonuses}
            </li>
          </ul>
        </div>
      </form>
    </Form>
  );
};

export default ArtifacterRegisterForm;
