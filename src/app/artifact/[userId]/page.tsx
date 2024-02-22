import { GetArtifacters } from "@/actions/getArtifacters";
import { DataTable } from "@/components/ui/data-table";
import { columns } from "../../../components/artifacter/columns";

const ArtifactManagerPage = async ({
  params,
}: {
  params: { userId: string };
}) => {
  const data = await GetArtifacters(params.userId);

  return <DataTable columns={columns} data={data} />;
};

export default ArtifactManagerPage;
