"use client";

import { TeamCompositionRegisterFormProps } from "@/lib/interface";
import { Form } from "../ui/form";
import Character from "./character";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { PostTeamCompositionSchema } from "@/lib/zodschema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTransition } from "react";
import { Button } from "../ui/button";

const TeamCompositionRegisterForm: React.FC<
  TeamCompositionRegisterFormProps
> = ({
  character,
  levels,
  constellations,
  characterImageUrls,
  characterImageUrl,
}) => {
  const [isPending, startTransition] = useTransition();

  const form = useForm<z.infer<typeof PostTeamCompositionSchema>>({
    resolver: zodResolver(PostTeamCompositionSchema),
    defaultValues: {
      name: character.name,
      characterId: character.id.toString(),
      characterLevelId: "",
      normalAttackLevel: "8",
      elementalSkillLevel: "8",
      elementalBurstLevel: "8",
      constellationRank: "0",
      weaponId: "",
      weaponLevelId: "",
      refinementRank: "",
      flowerId: "",
      plumeId: "",
      sandId: "",
      gobletId: "",
      circletId: "",
      buffersId: [],
    },
  });

  const onSubmit = (values: z.infer<typeof PostTeamCompositionSchema>) => {
    startTransition(() => {});
    console.log(values);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex space-x-4">
        <Character
          character={character}
          levels={levels}
          constellations={constellations}
          characterImageUrls={characterImageUrls}
          characterImageUrl={characterImageUrl}
        />
        <div>
          <div>weapon</div>
          <div>flower</div>
          <div>plume</div>
          <div>sands</div>
          <div>goblet</div>
          <div>circlet</div>
        </div>
        <div>buffs</div>
        <Button
          variant="outline"
          size="free"
          type="submit"
          className="border-muted-foreground text-base"
          disabled={isPending}
        >
          登録
        </Button>
      </form>
    </Form>
  );
};

export default TeamCompositionRegisterForm;
