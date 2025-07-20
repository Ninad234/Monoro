import React from 'react'
import {Link} from 'react-router-dom'
import Login from './Login'

const Signup = () => {
  return (
    <>
    <div className='flex h-screen items-center justify-center'>
    <div className="w-[500px] p-8 rounded-md shadow-2xl">
        <div>
          <h3 className="font-bold text-lg">Sign Up</h3>
          {/* Name */}
          <div className="mt-4 space-y-2">
            <span>Name</span>
            <br />
            <input
              type="text"
              placeholder="Enter your Full Name"
              className="w-80 px-3 py-2 rounded-md outline-none"
            />
          </div>
          {/* Email */}
          <div className="mt-4 space-y-2">
            <span>Email</span>
            <br />
            <input
              type="email"
              placeholder="Enter your Email"
              className="w-80 px-3 py-2 rounded-md outline-none"
            />
          </div>
          {/* Password */}
          <div className="mt-4 space-y-2">
            <span>Password</span>
            <br />
            <input
              type="password"
              placeholder="Enter your password"
              className="w-80 px-3 py-2 rounded-md outline-none"
            />
          </div>
          {/* Button */}
          <div className="flex justify-between mt-7">
            <button className="bg-black text-white rounded-md px-3 py-1 hover:bg-gray-400 duration-300 cursor-pointer">
              Sign Up
            </button>
            <p>
              Have Account ?{" "}
              <button
                className="underline text-blue-500 cursor-pointer"
                onClick={() => document.getElementById("my_modal_5").showModal()}
              >
                Login{" "}
              </button>
              <Login />
            </p>
          </div>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <Link to={'/'} className="btn">Close</Link >
            </form>
          </div>
        </div>
      </div>
      </div>
    </>
  )
}

export default Signup