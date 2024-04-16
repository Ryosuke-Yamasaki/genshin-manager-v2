import { Dialog, DialogContent2, DialogTrigger } from "../ui/dialog";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { SelectArtifactBuffProps } from "@/lib/interface";
import { FormControl, FormField, FormItem, FormLabel } from "../ui/form";
import { useFormContext } from "react-hook-form";
import { Checkbox } from "../ui/checkbox";
import parse from "html-react-parser";
import { z } from "zod";
import { PostTeamCompositionSchema } from "@/lib/zodschema";

const SelectArtifactBuff: React.FC<SelectArtifactBuffProps> = ({
  buffArtifacts,
}) => {
  const { control } =
    useFormContext<z.infer<typeof PostTeamCompositionSchema>>();

  return (
    <Dialog>
      <DialogTrigger className="border rounded">
        <Avatar className="w-20 h-20 items-center justify-center mx-auto">
          <AvatarImage
            src="/Icon_Inventory_Artifacts.webp"
            className="w-16 h-16"
          />
          <AvatarFallback>artifactBuff</AvatarFallback>
        </Avatar>
        <div className="text-sm border-t">聖遺物バフ</div>
      </DialogTrigger>
      <DialogContent2 className="max-w-[80%] max-h-[80%] overflow-auto space-y-2">
        {buffArtifacts.map((artifact) => (
          <div
            className="border rounded p-2 space-y-2"
            key={artifact.Artifacts[0].ArtifactIcons?.artifactId}
          >
            <Avatar>
              <AvatarImage
                src={artifact.Artifacts[0].ArtifactIcons?.url}
                className="rounded-full w-10 h-10"
              />
              <AvatarFallback>
                {artifact.Artifacts[0].ArtifactIcons?.artifactId}
              </AvatarFallback>
            </Avatar>
            <FormField
              control={control}
              name="buffersId.artifacts"
              render={({ field }) => (
                <FormItem className="flex items-center space-y-0">
                  <FormControl>
                    <Checkbox
                      checked={field.value.includes(
                        artifact.BuffArtifacts?.artifactSetId.toString()!
                      )}
                      onCheckedChange={(checked) => {
                        return checked
                          ? field.onChange([
                              ...field.value,
                              artifact.BuffArtifacts?.artifactSetId.toString(),
                            ])
                          : field.onChange(
                              field.value.filter(
                                (result) =>
                                  result !==
                                  artifact.BuffArtifacts?.artifactSetId.toString()
                              )
                            );
                      }}
                    />
                  </FormControl>
                  <FormLabel className="ml-2 max-w-[900px] space-y-1">
                    <div>{parse(artifact.fourPieceBonuses)}</div>
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

export default SelectArtifactBuff;
