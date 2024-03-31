import { GetCharacterById } from "@/actions/getCharacterById";
import { GetCharacterImageUrlById } from "@/actions/getCharacterImageUrlById";
import { Accordion } from "@/components/ui/accordion";
import Constellations from "@/components/wiki/constellations";
import Contents from "@/components/wiki/contents";
import ElementalBurst from "@/components/wiki/elemental-bursts";
import ElementalSkill from "@/components/wiki/elemental-skills";
import NormalAttack from "@/components/wiki/normal-attacks";
import PassiveTalents from "@/components/wiki/passive-talents";
import Profile from "@/components/wiki/profile";
import SectionWrapper from "@/components/wiki/section-wrapper";
import Stats from "@/components/wiki/stats";

const CharacterPage = async ({
  params,
}: {
  params: { characterId: string };
}) => {
  const character = await GetCharacterById(params.characterId);
  const url = await GetCharacterImageUrlById(params.characterId);

  const contents = [
    { value: "目次", label: "contents" },
    { value: "基本情報", label: "profile" },
    { value: "基礎ステータス", label: "stats" },
    { value: "天賦", label: "talents" },
    { value: "通常攻撃", label: "normalAttack" },
    { value: "元素スキル", label: "elementalSkill" },
    { value: "元素爆発", label: "elementalBurst" },
    { value: "固有天賦", label: "passiveTalent" },
    { value: "命ノ星座", label: "constellation" },
  ];

  const contentValues = contents.map((content) => content.label);

  return (
    <Accordion
      type="multiple"
      defaultValue={contentValues}
      className="space-y-4 max-w-[1000px]"
    >
      <Contents contents={contents} title={contents[0]} />
      <Profile character={character} url={url} title={contents[1]} />
      <Stats character={character} title={contents[2]} />

      <SectionWrapper headerTitle={contents[3].value} id={contents[3].label}>
        <div className="space-y-2">
          <NormalAttack title={contents[4]} characterId={params.characterId} />
          <ElementalSkill
            title={contents[5]}
            characterId={params.characterId}
          />
          <ElementalBurst
            title={contents[6]}
            characterId={params.characterId}
          />
          <PassiveTalents
            title={contents[7]}
            characterId={params.characterId}
          />
        </div>
      </SectionWrapper>
      <Constellations title={contents[8]} characterId={params.characterId} />
    </Accordion>
  );
};

export default CharacterPage;
