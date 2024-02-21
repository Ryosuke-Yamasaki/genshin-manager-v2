import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SubOptionFormProps } from "@/lib/interface";
import { FormControl, FormField, FormItem, FormMessage } from "../ui/form";
import { Input } from "../ui/input";
import { useFieldArray } from "react-hook-form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger2,
  SelectValue,
} from "../ui/select";
import { IntStatId } from "@/lib/utils";
import useStatById from "@/hooks/useStatById";

const subOptions = [
  { id: "101", name: "HP" },
  { id: "103", name: "HP%" },
  { id: "201", name: "攻撃力" },
  { id: "203", name: "攻撃力%" },
  { id: "301", name: "防御力" },
  { id: "303", name: "防御力%" },
  { id: "400", name: "元素熟知" },
  { id: "500", name: "元素チャージ効率" },
  { id: "600", name: "会心率" },
  { id: "700", name: "会心ダメージ" },
];

const SubOptionForm: React.FC<SubOptionFormProps> = ({ form }) => {
  const { fields } = useFieldArray({
    name: "subOptions",
    control: form.control,
  });

  return (
    <Accordion type="single" collapsible className="space-y-2">
      {fields.map((field, index) => (
        <AccordionItem value={index.toString()} key={field.id}>
          <AccordionTrigger>
            <ul className="list-inside list-disc font-semibold text-[#545963]">
              <li>
                {
                  useStatById(form.getValues(`subOptions.${index}.statId`))
                    ?.text
                }
                +{form.watch(`subOptions.${index}.value`)}
                {!IntStatId(
                  form.watch(`subOptions.${index}.statId`).toString()
                ) && <>%</>}
              </li>
            </ul>
          </AccordionTrigger>
          <AccordionContent className="flex items-center justify-between px-10">
            <FormField
              control={form.control}
              name={`subOptions.${index}.statId`}
              render={({ field }) => (
                <FormItem>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value.toString()}
                  >
                    <FormControl>
                      <SelectTrigger2 className="border-muted-foreground">
                        <SelectValue />
                      </SelectTrigger2>
                    </FormControl>
                    <SelectContent>
                      {subOptions.map((data) => (
                        <SelectItem value={data.id} key={data.id}>
                          {data.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name={`subOptions.${index}.value`}
              render={({ field }) => (
                <FormItem className="flex items-center space-y-0 space-x-1">
                  <FormControl>
                    <Input
                      {...field}
                      className="w-10 border-muted-foreground"
                    />
                  </FormControl>
                  {!IntStatId(
                    form.watch(`subOptions.${index}.statId`).toString()
                  ) && <div>%</div>}
                  <FormMessage />
                </FormItem>
              )}
            />
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default SubOptionForm;