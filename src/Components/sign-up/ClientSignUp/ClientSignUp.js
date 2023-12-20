import { useEffect } from "react";

export default function ClientSignUp({userFormData, setUserFormData}){
    useEffect(()=>{
        setUserFormData({...userFormData,
            zeb: 10
        })
    }, []);
    return(
        <>

        </>
    );
}