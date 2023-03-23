import {useContext} from 'react';
import {Link} from 'react-router-dom';
import {AuthContext} from '../context/AuthContext';

const NavBar = () => {
    const {user} = useContext(AuthContext);
    return (
        <nav className='h-[40px] mb-6 bg-gray-600'>
            <div className='container flex justify-between items-center'>
                <Link to='/' className='text-2xl items-center'>
                    Chat App
                </Link>
                <span className='text-blue-300'>{`Logged in as ${user?.name}`}</span>
                <nav>
                    <Link to='/register' className='mr-4'>
                        Register
                    </Link>
                    <Link to='/login'>Login</Link>
                </nav>
            </div>
        </nav>
    );
};

export default NavBar;
