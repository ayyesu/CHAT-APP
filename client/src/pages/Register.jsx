import {useContext} from 'react';
import {AuthContext} from '../context/AuthContext';

const Register = () => {
    const {
        registerInfo,
        updateRegisterInfo,
        registerUser,
        registerError,
        isRegistering,
    } = useContext(AuthContext);
    return (
        <>
            <div className='flex flex-col items-center justify-center h-[80vh]'>
                <h1 className='text-xl mb-6'>Register</h1>
                <div>
                    <form onSubmit={registerUser}>
                        <div className='flex flex-col gap-4'>
                            <div>
                                <label htmlFor='name' className='mr-11'>
                                    Name
                                </label>
                                <input
                                    type='text'
                                    className='w-[20rem] rounded-lg h-[2rem] outline-none text-slate-800 p-3'
                                    name='name'
                                    id='name'
                                    onChange={(e) =>
                                        updateRegisterInfo({
                                            ...registerInfo,
                                            name: e.target.value,
                                        })
                                    }
                                />
                            </div>
                            <div>
                                <label htmlFor='email' className='mr-12'>
                                    Email
                                </label>
                                <input
                                    type='email'
                                    className='w-[20rem] rounded-lg h-[2rem] outline-none text-slate-800 p-3'
                                    name='email'
                                    id='email'
                                    onChange={(e) => {
                                        updateRegisterInfo({
                                            ...registerInfo,
                                            email: e.target.value,
                                        });
                                    }}
                                />
                            </div>
                            <div>
                                <label htmlFor='password' className='mr-4'>
                                    Password
                                </label>
                                <input
                                    type='password'
                                    className='w-[20rem] rounded-lg h-[2rem] outline-none text-slate-800 p-3'
                                    name='password'
                                    id='password'
                                    onChange={(e) => {
                                        updateRegisterInfo({
                                            ...registerInfo,
                                            password: e.target.value,
                                        });
                                    }}
                                />
                            </div>
                            <div>
                                <button className='bg-blue-500 rounded-lg h-[2rem] w-[25rem]'>
                                    {isRegistering
                                        ? 'Registering...'
                                        : 'Register'}
                                </button>
                            </div>
                            {registerError?.error && (
                                <span className='text-red-500'>
                                    <p>{registerError?.message}</p>
                                </span>
                            )}
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Register;
