import { useState } from "react";
import React from "react";
import AuthBox from "../../components/authBox";
import LoginPageHeader from "./LoginPageHeader";
import LoginPageInput from "./LoginPageInputs";

const LoginPage = () => {
    const [mail, setMail] = useState('');
    const [password, setPassword] = useState('');
    return (
    <AuthBox>
        <LoginPageHeader/>
        <LoginPageInput 
           mail={mail}
           setMail={setMail}
           password={password}
           setPassword={setPassword}
        />
    </AuthBox>
    )
}

export default LoginPage;