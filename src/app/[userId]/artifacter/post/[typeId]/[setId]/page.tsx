import { GetArtifactIcons } from "@/actions/getArtifactIcons";
import { GetArtifactTypes } from "@/actions/getArtifactTypes";
import { GetStats } from "@/actions/getStats";
import ArtifacterRegisterForm from "@/components/artifacter/register-form";

const PostArtifactPage = async ({
  params,
}: {
  params: { userId: string; typeId: string; setId: string };
}) => {
  const types = await GetArtifactTypes();
  const icons = await GetArtifactIcons();
  const stats = await GetStats();

  return (
    <ArtifacterRegisterForm
      userId={params.userId}
      typeId={params.typeId}
      setId={params.setId}
      types={types}
      icons={icons}
      stats={stats}
    />
  );
};

export default PostArtifactPage;
