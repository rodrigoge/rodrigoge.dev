import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from '../pages/Homepage';
import Projects from "../pages/Projects";

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/projects" element={<Projects />} />
            </Routes>
        </BrowserRouter>
    );
}