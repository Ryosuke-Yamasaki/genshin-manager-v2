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
  const talents = [
    { name: "normalAttackLevel", label: "通常" },
    { name: "elementalSkillLevel", label: "スキル" },
    { name: "elementalBurstLevel", label: "爆発" },
  ];

  return (
    <div className="border rounded mx-auto py-2 w-52 space-y-2">
      <div className="flex items-center justify-center space-x-4">
        <div className="space-y-2">
          <div>{character.name}</div>
          <SelectLevel levels={levels} formName="characterLevelId" />
          <SelectConstellation constellations={constellations} />
        </div>
        <SelectCharacter
          characterImageUrls={characterImageUrls}
          characterImageUrl={characterImageUrl}
        />
      </div>
      <div className="flex items-center justify-center space-x-2">
        {talents.map((talent) => (
          <SelectTalentLevel name={talent.name} label={talent.label} />
        ))}
      </div>
      <div>Selectbuff</div>
    </div>
  );
};

export default Character;
