import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Root from './Layout/Root.jsx'
import Home from './Pages/Home/Home.jsx'
const router = createBrowserRouter([
    {
        path: "/",
        Component: Root,
        children: [
            { index: true, Component: Home },
            // { path: "/about", Component: About },
            // { path: "/team", Component: Team },
            // { path: "/price", Component: Pricing },
            // { path: "/faq", Component: Faq },
            // { path: "/error", Component: Error },
            // { path: "/service", Component: Service },
            // { path: "/service-details", Component: ServiceDetails },
            // { path: "/project", Component: Project },
            // { path: "/project-details", Component: ProjectDetails },
            // { path: "/blog", Component: Blog },
            // { path: "/blog-details", Component: BlogDetails },
            // { path: "/contact", Component: Contact },
        ],
    },
]);
createRoot(document.getElementById('root')).render(
    <StrictMode>
        <RouterProvider router={router} />,
    </StrictMode>,
)
