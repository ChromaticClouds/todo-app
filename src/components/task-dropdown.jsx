import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu.jsx';
import { TrashIcon } from 'lucide-react';
import { PencilIcon } from 'lucide-react';
import { EllipsisVerticalIcon } from 'lucide-react';

export const TaskDropdown = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <EllipsisVerticalIcon size={16} className="cursor-pointer" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="start" sideOffset={10}>
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <PencilIcon />
            <span>Edit</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <TrashIcon />
            <span>Delete</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
