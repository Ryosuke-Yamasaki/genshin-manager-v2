import { GetCharacters } from "@/actions/getCharacters";
import { characterColumns } from "@/components/wiki/columns";
import { CharacterDataTable } from "@/components/wiki/data-table";

const CharactersPage = async () => {
  const data = await GetCharacters();

  return (
    <div>
      <CharacterDataTable columns={characterColumns} data={data} />
    </div>
  );
};

export default CharactersPage;
