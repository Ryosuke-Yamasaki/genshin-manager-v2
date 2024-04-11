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
import Equipments from "./equipments";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import Buffs from "./buffs";

const TeamCompositionRegisterForm: React.FC<
  TeamCompositionRegisterFormProps
> = ({ character, levels, characterImageUrls, weapons, artifacts }) => {
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
      buffersId: {
        passiveTalents: [],
        characters: [],
        weapons: [],
        artifacts: [],
      },
    },
  });

  const onSubmit = (values: z.infer<typeof PostTeamCompositionSchema>) => {
    startTransition(() => {});
    console.log(values);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <Button
          variant="outline"
          size="free"
          type="submit"
          className="border-muted-foreground text-base"
          disabled={isPending}
        >
          登録
        </Button>
        <div className="flex space-x-4">
          <Character
            character={character}
            levels={levels}
            constellations={character.Constellations}
            characterImageUrls={characterImageUrls}
            characterImageUrl={character.CharacterImageUrls}
          />
          <div className="p-2 border rounded-lg w-[550px]">
            <Tabs defaultValue="equip" className="space-y-4">
              <TabsList>
                <TabsTrigger value="equip">装備</TabsTrigger>
                <TabsTrigger value="buff">バフ</TabsTrigger>
              </TabsList>
              <TabsContent value="equip">
                <Equipments weapons={weapons} artifacts={artifacts} />
              </TabsContent>
              <TabsContent value="buff">
                <Buffs passiveTalents={character.PassiveTalents} />
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </form>
    </Form>
  );
};

export default TeamCompositionRegisterForm;
