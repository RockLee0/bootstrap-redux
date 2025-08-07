export interface ITask{
  id: string
  title: string
  description: string
  isCompleted: boolean
  priority: "High" | "Low" | "Medium" | "All"
  user:string | null
  dueDate: Date
}

export interface IUser{
  id: string,
  name: string
}