import { useState } from "react";
import { useEffect } from "react";
import React from "react";
import AuthBox from "../../components/authBox";
import LoginPageHeader from "./LoginPageHeader";
import LoginPageInput from "./LoginPageInputs";
import LoginPageFooter from "./LoginPageFooter";
import { validateLoginForm } from "../../components/utils/validators";

const LoginPage = () => {
    const [mail, setMail] = useState('');
    const [password, setPassword] = useState('');
    const [isFormvalid, setIsFormValid] = useState(false);

    useEffect(() => {
        setIsFormValid(validateLoginForm({ mail, password }))

    }, [mail, password, setIsFormValid])

    const handleLogin = () => {
        console.log("Logged in");
    }
    return (
    <AuthBox>
        <LoginPageHeader/>
        <LoginPageInput 
           mail={mail}
           setMail={setMail}
           password={password}
           setPassword={setPassword}
        />
        <LoginPageFooter isFormValid={isFormvalid} handleLogin={handleLogin}/>
    </AuthBox>
    )
}

export default LoginPage;