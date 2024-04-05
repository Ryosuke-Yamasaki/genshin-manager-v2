import { SelectArtifactProps } from "@/lib/interface";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import SelectDialog from "../ui/select-dialog";
import { Button } from "../ui/button";
import Link from "next/link";

const SelectArtifact: React.FC<SelectArtifactProps> = ({
  typeId,
  icons,
  icon,
}) => {
  return (
    <SelectDialog
      headerTitle="聖遺物の選択"
      className="w-32 h-32"
      iconId={icon.artifactId}
      iconUrl={icon.url}
    >
      {icons
        .filter((url) => url.artifactId.toString()[0] == typeId)
        .map((url) => (
          <Button
            variant="outline"
            size="icon"
            asChild
            key={url.artifactId}
            className="h-20 w-20"
          >
            <Link href={url.artifactId.toString().slice(1)}>
              <Avatar className="h-20 w-20">
                <AvatarImage src={url.url} />
                <AvatarFallback>{url.artifactId}</AvatarFallback>
              </Avatar>
            </Link>
          </Button>
        ))}
    </SelectDialog>
  );
};

export default SelectArtifact;
