import { useState, MouseEvent, ChangeEvent, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import bgImageUrl from "../assets/images/loginRegisterPage/bg.svg";
import googleIcon from "../assets/images/loginRegisterPage/googleIcon.svg";
import loader from "../assets/images/loginRegisterPage/loader.svg"
import  validateImageType, { imageWithinSizeLimit } from "../utils/checkValidImage";
import validateEmail from "../utils/checkValidEmail";
import sendToast from "../utils/sendToast";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { registerWithEmail } from "../store/authSlice";

const RegisterPage = () => {
    const [checkboxStatus, setCheckboxStatus] = useState(false);
    const [imageValid, setImageValid] = useState(false)

    const imagePreviewRef = useRef<HTMLImageElement>(null);
    const imageInputRef = useRef<HTMLInputElement>(null);
    const formRef = useRef<HTMLFormElement>(null);

    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const {user, loading} = useAppSelector((state) => state.userAuth)
    useEffect(() => {
        if(user) {
            navigate("/app/");
        }
    }, [user])

    const goToLoginPage = (e:MouseEvent) => {
        e.preventDefault();
        navigate("/login");
    }

    const clearImageInput = () => {
        if (imageInputRef) {
            imageInputRef.current!.value = "";
            setImageValid(false);
        }
    }

    const handleFileSelect = async (event:ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files?.length > 0) {
            const file = event.target.files[0];
            if (!imageWithinSizeLimit(file)) {
                sendToast('error', 'File size beyond allowed range! Choose a file lesser than 0.5MB')
                clearImageInput();
                return;
            }

            const valid = await validateImageType(file);
            if (valid) {
                const fileReader = new FileReader();
                fileReader.readAsDataURL(file)
                fileReader.onload = function (ev) {
                    // @ts-ignore
                    imagePreviewRef.current?.setAttribute("src", ev.target.result)
                }
                setImageValid(true);  
            }
            else {
                clearImageInput();
                sendToast('error', "We only accept PNG or JPEG files as Avatar images. It's possible that your file has a false (even if it says .png or .jpg) OR incorrect extension name.")
            }
        }
    }

    const submitHandler = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        if (formRef.current) {
            const formData = new FormData(formRef.current);
            const email = formData.get("email") as string
            const password = formData.get("password") as string
            const confirmPassword = formData.get("confirm-password")
            const avatar = formData.get("avatar") as File
            
            if (email && password && confirmPassword && avatar.size > 0) {
                if (!validateEmail(email)) {
                    sendToast('error', 'That email looks wrong');
                    return
                }
                if (password !== confirmPassword) {
                    sendToast('error', 'Passwords do not match.');
                    return
                }
                if (password.length < 6) {
                    sendToast('error', 'Password should be atleast 6 characters long.');
                    return
                }
                dispatch(registerWithEmail({email, password, imageFile: avatar}))
            }
            else {
                sendToast("error", "All fields are required");
            }
        }
    }

    return (
        <div className="relative w-full h-screen">
            <img className="w-full h-full fixed top-0 left-0" src={bgImageUrl} alt="background image" />
                <div className="absolute flex justify-center items-center top-0 left-0 min-h-[664px] w-full h-full">
                    <div className="register-form-container bg-[var(--rang-primary-dark)] text-[color:var(--text-gray)] text-lg p-8 shadow-dark-elevation">
                        <form ref={formRef} onSubmit={submitHandler}>
                            <div>
                                <h1 className="mb-2 text-2xl leading-[30px] text-center text-white font-semibold">Create an account</h1>
                            </div>
                            <div className="w-full mt-5">
                                <div className="mb-5">
                                    <label className="form-label" htmlFor="email">Email <span className="text-red-400">*</span></label>
                                    <input 
                                        type="email" 
                                        className="input-box" 
                                        name="email" id="email" autoComplete="false" autoCorrect="false" 
                                        autoCapitalize="false" spellCheck="false" 
                                    />
                                </div>
                                <div className="w-full mt-5">
                                    <label className="form-label" htmlFor="password">Password <span className="text-red-400">*</span></label>
                                    <input 
                                        type="password" 
                                        className="input-box" 
                                        name="password" id="password" autoComplete="false" autoCorrect="false" 
                                        autoCapitalize="false" spellCheck="false" 
                                    />
                                </div>
                                <div className="w-full mt-5">
                                    <label className="form-label" htmlFor="confirm-password">Confirm Password <span className="text-red-400">*</span></label>
                                    <input
                                        type="password" 
                                        className="input-box" 
                                        name="confirm-password" id="confirm-password" autoComplete="false" 
                                        autoCorrect="false" autoCapitalize="false" spellCheck="false" 
                                    />
                                </div>
                                <div className="flex w-full justify-between items-end mt-4">
                                    <label className="form-label inline-block">Choose Avatar <span className="text-red-400">*</span></label>
                                    <div className="flex">
                                        {imageValid && <img ref={imagePreviewRef} className="max-h-8 max-w-[50px] pr-3" />}
                                        <label className="form-label mb-0 inline-block border border-gray-600 p-2 py-1.5 cursor-pointer text-emerald-500 hover:bg-[#303030] rounded-sm" htmlFor="avatar">Browse</label>
                                        <input 
                                            ref={imageInputRef} 
                                            type="file" 
                                            className="hidden" 
                                            name="avatar" id="avatar" multiple={false} 
                                            accept="image/*" 
                                            onChange={handleFileSelect}
                                        />
                                    </div>
                                </div>
                                <div className="w-full mt-4 flex gap-3 items-center">
                                    <div onClick={() => setCheckboxStatus(current => !current)} className={`border border-[color:#72767d] rounded p-[1px] hover:cursor-pointer ${checkboxStatus ? 'bg-[var(--rang-brand)]' : ''}`} >
                                        <svg className={`${checkboxStatus ? '' : 'invisible'}`} aria-hidden="true" role="img" width="18" height="18" viewBox="0 0 24 24">
                                            <path fill="white" fillRule="evenodd" clipRule="evenodd" d="M8.99991 16.17L4.82991 12L3.40991 13.41L8.99991 19L20.9999 7.00003L19.5899 5.59003L8.99991 16.17Z"></path>
                                        </svg>
                                    </div>
                                    <p className="text-xs">It’s okay to send me emails with Discord updates, tips, and special offers. You can opt out at any time.</p>
                                </div>
                                <div className="grid grid-cols-3 gap-5 mt-6">
                                    <button type="submit" className={`google-btn ${loading ? 'cursor-not-allowed' : ''}`} disabled={loading}>
                                        <img src={googleIcon} className="mr-2" alt="Signup with Google" />
                                        Sign Up
                                    </button>
                                    <button type="submit" className={`login-register-other-btn ${loading ? 'cursor-not-allowed' : ''}`}>
                                        { loading && <img src={loader} className="animate-spin w-4 inline-block mr-2" alt="loading" /> }
                                        { loading ? 'Processing...' : 'Register' }
                                    </button>
                                </div>
                                <p className="text-sm text-[color:#a3a6aa] pl-[2px] mt-2">
                                    Already have an account? 
                                    <a onClick={e => goToLoginPage(e)} className="font-medium text-[var(--rang-text-link)] text-sm" href="/login">&nbsp;Login
                                    </a>
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
        </div>
    )
}

export default RegisterPage;
