type ButtonProps = {
    size: "sm" | "lg",
    color: "purple" | "white" | "dark",
    width?: "full" | "contain",
    children: React.ReactNode
}

const Button = (props:ButtonProps) => {
    let buttonStyles = "inline-flex items-center justify-center font-medium text-left leading-6 cursor-pointer transition-all duration-200 ease-in-out hover:shadow-semi";
    
    
    // Border Radius
        if (props.size === "sm") {
            buttonStyles += " rounded-[40px]";
        } else {
            buttonStyles += " rounded-[28px]";
        }
    
    // Font Size
        if (props.size === "sm") {
            buttonStyles += " text-sm";
        } else {
            buttonStyles += " text-xl";
        }
    
    // Padding
        if (props.size === "sm") {
            buttonStyles += " px-4 py-[7px]";
        } else {
            buttonStyles += " px-8 py-4";
        }
    // Color
        if (props.color === "purple") {
            buttonStyles += " bg-[color:var(--rang-brand)] text-white hover:bg-[color:#7983f5]";
        } 
        else if (props.color === "white") {
            buttonStyles += " bg-white text-[color:var(--rang-not-so-black)] hover:text-[color:var(--rang-brand)]";
        }
        else {
            buttonStyles += " bg-[var(--rang-not-so-black)] text-white hover:bg-[color:#36393f]";
        }

    // Width
        if (props.width === "full") {
            buttonStyles += " w-full";
        }else{
            buttonStyles += " w-fit";
        }

    return <button className={buttonStyles} >{props.children}</button>
}

export default Button;