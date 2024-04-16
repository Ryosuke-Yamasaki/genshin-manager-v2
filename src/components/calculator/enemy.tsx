import { Dialog, DialogContent2, DialogTrigger } from "../ui/dialog";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { FormControl, FormField, FormItem } from "../ui/form";
import { useFieldArray, useFormContext } from "react-hook-form";
import { z } from "zod";
import { PostTeamCompositionSchema } from "@/lib/zodschema";
import { Input } from "../ui/input";

const Enemy = () => {
  const { control } =
    useFormContext<z.infer<typeof PostTeamCompositionSchema>>();

  const { fields } = useFieldArray<z.infer<typeof PostTeamCompositionSchema>>({
    name: "resistance",
    control,
  });

  return (
    <Dialog>
      <DialogTrigger className="border rounded">
        <Avatar className="w-20 h-20 items-center justify-center mx-auto">
          <AvatarImage
            src="/Icon_Tutorial_Monster.webp"
            className="w-14 h-14"
          />
          <AvatarFallback>enemy</AvatarFallback>
        </Avatar>
        <div className="text-sm border-t">敵の耐性</div>
      </DialogTrigger>
      <DialogContent2 className="max-w-[80%] max-h-[80%] overflow-auto space-y-2">
        <div className="flex space-x-1">
          <div>Lv.</div>
          <FormField
            control={control}
            name="enemyLevel"
            render={({ field }) => (
              <FormItem className="flex items-center space-y-0 space-x-1">
                <FormControl>
                  <Input {...field} className="w-10 text-center" />
                </FormControl>
              </FormItem>
            )}
          />
        </div>
        {fields.map((field, index) => (
          <div className="flex space-x-1" key={field.id}>
            <div>{field.element}:</div>
            <FormField
              control={control}
              name={`resistance.${index}.value`}
              render={({ field }) => (
                <FormItem className="flex items-center space-y-0 space-x-1">
                  <FormControl>
                    <Input {...field} className="w-10 text-center" />
                  </FormControl>
                  %
                </FormItem>
              )}
            />
          </div>
        ))}
      </DialogContent2>
    </Dialog>
  );
};

export default Enemy;
