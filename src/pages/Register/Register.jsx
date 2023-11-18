import { Link } from "react-router-dom";
import Navbar from "../shared/Navbar/Navbar";
import Footer from "../Footer/Footer";
import { useContext, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const Register = () => {

    const { createUser } = useContext(AuthContext);
    const [registerError, setRegisterError] = useState('');
    const [success, setSuccess] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleRegister = e => {
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);

        const name = form.get('name');
        const photo = form.get('photo');
        const email = form.get('email');
        const password = form.get('password');
        console.log(name, photo, email, password);

        setRegisterError('');
        setSuccess('');

        if (password.length < 6) {
            setRegisterError('Password Should Be At Least 6 Character or Longer');
            return;
        }

        else if (!/[A-Z]/.test(password)) {
            setRegisterError('At Least One Upper Case');
            return;
        }

        // else if(!accepted){
        //     setRegisterError('please');
        //     return;
        // }

        createUser(email, password)
            .then(result => {
                console.log(result.user)
                setSuccess('User Created Successfully');
            })
            .catch(error => {
                console.error(error);
                setRegisterError('Already Created User')
            })

    }


    return (
        <div>
            <Navbar></Navbar>
            <div className="">
                <h2 className="text-3xl font-semibold my-10 text-center">Register</h2>
                <form onSubmit={handleRegister} className="md:w-3/4 lg:w-1/2 mx-auto">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" placeholder="Name" name="name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo</span>
                        </label>
                        <input type="file" placeholder="photo" name="photo" className="input input-bordered file-input file-input-primary" required />
                    </div>
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
                            <a href="#" className="label-text-alt link link-hover"><span className="text-blue-600 font-bold">Forgot password?</span></a>
                        </label>
                    </div>
                    {
                        registerError && <p className="text-red-600 text-center font-bold text-xl">{registerError}</p>
                    }
                    {
                        success && <p className="text-green-600 text-center font-bold text-xl">{success}</p>
                    }
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Register</button>
                    </div>
                </form>

                <p className="text-center mt-4">Already have an account <Link className="text-red-600 underline font-bold" to="/login">Login</Link></p>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Register;