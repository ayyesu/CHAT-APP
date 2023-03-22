import {Link} from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className='h-[40px] mb-6 bg-gray-600'>
            <div className='container flex justify-between items-center'>
                <Link to='/' className='text-2xl items-center'>
                    Chat App
                </Link>
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
