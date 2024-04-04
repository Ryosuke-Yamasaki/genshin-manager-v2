import { SelectTalentLevelProps } from "@/lib/interface";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger3,
  SelectValue,
} from "@/components/ui/select";
import { useFormContext } from "react-hook-form";

const SelectTalentLevel: React.FC<SelectTalentLevelProps> = ({
  name,
  label,
}) => {
  const { control } = useFormContext();

  const levels = [
    { value: "Lv.1", label: "1" },
    { value: "Lv.2", label: "2" },
    { value: "Lv.3", label: "3" },
    { value: "Lv.4", label: "4" },
    { value: "Lv.5", label: "5" },
    { value: "Lv.6", label: "6" },
    { value: "Lv.7", label: "7" },
    { value: "Lv.8", label: "8" },
    { value: "Lv.9", label: "9" },
    { value: "Lv.10", label: "10" },
  ];

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="space-y-0">
          <FormLabel className="text-xs ml-1">{label}</FormLabel>
          <Select onValueChange={field.onChange} defaultValue={field.value}>
            <FormControl>
              <SelectTrigger3 className="pl-2 pr-1 py-0.5 text-sm">
                <SelectValue />
              </SelectTrigger3>
            </FormControl>
            <SelectContent>
              {levels.map((level) => (
                <SelectItem value={level.label} key={level.label}>
                  {level.value}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </FormItem>
      )}
    />
  );
};

export default SelectTalentLevel;
