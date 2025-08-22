// src/main.tsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
createBrowserRouter,
RouterProvider,
Navigate,
} from "react-router-dom";


import Layout from "./components/Layout";
import Home from "./pages/Home";
import Category from "./pages/Category";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import NotFound from "./pages/NotFound";


import "./index.css";


const router = createBrowserRouter([
{
element: <Layout />, // Navbar fijo + Outlet
children: [
{ path: "/", element: <Navigate to="/home" replace /> },
{ path: "/home", element: <Home /> },


// Rutas dinámicas
{ path: "/:category", element: <Category /> },
{ path: "/:category/:product", element: <Product /> },


// Rutas estáticas
{ path: "/carrito", element: <Cart /> },
{ path: "/login", element: <Login /> },
{ path: "/signup", element: <Signup /> },


// 404
{ path: "*", element: <NotFound /> },
],
},
]);


createRoot(document.getElementById("root")!).render(
<StrictMode>
  <RouterProvider router={router} />
</StrictMode>
);