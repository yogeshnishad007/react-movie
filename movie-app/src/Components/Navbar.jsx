import { Link } from "react-router-dom";
import "../Css/navbar.css"

const Navbar=()=>{

    return(

        <>
             <div className="navbar-container">
                   
                    <Link to="/" className="link">
                         <h2>Signup</h2>
                    </Link>

                    <Link to="/signin"  className="link"> 
                         <h2>Signin</h2>
                    </Link>

                    <Link to="/home"  className="link">
                         <h2>Home</h2>
                    </Link>

                    <Link to="/favorites"  className="link">
                         <h2>Favorites</h2>
                    </Link>
             </div>
        </>
    )
}

export default Navbar;