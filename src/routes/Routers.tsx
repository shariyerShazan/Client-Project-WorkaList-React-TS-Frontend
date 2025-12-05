import DashboardLayout from "@/layouts/DashboardLayout";
import { createBrowserRouter } from "react-router";

export const Routers = createBrowserRouter([
      {
        path: "/" ,
        element: <DashboardLayout />,
        children: [
            {
                index: true
            }
        ]
      }
])