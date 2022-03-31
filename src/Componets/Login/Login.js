import React, { useState } from 'react';

const Login = () => {
    const [auth, setAuth] = useState(true)



    return (
        <div style={{ background: "#3c6466" }} className='user_auth container rounded col-md-6 ' >

            <div className="auth_method text-center">
                <button className={`btn shadow-none text-light ${auth ? "border-bottom " : null} btn-lg `} onClick={() => setAuth(true)}>Login</button>
                <button className={`btn shadow-none text-light ${auth ? null : "border-bottom "} btn-lg `} onClick={() => setAuth(false)}>SignUp</button>
            </div>

            <div className="user_details">
                {
                    auth ?
                        <div className="col-md-10 my-3 mx-auto">
                            <div className="avater"></div>
                            <form >

                                <label className='text-light'>Email</label>
                                <input className='form-control shadow-none' placeholder='Enter Your Email ' />

                                <label className='text-light' >Password</label>
                                <input className='form-control shadow-none mb-3' name='password' type="password" placeholder='Enter Your Password' />

                                <input type="checkbox" id="check" className='' />
                                <label htmlFor="check" className='text-light mx-1'>Keep me Log in</label><br />

                                <input type="submit" value="Login" className='btn mt-1 btn-dark w-25' />
                            </form>
                        </div>
                        :
                        <div className="col-md-10 mt3 mx-auto">
                            <div className="avater"></div>
                            <form>
                                <label className='text-light'>Full Name</label>
                                <input className='form-control shadow-none' name='name' type="text" placeholder='Full Name' />
                                <label className='text-light'>Email</label>
                                <input className='form-control shadow-none' name='email' type="text" placeholder='Enter Your Email' />
                                <label className='text-light'>Phone</label>
                                <input className='form-control' type="tel" name="phone" placeholder='Enter Your Phone Number' />
                                <label className='text-light' >Password</label>
                                <input className='form-control shadow-none' name='password' type="password" placeholder='Enter Your Password' />
                                <label className='text-light' >Confirm Password</label>
                                <input className='form-control shadow-none mb-3' name='cPassword' type="password" placeholder='Confirm Password' />

                                <input type="submit" value="SignUp" className='btn mt-1  btn-dark  w-25' />
                            </form>
                        </div>
                }
            </div>
        </div>
    )
}


export default Login;