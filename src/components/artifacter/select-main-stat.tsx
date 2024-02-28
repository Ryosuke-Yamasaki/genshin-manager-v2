import { SelectArtifactMainStatProps } from "@/lib/interface";
import { FormControl, FormField, FormItem } from "../ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger2,
} from "../ui/select";
import { SelectValue } from "@radix-ui/react-select";
import { useFormContext } from "react-hook-form";

const SelectArtifactMainStat: React.FC<SelectArtifactMainStatProps> = ({
  typeId,
}) => {
  const { control } = useFormContext();

  return (
    <FormField
      control={control}
      name="mainStatId"
      render={({ field }) => (
        <FormItem>
          <Select
            onValueChange={field.onChange}
            defaultValue={field.value.toString()}
          >
            <FormControl>
              <SelectTrigger2 className="text-sm">
                <SelectValue />
              </SelectTrigger2>
            </FormControl>
            <SelectContent>
              {typeId == "1" && <SelectItem value="101">HP</SelectItem>}
              {typeId == "2" && <SelectItem value="201">攻撃力</SelectItem>}
              {(typeId == "3" || typeId == "4" || typeId == "5") && (
                <>
                  <SelectItem value="103">HP</SelectItem>
                  <SelectItem value="203">攻撃力</SelectItem>
                  <SelectItem value="303">防御力</SelectItem>
                  <SelectItem value="400">元素熟知</SelectItem>
                </>
              )}
              {typeId == "3" && (
                <SelectItem value="500">元素チャージ効率</SelectItem>
              )}
              {typeId == "4" && (
                <>
                  <SelectItem value="1251">火元素ダメージ</SelectItem>
                  <SelectItem value="1252">水元素ダメージ</SelectItem>
                  <SelectItem value="1253">氷元素ダメージ</SelectItem>
                  <SelectItem value="1254">雷元素ダメージ</SelectItem>
                  <SelectItem value="1255">風元素ダメージ</SelectItem>
                  <SelectItem value="1256">岩元素ダメージ</SelectItem>
                  <SelectItem value="1257">草元素ダメージ</SelectItem>
                  <SelectItem value="1258">物理ダメージ</SelectItem>
                </>
              )}
              {typeId == "5" && (
                <>
                  <SelectItem value="600">会心率</SelectItem>
                  <SelectItem value="700">会心ダメージ</SelectItem>
                  <SelectItem value="800">与える治療効果</SelectItem>
                </>
              )}
            </SelectContent>
          </Select>
        </FormItem>
      )}
    />
  );
};

export default SelectArtifactMainStat;
