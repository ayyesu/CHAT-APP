const Login = () => {
    return (
        <>
            <div className='flex flex-col items-center justify-center h-[80vh]'>
                <h1 className='text-xl mb-6'>Login</h1>
                <div>
                    <form>
                        <div className='flex flex-col gap-4'>
                            <div>
                                <label htmlFor='email' className='mr-12'>
                                    Email
                                </label>
                                <input
                                    type='email'
                                    className='w-[20rem] rounded-lg h-[2rem] outline-none text-slate-800 p-3'
                                    name='email'
                                    id='email'
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
                                />
                            </div>
                            <div>
                                <button className='bg-blue-500 rounded-lg h-[2rem] w-[25rem]'>
                                    Submit
                                </button>
                            </div>
                            <alert className='text-red-500'>
                                <p>An error occured</p>
                            </alert>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Login;
