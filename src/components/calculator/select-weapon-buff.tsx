import { Dialog, DialogContent2, DialogTrigger } from "../ui/dialog";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { SelectWeaponBuffProps } from "@/lib/interface";
import { FormControl, FormField, FormItem, FormLabel } from "../ui/form";
import { useFormContext } from "react-hook-form";
import { Checkbox } from "../ui/checkbox";
import parse from "html-react-parser";
import { z } from "zod";
import { PostTeamCompositionSchema } from "@/lib/zodschema";

const SelectWeaponBuff: React.FC<SelectWeaponBuffProps> = ({ buffWeapons }) => {
  const { control } =
    useFormContext<z.infer<typeof PostTeamCompositionSchema>>();

  return (
    <Dialog>
      <DialogTrigger className="border rounded">
        <Avatar className="w-20 h-20 items-center justify-center mx-auto">
          <AvatarImage
            src="/Icon_Inventory_Weapons.webp"
            className="w-16 h-16"
          />
          <AvatarFallback>weaponBuff</AvatarFallback>
        </Avatar>
        <div className="text-sm border-t">武器バフ</div>
      </DialogTrigger>
      <DialogContent2 className="max-w-[80%] max-h-[80%] overflow-auto space-y-2">
        {buffWeapons.map((weapon) => (
          <div
            className="border rounded p-2 space-y-2"
            key={weapon.WeaponImageUrls?.weaponId}
          >
            <Avatar>
              <AvatarImage
                src={weapon.WeaponImageUrls?.url}
                className="rounded-full w-10 h-10"
              />
              <AvatarFallback>
                {weapon.WeaponImageUrls?.weaponId}
              </AvatarFallback>
            </Avatar>
            <FormField
              control={control}
              name="buffersId.weapons"
              render={({ field }) => (
                <FormItem className="flex items-center space-y-0">
                  <FormControl>
                    <Checkbox
                      checked={field.value.includes(
                        weapon.BuffWeapons?.weaponId.toString()!
                      )}
                      onCheckedChange={(checked) => {
                        return checked
                          ? field.onChange([
                              ...field.value,
                              weapon.BuffWeapons?.weaponId.toString(),
                            ])
                          : field.onChange(
                              field.value.filter(
                                (result) =>
                                  result !==
                                  weapon.BuffWeapons?.weaponId.toString()
                              )
                            );
                      }}
                    />
                  </FormControl>
                  <FormLabel className="ml-2 max-w-[900px] space-y-1">
                    <div>{parse(weapon.WeaponRefinements[0].description)}</div>
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

export default SelectWeaponBuff;
