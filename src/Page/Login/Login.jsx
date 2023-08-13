import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Login = () => {
    const [error , setError]=useState("")

    const { signIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
   
   const hanldeLogin = (e)=> {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(email,password);

    signIn(email,password)
    .then( result => {
        const user = result.user;
        navigate(from,{replace:true})
    })
    .catch(error => {
        // console.log(error);
      setError(error.message)  
    })
   
   }

    return (
        <div className="flex min-h-screen items-center justify-center border-2">
            {
                error && <p>{error}</p>
            }
            <form onSubmit={hanldeLogin}  className="w-full max-w-xs border-2 bg-slate-300 p-5 flex flex-col justify-center" action="">
                {/* input field one  */}
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">email</span>

                    </label>
                    <input type="email" name="email" required placeholder="email" className="input input-bordered w-full max-w-xs" />

                </div>
                {/* input field two  */}
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">password</span>

                    </label>
                    <input type="password" name="password" required placeholder="password" className="input input-bordered w-full max-w-xs" />

                </div>
                

                <input className="px-5 py-2 bg-black rounded-md text-white mt-4 cursor-pointer" type="submit" value="Login" />
                <p className="text-sky-500"><Link to={'/sign-up'}>create an account</Link></p>


            </form>
        </div>
    );
};

export default Login;