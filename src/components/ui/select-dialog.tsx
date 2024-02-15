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

const SelectDialog = ({ children, headerTitle, icon }: SelectDialogProps) => {
  return (
    <Dialog>
      <DialogTrigger>
        <Avatar className="h-32 w-32">
          <AvatarImage src={icon?.url} />
          <AvatarFallback>{icon?.artifactId}</AvatarFallback>
        </Avatar>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{headerTitle}</DialogTitle>
          <DialogDescription className="grid grid-cols-8 justify-items-center gap-2">
            {children}
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default SelectDialog;
