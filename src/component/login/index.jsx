import './index.css'

const Login = () => {

    const onSubmitUserDetails = (event)=>{
        event.preventDefault();

        let url = "https://apis.ccbp.in/login";

        
    }
    
  return (
<div className="my-cont">
    <form onSubmit={onSubmitUserDetails} className="w-25 bg-light p-4 rounded">
      <div className="form-group">
        <label htmlFor="exampleInputEmail1">Username</label>
        <input
          type="email"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        />
        <small id="emailHelp" className="form-text text-muted">
          We'll never share your email with anyone else.
        </small>
      </div>
      <div className="form-group">
        <label htmlFor="exampleInputPassword1">Password</label>
        <input
          type="password"
          className="form-control"
          id="exampleInputPassword1"
        />
      </div>
      
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
    </div>
  );
};

export default Login;
