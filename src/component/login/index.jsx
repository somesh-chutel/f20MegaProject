import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import './index.css'


//turnery Operator--->true ? execute : not excute

const Login = () => {

  const navigate = useNavigate();

  const token = Cookies.get("jwtToken");

    const [allValues,setValue] = useState({
      username:"",
      password:"",
      showErrorMsg:false,
      errorMsg:""
    });

    const onSubmitUserDetails = async (event)=>{
        event.preventDefault();

        const url = "https://apis.ccbp.in/login";

        const userDetails = {
          username: allValues.username,
          password: allValues.password
        }

        const options = {
          method: 'POST',
          body: JSON.stringify(userDetails)
        }

        const response = await fetch(url,options);
        const fetchData = await response.json();

        console.log(fetchData.error_msg);

        if(response.ok===true){

          setValue({...allValues,showErrorMsg:false,errorMsg:""});

          Cookies.set("jwtToken",fetchData.jwt_token);

          navigate("/");



        }
        else{
          setValue({...allValues,showErrorMsg:true,errorMsg:fetchData.error_msg});
        }

        
    }

    const onChangeUserName = (event)=>{

      setValue({...allValues,username:event.target.value}) //{u:"",p:""}-->by using...---->u:"",p:""

    }


    const onChangePassword =(event)=>{

      setValue({...allValues,password:event.target.value})
    }

  useEffect(()=>{
    if(token!==undefined){
      navigate("/");
    }
  })
  return (
  <div className="login-cont">
      <form className="form-cont" onSubmit={onSubmitUserDetails}>
        <div className="img-cont">
          <img
            className="web-logo"
            src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
            alt="website logo"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Username
          </label>
          <input
            value={allValues.username}
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={onChangeUserName}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            onChange={onChangePassword}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
        <br /><br />
        {allValues.showErrorMsg ? (<p className='text-danger'>{allValues.errorMsg}</p>):null}
      </form>
    </div>
  );
};

export default Login;
