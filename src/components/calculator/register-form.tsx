"use client";

import {
  CharacterAllStats,
  TeamCompositionRegisterFormProps,
} from "@/lib/interface";
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
import { getActiveArtifactSetBonus, parameterCalculator } from "@/lib/utils";
import BaseStats from "./stats";
import StatDetails from "./stat-details";

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
      weaponId: "5502",
      weaponLevelId: "96",
      refinementRank: "1",
      flowerId: "ffa81853-0e27-459d-95c7-5ffdf1058935",
      plumeId: "cd39b3db-c58b-4727-8f48-e3796ef53434",
      sandId: "f34284ae-16d8-4f8e-9c87-322eb7472119",
      gobletId: "d27ac305-aac1-4061-8bb8-4f645fb69eec",
      circletId: "798125e5-966c-4fbb-995b-05d08225d1be",
      buffersId: {
        passiveTalents: [],
        characters: [],
        weapons: [],
        artifacts: [],
        elementalResonances: [],
      },
      enemyLevel: "90",
      resistance: [
        { element: "pyro", value: "00" },
        { element: "hydro", value: "00" },
        { element: "cryo", value: "00" },
        { element: "electro", value: "00" },
        { element: "anemo", value: "00" },
        { element: "geo", value: "00" },
        { element: "dendro", value: "00" },
        { element: "physical", value: "00" },
      ],
    },
  });

  const onSubmit = (values: z.infer<typeof PostTeamCompositionSchema>) => {
    console.log(values);
  };

  const characterBaseStats = [
    {
      statId: 100,
      value:
        character.CharacterBaseHps[
          levels.find(
            (level) => level.id.toString() === form.watch("characterLevelId")
          )?.value!
        ],
    },
    {
      statId: 200,
      value:
        character.CharacterBaseAttacks[
          levels.find(
            (level) => level.id.toString() === form.watch("characterLevelId")
          )?.value!
        ],
    },
    {
      statId: 300,
      value:
        character.CharacterBaseDefenses[
          levels.find(
            (level) => level.id.toString() === form.watch("characterLevelId")
          )?.value!
        ],
    },
    { statId: 400, value: 0 },
    { statId: 500, value: 1 },
    { statId: 600, value: 0.05 },
    { statId: 700, value: 0.5 },
  ];

  characterBaseStats.push({
    statId: character.CharacterAscensionBonusStats.Stats.id,
    value:
      character.CharacterAscensionBonusStats[
        levels.find(
          (level) => level.id.toString() === form.watch("characterLevelId")
        )?.value!
      ],
  });

  const weapon = weapons.find(
    (weapon) => weapon.id.toString() === form.watch("weaponId")
  );

  if (weapon) {
    characterBaseStats.push(
      {
        statId: 200,
        value:
          weapon?.WeaponBaseAttacks[
            levels.find(
              (level) => level.id.toString() === form.watch("weaponLevelId")
            )?.value!
          ],
      },
      {
        statId: weapon?.subStatId,
        value:
          weapon?.WeaponSubStats[
            levels.find(
              (level) => level.id.toString() === form.watch("weaponLevelId")
            )?.value!
          ],
      }
    );
  }

  const artifactId = [
    form.watch("flowerId"),
    form.watch("plumeId"),
    form.watch("sandId"),
    form.watch("gobletId"),
    form.watch("circletId"),
  ];

  const artifactStats: { statId: number; value: number }[] = [];

  artifactId.map((id) => {
    if (id !== "") {
      artifactStats.push({
        statId: artifacts.find((artifact) => artifact.id === id)?.mainStatId!,
        value: artifacts.find((artifact) => artifact.id === id)
          ?.ArtifactMainStats.star5!,
      });
      artifacts
        .find((artifact) => artifact.id === id)
        ?.ArtifacterSubOptions.map((sub) => artifactStats.push(sub));
    }
  });

  const artifactSetStats = getActiveArtifactSetBonus(artifacts, artifactId);

  const allStatsParams = [
    ...characterBaseStats,
    ...artifactStats,
    ...artifactSetStats,
  ];

  const contexts = parameterCalculator(allStatsParams);

  contexts.push({
    label: `${character.Visions.japanese}元素ダメージ`,
    value: allStatsParams
      .filter((stat) => stat.statId.toString() === `125${character.visionId}`)
      .map((stat) => stat.value)
      .reduce((a, b) => a + b, 0),
    format: true,
  });

  const allStats: CharacterAllStats = {
    hp: contexts[0].value,
    attack: contexts[0].value,
    defense: contexts[2].value,
    elementalMastery: contexts[3].value,
    energyRecharge: contexts[4].value,
    criticalRate: contexts[5].value,
    normalAttackCriticalRate: contexts[5].value,
    chargedAttackCriticalRate: contexts[5].value,
    plungingAttackCriticalRate: contexts[5].value,
    elementalSkillCriticalRate: contexts[5].value,
    elementalBurstCriticalRate: contexts[5].value,
    overloadedCriticalRate: contexts[5].value,
    burningCriticalRate: contexts[5].value,
    vaporizeCriticalRate: contexts[5].value,
    meltCriticalRate: contexts[5].value,
    superconductCriticalRate: contexts[5].value,
    swirlCriticalRate: contexts[5].value,
    electroChargedCriticalRate: contexts[5].value,
    aggravateCriticalRate: contexts[5].value,
    spreadCriticalRate: contexts[5].value,
    bloomCriticalRate: contexts[5].value,
    hyperbloomCriticalRate: contexts[5].value,
    burgeonCriticalRate: contexts[5].value,
    criticalDmg: contexts[6].value,
    normalAttackCriticalDmg: contexts[6].value,
    chargedAttackCriticalDmg: contexts[6].value,
    plungingAttackCriticalDmg: contexts[6].value,
    elementalSkillCriticalDmg: contexts[6].value,
    elementalBurstCriticalDmg: contexts[6].value,
    overloadedCriticalDmg: contexts[6].value,
    burningCriticalDmg: contexts[6].value,
    vaporizeCriticalDmg: contexts[6].value,
    meltCriticalDmg: contexts[6].value,
    superconductCriticalDmg: contexts[6].value,
    swirlCriticalDmg: contexts[6].value,
    electroChargedCriticalDmg: contexts[6].value,
    aggravateCriticalDmg: contexts[6].value,
    spreadCriticalDmg: contexts[6].value,
    bloomCriticalDmg: contexts[6].value,
    hyperbloomCriticalDmg: contexts[6].value,
    burgeonCriticalDmg: contexts[6].value,
    healingBonus: 0,
    incomingHealingBonus: 0,
    cdReduction: 0,
    shieldStrength: 0,
    dmgBonus: 0,
    normalAttackDmgBonus: 0,
    chargedAttackDmgBonus: 0,
    plungingAttackDmgBonus: 0,
    elementalSkillDmgBonus: 0,
    elementalBurstDmgBonus: 0,
    overloadedDmgBonus: 0,
    burningDmgBonus: 0,
    vaporizeDmgBonus: 0,
    meltDmgBonus: 0,
    superconductDmgBonus: 0,
    swirlDmgBonus: 0,
    electroChargedDmgBonus: 0,
    aggravateDmgBonus: 0,
    spreadDmgBonus: 0,
    bloomDmgBonus: 0,
    hyperbloomDmgBonus: 0,
    burgeonDmgBonus: 0,
    pyroDmgBonus: 0,
    hydroDmgBonus: 0,
    cryoDmgBonus: 0,
    electroDmgBonus: 0,
    anemoDmgBonus: 0,
    geoDmgBonus: 0,
    dendroDmgBonus: 0,
    physicalDmgBonus: 0,
    pyroSwirlDmgBonus: 0,
    hydroSwirlDmgBonus: 0,
    cryoSwirlDmgBonus: 0,
    electroSwirlDmgBonus: 0,
    allElementRes: 0,
    pyroRes: 0,
    hydroRes: 0,
    cryoRes: 0,
    electroRes: 0,
    anemoRes: 0,
    geoRes: 0,
    dendroRes: 0,
    physicalRes: 0,
    pyroResDown: 0,
    hydroResDown: 0,
    cryoResDown: 0,
    electroResDown: 0,
    anemoResDown: 0,
    geoResDown: 0,
    dendroResDown: 0,
    physicalResDown: 0,
    baseSpeed: 0,
    speedPercent: 0,
    elementalBurstCost: 0,
    normalAttackTalentMultiplier: 0,
    chargedAttackTalentMultiplier: 0,
    plungingAttackTalentMultiplier: 0,
    elementalSkillTalentMultiplier: 0,
    elementalBurstTalentMultiplier: 0,
    normalAttackTalentMultiplierPercent: 0,
    chargedAttackTalentMultiplierPercent: 0,
    plungingAttackTalentMultiplierPercent: 0,
    elementalSkillTalentMultiplierPercent: 0,
    elementalBurstTalentMultiplierPercent: 0,
    talentMultiplierFlat: 0,
    normalAttackTalentMultiplierFlat: 0,
    chargedAttackTalentMultiplierFlat: 0,
    plungingAttackTalentMultiplierFlat: 0,
    elementalSkillTalentMultiplierFlat: 0,
    elementalBurstTalentMultiplierFlat: 0,
    baseAttackSpeed: 0,
    attackSpeedPercent: 0,
    normalAttackAttackSpeedPercent: 0,
    chargedAttackAttackSpeedPercent: 0,
    defenseIgnoredPercent: 0,
    defenseReductionPercent: 0,
    normalAttackTalentLevel: 0,
    elementalSkillTalentLevel: 0,
    elementalBurstTalentLevel: 0,
  };

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
          <BaseStats contexts={contexts} />
          <StatDetails stats={allStatsParams} />
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
