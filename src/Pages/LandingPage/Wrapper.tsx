import { useRef, useEffect } from "react";

type WrapperProps = {
    bg: "light" | "gray"
    children: JSX.Element[] | JSX.Element
    onlyBottomPadding?: boolean
}

const Wrapper = (props: WrapperProps) => {
    let paddingStyleDir = "";
    if (props.onlyBottomPadding) {
        paddingStyleDir += "pb-[var(--section-spacing)] md:pb-[var(--md-section-spacing)] lg:pb-[var(--lg-section-spacing)]";
    }
    else {paddingStyleDir += "py-[var(--section-spacing)] md:py-[var(--md-section-spacing)] lg:py-[var(--lg-section-spacing)]";

    }

    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            const entry = entries[0];
            if(entry.isIntersecting) {
                if(ref.current != null) {
                    ref.current.className += "animate-fade-up ";
                }
                observer.disconnect()
            }
        }, {
            threshold: 0.2
        })
        if (ref.current) observer.observe(ref.current);
    }, [])

    return (
        <div className={`w-full relative flex flex-col items-center justify-center ${props.bg === "gray" ? 'bg-[color:var(--rang-off-white)]' : ''}`}>
            <div ref={ref} className={`w-full grid gap-x-5 grid-cols-4 md:grid-cols-8 lg:grid-cols-12 max-w-[var(--page-max-width)] px-[var(--page-gutter)] md:px-[var(--md-page-gutter)] `+paddingStyleDir}>
                {props.children}
            </div>
        </div>
    );
}

export default Wrapper;