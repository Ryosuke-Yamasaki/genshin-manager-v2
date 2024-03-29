import Link from "next/link";
import { Button } from "../ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { SelectArtifactTypeProps } from "@/lib/interface";

const SelectArtifactType: React.FC<SelectArtifactTypeProps> = ({
  typeId,
  setId,
  types,
}) => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" size="free">
          {types?.find((type) => type.id == typeId)?.japanese}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="flex flex-col space-y-1">
        {types?.map((type) => (
          <Button
            variant="ghost"
            size="free"
            asChild
            key={type.id}
            className="px-2"
          >
            <Link href={`../${type.id.toString()}/${setId}`}>
              {type.japanese}
            </Link>
          </Button>
        ))}
      </PopoverContent>
    </Popover>
  );
};

export default SelectArtifactType;
