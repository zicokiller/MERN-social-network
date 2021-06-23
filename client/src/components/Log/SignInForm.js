import React, { useState } from "react";
import axios from "axios";

function SignInForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    const emailError = document.querySelector(".email.error");
    const passwordError = document.querySelector(".password.error");
    let res;
    try {
      res = await axios({
        method: "post",
        url: `${process.env.REACT_APP_API_URL}api/user/login`,
        data: {
          email,
          password,
        },
      });
    } catch (err) {
      emailError.innerHTML = err.response.data.errors.email;
      passwordError.innerHTML = err.response.data.errors.password;
      return console.log(err);
    }
    localStorage.setItem("token", res.data.token);
    window.location = "/";
  };

  return (
    <form action="" onSubmit={handleLogin} id="sign-in-form">
      <label htmlFor="email">Email</label>
      <br />
      <input
        type="text"
        name="email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />
      <div className="email error"></div>
      <br />
      <label htmlFor="password">Mot de passe</label>
      <br />
      <input
        type="password"
        name="password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />
      <div className="password error"></div>
      <br />
      <input type="submit" value="Se connecter" />
    </form>
  );
}

export default SignInForm;
