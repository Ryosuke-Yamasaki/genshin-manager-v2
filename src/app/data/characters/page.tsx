import { GetCharacters } from "@/actions/getCharacters";
import { characterColumns } from "@/components/wiki/columns";
import { CharacterDataTable } from "@/components/wiki/data-table";

const CharacterPage = async () => {
  const data = await GetCharacters();
  console.log(data);

  return (
    <div>
      <CharacterDataTable columns={characterColumns} data={data} />
    </div>
  );
};

export default CharacterPage;
