import Button from "../../components/Button";

const HeroContent = () => {
    return (
        <div className="z-10 grid gap-x-5 grid-cols-4 md:grid-cols-8 lg:md:grid-cols-12 w-full max-w-[var(--page-max-width)] px-[var(--page-gutter)] md:px-[var(--md-page-gutter)] py-[var(--section-spacing)] md:py-[var(--md-section-spacing)] lg:py-[var(--lg-section-spacing)]">
            <div className="hero-content-box col-span-4 md:col-span-5 lg:col-start-3 lg:col-span-8">
                {/* Hero Heading */}
                    <h1 className="ff-ginto text-white lg:text-center fs-hero-heading-on-sm-device md:[font-size:56px] sm:leading-[95%] uppercase">Imagine A Place...</h1>
                {/* Hero Subtitle */}
                    <p className="text-white lg:text-center fs-hero-subtitle-on-sm-device leading-[26px] lg:leading-8 mt-6 md:mt-10 lg:mb-2">
                        ...where you can belong to a school club, a gaming group, or a worldwide art community. Where just you and a 
                        handful of friends can spend time together. A place that makes it easy to talk every day and hang out more often.
                    </p>
                {/* Hero CTA */}
                                <div className="bada">
                                    <div className="flex items-center flex-wrap lg:justify-center">
                                        <div className="mt-6 mr-6">
                                            <Button size="lg" color="white" >
                                                <svg className="mr-4" width="24" height="24" viewBox="0 0 24 24">
                                                    <g fill="currentColor">
                                                        <path d="M17.707 10.708L16.293 9.29398L13 12.587V2.00098H11V12.587L7.70697 9.29398L6.29297 10.708L12 16.415L17.707 10.708Z"></path><path d="M18 18.001V20.001H6V18.001H4V20.001C4 21.103 4.897 22.001 6 22.001H18C19.104 22.001 20 21.103 20 20.001V18.001H18Z"></path>
                                                    </g>
                                                </svg>
                                                Download For Windows
                                            </Button>
                                        </div>
                                        <div className="mt-6 mr-6">
                                            <Button size="lg" color="dark">
                                                Open Discord in your browser
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                                <div className="chota">
                                    <div className="mt-6 mr-6">
                                        <Button size="sm" color="white" >
                                            <svg className="mr-2" width="22" height="22" viewBox="0 0 24 24">
                                                <g fill="currentColor">
                                                    <path d="M17.707 10.708L16.293 9.29398L13 12.587V2.00098H11V12.587L7.70697 9.29398L6.29297 10.708L12 16.415L17.707 10.708Z"></path><path d="M18 18.001V20.001H6V18.001H4V20.001C4 21.103 4.897 22.001 6 22.001H18C19.104 22.001 20 21.103 20 20.001V18.001H18Z"></path>
                                                </g>
                                            </svg>
                                            Download For Windows
                                        </Button>
                                    </div>
                                    <div className="mt-6 mr-6">
                                        <Button size="sm" color="dark">
                                            Open Discord in your browser
                                        </Button>
                                    </div>
                                </div>

                    {/* </div> */}
            </div>
        </div>
    )
}

export default HeroContent;