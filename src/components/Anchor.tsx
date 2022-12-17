type AnchorProps = {
    url: string,
    color: "light" | "dark",
    weight?: "semibold",
    width?: "full" | "contain"
    active?: boolean,
    children: string
}

const Anchor = (props:AnchorProps) => {
    let anchorStyles = `${props.width =="full" ? 'w-full' : ''} block lg:inline lg:m-2.5 lg:p-2.5 px-4 py-2 leading-6 underline-offset-4 hover:underline`;

    // Color
        if (props.color === "light") {
            anchorStyles += " text-white";
        }
    
    // Weight
        if (props.weight) {
            anchorStyles += " font-semibold";
        }
    
    // Active
        if (props.active) {
            anchorStyles += " text-[color:var(--rang-text-link)] bg-[color:var(--rang-off-white)] rounded-lg"
        }
    
    return (
        <a className={anchorStyles} href={props.url}>{props.children}</a>
    )
}

export default Anchor;