import { Link } from "react-router-dom";
import Navbar from "../shared/Navbar/Navbar";
import Footer from "../Footer/Footer";
import { useContext, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const Login = () => {

    const [loginError, setLoginError] = useState('');
    const [success, setSuccess] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const { signIn } = useContext(AuthContext);


    const handleLogin = e => {
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        console.log(email, password);

        setLoginError('');
        setSuccess('');

        // if (signIn) {
        //     setLoginError('Already Signed In');
        //     return;
        // }
        // else if (!/[A-Z]/.test(password)) {
        //     setLoginError('at least one upper case');
        //     return;
        // }

        signIn(email, password)
            .then(result => {
                console.log(result.user)
                setSuccess('Login Successfully')
            })
            .catch(error => {
                console.error(error);
                setLoginError('Your Email or Password Does not Match');
            })
    }




    return (
        <div>
            <Navbar></Navbar>
            <div className="">
                <h2 className="text-3xl font-semibold my-10 text-center">Please Login</h2>
                <form onSubmit={handleLogin} className="md:w-3/4 lg:w-1/2 mx-auto">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="Email" name="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type={showPassword ? "text" : "password"} placeholder="Password" name="password" className="input input-bordered" required />
                        <span className="relative bottom-8 left-full" onClick={() => setShowPassword(!showPassword)}>
                            {
                                showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                            }
                        </span>
                        <label className="label">
                            <a href="/register" className="label-text-alt link link-hover"><span className="text-blue-600 font-bold">Forgot password?</span></a>
                        </label>
                    </div>
                    {
                        loginError && <p className="text-red-600 text-center font-bold text-xl">{loginError}</p>
                    }
                    {
                        success && <p className="text-green-600 text-center font-bold text-xl">{success}</p>
                    }
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                    </div>
                </form>
                <p className="text-center mt-4">Do not have an account <Link className="text-red-600 underline font-bold" to="/register">Register</Link></p>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Login;