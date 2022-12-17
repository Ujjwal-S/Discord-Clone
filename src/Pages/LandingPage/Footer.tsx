import Button from "../../components/Button";
import indFlag from "../../assets/images/landingPage/ind_flag.png";

const Footer = () => {
    return (
        <div className="w-full flex flex-col bg-[color:var(--rang-not-so-black)] items-center pt-20 pb-16" role="navigation">
            <div className="w-full grid gap-x-5 grid-cols-4 md:grid-cols-8 lg:md:grid-cols-12 max-w-[var(--page-max-width)] px-[var(--page-gutter)] md:px-[var(--md-page-gutter)]">
                <div className="info col-span-3 mb-14">
                    <h4 className="ff-ginto uppercase text-[32px] font-extrabold text-[color:var(--rang-brand)] leading-[95%]">Imagine A Place</h4>
                    <div className="country mt-6 flex">
                        <img src={indFlag} className="w-6 h-4 mr-2" alt="Country: India" />
                        <p className="text-white">भारत (India)</p>
                    </div>
                    <div className="social flex mt-6">
                        <a href="https://twitter.com/discord" title="Discord on Twitter" className="mr-6">
                            <svg width="24" height="24" viewBox="0 0 24 24">
                                <path fill="white" d="M8.2177 20.2976C15.798 20.2976 19.9327 14.0329 19.9327 8.58261V8.05011C20.7362 7.46091 21.435 6.74089 22 5.92012C21.2567 6.26235 20.4637 6.48437 19.6507 6.57791C20.5139 6.06164 21.1597 5.24885 21.4675 4.2913C20.6598 4.76183 19.7822 5.10021 18.8677 5.29365C17.3053 3.64491 14.7069 3.56109 13.0415 5.10571C11.9701 6.10222 11.5157 7.59694 11.8512 9.02114C8.54594 8.85772 5.46574 7.29769 3.37823 4.72983C2.28095 6.60789 2.84519 9.01622 4.66249 10.2114C4.00661 10.1858 3.36464 10.0146 2.78309 9.71026V9.7729C2.78257 11.7293 4.15628 13.417 6.07204 13.8136C5.46884 13.9751 4.83671 13.9965 4.22396 13.8763C4.76475 15.5538 6.31437 16.7003 8.07674 16.7267C6.62377 17.8749 4.82287 18.4936 2.97103 18.4808C2.65779 18.4808 2.31323 18.4495 2 18.4182C3.84433 19.6513 6.0148 20.3057 8.23336 20.2976"></path>
                            </svg>
                        </a>
                        <a href="https://www.instagram.com/discord/" title="Discord on Instagram" className="mr-6">
                            <svg width="24" height="24" viewBox="0 0 24 24">
                                <g fill="white">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M11.9969 2.00632C9.28187 2.00632 8.94143 2.01783 7.87516 2.06648C6.81111 2.11501 6.0844 2.28402 5.44853 2.53116C4.79115 2.78659 4.23365 3.12842 3.67786 3.68417C3.1221 4.23997 2.78028 4.79747 2.52484 5.45485C2.2777 6.09072 2.10869 6.81743 2.06016 7.88148C2.01151 8.94775 2 9.28818 2 12.0032C2 14.7181 2.01151 15.0586 2.06016 16.1249C2.10869 17.1889 2.2777 17.9156 2.52484 18.5515C2.78028 19.2089 3.1221 19.7664 3.67786 20.3222C4.23365 20.8779 4.79115 21.2197 5.44853 21.4752C6.0844 21.7223 6.81111 21.8913 7.87516 21.9398C8.94143 21.9885 9.28187 22 11.9969 22C14.7118 22 15.0523 21.9885 16.1185 21.9398C17.1826 21.8913 17.9093 21.7223 18.5452 21.4752C19.2025 21.2197 19.76 20.8779 20.3158 20.3222C20.8716 19.7664 21.2134 19.2089 21.4689 18.5515C21.716 17.9156 21.885 17.1889 21.9335 16.1249C21.9822 15.0586 21.9937 14.7181 21.9937 12.0032C21.9937 9.28818 21.9822 8.94775 21.9335 7.88148C21.885 6.81743 21.716 6.09072 21.4689 5.45485C21.2134 4.79747 20.8716 4.23997 20.3158 3.68417C19.76 3.12842 19.2025 2.78659 18.5452 2.53116C17.9093 2.28402 17.1826 2.11501 16.1185 2.06648C15.0523 2.01783 14.7118 2.00632 11.9969 2.00632ZM11.9969 3.80755C14.6661 3.80755 14.9823 3.81775 16.0364 3.86584C17.0111 3.91029 17.5404 4.07314 17.8927 4.21005C18.3593 4.3914 18.6923 4.60802 19.0421 4.95786C19.392 5.30767 19.6086 5.64068 19.79 6.10731C19.9269 6.45957 20.0897 6.9889 20.1342 7.96358C20.1823 9.01771 20.1925 9.3339 20.1925 12.0032C20.1925 14.6724 20.1823 14.9886 20.1342 16.0427C20.0897 17.0174 19.9269 17.5468 19.79 17.899C19.6086 18.3656 19.392 18.6987 19.0421 19.0485C18.6923 19.3983 18.3593 19.6149 17.8927 19.7963C17.5404 19.9332 17.0111 20.096 16.0364 20.1405C14.9825 20.1886 14.6663 20.1988 11.9969 20.1988C9.32738 20.1988 9.01127 20.1886 7.95726 20.1405C6.98258 20.096 6.45325 19.9332 6.10099 19.7963C5.63437 19.6149 5.30135 19.3983 4.95155 19.0485C4.60175 18.6987 4.38508 18.3656 4.20373 17.899C4.06683 17.5468 3.90397 17.0174 3.85952 16.0427C3.81143 14.9886 3.80123 14.6724 3.80123 12.0032C3.80123 9.3339 3.81143 9.01771 3.85952 7.96358C3.90397 6.9889 4.06683 6.45957 4.20373 6.10731C4.38508 5.64068 4.60171 5.30767 4.95155 4.95786C5.30135 4.60802 5.63437 4.3914 6.10099 4.21005C6.45325 4.07314 6.98258 3.91029 7.95726 3.86584C9.01139 3.81775 9.32758 3.80755 11.9969 3.80755Z"></path><path fillRule="evenodd" clipRule="evenodd" d="M11.9968 15.3355C10.1564 15.3355 8.66451 13.8435 8.66451 12.0032C8.66451 10.1628 10.1564 8.67089 11.9968 8.67089C13.8372 8.67089 15.3291 10.1628 15.3291 12.0032C15.3291 13.8435 13.8372 15.3355 11.9968 15.3355ZM11.9968 6.86966C9.16161 6.86966 6.86328 9.16799 6.86328 12.0032C6.86328 14.8384 9.16161 17.1367 11.9968 17.1367C14.832 17.1367 17.1303 14.8384 17.1303 12.0032C17.1303 9.16799 14.832 6.86966 11.9968 6.86966Z"></path><path fillRule="evenodd" clipRule="evenodd" d="M18.5328 6.66684C18.5328 7.32938 17.9957 7.86644 17.3331 7.86644C16.6706 7.86644 16.1335 7.32938 16.1335 6.66684C16.1335 6.0043 16.6706 5.46719 17.3331 5.46719C17.9957 5.46719 18.5328 6.0043 18.5328 6.66684Z">
                                    </path>
                                </g>
                            </svg>
                        </a>
                        <a href="https://facebook.com/discord" title="Discord on Facebook" className="mr-6">
                            <svg width="24" height="24" viewBox="0 0 24 24">
                                <path fill="white" d="M20.875 2H3.09375C2.46875 2 2 2.5 2 3.09375V20.875C2 21.5 2.5 21.9687 3.09375 21.9687H12.6875V14.2188H10.0625V11.1875H12.6562V8.96874C12.6562 6.375 14.2187 4.96875 16.5312 4.96875C17.625 4.96875 18.5937 5.0625 18.875 5.09375V7.78125H17.2812C16.0312 7.78125 15.7812 8.375 15.7812 9.25V11.1875H18.7812L18.4062 14.25H15.8125V22H20.9062C21.5312 22 22 21.5 22 20.9062V3.125C22 2.46875 21.5 2 20.875 2Z"></path>
                            </svg>
                        </a>
                        <a href="https://www.youtube.com/discord/" title="Discord on Youtube" className="mr-6">
                            <svg width="24" height="24" viewBox="0 0 24 24">
                                <path fillRule="evenodd" clipRule="evenodd" d="M21.3766 4.10479C22.4093 4.38257 23.2225 5.20102 23.4985 6.24038C24 8.12411 24 12.0545 24 12.0545C24 12.0545 24 15.9848 23.4985 17.8688C23.2225 18.908 22.4093 19.7265 21.3766 20.0044C19.505 20.5091 12 20.5091 12 20.5091C12 20.5091 4.49496 20.5091 2.62336 20.0044C1.59082 19.7265 0.777545 18.908 0.501545 17.8688C0 15.9848 0 12.0545 0 12.0545C0 12.0545 0 8.12411 0.501545 6.24038C0.777545 5.20102 1.59082 4.38257 2.62336 4.10479C4.49496 3.59998 12 3.59998 12 3.59998C12 3.59998 19.505 3.59998 21.3766 4.10479ZM15.8182 12.0546L9.54551 15.623V8.48596L15.8182 12.0546Z" fill="white"></path>
                            </svg>
                        </a>
                    </div>
                </div>
                <div className="spacer hidden md:block col-span-1 row-span-2"></div>
                <div className="route-section col-span-2 text-base mb-10">
                    <h5 className="mt-2 text-[color:var(--rang-brand)]">Product</h5>
                    <a className="mt-2 block text-white text-base hover:underline" href="/">Download</a>
                    <a className="mt-2 block text-white text-base hover:underline" href="/">Nitro</a>
                    <a className="mt-2 block text-white text-base hover:underline" href="/">Status</a>
                </div>
                <div className="route-section col-span-2 text-base mb-10">
                    <h5 className="mt-2 text-[color:var(--rang-brand)]">Company</h5>
                    <a className="mt-2 block text-white text-base hover:underline" href="/">About</a>
                    <a className="mt-2 block text-white text-base hover:underline" href="/">Jobs</a>
                    <a className="mt-2 block text-white text-base hover:underline" href="/">Branding</a>
                    <a className="mt-2 block text-white text-base hover:underline" href="/">Newsroom</a>
                </div>
                <div className="route-section col-span-2 text-base mb-10">
                    <h5 className="mt-2 text-[color:var(--rang-brand)]">Resources</h5>
                    <a className="mt-2 block text-white text-base hover:underline" href="/">College</a>
                    <a className="mt-2 block text-white text-base hover:underline" href="/">Support</a>
                    <a className="mt-2 block text-white text-base hover:underline" href="/">Safety</a>
                    <a className="mt-2 block text-white text-base hover:underline" href="/">Blog</a>
                    <a className="mt-2 block text-white text-base hover:underline" href="/">Feedback</a>
                    <a className="mt-2 block text-white text-base hover:underline" href="/">Developers</a>
                    <a className="mt-2 block text-white text-base hover:underline" href="/">StreamKit</a>
                    <a className="mt-2 block text-white text-base hover:underline" href="/">Creators</a>
                </div>
                <div className="route-section col-span-2 text-base mb-10">
                    <h5 className="mt-2 text-[color:var(--rang-brand)]">Policies</h5>
                    <a className="mt-2 block text-white text-base hover:underline" href="/">Terms</a>
                    <a className="mt-2 block text-white text-base hover:underline" href="/">Privacy</a>
                    <a className="mt-2 block text-white text-base hover:underline" href="/">Cookie Settings</a>
                    <a className="mt-2 block text-white text-base hover:underline" href="/">Guidelines</a>
                    <a className="mt-2 block text-white text-base hover:underline" href="/">Acknowledgements</a>
                    <a className="mt-2 block text-white text-base hover:underline" href="/">Licenses</a>
                    <a className="mt-2 block text-white text-base hover:underline" href="/">Moderation</a>
                </div>
            </div>
            <div className="w-full max-w-[var(--page-max-width)] px-[var(--page-gutter)] md:px-[var(--md-page-gutter)]">
                <div className="sperator h-[1px] w-full mb-8 bg-[var(--rang-brand)]"></div>
                <div className="flex w-full justify-between items-center">
                    <a href="/">
                        <svg width="124" height="34" viewBox="0 0 124 34">
                            <g fill="white">
                                <path d="M26.0015 6.9529C24.0021 6.03845 21.8787 5.37198 19.6623 5C19.3833 5.48048 19.0733 6.13144 18.8563 6.64292C16.4989 6.30193 14.1585 6.30193 11.8336 6.64292C11.6166 6.13144 11.2911 5.48048 11.0276 5C8.79575 5.37198 6.67235 6.03845 4.6869 6.9529C0.672601 12.8736 -0.41235 18.6548 0.130124 24.3585C2.79599 26.2959 5.36889 27.4739 7.89682 28.2489C8.51679 27.4119 9.07477 26.5129 9.55525 25.5675C8.64079 25.2265 7.77283 24.808 6.93587 24.312C7.15286 24.1571 7.36986 23.9866 7.57135 23.8161C12.6241 26.1255 18.0969 26.1255 23.0876 23.8161C23.3046 23.9866 23.5061 24.1571 23.7231 24.312C22.8861 24.808 22.0182 25.2265 21.1037 25.5675C21.5842 26.5129 22.1422 27.4119 22.7621 28.2489C25.2885 27.4739 27.8769 26.2959 30.5288 24.3585C31.1952 17.7559 29.4733 12.0212 26.0015 6.9529ZM10.2527 20.8402C8.73376 20.8402 7.49382 19.4608 7.49382 17.7714C7.49382 16.082 8.70276 14.7025 10.2527 14.7025C11.7871 14.7025 13.0425 16.082 13.0115 17.7714C13.0115 19.4608 11.7871 20.8402 10.2527 20.8402ZM20.4373 20.8402C18.9183 20.8402 17.6768 19.4608 17.6768 17.7714C17.6768 16.082 18.8873 14.7025 20.4373 14.7025C21.9717 14.7025 23.2271 16.082 23.1961 17.7714C23.1961 19.4608 21.9872 20.8402 20.4373 20.8402Z"></path><path d="M41.2697 9.86615H47.8585C49.4394 9.86615 50.7878 10.1141 51.8883 10.6101C52.9887 11.1061 53.8102 11.7881 54.3527 12.6715C54.8951 13.555 55.1741 14.5624 55.1741 15.7094C55.1741 16.8253 54.8952 17.8328 54.3217 18.7472C53.7482 19.6462 52.8803 20.3746 51.7178 20.9016C50.5554 21.4286 49.1139 21.6921 47.3935 21.6921H41.2697V9.86615ZM47.316 18.6852C48.3854 18.6852 49.2069 18.4217 49.7804 17.8793C50.3539 17.3523 50.6484 16.6083 50.6484 15.6939C50.6484 14.8414 50.3849 14.1594 49.8734 13.648C49.3619 13.1365 48.587 12.873 47.5485 12.873H45.4871V18.6852H47.316Z"></path><path d="M65.4362 21.6774C64.5217 21.4449 63.7003 21.1039 62.9718 20.6389V17.8335C63.5298 18.2675 64.2582 18.6085 65.1882 18.8875C66.1181 19.1665 67.0171 19.306 67.8851 19.306C68.288 19.306 68.598 19.2595 68.7995 19.151C69.001 19.0425 69.1095 18.9185 69.1095 18.7635C69.1095 18.593 69.0475 18.4535 68.939 18.345C68.8305 18.2365 68.6135 18.1435 68.288 18.0505L66.2576 17.6011C65.0952 17.3376 64.2737 16.9501 63.7777 16.4851C63.2818 16.0201 63.0493 15.3847 63.0493 14.6097C63.0493 13.9587 63.2663 13.3853 63.6847 12.9048C64.1187 12.4243 64.7232 12.0523 65.5137 11.7888C66.3041 11.5254 67.2186 11.3859 68.288 11.3859C69.2335 11.3859 70.1014 11.4789 70.8919 11.6959C71.6823 11.8973 72.3333 12.1608 72.8448 12.4708V15.1212C72.3178 14.8112 71.6979 14.5632 71.0159 14.3772C70.3184 14.1912 69.6055 14.0982 68.877 14.0982C67.823 14.0982 67.2961 14.2842 67.2961 14.6407C67.2961 14.8112 67.3736 14.9352 67.5441 15.0282C67.7146 15.1212 68.009 15.1987 68.443 15.2917L70.1324 15.6017C71.2329 15.7876 72.0543 16.1286 72.5968 16.6091C73.1393 17.0896 73.4028 17.787 73.4028 18.7325C73.4028 19.7555 72.9533 20.5769 72.0543 21.1659C71.1554 21.7704 69.8844 22.0648 68.2415 22.0648C67.2806 22.0338 66.3506 21.9098 65.4362 21.6774Z"></path><path d="M77.5891 21.3213C76.6281 20.8408 75.8842 20.2054 75.4037 19.3994C74.9077 18.5934 74.6752 17.679 74.6752 16.656C74.6752 15.6486 74.9232 14.7341 75.4347 13.9437C75.9462 13.1377 76.6901 12.5177 77.6666 12.0528C78.643 11.6033 79.821 11.3708 81.1849 11.3708C82.8743 11.3708 84.2693 11.7273 85.3852 12.4402V15.5246C84.9977 15.2611 84.5328 15.0286 84.0058 14.8736C83.4788 14.7031 82.9208 14.6256 82.3319 14.6256C81.2779 14.6256 80.472 14.8116 79.8675 15.1991C79.2785 15.5866 78.984 16.0826 78.984 16.7025C78.984 17.307 79.263 17.803 79.852 18.1905C80.4254 18.5779 81.2624 18.7794 82.3474 18.7794C82.9053 18.7794 83.4633 18.7019 84.0058 18.5314C84.5483 18.3609 85.0287 18.175 85.4162 17.927V20.9183C84.1762 21.6623 82.7348 22.0343 81.1074 22.0343C79.728 22.0343 78.5655 21.7863 77.5891 21.3213Z"></path><path d="M89.8041 21.3213C88.8276 20.8408 88.0837 20.2054 87.5722 19.3839C87.0607 18.5624 86.7972 17.648 86.7972 16.625C86.7972 15.6176 87.0607 14.7031 87.5722 13.9127C88.0837 13.1222 88.8276 12.5022 89.7886 12.0528C90.7495 11.6033 91.9119 11.3708 93.2464 11.3708C94.5794 11.3708 95.7418 11.5878 96.7028 12.0528C97.6637 12.5022 98.4077 13.1222 98.9192 13.9127C99.4306 14.7031 99.6786 15.6021 99.6786 16.625C99.6786 17.6325 99.4306 18.5624 98.9192 19.3839C98.4077 20.2054 97.6792 20.8563 96.7028 21.3213C95.7263 21.7863 94.5794 22.0343 93.2464 22.0343C91.9274 22.0343 90.7805 21.7863 89.8041 21.3213ZM94.9358 18.3299C95.3388 17.927 95.5558 17.369 95.5558 16.7025C95.5558 16.0206 95.3543 15.4936 94.9358 15.0906C94.5174 14.6876 93.9594 14.4861 93.2619 14.4861C92.5335 14.4861 91.9739 14.6876 91.5555 15.0906C91.1525 15.4936 90.9355 16.0206 90.9355 16.7025C90.9355 17.3845 91.137 17.927 91.5555 18.3299C91.9739 18.7484 92.5335 18.9499 93.2619 18.9499C93.9594 18.9344 94.5329 18.7329 94.9358 18.3299Z"></path><path d="M110.048 11.9901V15.6325C109.614 15.3535 109.056 15.214 108.374 15.214C107.475 15.214 106.777 15.493 106.297 16.0354C105.816 16.5779 105.568 17.4304 105.568 18.5773V21.6772H101.43V11.8196H105.491V14.966C105.708 13.819 106.08 12.9666 106.576 12.4241C107.072 11.8816 107.723 11.5872 108.513 11.5872C109.102 11.5872 109.614 11.7267 110.048 11.9901Z"></path><path d="M124 9.52563V21.6925H119.862V19.4761C119.505 20.3131 118.978 20.9486 118.265 21.3825C117.551 21.8165 116.667 22.0335 115.613 22.0335C114.683 22.0335 113.862 21.801 113.164 21.3515C112.467 20.9021 111.925 20.2666 111.553 19.4761C111.181 18.6702 110.995 17.7712 110.995 16.7793C110.979 15.7408 111.181 14.8109 111.599 13.9894C112.002 13.168 112.591 12.5325 113.335 12.0675C114.079 11.6025 114.931 11.37 115.892 11.37C117.861 11.37 119.18 12.2225 119.862 13.9429V9.52563H124ZM119.242 18.2517C119.66 17.8487 119.877 17.3062 119.877 16.6553C119.877 16.0198 119.676 15.5083 119.257 15.1209C118.839 14.7334 118.281 14.5319 117.582 14.5319C116.884 14.5319 116.326 14.7334 115.908 15.1364C115.489 15.5393 115.288 16.0508 115.288 16.7018C115.288 17.3527 115.489 17.8642 115.908 18.2672C116.326 18.6702 116.869 18.8717 117.566 18.8717C118.265 18.8717 118.823 18.6702 119.242 18.2517Z"></path><path d="M58.9885 12.4091C60.1772 12.4091 61.1429 11.5416 61.1429 10.4717C61.1429 9.40164 60.1772 8.5343 58.9885 8.5343C57.7981 8.5343 56.8341 9.40164 56.8341 10.4717C56.8341 11.5416 57.7981 12.4091 58.9885 12.4091Z"></path><path d="M61.1429 13.741C59.8254 14.3144 58.1825 14.3299 56.8341 13.741V21.6921H61.1429V13.741Z">
                                </path>
                            </g>
                        </svg>
                    </a>
                    <Button size="sm" color="purple" >Sign up</Button>
                </div>
            </div>
        </div>
    )
}

export default Footer;