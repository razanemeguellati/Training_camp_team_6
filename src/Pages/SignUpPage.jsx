import { useState } from "react";
//import { useHistory } from 'react-router-dom';

const SignUpPage = () => {
    const[name , setName] = useState('') ; 
    const[email , setEmail] = useState('') ; 
    const[password, setPassword] = useState('') ; 
    const[wilaya, setWilaya] = useState('') ; 

    const[isPending , setIsPending]= useState(false)  ; 
  // const  historyrouter = useHistory ();
 
 const handleSubmit =(e) =>
 {
    e.preventDefault() ; 
    const user = { name , email , password  , wilaya} ; 
     setIsPending(true) ; 

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
         const token = data.token
         localStorage.setItem("token",token)
         //redirect to page li rani haba nbethelha 
      // historyrouter.push ('./');

     }
     ) 
 
 }
    return ( 
         <div className="p-[30px] bg-azra9 ">
             <form onSubmit={handleSubmit}>
 
                 <label> Full Name : </label>
                 <input 
                  type="text"
                  required 
                  value={name}
                  onChange ={(e)=> setName(e.target.value)}  
                  />
 
                 <label > Email : </label>
                 <input 
                  type="text"
                  required 
                  value={email}
                  onChange ={(e)=> setEmail(e.target.value)}  
                  />

                 <label > Password : </label>
                 <input 
                  type="text"
                  required 
                  value={password}
                  onChange ={(e)=> setPassword(e.target.value)}  
                  />
                 <label> Wilaya : </label>
                 <select
                     value={wilaya}
                     onChange ={(e)=> setWilaya(e.target.value)} >
                     <option value="Adrar">ines</option>
                     <option value="Chlef">chlef </option>
                     <option value="Laghouat">laghouat </option>
                     <option value="Oum El Bouaghi">oum el bouaghi </option>
                     <option value="Batna">batna
                     </option>
                 </select>
 
                    { !isPending ?  <button> sign up  </button>:<button disabled> loading  ... </button>}
                   
             </form>
                 
                 
         </div>
      );
 }

export default SignUpPage;
