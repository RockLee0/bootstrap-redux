import { selectFilter, selectTasks } from "@/redux/features/task/taskSlice"
import { useAppSelector } from "@/redux/hook"

export function task (){
    const tasks = useAppSelector(selectTasks)
    const filter = useAppSelector(selectFilter)
    return (
        <h1> Hi task </h1>
    )
}