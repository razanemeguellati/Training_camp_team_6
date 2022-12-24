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
         // ... untill we have the data 
         setIsPending(false) ; 
         //
         const token = data.token
         localStorage.setItem("token",token)
         //redirect to page li rani haba nbethelha 
     }
     ) 
 
 }
    return ( 
         <div className="signin ">
             <form onSubmit={handleSubmit}>
 
                 <label > Email : </label>
                 <input 
                  type="text"
                  required 
                  value={email}
                  //e.target returns an object but to return the text we use value 
                  onChange ={(e)=> setEmail(e.target.value)}  
                  />

                 <label > Password : </label>
                 <input 
                  type="text"
                  required 
                  value={password}
                  //e.target returns an object but to return the text we use value 
                  onChange ={(e)=> setPassword(e.target.value)}  
                  />
           
                {!isPending ? <button> Sign In </button>:<button disabled> logging in   ... </button>}
 
             </form>      
                 
         </div>
      );
 }

export default SignInPage;