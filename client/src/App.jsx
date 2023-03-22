import {Routes, Route, Navigate} from 'react-router-dom';
import CHAT from './pages/Chat';
import Login from './pages/Login';
import Register from './pages/Register';
import NavBar from './components/NavBar';

function App() {
    return (
        <>
            <NavBar />
            <div className='container'>
                <Routes>
                    <Route path='/' element={<CHAT />} />
                    <Route path='/register' element={<Register />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='*' element={<Navigate to='/' />} />
                </Routes>
            </div>
        </>
    );
}

export default App;
