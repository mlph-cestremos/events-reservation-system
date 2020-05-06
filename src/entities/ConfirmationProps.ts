import { ReactNode } from "react";

export interface ConfirmationProps {
    title : string, 
    isShown : boolean,
    onCancel : () => void,
    onConfirm : () => void,
    children : ReactNode
}