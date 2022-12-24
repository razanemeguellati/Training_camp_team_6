import { useState } from "react";
//import { useHistory } from 'react-router-dom';

const SignUpPage = () => {
    const[firstname , setFName] = useState('') ; 
    const[lastname , setLName] = useState('') ; 
    const[email , setEmail] = useState('') ; 
    const[password, setPassword] = useState('') ; 
    const[wilaya, setWilaya] = useState('') ; 

    const[isPending , setIsPending]= useState(false)  ; 
  // const  historyrouter = useHistory ();
 
 const handleSubmit =(e) =>
 {
    e.preventDefault() ; 
    const user = { firstname , lastname  , email , password  , wilaya} ; 
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
         <div className="createform p-[30px] bg-azra9 ">
            <h1 className=" text-akhdhar m-[10px] text-[30px] font-bold"> Create an account </h1>
      
             <form onSubmit={handleSubmit}>
 
                <div className="flex flex-row gap-2">
                       <div>
                            <label> First Name : </label>
                                <input 
                                type="text"
                                required 
                                value={firstname}
                                onChange ={(e)=> setFName(e.target.value)}  
                                />
                       </div>

                       <div> 
                        <label> Last  Name : </label>
                        <input 
                        type="text"
                        required 
                        value={lastname}
                        onChange ={(e)=> setLName(e.target.value)}  
                        />
                        </div>
                </div>
                
 
                 <label > Email : </label>
                 <input 
                  type="text"
                  required 
                  value={email}
                  onChange ={(e)=> setEmail(e.target.value)}  
                  />

                 <label > Password : </label>
                 <input 
                  type="password"
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
