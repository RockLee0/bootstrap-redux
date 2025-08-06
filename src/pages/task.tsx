import { AddTaskModal } from "@/components/module/tasks/AddTaskModal"
import { TaskCard } from "@/components/module/tasks/TaskCard"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { selectTasks, updateFilter } from "@/redux/features/task/taskSlice"
import { useAppDispatch, useAppSelector } from "@/redux/hook"

export function Task (){
    const tasks = useAppSelector(selectTasks)
    const dispatch = useAppDispatch()
    return (
        <div className="mx-auto max-w-7xl px-5 mt-20">
            <h1> Tasks</h1>
            <div className="flex justify-between items-center">
                <AddTaskModal></AddTaskModal>
                <Tabs defaultValue="All">
                    <TabsList>
                        <TabsTrigger value="All" onClick={()=>{dispatch(updateFilter("All")) }}>All</TabsTrigger>
                        <TabsTrigger value="High" onClick={()=>{dispatch(updateFilter("High")) }}>High</TabsTrigger>
                        <TabsTrigger value="Medium" onClick={()=>{dispatch(updateFilter("Medium")) }}>Medium</TabsTrigger>
                        <TabsTrigger value="Low">Low</TabsTrigger>
                    </TabsList>
                </Tabs>
            </div>

        <div className="space-y-5 mt-5">
            {tasks.map((task)=>(
                <TaskCard task={task} key={task.id}></TaskCard>
            ))}
        </div>
        </div>
    )
}