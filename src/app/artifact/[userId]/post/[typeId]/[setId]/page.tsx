"use client";

import useArtifactMainStatById from "@/hooks/useArtifactMainStatById";
import SelectArtifact from "@/components/artifacter/select-artifact";
import SelectArtifactMainStat from "@/components/artifacter/select-main-stat";
import SelectArtifactType from "@/components/artifacter/select-type";
import { Badge } from "@/components/ui/badge";
import { Form } from "@/components/ui/form";
import { FormatPercent } from "@/lib/format";
import { postArtifacterSchema } from "@/lib/zodschema";
import { zodResolver } from "@hookform/resolvers/zod";
import { StarFilledIcon } from "@radix-ui/react-icons";
import { useForm } from "react-hook-form";
import { z } from "zod";

const mainStatsDefaultValues = [
  { typeId: "1", value: 101 },
  { typeId: "2", value: 201 },
  { typeId: "3", value: 203 },
  { typeId: "4", value: 1251 },
  { typeId: "5", value: 600 },
];

const PostArtifactPage = ({
  params,
}: {
  params: { userId: string; typeId: string; setId: string };
}) => {
  const mainStatId = mainStatsDefaultValues.find(
    (stat) => stat.typeId == params.typeId
  )?.value;

  const form = useForm<z.infer<typeof postArtifacterSchema>>({
    resolver: zodResolver(postArtifacterSchema),
    defaultValues: {
      typeId: Number(params.typeId),
      setId: Number(params.setId),
      mainStatId,
      subOptions: [
        { statId: 600, value: 3.9 },
        { statId: 700, value: 7.8 },
      ],
    },
  });

  const onSubmit = (values: z.infer<typeof postArtifacterSchema>) => {
    console.log(values);
  };

  const mainStatValue = useArtifactMainStatById(form);

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="bg-[#bd6833] p-0.5">
          <div className="border-2 border-[#9f5427] text-white">
            <div className="ml-2">名前</div>
          </div>
        </div>
        <div className="bg-gradient-to-tl from-[#e2ac53] to-[#6b5453]">
          <div className="flex items-center justify-center text-white">
            <div className="space-y-2">
              <SelectArtifactType
                typeId={Number(params.typeId)}
                setId={params.setId}
              />
              <SelectArtifactMainStat typeId={params.typeId} form={form} />
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
            <SelectArtifact typeId={params.typeId} setId={params.setId} />
          </div>
        </div>
        <div className="h-1 bg-gradient-to-r from-[#816c58] to-[#b79056]" />
        <div className="bg-[#ece5d7] px-4 py-2">
          <div className="flex justify-between">
            <Badge className="text-md">+20</Badge>
          </div>
          <ul className="mx-2 mt-2 list-inside list-disc font-semibold text-[#545963]">
            <li>サブオプション１</li>
            <li>サブオプション２</li>
            <li>サブオプション３</li>
            <li>サブオプション４</li>
          </ul>
          <div className="text-[#64af5d]">セット効果名</div>
          <ul className="list-inside list-disc">
            <li className="text-[#727781]">２セット効果</li>
            <li className="text-[#727781]">４セット効果</li>
          </ul>
        </div>
      </form>
    </Form>
  );
};

export default PostArtifactPage;
