import React from 'react'

export function LoginForm() {
return (
        <div className='flex items-center justify-center min-w-full min-h-screen'>
            <form className='flex flex-col md:w-1/5'>
                <input placeholder='email' className='p-3 mt-8 rounded-md border-border-grey focus:outline-none focus:border-blue'/>
                <input type='password' placeholder='password' className='p-3 mt-8 rounded-md border-border-grey focus:outline-none focus:border-blue'/>
                <button>Login</button>
            </form>
        </div>
        )
}
