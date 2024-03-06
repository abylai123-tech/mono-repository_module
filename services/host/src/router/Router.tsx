import { createBrowserRouter, RouterProvider} from "react-router-dom";
import { App } from "@/components/App/App"; 
// @ts-ignore
import shopRoutes from 'shop/Router';
// @ts-ignore
import adminRoutes from 'admin/Router';
import React from "react";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        ...shopRoutes,
        ...adminRoutes,
      ]
    },
  ]);

