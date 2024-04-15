import { BuffsProps } from "@/lib/interface";
import SelectPassiveTalentBuff from "./select-passiveTalent-buff";
import SelectCharacterBuff from "./select-character-buff";

const Buffs: React.FC<BuffsProps> = ({ passiveTalents, buffers }) => {
  return (
    <div className="flex space-x-2">
      <SelectPassiveTalentBuff passiveTalents={passiveTalents} />
      <SelectCharacterBuff buffers={buffers} />
      <div>weaponBuff</div>
      <div>artifactBuff</div>
      <div>resonaneceBuff</div>
      <div>enemy</div>
    </div>
  );
};

export default Buffs;
