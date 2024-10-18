import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import useLogin from '../../hooks/useLogin'

const Login = () => {

    const [inputs, setInputs] = useState({
        username: "",
        password: "",
    });

    const { loading, login } = useLogin();

    const handleSubmit = async (e) => {
        e.preventDefault();
        await login(inputs);
    }

    return (
        <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
            <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
                <h1 className='text-3xl font-semibold text-center bg-gradient-to-r from-black  to-red-700 text-transparent bg-clip-text'>
                    AQWMessenger
                </h1>

                <form onSubmit={handleSubmit}>
                    <div>
                        <label className='label p-2'>
                            <span className='text-base label-text'>Username</span>
                        </label>
                        <input
                            type='text'
                            placeholder='Enter username'
                            className='w-full input input-bordered h-10'
                            value={inputs.username}
                            onChange={(e) => setInputs({ ...inputs, username: e.target.value })}
                        />
                    </div>

                    <div>
                        <label className='label'>
                            <span className='text-base label-text'>Password</span>
                        </label>
                        <input
                            type='password'
                            placeholder='Enter Password'
                            className='w-full input input-bordered h-10'
                            value={inputs.password}
                            onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
                        />
                    </div>
                    <Link to={'/signup'} className='text-sm hover:underline mt-2 inline-block'>
                        {"Don't"} have an account?
                    </Link>

                    <div className='flex justify-center p-4'>
                        <button className='btn btn-outline btn-md w-1/2 border-gray-200'>Login</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login