import { GetArtifacters } from "@/actions/getArtifacters";
import { ArtifcaterDataTable } from "@/components/artifacter/data-table";
import { artifacterColumns } from "../../../components/artifacter/columns";
import { GetArtifactTypes } from "@/actions/getArtifactTypes";
import { GetArtifactSets } from "@/actions/getArtifactSets";
import { GetArtifactMainStats } from "@/actions/getArtifactMainStats";

const ArtifactManagerPage = async ({
  params,
}: {
  params: { userId: string };
}) => {
  const data = await GetArtifacters(params.userId);

  const types = await GetArtifactTypes();
  const sets = await GetArtifactSets();
  const stats = await GetArtifactMainStats();

  return (
    <div>
      <ArtifcaterDataTable
        columns={artifacterColumns}
        data={data}
        types={types}
        sets={sets}
        mainStats={stats.map((stat) => stat.Stats)}
        userId={params.userId}
      />
    </div>
  );
};

export default ArtifactManagerPage;
