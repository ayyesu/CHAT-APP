import {Routes, Route, Navigate} from 'react-router-dom';
import CHAT from './pages/Chat';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
    return (
        <>
            <Routes>
                <Route path='/' element={<CHAT />} />
                <Route path='/register' element={<Register />} />
                <Route path='/login' element={<Login />} />
                <Route path='*' element={<Navigate to='/' />} />
            </Routes>
        </>
    );
}

export default App;
