import React from "react";
import CustomPrimaryButton from "../../components/CustomPrimaryButton";
import RedirectInfo from "../../components/RedirectInfo";
import { useNavigate } from "react-router-dom";
import { Tooltip } from "@mui/material";

const getFormNotValidMessage = () => {
    return "Enter correct email and password should contain between 6 and 12 characters";
}

const getFormValidMessage = () => {
    return "Press to register";
}

const RegisterPageFooter = ({ handleRegister , isFormValid }) => {
    const navigate = useNavigate();
    const handlePushToLoginPage = () => {
        navigate('/login');
    }

    return (
        <>
          <Tooltip 
            title = {isFormValid ? getFormValidMessage() : getFormNotValidMessage() }
          >
            <div>
                <CustomPrimaryButton
                   label="register"
                   additionalStyles={{ marginTop : '30px' }}
                   disabled={!isFormValid}
                   onClick={handleRegister}
                >
                </CustomPrimaryButton>
            </div>
          </Tooltip>
            <RedirectInfo
              text="Already registered."
              redirectText="Click to login"
              additionalStyles={{ marginTop: '50px'}}
              redirectHandler={handlePushToLoginPage}
            >

            </RedirectInfo>
        </>
    )
}

export default RegisterPageFooter;