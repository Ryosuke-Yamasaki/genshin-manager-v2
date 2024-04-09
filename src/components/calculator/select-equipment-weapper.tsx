import { SelectEquipmentWeapperProps } from "@/lib/interface";
import SelectDialog from "../ui/select-dialog";
import { useFormContext } from "react-hook-form";
import { FormControl, FormField, FormItem } from "../ui/form";
import { cn } from "@/lib/utils";

const SelectEquipmentWeapper = ({
  children,
  formName,
  iconSize,
  iconId,
  iconUrl,
}: SelectEquipmentWeapperProps) => {
  const { control } = useFormContext();

  return (
    <SelectDialog
      iconSize={cn("w-20 h-20", iconSize)}
      iconId={iconId}
      iconUrl={iconUrl}
    >
      <FormField
        control={control}
        name={formName}
        render={() => (
          <FormItem>
            <FormControl>{children}</FormControl>
          </FormItem>
        )}
      />
    </SelectDialog>
  );
};

export default SelectEquipmentWeapper;
