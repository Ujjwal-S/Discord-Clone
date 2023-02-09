import { MouseEvent, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import bgImageUrl from "../assets/images/loginRegisterPage/bg.svg";
import myLinkedInUrl from "../assets/images/loginRegisterPage/qr-code.png";
import discordLogo from "../assets/images/loginRegisterPage/discordLogo.svg";
import googleIcon from "../assets/images/loginRegisterPage/googleIcon.svg"
import loader from "../assets/images/loginRegisterPage/loader.svg"
import sendToast from "../utils/sendToast";
import validateEmail from "../utils/checkValidEmail";
import { loginWithEmail, googleSignIn } from "../store/authSlice";
import { useAppDispatch, useAppSelector } from "../store/hooks";


const LoginPage = () => {
    const formRef = useRef<HTMLFormElement>(null);

    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    const {user, loading, loginOrRegisterMethod} = useAppSelector(state => state.userAuth)
    useEffect(() => {
        if(user) {
            navigate("/app/");
        }
    }, [user])

    const goToRegisterPage = (e: MouseEvent) => {
        e.preventDefault();
        navigate("/register");
    }

    const handleGoogleSignIn = () => {
        dispatch(googleSignIn());
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        if (formRef.current) {
            const formData = new FormData(formRef.current);
            const email = formData.get("email") as string
            const password = formData.get("password") as string

            if (!email || !password) {
                return sendToast("error", "All fields are required.")
            }
            if (!validateEmail(email)) {
                return sendToast("error", "That email looks wrong!")
            }
            if (password.length < 6) {
                return sendToast("error", "Password should be atleast 6 characters long.")
            }

            dispatch(loginWithEmail({
                email,
                password
            }))
        }
    }

    return (
        <div className="relative w-full h-screen">
            <img className="w-full h-full fixed top-0 left-0 select-none" src={bgImageUrl} alt="background image" />
            <div className="absolute flex justify-center items-center top-0 left-0 min-h-[580px] w-full h-full">
                <div className="form-container bg-[var(--rang-primary-dark)] text-[color:var(--text-gray)] text-lg p-8 shadow-dark-elevation">
                    <div className="mb-4 discord-logo hidden">
                        <img src={discordLogo} className="mx-auto" alt="Discord Logo" />
                    </div>
                    <form ref={formRef} onSubmit={handleSubmit} className="flex">
                        <div className="flex-grow">
                            <div className="text-center">
                                <h1 className="mb-2 text-2xl leading-[30px] text-white font-semibold">Welcome back!</h1>
                                <p className="text-base leading-5">We're so excited to see you again!</p>
                            </div>
                            <div className="w-full mt-5">
                                <fieldset disabled={loading}>
                                    <div className="mb-5">
                                        <label className="uppercase mb-2 block text-xs font-bold tracking-wide" htmlFor="email">Enter your Email <span className="text-red-400">*</span></label>
                                        <input 
                                            type="email" 
                                            className="w-full h-10 p-[10px] border-none rounded-sm outline-none text-white bg-[color:#202225]" 
                                            name="email" id="email" autoComplete="false" 
                                            autoCorrect="false" autoCapitalize="false" spellCheck="false" 
                                        />
                                    </div>
                                    <div className="w-full">
                                        <label className="uppercase mb-2 block text-xs font-bold tracking-wide" htmlFor="password">Password <span className="text-red-400">*</span></label>
                                        <input 
                                            type="password" className="w-full h-10 p-[10px] border-none rounded-sm outline-none text-white bg-[color:#202225]" 
                                            name="password" id="password" autoComplete="false" autoCorrect="false" 
                                            autoCapitalize="false" spellCheck="false" 
                                        />
                                    </div>
                                    <a className="mt-2 mb-5 block font-medium text-[var(--rang-text-link)] text-sm " href="#">Forgot your password?</a>
                                    <div className="grid grid-cols-3 gap-5">
                                        <button onClick={handleGoogleSignIn} type="button" className={`google-btn ${loading ? 'cursor-not-allowed' : ''}`} disabled={loading}>
                                        <img src={googleIcon} className="mr-2" alt="Signin with Google" />
                                            { (loading && loginOrRegisterMethod==="google") ? '' : 'Sign In' }
                                            { (loading && loginOrRegisterMethod==="google") && <img src={loader} className="animate-spin w-4 inline-block" alt="loading" /> }
                                        </button>
                                        <button type="submit" className={`login-register-other-btn ${loading ? 'cursor-not-allowed' : ''}`}>
                                            { (loading && loginOrRegisterMethod==="email") && <img src={loader} className="animate-spin w-4 inline-block mr-2" alt="loading" /> }
                                            { (loading && loginOrRegisterMethod==="email")  ? 'Logging in...' : 'Login' }
                                        </button>
                                    </div>
                                </fieldset>
                                <p className="text-sm text-[color:#a3a6aa] pl-[2px] mt-2">
                                    Need an account?&nbsp;
                                    <a onClick={(e) => goToRegisterPage(e)} className="font-medium text-[var(--rang-text-link)] text-sm" href="/register">Register</a>
                                </p>
                            </div>
                        </div>
                        <div className="mx-8 qr-code-login"></div>
                        <div className="w-60 h-[344px] text-center qr-code-login">
                            <img src={myLinkedInUrl} draggable="false" className="h-44 select-none rounded mb-8 shadow-dark-elevation mx-auto" alt="My Linkedin" />
                            <h2 className="mb-2 text-2xl leading-[30px] text-white font-semibold">Log in with QR Code</h2>
                            <p className="text-base leading-5">
                                Scan this with the <span className="font-semibold">Discord mobile app</span> to log in instantly.
                            </p>
                        </div>
                    </form>
                </div>
            </div>  
        </div>
    )
}

export default LoginPage;