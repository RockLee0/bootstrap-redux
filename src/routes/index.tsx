import App from "@/App";
import { Task } from "@/pages/task";
import { User } from "@/pages/user";
import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
   // element: <h1>Thik ase shob</h1>
  children:[
  {
    path: "user",
    Component: User
  }
  ,
  {
   // index: true,
   path: "task",
    Component: Task
  }
  ]
}
]);
