import { Dialog, DialogContent2, DialogTrigger } from "../ui/dialog";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { SelectElementalResonanceBuffProps } from "@/lib/interface";
import { FormControl, FormField, FormItem, FormLabel } from "../ui/form";
import { useFormContext } from "react-hook-form";
import { Checkbox } from "../ui/checkbox";
import parse from "html-react-parser";
import { z } from "zod";
import { PostTeamCompositionSchema } from "@/lib/zodschema";

const SelectElementalResonanceBuff: React.FC<
  SelectElementalResonanceBuffProps
> = ({ buffElementalResonances }) => {
  const { control } =
    useFormContext<z.infer<typeof PostTeamCompositionSchema>>();

  const elements = [
    "pyro",
    "hydro",
    "cryo",
    "electro",
    "anemo",
    "geo",
    "dendro",
  ];

  return (
    <Dialog>
      <DialogTrigger className="border rounded">
        <Avatar className="w-20 h-20 items-center justify-center mx-auto">
          <AvatarImage src="/pyro_icon.svg" className="w-16 h-16" />
          <AvatarFallback>elementalResonanceBuff</AvatarFallback>
        </Avatar>
        <div className="text-sm border-t">元素共鳴</div>
      </DialogTrigger>
      <DialogContent2 className="max-w-[80%] max-h-[80%] overflow-auto space-y-2">
        {buffElementalResonances.map((elementalResonance) => (
          <div
            className="border rounded p-2 space-y-2"
            key={elementalResonance.id}
          >
            <Avatar>
              <AvatarImage
                src={`/${elements[elementalResonance.id - 1]}_icon.svg`}
                className="rounded-full w-10 h-10"
              />
              <AvatarFallback>{elementalResonance.id}</AvatarFallback>
            </Avatar>
            <FormField
              control={control}
              name="buffersId.elementalResonances"
              render={({ field }) => (
                <FormItem className="flex items-center space-y-0">
                  <FormControl>
                    <Checkbox
                      checked={field.value.includes(
                        elementalResonance.id.toString()
                      )}
                      onCheckedChange={(checked) => {
                        return checked
                          ? field.onChange([
                              ...field.value,
                              elementalResonance.id.toString(),
                            ])
                          : field.onChange(
                              field.value.filter(
                                (result) =>
                                  result !== elementalResonance.id.toString()
                              )
                            );
                      }}
                    />
                  </FormControl>
                  <FormLabel className="ml-2 max-w-[900px] space-y-1">
                    <div className="font-semibold">
                      {elementalResonance.title}
                    </div>
                    <div>{parse(elementalResonance.description)}</div>
                  </FormLabel>
                </FormItem>
              )}
            />
          </div>
        ))}
      </DialogContent2>
    </Dialog>
  );
};

export default SelectElementalResonanceBuff;
