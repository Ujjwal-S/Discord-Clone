import HeroImgCenterUrl from "../../assets/images/landingPage/bg_center.svg";
import HeroImgLeftUrl from "../../assets/images/landingPage/bg_left.svg";
import HeroImgRightUrl from "../../assets/images/landingPage/bg_right.svg";
import Navbar from "./Navbar";
import HeroContent from "./HeroContent"

const Hero = () => {
    return (
        <div className="flex flex-col items-center relative bg-[color:var(--rang-primary-hero)] min-h-[626px] overflow-hidden">
            <Navbar />
            <HeroContent />
            <div className="md:absolute md:top-0 md:left-0 md:w-full md:h-full">
                <img src={HeroImgCenterUrl} className="hidden md:block max-w-none absolute bottom-0 left-1/2 ml-[-1320px]" alt="background image" />
                <img src={HeroImgLeftUrl} className="block w-full max-w-[880px] -ml-20 md:hidden lg:block lg:absolute bottom-0 left-1/2 h-auto lg:w-auto lg:max-w-none lg:ml-[-1030px]" draggable="false" alt="background image" />
                <img src={HeroImgRightUrl} className="hidden md:block absolute bottom-0 left-1/2 md:ml-[-70px] lg:ml-[370px]" draggable="false" alt="background image" />
            </div>
        </div>
    )
}

export default Hero;