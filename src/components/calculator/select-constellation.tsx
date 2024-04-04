import { SelectConstellationProps } from "@/lib/interface";
import { FormControl, FormField, FormItem } from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger2,
  SelectValue,
} from "@/components/ui/select";
import { useFormContext } from "react-hook-form";
import parse from "html-react-parser";

const SelectConstellation: React.FC<SelectConstellationProps> = ({
  constellations,
}) => {
  const { control } = useFormContext();

  return (
    <FormField
      control={control}
      name="constellationRank"
      render={({ field }) => (
        <FormItem>
          <Select onValueChange={field.onChange} defaultValue={field.value}>
            <FormControl>
              <SelectTrigger2 className="px-2 py-0.5">
                <SelectValue aria-label={field.value}>
                  {field.value !== "0"
                    ? constellations.find(
                        (constellation) =>
                          constellation.rank.toString() === field.value
                      )?.rank
                    : "無"}
                  凸
                </SelectValue>
              </SelectTrigger2>
            </FormControl>
            <SelectContent>
              <div className="p-4 space-y-2">
                <SelectItem value="0" className="border">
                  無凸
                </SelectItem>
                {constellations.map((constellation) => (
                  <SelectItem
                    value={constellation.rank.toString()}
                    key={constellation.id}
                    className="border"
                  >
                    <div className="space-y-1">
                      <div>{constellation.title}</div>
                      <div>{parse(constellation.description)}</div>
                    </div>
                  </SelectItem>
                ))}
              </div>
            </SelectContent>
          </Select>
        </FormItem>
      )}
    />
  );
};

export default SelectConstellation;
