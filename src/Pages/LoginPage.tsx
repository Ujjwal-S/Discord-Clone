import { MouseEvent } from "react";
import { useNavigate } from "react-router-dom";
import bgImageUrl from "../assets/images/loginRegisterPage/bg.svg";
import myLinkedInUrl from "../assets/images/loginRegisterPage/qr-code.png";
import discordLogo from "../assets/images/loginRegisterPage/discordLogo.svg";
import googleIcon from "../assets/images/loginRegisterPage/googleIcon.svg"
import loader from "../assets/images/loginRegisterPage/loader.svg"

// mobile screen ko rotate karke dekho

const LoginPage = () => {

    let navigate = useNavigate()

    const goToRegisterPage = (e: MouseEvent) => {
        e.preventDefault();
        navigate("/register");
    }

    return (
        <div className="relative w-full h-screen">
            <img className="w-full h-full fixed top-0 left-0" src={bgImageUrl} alt="background image" />
            <div className="absolute flex justify-center items-center top-0 left-0 min-h-[580px] w-full h-full">
                <div className="form-container bg-[var(--rang-primary-dark)] text-[color:var(--text-gray)] text-lg p-8 shadow-dark-elevation">
                    <div className="mb-4 discord-logo hidden">
                        <img src={discordLogo} className="mx-auto" alt="Discord Logo" />
                    </div>
                    <form className="flex">
                        <div className="flex-grow">
                            <div className="text-center">
                                <h1 className="mb-2 text-2xl leading-[30px] text-white font-semibold">Welcome back!</h1>
                                <p className="text-base leading-5">We're so excited to see you again!</p>
                            </div>
                            <div className="w-full mt-5">
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
                                    <button type="submit" className="google-btn">
                                    <img src={googleIcon} className="mr-2" alt="Signin with Google" />
                                        Sign In
                                    </button>
                                    <button type="submit" className="login-register-other-btn">
                                    <img src={loader} className="animate-spin w-4 inline-block mr-2" alt="loading" />
                                        Log In
                                    </button>
                                </div>
                                <p className="text-sm text-[color:#a3a6aa] pl-[2px] mt-2">
                                    Need an account?&nbsp;
                                    <a onClick={(e) => goToRegisterPage(e)} className="font-medium text-[var(--rang-text-link)] text-sm" href="/register">Register</a>
                                </p>
                            </div>
                        </div>
                        <div className="mx-8 qr-code-login"></div>
                        <div className="w-60 h-[344px] text-center qr-code-login">
                            <img src={myLinkedInUrl} draggable="false" className="h-44 rounded mb-8 shadow-dark-elevation mx-auto" alt="My Linkedin" />
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