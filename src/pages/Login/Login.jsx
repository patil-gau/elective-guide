import React, { useState } from "react";
import "./Login.css";
import { Input, Button } from "native-base";
import axios from "axios";
import { Toaster } from "react-hot-toast";
import { successToast, errorToast } from "../../components/Toast";
import {useNavigate} from 'react-router-dom'


function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate()


  const handleSubmit = () => {
    console.log(`email & passsword:  ${email} & ${password}`);
    const data = {
      email: email,
      password: password,
    };
    axios
      .post("/users/login/", data, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        console.log(res.data);
        if (res.status === 200) {
          successToast('Log In Successful!')
          setPassword("");
          setEmail("");
          localStorage.setItem("student_id",res.data.student_id)
          localStorage.setItem("email",res.data.email)
          localStorage.setItem("access",res.data.access)
          localStorage.setItem("refresh",res.data.refresh)
          navigate('/dashboard')
        }
        else if (res.status === 401){
          errorToast('Invalid Email or Password')
        }
      })
      .catch((err) => {
        console.error(err);
        errorToast(err.response.data.detail);
      });
  };

  return (
    <>
      <Toaster />
      <div className="login-container">
        <form className="login-form" action="">
          <h1>Login</h1>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <Input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              isRequired
              value={email}
              style={{
                color: "#000",
              }}
              size="lg"
              w={{
                base: "100%",
                md: "100%",
                xl: "100%",
              }}
              placeholder="Email"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <Input
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              type="password"
              style={{
                color: "#000",
              }}
              w={{
                base: "100%",
                md: "100%",
                xl: "100%",
              }}
              size="lg"
              placeholder="Password"
            />
          </div>
          <Button
            style={{
              margin: "16px",
            }}
            colorScheme="info"
            onPress={() => handleSubmit()}
          >
            Login
          </Button>
        </form>
      </div>
    </>
  );
}

export default Login;
