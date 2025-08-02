import App from "@/App";
import { task } from "@/pages/task";
import { user } from "@/pages/user";
import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
   // element: <h1>Thik ase shob</h1>
  children:[
  {
    path: "user",
    Component: user
  }
  ,
  {
   // index: true,
   path: "task",
    Component: task
  }
  ]
}
]);
