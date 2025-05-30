import { Routes, Route, BrowserRouter } from "react-router-dom";
import { PageHome } from "../index";
export function MyRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PageHome />} />
            </Routes>
        </BrowserRouter>
    )
}