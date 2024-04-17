import { GetArtifacters } from "@/actions/getArtifacters";
import { GetBuffArtifacts } from "@/actions/getBuffArtifacts";
import { GetBuffCharacters } from "@/actions/getBuffCharacters";
import { GetBuffElementalResonances } from "@/actions/getBuffElementalResonances";
import { GetBuffWeapons } from "@/actions/getBuffWeapons";
import { GetCharacterById } from "@/actions/getCharacterById";
import { GetCharacterImageUrls } from "@/actions/getCharacterImageUrls";
import { GetLevels } from "@/actions/getLevels";
import { GetStats } from "@/actions/getStats";
import { GetWeaponsByTypeId } from "@/actions/getWeaponsByTypeId";
import TeamCompositionRegisterForm from "@/components/calculator/register-form";

const TeamCompositionPage = async ({
  params,
}: {
  params: { userId: string; characterId: string };
}) => {
  const character = await GetCharacterById(params.characterId);
  const levels = await GetLevels();
  const characterImageUrls = await GetCharacterImageUrls();
  const weapons = await GetWeaponsByTypeId(character.weaponTypeId.toString());
  const artifacts = await GetArtifacters(params.userId);
  const buffCharacters = await GetBuffCharacters();
  const buffWeapons = await GetBuffWeapons();
  const buffArtifacts = await GetBuffArtifacts();
  const buffElementalResonances = await GetBuffElementalResonances();
  const stats = await GetStats();

  return (
    <TeamCompositionRegisterForm
      character={character}
      levels={levels}
      characterImageUrls={characterImageUrls}
      weapons={weapons}
      artifacts={artifacts}
      buffers={buffCharacters}
      buffWeapons={buffWeapons}
      buffArtifacts={buffArtifacts}
      buffElementalResonances={buffElementalResonances}
      stats={stats}
    />
  );
};

export default TeamCompositionPage;
