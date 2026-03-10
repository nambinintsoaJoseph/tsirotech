import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import MesRecettes from './pages/User/MesRecettes';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<SignUp />} />

                {/* Reserved page for authenticated users */}
                <Route path="/recettes" element={<MesRecettes />} />
            </Routes>
        </Router>
    );
}

export default App;
