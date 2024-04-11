import { Dialog, DialogContent2, DialogTrigger } from "../ui/dialog";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { SelectPassiveTalentProps } from "@/lib/interface";
import { FormControl, FormField, FormItem, FormLabel } from "../ui/form";
import { useFormContext } from "react-hook-form";
import { Checkbox } from "../ui/checkbox";
import parse from "html-react-parser";
import { z } from "zod";
import { PostTeamCompositionSchema } from "@/lib/zodschema";

const SelectPassiveTalent: React.FC<SelectPassiveTalentProps> = ({
  passiveTalents,
}) => {
  const { control } =
    useFormContext<z.infer<typeof PostTeamCompositionSchema>>();

  return (
    <Dialog>
      <DialogTrigger className="border rounded">
        <Avatar className="w-20 h-20 items-center justify-center mx-auto">
          <AvatarImage
            src={passiveTalents[0].iconUrl}
            className="w-fit h-fit"
          />
          <AvatarFallback>{passiveTalents[0].id}</AvatarFallback>
        </Avatar>
        <div className="text-sm border-t">固有天賦</div>
      </DialogTrigger>
      <DialogContent2 className="max-w-[80%] max-h-[80%] overflow-auto space-y-2">
        {passiveTalents.map((passiveTalent) => (
          <FormField
            key={passiveTalent.id}
            control={control}
            name="buffersId.passiveTalents"
            render={({ field }) => (
              <FormItem className="flex items-center space-y-0">
                <FormControl>
                  <Checkbox
                    checked={field.value.includes(passiveTalent.id.toString())}
                    onCheckedChange={(checked) => {
                      return checked
                        ? field.onChange([
                            ...field.value,
                            passiveTalent.id.toString(),
                          ])
                        : field.onChange(
                            field.value.filter(
                              (result) => result !== passiveTalent.id.toString()
                            )
                          );
                    }}
                  />
                </FormControl>
                <FormLabel className="ml-2 max-w-[900px]">
                  {parse(passiveTalent.description)}
                </FormLabel>
              </FormItem>
            )}
          />
        ))}
      </DialogContent2>
    </Dialog>
  );
};

export default SelectPassiveTalent;
