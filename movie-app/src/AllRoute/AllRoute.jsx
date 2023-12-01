
import {Routes,Route} from "react-router-dom"
import Home from "../Components/Home";
import SinglePage from "../Components/SinglePage";

const AllRoute=()=>{

    return(

        <>

           <Routes>
                 
                 <Route path="/" element={<Home/>}/>
                 <Route path="/movie/:Id" element={<SinglePage/>}/>
               
           </Routes>
        
        </>
    )
}

export default AllRoute;