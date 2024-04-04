import { CharacterProps } from "@/lib/interface";
import SelectLevel from "./select-level";
import SelectConstellation from "./select-constellation";
import SelectTalentLevel from "./select-talent-level";
import SelectCharacter from "./select-character";

const Character: React.FC<CharacterProps> = ({
  character,
  levels,
  constellations,
  characterImageUrls,
  characterImageUrl,
}) => {
  return (
    <div>
      <div className="flex items-center justify-center space-x-4">
        <div>
          <div>{character.name}</div>
          <SelectLevel levels={levels} formName="characterLevelId" />
          <SelectConstellation constellations={constellations} />
        </div>
        <SelectCharacter
          characterImageUrls={characterImageUrls}
          characterImageUrl={characterImageUrl}
        />
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
