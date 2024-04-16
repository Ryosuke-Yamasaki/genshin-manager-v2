import { Dialog, DialogContent2, DialogTrigger } from "../ui/dialog";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { EnemyProps } from "@/lib/interface";
import { FormControl, FormField, FormItem, FormLabel } from "../ui/form";
import { useFormContext } from "react-hook-form";
import { z } from "zod";
import { PostTeamCompositionSchema } from "@/lib/zodschema";

const Enemy: React.FC<EnemyProps> = ({}) => {
  const { control } =
    useFormContext<z.infer<typeof PostTeamCompositionSchema>>();

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
        enemy
      </DialogContent2>
    </Dialog>
  );
};

export default Enemy;
