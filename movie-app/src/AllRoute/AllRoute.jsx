
import {Routes,Route} from "react-router-dom"
import Home from "../Components/Home";
import SinglePage from "../Components/SinglePage";
import Favorites from "../Components/Favorites";
import Signup from"../Components/Signup"
import Signin from "../Components/Signin";

const AllRoute=()=>{

    return(

        <>

           <Routes>
                <Route path="/" element={<Signup/>}/>
                <Route path="/signin" element={<Signin/>}/>
                 <Route path="/home" element={<Home/>}/>
                 <Route path="/movie/:Id" element={<SinglePage/>}/>
                 <Route path="/favorites" element={<Favorites/>} />
               
           </Routes>
        
        </>
    )
}

export default AllRoute;