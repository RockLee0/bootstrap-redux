import { AddUserModal } from "@/components/module/users/AddUserModal"
import { UserCard } from "@/components/module/users/UserCard"
import { selectUsers } from "@/redux/features/user/userSlice"
import { useAppSelector } from "@/redux/hook"

export function User (){
    const users = useAppSelector(selectUsers)
    return (
        <div className="mx-auto max-w-7xl px-5 mt-20">
            <h1>All Users </h1>
            <div className="flex justify-between items-center">
                <AddUserModal></AddUserModal>
            </div> 
        <div className="space-y-5 mt-5">
            {users.map((user)=>(
                <UserCard user={user} key={user.id}></UserCard>
            ))}
        </div>
        </div>
    )
}