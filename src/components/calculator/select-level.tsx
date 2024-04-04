import { SelectLevelProps } from "@/lib/interface";
import { FormControl, FormField, FormItem, FormMessage } from "../ui/form";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons";
import { useFormContext } from "react-hook-form";

const SelectLevel: React.FC<SelectLevelProps> = ({ levels, formName }) => {
  const { setValue, control } = useFormContext();

  return (
    <FormField
      control={control}
      name={formName}
      render={({ field }) => (
        <FormItem>
          <Popover>
            <PopoverTrigger asChild>
              <FormControl>
                <Button
                  variant="outline"
                  role="combobox"
                  className={cn(
                    "w-fit justify-between",
                    !field.value && "text-muted-foreground"
                  )}
                >
                  {field.value
                    ? levels.find(
                        (level) => level.id.toString() === field.value
                      )?.valueText
                    : "level"}
                  <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
              </FormControl>
            </PopoverTrigger>
            <PopoverContent className="p-0 w-24">
              <Command>
                <CommandInput placeholder="..." className="h-fit py-2" />
                <CommandEmpty>No Result.</CommandEmpty>
                <CommandGroup className="max-h-40 overflow-auto">
                  {levels.map((level) => (
                    <CommandItem
                      value={level.valueText}
                      key={level.id}
                      onSelect={() => {
                        setValue("characterLevelId", level.id.toString());
                      }}
                      className="justify-center py-1"
                    >
                      {level.valueText}
                      <CheckIcon
                        className={cn(
                          "ml-auto h-4 w-4",
                          level.id.toString() === field.value
                            ? "opacity-100"
                            : "opacity-0"
                        )}
                      />
                    </CommandItem>
                  ))}
                </CommandGroup>
              </Command>
            </PopoverContent>
          </Popover>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default SelectLevel;
