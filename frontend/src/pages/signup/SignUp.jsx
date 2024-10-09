import React from 'react'

const SignUp = () => {
    return (
        <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
            <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
                <h1 className='text-3xl font-semibold text-center text-blue-500'>
                    AQWMessenger
                </h1>

                <form>
                    <div>
                        <label className='label p-2'>
                            <span className='text-base label-text'>Email</span>
                        </label>
                        <input type='text' placeholder='Enter email' className='w-full input input-bordered h-10 bg-white text-black' />
                    </div>
                    <div>
                        <label className='label p-2'>
                            <span className='text-base label-text'>Username</span>
                        </label>
                        <input type='text' placeholder='Enter username' className='w-full input input-bordered h-10 bg-white text-black' />
                    </div>
                    <div>
                        <label className='label'>
                            <span className='text-base label-text'>Password</span>
                        </label>
                        <input
                            type='password'
                            placeholder='Enter Password'
                            className='w-full input input-bordered h-10 bg-white text-black'
                        />
                    </div>
                    <div>
                        <label className='label'>
                            <span className='text-base label-text'>Confirm password</span>
                        </label>
                        <input
                            type='password'
                            placeholder='Confirm password'
                            className='w-full input input-bordered h-10 bg-white text-black'
                        />
                    </div>
                    <a href='#' className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block'>
                        Already have an account?
                    </a>

                    <div className='flex justify-center p-4'>
                        <button className='btn btn-outline btn-md w-1/2 bg-white border-gray-200'>Create account</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SignUp