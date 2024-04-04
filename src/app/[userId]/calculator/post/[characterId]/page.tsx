import { GetCharacterById } from "@/actions/getCharacterById";
import { GetConstellationsById } from "@/actions/getConstellationById";
import { GetLevels } from "@/actions/getLevels";
import TeamCompositionRegisterForm from "@/components/calculator/register-form";

const TeamCompositionPage = async ({
  params,
}: {
  params: { characterId: string };
}) => {
  const character = await GetCharacterById(params.characterId);
  const levels = await GetLevels();
  const constellation = await GetConstellationsById(params.characterId);

  return (
    <div className="space-y-4">
      <TeamCompositionRegisterForm
        character={character}
        levels={levels}
        constellations={constellation}
      />
      <div>
        <div>Stats</div>
        <div>Details</div>
      </div>
      <div>
        damages
        <div>NA</div>
        <div>ES</div>
        <div>EB</div>
      </div>
    </div>
  );
};

export default TeamCompositionPage;
