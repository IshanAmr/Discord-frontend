import React from "react";
import InputWithLabel from "../../components/InputWithLabels";

const RegisterPageInput = ({ mail, setMail, username, setUsername, password, setPassword }) => {
    return (
        <>
          <InputWithLabel
            value={mail}
            setValue={setMail}
            label="E-mail"
            type="text"
            placeholder="Enter email address"
          >
          </InputWithLabel>
          <InputWithLabel
            value={username}
            setValue={setUsername}
            label="Username"
            type="username"
            placeholder="Enter username"
          >
          </InputWithLabel>
          <InputWithLabel
            value={password}
            setValue={setPassword}
            label="Password"
            type="password"
            placeholder="Enter password"
          >
          </InputWithLabel>
        </>
    )
}

export default RegisterPageInput;