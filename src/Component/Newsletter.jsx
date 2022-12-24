import { useState } from "react";

const Newsletter = () => {
    const [ email , setEmail] = useState() ; 
    return ( 
        <div className="flex ">
            <div className="border-2 border-asfar rounded-lg p-12 ">
                <h1 className="text-akhdhar m-[10px] text-[30px] font-bold"> Get your monthly newsletter</h1>
                    <p> Subscribe to our  newsletter and receive a monthly mail containing the latest statistics from the Algerian market of cars.</p>
                    
                 <input 
                  type="text"
                  required 
                  value={email}
                  className="border-asfar border-2 rounded-lg"
                  onChange ={(e)=> setEmail(e.target.value)}  
                  />
            </div>
        </div>
     );
}
 
export default Newsletter;