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
  iconLabel,
}: SelectDialogProps) => {
  return (
    <Dialog>
      <DialogTrigger>
        <Avatar className={cn("items-center justify-center mx-auto", iconSize)}>
          <AvatarImage src={iconUrl} className="w-fit h-fit" />
          <AvatarFallback>{iconId}</AvatarFallback>
        </Avatar>
        {iconLabel && <div className="text-sm border-t">{iconLabel}</div>}
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
