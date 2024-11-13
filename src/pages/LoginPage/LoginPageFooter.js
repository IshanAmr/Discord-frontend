import React from "react";
import CustomPrimaryButton from "../../components/CustomPrimaryButton";
import RedirectInfo from "../../components/RedirectInfo";
import { useNavigate } from "react-router-dom";
import { Tooltip } from "@mui/material";

const getFormNotValidMessage = () => {
    return "Enter correct email and password should contain between 6 and 12 characters";
}

const getFormValidMessage = () => {
    return "Press to log in!";
}

const LoginPageFooter = ({ handleLogin, isFormValid }) => {
    const navigate = useNavigate();
    const handlePushToRegisterPage = () => {
        navigate('/register');
    }

    return (
       <> 
       <Tooltip
         title={!isFormValid ? getFormNotValidMessage() : getFormValidMessage() }
       >
         <div>
          <CustomPrimaryButton
             label="Login"
             additionalStyles={{ marginTop : '30px' }}
             disabled={!isFormValid}
             onClick={handleLogin}
          >
          </CustomPrimaryButton>
          </div>
      </Tooltip>

          <RedirectInfo
             text="Need an account "
             redirectText="Create an account"
             additionalStyles={{ marginTop: '50px'}}
             redirectHandler={handlePushToRegisterPage}
          >

          </RedirectInfo>
       </>
    )
}

export default LoginPageFooter;