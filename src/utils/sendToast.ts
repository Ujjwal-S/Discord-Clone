import {toast} from "react-hot-toast"

type ToastType = "success" | "error"

export default function sendToast(type: ToastType, message: string) {
    if (type === "error") {
        toast.error(
            message,
            {
                style: {
                    background: "#36393f",
                    color: "#ffffff"
                }
            }
        );
    }
    else if (type === "success") {
        toast.success(
            message,
            {
                style: {
                    background: "#36393f",
                    color: "#ffffff"
                }
            }
        );
    }
}