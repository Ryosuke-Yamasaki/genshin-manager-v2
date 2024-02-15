import { SelectArtifactProps } from "@/lib/interface";
import useArtifactIcons from "@/hooks/useArtifactIcons";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import SelectDialog from "../ui/select-dialog";
import { Button } from "../ui/button";
import Link from "next/link";

const SelectArtifact: React.FC<SelectArtifactProps> = ({ typeId, setId }) => {
  const icons = useArtifactIcons();
  const icon = icons?.find(
    (icon) => icon.artifactId.toString() === typeId + setId
  );

  return (
    <SelectDialog headerTitle="聖遺物の選択" icon={icon!}>
      {icons
        ?.filter((icon) => icon.artifactId.toString()[0] == typeId)
        .map((icon) => (
          <Button
            variant="outline"
            size="icon"
            asChild
            key={icon.artifactId}
            className="h-20 w-20"
          >
            <Link href={icon.artifactId.toString().slice(1)}>
              <Avatar className="h-20 w-20">
                <AvatarImage src={icon.url} />
                <AvatarFallback>{icon.artifactId}</AvatarFallback>
              </Avatar>
            </Link>
          </Button>
        ))}
    </SelectDialog>
  );
};

export default SelectArtifact;
