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
    <SelectDialog headerTitle="聖遺物の選択" className="w-32 h-32" icon={icon}>
      {icons
        ?.filter((icon) => icon.id.toString()[0] == typeId)
        .map((icon) => (
          <Button
            variant="outline"
            size="icon"
            asChild
            key={icon.id}
            className="h-20 w-20"
          >
            <Link href={icon.id.toString().slice(1)}>
              <Avatar className="h-20 w-20">
                <AvatarImage src={icon.url} />
                <AvatarFallback>{icon.id}</AvatarFallback>
              </Avatar>
            </Link>
          </Button>
        ))}
    </SelectDialog>
  );
};

export default SelectArtifact;
