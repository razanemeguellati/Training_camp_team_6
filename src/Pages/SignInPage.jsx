import { useState } from "react";

const SignInPage = () => { 
    const[email , setEmail] = useState('') ; 
    const[password, setPassword] = useState('') ; 

    const[isPending , setIsPending]= useState(false)  ; 
 
 const handleSubmit =(e) =>
 {
    e.preventDefault() ; 
    const user = {email , password } ; 
     setIsPending(true) ; 
     // if the function fires and fetch starts , we will wait ...
    fetch('http://localhost:8000/users' , 
    {
         method: 'POST' , 
         headers: {"Content-Type" : "application/json"} , 
         body: JSON.stringify(user)
    } 
     ) 
     .then((data)=>
     { 
         console.log('new user added') ;
         setIsPending(false) ; 
         //
         const token = data.token
         localStorage.setItem("token",token)
         //redirect to page li rani haba nbethelha 
     }
     ) 
 
 }
    return ( 
         <div className="createform p-[30px] ">
              <h1 className=" text-akhdhar m-[10px] text-[30px] font-bold"> Sign In  </h1>
      
             <form onSubmit={handleSubmit}>
 
                 <label > Email : </label>
                 <input 
                  type="text"
                  required 
                  value={email}
                  className="bg-lightgreen"
                  onChange ={(e)=> setEmail(e.target.value)}  
                  />

                 <label > Password : </label>
                 <input 
                  type="text"
                  required 
                  value={password}
                  className="bg-lightgreen"
                  onChange ={(e)=> setPassword(e.target.value)}  
                  />
           
                {!isPending ? <button className="cursor-pointer bg-akhdhar text-white p-[8px]  border-0 rounded-[8px]"> Sign In </button>:<button disabled> logging in   ... </button>}
              </form>      
                 
         </div>
      );
 }

export default SignInPage;
