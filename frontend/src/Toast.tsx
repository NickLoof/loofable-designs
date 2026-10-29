import "./Toast.css"
import { CircleX } from "lucide-react"
import { useEffect } from "react"

interface ToastProps{
    message: string
    type: "success" | "error"
    onClose: () => void
}

function Toast ({message, type, onClose}: ToastProps) {

    useEffect(() => {
        const timer = setTimeout(() => {
            onClose();
        }, 5000)

        return () => clearTimeout(timer);
    }, [])

    return(
        <div className={`toast ${type}`}>
            <p>{message}</p>
            <button onClick={onClose}><CircleX/></button>
        </div>
    )
}

export default Toast;