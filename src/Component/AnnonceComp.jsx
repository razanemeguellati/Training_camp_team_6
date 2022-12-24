const AnnonceCompo = (props) => {
   const car = props.car
    return ( 
        <div className="annoncecompo">
              <h3> {car.name} </h3>
              <h2> {car.type} </h2> 
        
        </div>
     );
}
 
export default AnnonceCompo;