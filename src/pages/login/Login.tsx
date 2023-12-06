import TextField from "@mui/material/TextField";
import "./login.css"
import { Button } from "@mui/material";
import Header from "../../components/header/Header";
import { useEffect, useState, useCallback } from "react";
import { useLocation, useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState({ visible: false, message: "" });
  const [message, setMessage] = useState("")

  const formHandler = () => {
    if (name && phone && email) {
      localStorage.setItem('growmeInfo', JSON.stringify([name, phone, email]));
      navigate("/");
    } else {
      setError({ visible: true, message: "Each field is required" })
    }
  }
  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => {
        setError((err) => ({ ...err, visible: false }));
      }, 2000);

      return () => {
        clearTimeout(timer);
      }
    }
  }, [error])


  useEffect(() => {
    if (location.state) {
      setMessage(location.state.mess);
    }
    location.state = null;
    window.history.replaceState({}, document.title)

    return () => {
      location.state = null;
    }
  }, [location])

  return (
    <>
      <Header slug="undefined" />
      <div className="loginContainer">
        {message && <div>{message}</div>}
        <h1>Welcome! We bring people onboard.</h1>
        <form className="loginForm">
          <TextField id="outlined-basic" label="Name" variant="outlined" size="small"
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setName(event.target.value)
            }} />
          <TextField id="outlined-basic" label="Phone" variant="outlined" size="small"
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setPhone(event.target.value)
            }} />
          <TextField id="outlined-basic" label="Email" variant="outlined" size="small"
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setEmail(event.target.value)
            }} />
          <Button variant="contained" onClick={formHandler}>login</Button>
        </form>
      </div>
      {<div className={`reqFieldErr ${error.visible ? "visible" : ""} `}>{error.message}</div>}
    </>
  )
}

export default Login