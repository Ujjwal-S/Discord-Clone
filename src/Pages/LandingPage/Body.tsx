import inviteOnlyImageUrl from "../../assets/images/landingPage/invite_only.svg";
import hangingOutEasyImageUrl from "../../assets/images/landingPage/hanging_out_easy_landing.svg";
import fandomLandingImageUrl from "../../assets/images/landingPage/fandom_landing.svg";
import justChilingLandingUrl from "../../assets/images/landingPage/just_chiling_landing.svg";
import tinyStarsLandingUrl from "../../assets/images/landingPage/tiny_stars_landing.svg";
import Button from "../../components/Button";
import Wrapper from "./Wrapper";

const Body = () => {
    return (
        <div>
            <Wrapper bg="light">
                <img src={inviteOnlyImageUrl} className="col-span-4 lg:col-span-7 mt-6 md:mt-auto md:mb-auto w-full object-cover max-w-[678px] max-h-[440px]" draggable="false" alt="Stylized image of a Discord server with multiple channels for studying, games, cooking, and pet photos." />
                <div className="lg:col-start-9 col-span-4 mt-5 lg:mt-0 flex flex-col justify-center text-[color:var(--rang-not-so-black)]">
                    <h2 className="leading-[120%] md:leading-[120%] md:text-5xl font-extrabold fs-body-heading">Create an invite-only place where you belong</h2>
                    <div className="mt-6 fs-hero-subtitle-on-sm-device leading-[1.625]">
                        Discord servers are organized into topic-based channels where you can collaborate, share, and just talk about your day without clogging up a group chat.
                    </div>
                </div>
            </Wrapper>
            <Wrapper bg="gray">
                <img src={hangingOutEasyImageUrl} className="col-span-4 lg:col-span-7 mt-6 md:mt-auto md:mb-auto w-full object-cover max-w-[678px] max-h-[440px]" draggable="false" alt="Stylized image of a Discord server with multiple channels for studying, games, cooking, and pet photos." />
                <div className="lg:col-start-9 col-span-4 mt-5 lg:mt-0 flex flex-col justify-center text-[color:var(--rang-not-so-black)]">
                    <h2 className="leading-[120%] md:leading-[120%] md:text-5xl font-extrabold fs-body-heading">Where hanging out is easy</h2>
                    <div className="mt-6 fs-hero-subtitle-on-sm-device leading-[1.625]">
                        Grab a seat in a voice channel when you’re free. Friends in your server can see you’re around and instantly pop in to talk without having to call.
                    </div>
                </div>
            </Wrapper>
            <Wrapper bg="light">
                <img src={fandomLandingImageUrl} className="col-span-4 lg:col-span-7 mt-6 md:mt-auto md:mb-auto w-full object-cover max-w-[678px] max-h-[440px]" draggable="false" alt="Stylized image of a Discord server with multiple channels for studying, games, cooking, and pet photos." />
                <div className="lg:col-start-9 col-span-4 mt-5 lg:mt-0 flex flex-col justify-center text-[color:var(--rang-not-so-black)]">
                    <h2 className="leading-[120%] md:leading-[120%] md:text-5xl font-extrabold fs-body-heading">From few to a fandom</h2>
                    <div className="mt-6 fs-hero-subtitle-on-sm-device leading-[1.625]">
                        Get any community running with moderation tools and custom member access. Give members special powers, set up private channels, and more.
                    </div>
                </div>
            </Wrapper>
            <Wrapper bg="gray">
                <div className="col-span-4 md:col-span-full mt-5 lg:mt-0 md:text-center lg:col-start-2 lg:col-span-10 text-[color:var(--rang-not-so-black)]">
                    <h2 className="leading-[95%] ff-ginto fs-body-heading uppercase">Reliable tech for staying close</h2>
                    <div className="mt-6 fs-hero-subtitle-on-sm-device leading-[1.625]">
                        Low-latency voice and video feels like you’re in the same room. Wave hello over video, watch friends stream their games, or gather up and have a drawing session with screen share.
                    </div>
                </div>
                <img src={justChilingLandingUrl} className="col-span-4 md:col-span-8 lg:col-span-12 mt-6 md:mt-4 w-full object-cover " draggable="false" alt="Stylized image showing friends video talking with each other on desktop and mobile." />
            </Wrapper>
            <Wrapper bg="gray" onlyBottomPadding={true}>
                <div className="flex flex-col items-center justify-center col-span-4 md:col-span-full">
                    <div className="absolute top-0 overflow-hidden w-full flex justify-center">
                        <img src={tinyStarsLandingUrl} alt="tiny stars image" />
                    </div>
                    <h4 className="z-10 font-bold leading-[120%] text-[32px] mt-[30px] text-center sm:text-left">
                        Ready to start your journey?
                    </h4>
                    <div className="bada mt-10">
                        <Button size="lg" color="purple" width="contain">
                            <svg className="mr-2" width="24" height="24" viewBox="0 0 24 24">
                                <g fill="currentColor">
                                    <path d="M17.707 10.708L16.293 9.29398L13 12.587V2.00098H11V12.587L7.70697 9.29398L6.29297 10.708L12 16.415L17.707 10.708Z"></path><path d="M18 18.001V20.001H6V18.001H4V20.001C4 21.103 4.897 22.001 6 22.001H18C19.104 22.001 20 21.103 20 20.001V18.001H18Z"></path>
                                </g>
                            </svg>
                            Download for Windows
                        </Button>
                    </div>
                    <div className="chota mt-10">
                        <Button size="sm" color="purple" width="contain">
                                <svg className="mr-2" width="24" height="24" viewBox="0 0 24 24">
                                    <g fill="currentColor">
                                        <path d="M17.707 10.708L16.293 9.29398L13 12.587V2.00098H11V12.587L7.70697 9.29398L6.29297 10.708L12 16.415L17.707 10.708Z"></path><path d="M18 18.001V20.001H6V18.001H4V20.001C4 21.103 4.897 22.001 6 22.001H18C19.104 22.001 20 21.103 20 20.001V18.001H18Z"></path>
                                    </g>
                                </svg>
                                Download for Windows
                        </Button>
                    </div>
                </div>
            </Wrapper>
        </div>
    );
}

export default Body;