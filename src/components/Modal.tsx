import React from "react";
import ReactDom from "react-dom";

const ModalBackdrop = (props: {onClose: () => void}) => {
    return (
        <div
            onClick={props.onClose}
            className="fixed top-0 bottom-0 left-0 right-0 bg-modal-backdrop z-40"
        ></div>
    )
}

type ModalProps = {
    heading?: string,
    children: React.ReactNode,
    onClose: () => void
}

const ModalOverlay = (props: ModalProps) => {
    return (
        <div className="fixed pointer-events-none top-0 bottom-0 left-0 right-0 flex justify-center items-center z-50">
            
            <div className="pointer-events-auto bg-modal-background text-modal-text p-4 border border-gray-600 -translate-y-1/2 rounded-md">
                
                {/* Close Button */}
                <div className="flex justify-between items-center">
                    <h2 className="uppercase p-1 block font-bold tracking-wide">{props.heading}</h2>
                    
                    <div className="p-1 cursor-pointer" onClick={props.onClose}>
                        <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14.4 0L8 6.4L1.6 0L0 1.6L6.4 8L0 14.4L1.6 16L8 9.6L14.4 16L16 14.4L9.6 8L16 1.6L14.4 0Z" fill="currentColor"/>
                        </svg>
                    </div>
                </div>

                
                {props.children}
            </div>
        
        </div>
    )
}

const portal_element = document.getElementById("overlay") as Element;


const Modal = (props: ModalProps) => {
    return (
        <>
            { ReactDom.createPortal(<ModalBackdrop onClose={props.onClose} />, portal_element) }
            { ReactDom.createPortal(<ModalOverlay onClose={props.onClose} heading={props.heading}> {props.children} </ModalOverlay>, portal_element) }
        </>
    )
}

export default Modal;