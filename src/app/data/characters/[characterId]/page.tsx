import { Accordion } from "@/components/ui/accordion";
import Stats from "@/components/wiki/stats";

const CharacterPage = ({ params }: { params: { characterId: string } }) => {
  return (
    <Accordion
      type="multiple"
      defaultValue={[params.characterId]}
      className="space-y-4 max-w-[800px]"
    >
      <div>目次</div>
      <Stats characterId={params.characterId} />
      <div>基礎ステータス</div>
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
