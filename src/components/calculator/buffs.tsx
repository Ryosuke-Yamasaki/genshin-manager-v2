import { BuffsProps } from "@/lib/interface";
import SelectDialog from "../ui/select-dialog";
import SelectPassiveTalent from "./select-passiveTalent";

const Buffs: React.FC<BuffsProps> = ({ passiveTalents }) => {
  return (
    <div className="flex space-x-2">
      <SelectPassiveTalent passiveTalents={passiveTalents} />
      <div>characterBuff</div>
      <div>weaponBuff</div>
      <div>artifactBuff</div>
      <div>resonaneceBuff</div>
      <div>enemy</div>
    </div>
  );
};

export default Buffs;
//各バフでコンポーネントで分ける
