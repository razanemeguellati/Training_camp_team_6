import { useEffect , useState } from "react";

const useFetch = (url) => 
{
     const [cars , setCars] = useState(null); 
     const [ isPending , setisPending] = useState(true) ; 
     const [ error , seterror] = useState(null) ; 
   
     const useeffectfunction = () =>
     {
      const abortCont = new AbortController() ; 
        fetch(url , {signal : abortCont.signal}) 
       /* the fetching result will be in res */
         .then(res =>
           { if(!res.ok)
            {
                throw Error('could not fetch the cars from that ressource') ; 
            }
             return res.json() ;
          }) 
           /* the return result will be in data  */
         .then(cars=>{
            setCars(cars) ; 
            setisPending(false) ;
            seterror(null) ;  
            /* once we're here that means we're done loading */
         })

         .catch(err=>{
          if (err.message === 'AbortError')
          { console.log('fetch aborted ')

          }else
          { setisPending(false) ; 
            /** we dont want to see loading if there's an error : it's not pending its wrong  */
            seterror(err.message)
          }
           
         }) 
         /* the err we threw in the first then will be catched here*/
        
         return () => 
         {console.log('cleanup')  ;    
         abortCont.abort()}
         
    }
   

    useEffect(()=>useeffectfunction,[url]) 
    /* whenever the url change it will trigger the use effect to get the dat once again */
    return { cars , isPending , error}

}
 
export default useFetch;