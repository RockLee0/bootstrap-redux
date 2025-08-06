export interface ITask{
  id: string
  title: string
  description: string
  isCompleted: boolean
  priority: "High" | "Low" | "Medium" | "All"
  dueDate: Date
}
