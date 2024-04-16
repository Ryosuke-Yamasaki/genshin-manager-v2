import { BuffsProps } from "@/lib/interface";
import SelectPassiveTalentBuff from "./select-passive-talent-buff";
import SelectCharacterBuff from "./select-character-buff";
import SelectWeaponBuff from "./select-weapon-buff";
import SelectArtifactBuff from "./select-artifact-buff";
import SelectElementalResonanceBuff from "./select-elemental-resonances-buff";
import Enemy from "./enemy";

const Buffs: React.FC<BuffsProps> = ({
  passiveTalents,
  buffers,
  buffWeapons,
  buffArtifacts,
  buffElementalResonances,
}) => {
  return (
    <div className="flex space-x-2">
      <SelectPassiveTalentBuff passiveTalents={passiveTalents} />
      <SelectCharacterBuff buffers={buffers} />
      <SelectWeaponBuff buffWeapons={buffWeapons} />
      <SelectArtifactBuff buffArtifacts={buffArtifacts} />
      <SelectElementalResonanceBuff
        buffElementalResonances={buffElementalResonances}
      />
      <Enemy />
    </div>
  );
};

export default Buffs;
