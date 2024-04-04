import { SelectCharacterProps } from "@/lib/interface";
import SelectDialog from "../ui/select-dialog";
import { Button } from "../ui/button";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

const SelectCharacter: React.FC<SelectCharacterProps> = ({
  characterImageUrls,
  characterImageUrl,
}) => {
  const IconUrl = {
    id: characterImageUrl.characterId,
    url: characterImageUrl.icon,
  };

  console.log(characterImageUrls);

  return (
    <SelectDialog
      headerTitle="キャラクターの選択"
      className="w-24 h-24"
      icon={IconUrl}
    >
      {characterImageUrls.map((url) => (
        <Button
          variant="outline"
          size="icon"
          asChild
          key={url.characterId}
          className="h-20 w-20"
        >
          <Link href={url.characterId.toString()}>
            <Avatar className="h-20 w-20">
              <AvatarImage src={url.icon} />
              <AvatarFallback>{url.characterId}</AvatarFallback>
            </Avatar>
          </Link>
        </Button>
      ))}
    </SelectDialog>
  );
};

export default SelectCharacter;
