import React from "react";
import InputWithLabel from "../../components/InputWithLabels";

const LoginPageInput = ({ mail, setMail, password, setPassword }) => {
    return (
        <>
          <InputWithLabel
            value={mail}
            setValue={setMail}
            label='E-mail'
            type="text"
            placeholder="Enter e-mail address"
          >
          </InputWithLabel>
          <InputWithLabel
            value={password}
            setValue={setPassword}
            label='Password'
            type="password"
            placeholder="Enter password"
          >
          </InputWithLabel>
        </>
    )
}

export default LoginPageInput;