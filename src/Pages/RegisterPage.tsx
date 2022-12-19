import { useState, MouseEvent } from "react";
import { useNavigate } from "react-router-dom";
import bgImageUrl from "../assets/images/loginPage/bg.svg";

const RegisterPage = () => {

    const [checkboxStatus, setCheckboxStatus] = useState(false);

    let navigate = useNavigate();
    const goToLoginPage = (e:MouseEvent) => {
        e.preventDefault();
        navigate("/login");
    }

    return (
        <div className="relative w-full h-screen">
            <img className="w-full h-full fixed top-0 left-0" src={bgImageUrl} alt="background image" />
                <div className="absolute flex justify-center items-center top-0 left-0 min-h-[664px] w-full h-full">
                    <div className="register-form-container bg-[var(--rang-primary-dark)] text-[color:var(--text-gray)] text-lg p-8 shadow-dark-elevation">
                        <form className="">
                            <div>
                                <h1 className="mb-2 text-2xl leading-[30px] text-center text-white font-semibold">Create an account</h1>
                            </div>
                            <div className="w-full mt-5">
                                <div className="mb-5">
                                    <label className="uppercase mb-2 block text-xs font-bold tracking-wide" htmlFor="email">Email <span className="text-red-400">*</span></label>
                                    <input type="email" className="w-full h-10 p-[10px] border-none rounded-sm outline-none text-white bg-[color:#202225]" name="email" id="email" autoComplete="false" autoCorrect="false" autoCapitalize="false" spellCheck="false" />
                                </div>
                                <div className="w-full mt-5">
                                    <label className="uppercase mb-2 block text-xs font-bold tracking-wide" htmlFor="password">Password <span className="text-red-400">*</span></label>
                                    <input type="password" className="w-full h-10 p-[10px] border-none rounded-sm outline-none text-white bg-[color:#202225]" name="password" id="password" autoComplete="false" autoCorrect="false" autoCapitalize="false" spellCheck="false" />
                                </div>
                                <div className="w-full mt-5">
                                    <label className="uppercase mb-2 block text-xs font-bold tracking-wide" htmlFor="confirm-password">Confirm Password <span className="text-red-400">*</span></label>
                                    <input type="password" className="w-full h-10 p-[10px] border-none rounded-sm outline-none text-white bg-[color:#202225]" name="confirm-password" id="confirm-password" autoComplete="false" autoCorrect="false" autoCapitalize="false" spellCheck="false" />
                                </div>
                                <div className="w-full mt-5 flex gap-3 items-center">
                                    <div onClick={() => setCheckboxStatus(current => !current)} className={`border border-[color:#72767d] rounded p-[1px] hover:cursor-pointer ${checkboxStatus ? 'bg-[var(--rang-brand)]' : ''}`} >
                                        <svg className={`${checkboxStatus ? '' : 'invisible'}`} aria-hidden="true" role="img" width="18" height="18" viewBox="0 0 24 24">
                                            <path fill="white" fillRule="evenodd" clipRule="evenodd" d="M8.99991 16.17L4.82991 12L3.40991 13.41L8.99991 19L20.9999 7.00003L19.5899 5.59003L8.99991 16.17Z"></path>
                                        </svg>
                                    </div>
                                    <p className="text-xs">It’s okay to send me emails with Discord updates, tips, and special offers. You can opt out at any time.</p>
                                </div>
                                <div className="grid grid-cols-3 gap-5 mt-6">
                                    <button type="submit" className="col-span-1 google-button order-1 inline-flex items-center justify-center text-white text-base mb-2 px-4 py-[10px] bg-[var(--rang-brand)] hover:bg-[#4752c4] transition-all duration-200 rounded-md font-semibold">
                                        <svg className="mr-2" xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" viewBox="0 0 16 16">
                                            <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z"/>
                                        </svg>
                                        Sign Up
                                    </button>
                                    <button type="submit" className="col-span-2 order-2 other-button text-white text-base mb-2 px-4 py-[10px] bg-[var(--rang-brand)] hover:bg-[#4752c4] transition-all duration-200 rounded-md font-semibold">Register</button>
                                </div>
                                <p className="text-sm text-[color:#a3a6aa] pl-[2px] mt-2">Already have an account? <a onClick={e => goToLoginPage(e)} className="font-medium text-[var(--rang-text-link)] text-sm" href="/login">Login</a></p>
                            </div>
                        </form>
                    </div>
                </div>
        </div>
    )
}

export default RegisterPage;