import { SelectRefinementProps } from "@/lib/interface";
import { FormControl, FormField, FormItem } from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger2,
  SelectValue,
} from "@/components/ui/select";
import { useFormContext } from "react-hook-form";
import { z } from "zod";
import { PostTeamCompositionSchema } from "@/lib/zodschema";
import { Badge } from "../ui/badge";

const SelectRefinement: React.FC<SelectRefinementProps> = () => {
  const { control } =
    useFormContext<z.infer<typeof PostTeamCompositionSchema>>();

  const levels = [
    { value: "精錬ランク1", label: "1" },
    { value: "精錬ランク2", label: "2" },
    { value: "精錬ランク3", label: "3" },
    { value: "精錬ランク4", label: "4" },
    { value: "精錬ランク5", label: "5" },
  ];

  return (
    <FormField
      control={control}
      name="refinementRank"
      render={({ field }) => (
        <FormItem>
          <Select onValueChange={field.onChange} defaultValue={field.value}>
            <FormControl>
              <SelectTrigger2 className="text-sm text-[#d0b772] space-x-1 p-0">
                <Badge className="bg-[#605855] text-[#cac9c2] px-1 rounded-sm">
                  {field.value}
                </Badge>
                <SelectValue />
              </SelectTrigger2>
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

export default SelectRefinement;
