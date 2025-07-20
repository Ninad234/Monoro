
const Login = () => {
  return (
    <>
        <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
  <div className="modal-box">
    <h3 className="font-bold text-lg">Login</h3>
    {/* Email */}
    <div className='mt-4 space-y-2'>
        <span>Email</span>
        <br/>
        <input type="email" 
        placeholder='Enter your Email'
        className='w-80 px-3 py-2 rounded-md outline-none'
        />
    </div>
    {/* Password */}
    <div className='mt-4 space-y-2'>
        <span>Password</span>
        <br/>
        <input type="password" 
        placeholder='Enter your password'
        className='w-80 px-3 py-2 rounded-md outline-none'
        />
    </div>
    {/* Button */}
    
    <p className="py-4">Press ESC key or click the button below to close</p>
    <div className="modal-action">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button className="btn">Close</button>
      </form>
    </div>
  </div>
</dialog>
    </>
  )
}

export default Login