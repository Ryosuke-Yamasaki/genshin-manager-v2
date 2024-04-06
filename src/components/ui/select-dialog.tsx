import { Dialog, DialogContent2, DialogTrigger } from "../ui/dialog";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { SelectDialogProps } from "@/lib/interface";
import { cn } from "@/lib/utils";

const SelectDialog = ({
  children,
  iconSize,
  iconId,
  iconUrl,
  className,
}: SelectDialogProps) => {
  return (
    <Dialog>
      <DialogTrigger>
        <Avatar className={iconSize}>
          <AvatarImage src={iconUrl} />
          <AvatarFallback>{iconId}</AvatarFallback>
        </Avatar>
      </DialogTrigger>
      <DialogContent2
        className={cn("max-w-[80%] max-h-[80%] overflow-auto", className)}
      >
        {children}
      </DialogContent2>
    </Dialog>
  );
};

export default SelectDialog;
