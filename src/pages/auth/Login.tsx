import {useLocation} from "react-router-dom";
import {supabase} from "../../helpers/supbaseClient";
import {useState} from "react";
import {useForm, SubmitHandler} from "react-hook-form"
import {validationRules} from "../../helpers/utils";
import {useDispatch} from "react-redux";
import {setUser} from "../../store/AuthSlice";

type Inputs = {
    email: string;
    password: string;
}
export default function Login() {
    const dispatch = useDispatch();
    const {register, handleSubmit, formState: {errors}} = useForm<Inputs>();
    const location = useLocation();
    const isRedirected = Boolean(new URLSearchParams(location.search).get('requiresAuth'));
    const [loginError, setLoginError] = useState<string | null>(null);

    const onLogin: SubmitHandler<Inputs> = async (inputs) => {
        const {data, error} = await supabase.auth.signInWithPassword(inputs);

        if (error) setLoginError(error.message);

        dispatch(setUser(data.user));
    }

    return (
        <section className="container max-w-2xl">
            <h2 className="text-center mb-6 text-base xl:text-xl text-black/80">Welcome back to <span
                className="font-semibold">{process.env.REACT_APP_NAME}</span>
            </h2>
            {isRedirected && <p className="text-sm text-red-500 text-center my-3">Please login in your account</p>}
            {loginError && <p className="text-sm text-red-500 text-center my-3">{loginError}</p>}
            <div className="card">
                <form onSubmit={handleSubmit(onLogin)} method="post">
                    <div className="mb-6">
                        <div>
                            <div className="relative z-0 ">
                                <input type="email" {...register("email", validationRules.email)}
                                       className="floating-input peer"
                                       placeholder=" "
                                       defaultValue="admin1@admin.com"
                                       autoComplete="email"
                                       aria-invalid={errors.email ? "true" : "false"}
                                />
                                <label htmlFor="email"
                                       className="floating-label">Email</label>
                            </div>
                            {errors.email &&
                                <p className="text-xs text-red-500 mt-0.5 ml-0.5">{errors.email.message}</p>}
                        </div>
                    </div>
                    <div className="mb-6">
                        <div>
                            <div className="relative z-0">
                                <input type="password" {...register("password", validationRules.password)}
                                       className="floating-input peer"
                                       defaultValue="pedal123"
                                       placeholder=" "
                                       autoComplete="password"
                                       aria-invalid={errors.password ? "true" : "false"}
                                />
                                <label htmlFor="password"
                                       className="floating-label">Password</label>
                            </div>
                            {errors.password &&
                                <p className="text-xs text-red-500 mt-0.5 ml-0.5">{errors.password.message}</p>}
                        </div>
                    </div>
                    <button className="btn-main w-full p-2 text-base font-semibold">Login</button>
                </form>
            </div>
        </section>
    );
}