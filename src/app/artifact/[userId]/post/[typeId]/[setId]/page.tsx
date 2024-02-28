import { GetArtifactIcon } from "@/actions/getArtifactIcon";
import { GetArtifactIcons } from "@/actions/getArtifactIcons";
import { GetArtifactTypes } from "@/actions/getArtifactTypes";
import ArtifacterRegisterForm from "@/components/artifacter/register-form";

const PostArtifactPage = async ({
  params,
}: {
  params: { userId: string; typeId: string; setId: string };
}) => {
  const types = await GetArtifactTypes();
  const icons = await GetArtifactIcons();
  const icon = await GetArtifactIcon(params.typeId + params.setId);

  return (
    <ArtifacterRegisterForm
      userId={params.userId}
      typeId={params.typeId}
      setId={params.setId}
      types={types}
      icons={icons}
      icon={icon}
    />
  );
};

export default PostArtifactPage;
