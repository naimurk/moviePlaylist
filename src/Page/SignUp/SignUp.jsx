import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { useContext } from "react";

const SignUp = () => {
    const { createUser, logOut, UserUpdateProfile } = useContext(AuthContext);
    const navigate = useNavigate();

    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
  
    const handleSignUp = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;

       
        //    console.log(name,email,password);
        createUser(email, password)
            .then(result => {
                const user = result.user;
                // console.log(user);
                const userInfo = {name:name,photoUrl: photo,email:email}
                console.log(userInfo);
                UserUpdateProfile(name, photo)
                    .then(() => {
                     fetch("http://localhost:5000/add-user",{
                        method: "POST",
                        headers: {
                            "content-type": "application/json",
                        },
                        body: JSON.stringify(userInfo)
                     })
                     .then(res => res.json())
                     .then(data => {
                        console.log(data);
                        navigate(from,{replace: true})
                        // playList creation 
                        
                        
                       
                     })   
                    })

            })
            

    }


    return (
        <div className="flex min-h-screen items-center justify-center border-2">
            <form onSubmit={handleSignUp} className="w-full max-w-xs border-2 bg-slate-300 p-5 flex flex-col justify-center" action="">
                {/* input field one  */}
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">What is your name?</span>

                    </label>
                    <input name="name" type="text" required placeholder="Name" className="input input-bordered w-full max-w-xs" />

                </div>
                {/* input field one  */}
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Photo Url</span>

                    </label>
                    <input name="photo" type="url" required placeholder="photo url" className="input input-bordered w-full max-w-xs" />

                </div>
                {/* input field two  */}
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">email</span>

                    </label>
                    <input name="email" type="email" required placeholder="email" className="input input-bordered w-full max-w-xs" />

                </div>
                {/* input field three  */}
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">password</span>

                    </label>
                    <input name="password" type="password" required placeholder="password" className="input input-bordered w-full max-w-xs" />

                </div>

                <input className="px-5 py-2 bg-black rounded-md text-white mt-4 cursor-pointer" type="submit" value="SignUp" />
                <p className="text-sky-500"><Link to={'/login'}>Already have an account ? <span className="text-red">login</span></Link></p>


            </form>
        </div>
    );
};

export default SignUp;