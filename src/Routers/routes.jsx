import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PageHome from '../Pages/PageHome';

export function MyRoutes() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<PageHome />} />
                {/* Agrega más rutas aquí si es necesario */}
            </Routes>
        </Router>
    );
}