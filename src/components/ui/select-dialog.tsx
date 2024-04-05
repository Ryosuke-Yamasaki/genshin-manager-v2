import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { SelectDialogProps } from "@/lib/interface";

const SelectDialog = ({
  children,
  className,
  headerTitle,
  iconId,
  iconUrl,
}: SelectDialogProps) => {
  return (
    <Dialog>
      <DialogTrigger>
        <Avatar className={className}>
          <AvatarImage src={iconUrl} />
          <AvatarFallback>{iconId}</AvatarFallback>
        </Avatar>
      </DialogTrigger>
      <DialogContent className="max-w-4/5 max-h-[80%] overflow-auto">
        <DialogHeader>
          <DialogTitle>{headerTitle}</DialogTitle>
          <DialogDescription className="grid grid-cols-8 gap-2">
            {children}
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default SelectDialog;
