import { Button } from "@/components/ui/button";
import { deleteUser } from "@/redux/features/user/userSlice";
import { useAppDispatch } from "@/redux/hook";
import type { IUser } from "@/types";

import { Trash2 } from "lucide-react";

interface IProps {
    user: IUser
}



export function UserCard ({user}: IProps){
    const dispatch= useAppDispatch()
    return (
        <div className="border px-5 pay-3 rounded-md">
            <div className="flex justify-between items-center">
             <div className="flex gap-2 items-center">
             <h1>{user.name}</h1>  
             </div>
             <div className="flex gap-3 items-center">
              <Button onClick={()=>dispatch(deleteUser(user.id))} variant = "link" className="p-0 text-red-500">
                <Trash2></Trash2>
              </Button>
             </div>
            </div>
        </div>
    )
}