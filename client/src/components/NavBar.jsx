import {useContext} from 'react';
import {Link} from 'react-router-dom';
import {AuthContext} from '../context/AuthContext';

const NavBar = () => {
    const {user, logoutUser} = useContext(AuthContext);
    return (
        <nav className='h-[40px] mb-6 bg-gray-600'>
            <div className='container flex justify-between items-center'>
                <Link to='/' className='text-2xl items-center'>
                    Chat App
                </Link>
                {user && (
                    <>
                        <span className='text-blue-300'>{`Logged in as ${user?.name}`}</span>
                    </>
                )}

                <nav>
                    {user && (
                        <>
                            <Link
                                onClick={() => logoutUser()}
                                to='/'
                                className='mr-4'
                            >
                                Logout
                            </Link>
                        </>
                    )}
                    {!user && (
                        <>
                            <Link to='/register' className='mr-4'>
                                Register
                            </Link>
                            <Link to='/login'>Login</Link>
                        </>
                    )}
                </nav>
            </div>
        </nav>
    );
};

export default NavBar;
