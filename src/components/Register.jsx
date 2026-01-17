import { Link } from "react-router";
import { useForm } from "react-hook-form"
import useAuth from "../hooks/useAuth";
const Register = () => {
    const { createUser } = useAuth();

    const { register, handleSubmit, formState: { errors }, } = useForm()

    const onSubmit = (data) => {
        console.log(data);
        const { email, password } = data;
        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => {
                console.log(error);
            })

    };
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Register now!</h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                </div>
                <form onSubmit={handleSubmit(onSubmit)} className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body">
                        <fieldset className="fieldset">
                            <label className="label">Full Name</label>
                            <input type="text" className="input" placeholder="Full Name"
                                {...register("fullName", { required: true })}
                            />
                            {errors.fullName && <span className="text-red-500">This field is required</span>}

                            <label className="label">Email</label>
                            <input type="email" className="input" placeholder="Email"
                                {...register("email", { required: true })}

                            />
                            {errors.email && <span className="text-red-500">This field is required</span>}

                            <label className="label">Image Url</label>
                            <input type="text" className="input" placeholder="Image Url"
                                {...register("imageUrl")}
                            />
                            {errors.imageUrl && <span className="text-red-500">This field is required</span>}

                            <label className="label">Password</label>
                            <input type="password" className="input" placeholder="Password"
                                {...register("password", { required: true })}
                            />
                            {errors.password && <span className="text-red-500">This field is required</span>}

                            <div><a className="link link-hover">Forgot password?</a></div>
                            <button className="btn btn-neutral mt-4">Register</button>

                            <div className="flex mt-2">
                                <p>Have an account?</p>
                                <Link className="text-blue-600 font-semibold underline" to="/login"> Please Login</Link>
                            </div>
                        </fieldset>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;