import { Dialog, DialogContent2, DialogTrigger } from "../ui/dialog";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { SelectCharacterBuffProps } from "@/lib/interface";
import { FormControl, FormField, FormItem, FormLabel } from "../ui/form";
import { useFormContext } from "react-hook-form";
import { Checkbox } from "../ui/checkbox";
import parse from "html-react-parser";
import { z } from "zod";
import { PostTeamCompositionSchema } from "@/lib/zodschema";

const SelectCharacterBuff: React.FC<SelectCharacterBuffProps> = ({
  buffers,
}) => {
  const { control } =
    useFormContext<z.infer<typeof PostTeamCompositionSchema>>();

  return (
    <Dialog>
      <DialogTrigger className="border rounded">
        <Avatar className="w-20 h-20 items-center justify-center mx-auto">
          <AvatarImage
            src="/Icon_Character_Lumine.webp"
            className="w-16 h-16"
          />
          <AvatarFallback>characterBuff</AvatarFallback>
        </Avatar>
        <div className="text-sm border-t">キャラバフ</div>
      </DialogTrigger>
      <DialogContent2 className="max-w-[80%] max-h-[80%] overflow-auto space-y-2">
        {buffers.map((buffer) => (
          <div
            className="border rounded p-2 space-y-2"
            key={buffer.CharacterImageUrls?.characterId}
          >
            <Avatar>
              <AvatarImage
                src={buffer.CharacterImageUrls?.icon}
                className="rounded-full w-10 h-10"
              />
              <AvatarFallback>
                {buffer.CharacterImageUrls?.characterId}
              </AvatarFallback>
            </Avatar>
            {buffer.BuffCharacters.map((character) => (
              <FormField
                key={character.id}
                control={control}
                name="buffersId.characters"
                render={({ field }) => (
                  <FormItem className="flex items-center space-y-0">
                    <FormControl>
                      <Checkbox
                        checked={field.value.includes(character.id.toString())}
                        onCheckedChange={(checked) => {
                          return checked
                            ? field.onChange([
                                ...field.value,
                                character.id.toString(),
                              ])
                            : field.onChange(
                                field.value.filter(
                                  (result) => result !== character.id.toString()
                                )
                              );
                        }}
                      />
                    </FormControl>
                    <FormLabel className="ml-2 max-w-[900px] space-y-1">
                      <div className="font-semibold">{character.title}</div>
                      <div>{parse(character.description)}</div>
                    </FormLabel>
                  </FormItem>
                )}
              />
            ))}
          </div>
        ))}
      </DialogContent2>
    </Dialog>
  );
};

export default SelectCharacterBuff;
