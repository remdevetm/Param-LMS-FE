"use client";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Api } from "../../lib/restapi/endpoints";
import {IUserRegisterModel } from "../../interfaces/user";
import Cookies from "universal-cookie";
import { error } from "console";
const cookies = new Cookies();
const axios = require("axios").default;

export default function Login() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [ConfirmPassword, setConfirmPassword] = useState<string>("");
  const [lname, setLname] = useState<string>("");
  const [fname, setFname] = useState<string>("");

  const[NameError, setNameError] = useState<boolean>(false)
  const[PasswordError, setPasswordError] = useState<boolean>(false)
  const[LastNameError, setLastNameError] = useState<boolean>(false)
  const[ConfirmPassError, setConfirmPassError] = useState<boolean>(false)
  const[EmailError, setEmailError] = useState<boolean>(false)
  const[disable , setDisable] = useState<boolean>(false)

  
  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const date = new Date();

  const onChangeEmail = (e: any) => {
    setEmail(e.target.value);
  };

  const onChangePassword = (e: any) => {
    setPassword(e.target.value);
  };


  const Register = (event: any) => {
    setDisable(true)
     
    setNameError(false)
    setLastNameError(false)
    setEmailError(false)
    setConfirmPassError(false)
    setPasswordError(false)
 
  

    if(lname === "" || fname === "" || password === "" || ConfirmPassword === "" || email === "" ){
      if(fname ===""){setNameError(true)}
      if(lname === ""){ setLastNameError(true)}
      if(password === ""){setPasswordError(true)}
      if(ConfirmPassword === ""){setConfirmPassError(true)}
      if(email === ""){ setEmailError(true)}

    }else if(password == ConfirmPassword){
      let _id = toast.loading("Registering user..", {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
         
      if (!emailRegex.test(email)) {
        toast.update(_id, {
          render: "Invalid email address",
          type: "error",
          isLoading: false,
        });
        setTimeout(() => {
          setDisable(false)
          toast.dismiss(_id);
        }, 2000);
      }else if(!passwordRegex.test(password)){
       toast.update(_id, {
         render:
           "Password must contain at least 8 characters, including uppercase and lowercase letters, numbers, and special characters",
         type: "error",
         isLoading: false,
       });
       setTimeout(() => {
        setDisable(false)
        toast.dismiss(_id);
      }, 2000);
      }else{
     
    
        const payload = {
          id: "",
          FirstName: fname,
          LastName: lname,
          Email: email,
          Password: password,
          Image: "",
          CreatedOn: date,
          CreatedBy: "",
          ChangedBy: "",
          ChangedOn: date,
          Otp: "",
         // Status: "new",
          Role: "",
          LoginType: 0,
        } as IUserRegisterModel;
    
        axios
          .post(
            "https://7fb0-154-117-172-210.ngrok-free.app/api/Users/AddUSer",
            payload
          )
          .then((response: any) => {
            console.log("response", response);
    
            toast.update(_id, {
              render: "Successfully registered",
              type: "success",
              isLoading: false,
            });
    
            // Set cookies here after successful login
            cookies.set("param-lms-user", response.data, { path: "/" });
    
            // Optionally, you can redirect the user to another page
            // window.location.href = '/dashboard'; // Replace 'dashboard' with the desired route
          })
          .catch((error: any) => {
            
            toast.update(_id, {
              render: "Cannot register user with the supplied information",
              type: "error",
              isLoading: false,
            });

            setTimeout(() => {
              setDisable(false)
              toast.dismiss(_id);
            }, 2000);

            console.log(error);
          });
    
      }
    }else{
      let _id = toast.loading("Registering user..", {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
         
      
        setDisable(true)
      
        toast.update(_id, {
          render: "Passwords do not match",
          type: "error",
          isLoading: false,
        });
        event?.preventDefault();
        setTimeout(() => {
          setDisable(false)
          toast.dismiss(_id);
        }, 2000);
      }
      event?.preventDefault();

      setTimeout(() => {
        setDisable(false)
       
      }, 2000);
  }






  return (
    <>
      <ToastContainer />
      <div className=" pt-32pt pt-sm-64pt pb-32pt">
        <div className="container page__container">
          <form className="col-md-5 p-0 mx-auto">
            <div className="form-group">
              <label className="form-label" htmlFor="email">
                First Name: {NameError ? <span style ={{color : "red" , fontSize: "10px"}} >*required field</span> : null}
              </label>
              <input
                id="email"
                type="text"
                value={fname}
                onChange={(e) => setFname(e.target.value)}
                className="form-control"
                placeholder="Your First Name ..."
              />
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="email">
                Last Name: {LastNameError ? <span style ={{color : "red" , fontSize: "10px"}}>*required field</span> : null}
              </label>
              <input
                id="email"
                type="text"
                value={lname}
                onChange={(e) => setLname(e.target.value)}
                className="form-control"
                placeholder="Your Last Name ..."
              />
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="email">
                Email: {EmailError ? <span style ={{color : "red" , fontSize: "10px"}}>*required field</span> : null}
              </label>
              <input
                id="email"
                type="text"
                value={email}
                onChange={onChangeEmail}
                className="form-control"
                placeholder="Your email address ..."
              />
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="password">
                Password: {PasswordError ? <span style ={{color : "red" , fontSize: "10px"}}>*required field</span> : null}
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={onChangePassword}
                className="form-control"
                placeholder="Your password ..."
              />
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="password">
                Confirm Password: {ConfirmPassError ? <span style ={{color : "red" , fontSize: "10px"}}>*required field</span> : null}
              </label>
              <input
                id="password"
                type="password"
                value={ConfirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="form-control"
                placeholder="Confirm password ..."
              />
            </div>
            <div className="text-center">
              <button className="btn btn-accent" disabled={disable} onClick={Register}>
                signup
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="page-separator justify-content-center m-0">
        <div className="page-separator__text">or sign-up with</div>
        <div className="page-separator__bg-top " />
      </div>
      <div className="bg-body pt-32pt pb-32pt pb-md-64pt text-center">
        <div className="container page__container">
          <a href="fixed-index.html" className="btn btn-secondary btn-block-xs">
            Facebook
          </a>
          <a href="fixed-index.html" className="btn btn-secondary btn-block-xs">
            Twitter
          </a>
          <a href="fixed-index.html" className="btn btn-secondary btn-block-xs">
            Google+
          </a>
        </div>
      </div>
    </>
  );
}
