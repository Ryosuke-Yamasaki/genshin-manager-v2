import { GetCharacterById } from "@/actions/getCharacterById";
import { GetCharacterImageUrlById } from "@/actions/getCharacterImageUrlById";
import { Accordion } from "@/components/ui/accordion";
import Profile from "@/components/wiki/profile";
import Stats from "@/components/wiki/stats";

const CharacterPage = async ({
  params,
}: {
  params: { characterId: string };
}) => {
  const character = await GetCharacterById(params.characterId);
  const url = await GetCharacterImageUrlById(params.characterId);

  const contents = [
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
      className="space-y-4 max-w-[800px]"
    >
      <div>目次</div>
      <Profile character={character} url={url} title={contents[0]} />
      <Stats character={character} title={contents[1]} />

      <div>
        天賦
        <div>通常攻撃</div>
        <div>元素スキル</div>
        <div>元素爆発</div>
        <div>固有天賦</div>
      </div>
      <div>命ノ星座</div>
    </Accordion>
  );
};

export default CharacterPage;
