"use client";

import { TeamCompositionRegisterFormProps } from "@/lib/interface";
import { Form } from "../ui/form";
import Character from "./character";
import { useForm } from "react-hook-form";
import { number, z } from "zod";
import { PostTeamCompositionSchema } from "@/lib/zodschema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTransition } from "react";
import { Button } from "../ui/button";
import Equipments from "./equipments";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import Buffs from "./buffs";

const TeamCompositionRegisterForm: React.FC<
  TeamCompositionRegisterFormProps
> = ({
  character,
  levels,
  characterImageUrls,
  weapons,
  artifacts,
  buffers,
  buffWeapons,
  buffArtifacts,
  buffElementalResonances,
  stats,
}) => {
  const [isPending, startTransition] = useTransition();

  const form = useForm<z.infer<typeof PostTeamCompositionSchema>>({
    resolver: zodResolver(PostTeamCompositionSchema),
    defaultValues: {
      name: character.name,
      characterId: character.id.toString(),
      characterLevelId: "96",
      normalAttackLevel: "8",
      elementalSkillLevel: "8",
      elementalBurstLevel: "8",
      constellationRank: "0",
      weaponId: "",
      weaponLevelId: "96",
      refinementRank: "1",
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
        elementalResonances: [],
      },
      enemyLevel: "90",
      resistance: [
        { element: "pyro", value: "10" },
        { element: "hydro", value: "10" },
        { element: "cryo", value: "10" },
        { element: "electro", value: "10" },
        { element: "anemo", value: "10" },
        { element: "geo", value: "10" },
        { element: "dendro", value: "10" },
        { element: "physical", value: "10" },
      ],
    },
  });

  const onSubmit = (values: z.infer<typeof PostTeamCompositionSchema>) => {
    startTransition(() => {});
    console.log(values);
  };

  const weapon = weapons.find(
    (weapon) => weapon.id.toString() === form.watch("weaponId")
  );

  const weaponBaseStats: { [K: string]: number | undefined } = {
    baseAttack:
      weapon?.WeaponBaseAttacks[
        levels.find(
          (level) => level.id.toString() === form.watch("weaponLevelId")
        )?.value!
      ],
  };

  const characterBaseStats = {
    baseHp:
      character.CharacterBaseHps[
        levels.find(
          (level) => level.id.toString() === form.watch("characterLevelId")
        )?.value!
      ],
    baseAttack:
      character.CharacterBaseAttacks[
        levels.find(
          (level) => level.id.toString() === form.watch("characterLevelId")
        )?.value!
      ],
    baseDefense:
      character.CharacterBaseDefenses[
        levels.find(
          (level) => level.id.toString() === form.watch("characterLevelId")
        )?.value!
      ],
    elementalMastery: 0,
    energyRecharge: 1,
    criticalRate: 0.05,
    criticalDmg: 0.5,
  };

  console.log(characterBaseStats);

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
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
                <Equipments
                  weapons={weapons}
                  artifacts={artifacts}
                  levels={levels}
                />
              </TabsContent>
              <TabsContent value="buff">
                <Buffs
                  passiveTalents={character.PassiveTalents}
                  buffers={buffers}
                  buffWeapons={buffWeapons}
                  buffArtifacts={buffArtifacts}
                  buffElementalResonances={buffElementalResonances}
                />
              </TabsContent>
            </Tabs>
          </div>
        </div>
        <div className="flex space-x-4">
          <div>
            Stats
            <div>hp</div>
            <div>atk</div>
            <div>def</div>
            <div>em</div>
            <div>er</div>
            <div>cr</div>
            <div>cd</div>
          </div>
          <div>Details</div>
        </div>
        <div>
          damages
          <div>NA</div>
          <div>ES</div>
          <div>EB</div>
        </div>
      </form>
    </Form>
  );
};

export default TeamCompositionRegisterForm;
