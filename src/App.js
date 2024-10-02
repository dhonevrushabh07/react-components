import ReactDOM from "react-dom/client"
import "../src/App.css"
import SideBar from "./components/navbar/SideBar"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import About from "./components/navbar/About"
import Analytics from "./components/navbar/Analytics"
import Comment from "./components/navbar/Comment"
import Dashboard from "./components/navbar/Dashboard"
import Product from "./components/navbar/Product"
import ProductList from "./components/navbar/ProductList"
const AppLayout = () => {
    return (
        <div>
            <SideBar />
        </div>
    )
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <SideBar />
    },
    {
        path: "/dashboard",
        element: <Dashboard />
    },
    {
        path: "/about",
        element: <About />
    },
    {
        path: "/comments",
        element: <Comment />
    },
    {
        path: "/product",
        element: <Product />
    },
    {
        path: "/analytics",
        element: <Analytics />
    },
    {
        path: "/productList",
        element: <ProductList />
    }
])
const root = ReactDOM.createRoot(document.getElementById("root"))
// root.render(<AppLayout />)
root.render(<RouterProvider router={appRouter} />)