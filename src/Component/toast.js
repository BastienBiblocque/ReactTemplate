import React from 'react';
import {toast, Toaster} from "react-hot-toast";

function Toast() {

    const toastMe = () => {
        toast.success("Get toasted.");
    }
    return (
        <>
            <Toaster/>
            <button className="btn btn-primary m-4" onClick={()=>{toastMe()}}>Toast me</button>
        </>
    );
}

export default Toast;