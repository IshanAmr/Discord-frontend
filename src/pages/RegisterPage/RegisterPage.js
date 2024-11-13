import React from "react";
import AuthBox from "../../components/authBox";
import { useState } from "react";
import { useEffect } from "react";
import { validateRegisterForm } from "../../components/utils/validators";
import RegisterPageHeader from "./RegisterPageHeader";
import RegisterPageInput from "./RegisterPageInputs";
import RegisterPageFooter from "./RegisterPageFooter";

const RegisterPage = () => {
    const [mail, setMail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isFormValid, setIsFormValid] = useState(false);

    useEffect(() => {
        setIsFormValid(validateRegisterForm({ mail, username, password }))

    }, [mail, username, password, setIsFormValid]);

    const handleRegister = () => {
        console.log("Registered");
    }

    return (
        <AuthBox>
            <RegisterPageHeader/>
            <RegisterPageInput
              mail={mail}
              setMail={setMail}
              username={username}
              setUsername={setUsername}
              password={password}
              setPassword={setPassword}
            />
            <RegisterPageFooter isFormValid={isFormValid} handleRegister={handleRegister}/>
        </AuthBox>
    );
}

export default RegisterPage;