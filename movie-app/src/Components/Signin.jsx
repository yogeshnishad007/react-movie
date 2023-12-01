import { useState } from "react";
import { Link} from "react-router-dom";


const Signin = () => {
 
  const [signin, setSignin] = useState({
    email: "",
    password: ""
  });
 
  const handleSignin = (e) => {
    setSignin({
      ...signin,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
   
    const users = JSON.parse(localStorage.getItem('users')) || [];

    
    const matchedUser = users.find(user => user.email === signin.email && user.password === signin.password);

    if (matchedUser) {
      alert('Signin successful!');
      
    } else {
      alert('Invalid email or password. Please try again.');
    }


    setSignin({
      email: "",
      password: ""
    });
  };

  return (
    <>
      <div className="top-container">
        <div className="heading">
          <h1>Signin</h1>
        </div>

        <div className="form-container">
          <form onSubmit={handleSubmit}>
            <input className="input" placeholder="Email" type="text" name="email" value={signin.email} onChange={handleSignin} required />
            <input className="input" placeholder="Password" type="password" name="password" value={signin.password} onChange={handleSignin} required/>

            <div className="submit-btn">
             <Link className="submit-btn" to="/home">
             <button type="submit">Signin</button>
             </Link>
            </div>
          </form>

          <div className="signup-link">
            <p>Don't have an account? <Link to="/">Signup</Link></p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signin;
