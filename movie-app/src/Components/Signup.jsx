import { useState } from "react";
import { Link } from "react-router-dom";
import "../Css/signup.css"
const Signup = () => {
  const [signup, setSignup] = useState({
    username: "",
    email:"",
    password: ""
  });

  const handleSignup = (e) => {
    setSignup({
      ...signup,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('users', JSON.stringify([signup]));
   
    alert('Signup successful!');
    setSignup({
        username: "",
        email:"",
        password: ""
      })
  };

  return (
    <>
      <div className="top-container">
        <div className="heading">
           <h1>Signup</h1>
        </div>
       
       <div className="from-container">
             
          <form onSubmit={handleSubmit}>
          
             
                <input className="input" placeholder="Username" type="text" name="username" value={signup.username} onChange={handleSignup} />

                <input className="input" placeholder="Email" type="text" name="email" value={signup.email} onChange={handleSignup} />
           
         
                <input className="input" placeholder="Password" type="password" name="password" value={signup.password} onChange={handleSignup} />
            
             <div className="submit-btn">
              <Link to="/signin" className="submit-btn">
                   <button type="submit">Signup</button>
              </Link>
                  
             </div>
            

          </form>
       </div>
     
      </div>
    </>
  );
};

export default Signup;
