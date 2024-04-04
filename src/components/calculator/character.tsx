import { CharacterProps } from "@/lib/interface";
import SelectLevel from "./select-level";
import SelectConstellation from "./select-constellation";
import SelectTalentLevel from "./select-talent-level";

const Character: React.FC<CharacterProps> = ({
  character,
  levels,
  constellations,
}) => {
  return (
    <div>
      <div className="flex items-center justify-center space-x-4">
        <div>
          <div>{character.name}</div>
          <SelectLevel levels={levels} formName="characterLevelId" />
          <SelectConstellation constellations={constellations} />
        </div>
        <div>CharacterIcon</div>
      </div>
      <div className="grid grid-cols-3">
        <SelectTalentLevel formName="normalAttackLevel" />
        <SelectTalentLevel formName="elementalSkillLevel" />
        <SelectTalentLevel formName="elementalBurstLevel" />
      </div>
      <div>Selectbuff</div>
    </div>
  );
};

export default Character;
