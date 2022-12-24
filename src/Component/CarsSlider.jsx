import useFetch from "./useFetch";
import CarsList from "./CarsList";

const CarsSlider = () => {
    const { cars, isPending, error } = useFetch('http://localhost:8001/cars');
    /* get data and call it blgs in this context */
    return (
        <div className="Datab">

            <h1>Slider of cars </h1>
            {error ? <div> there's an error : {error} </div> : <></>}
            {isPending ? <div> Loading ... </div> : <></>}
            {cars ? <CarsList cars={cars} ></CarsList> : <></>}



        </div>
    )

}

export default CarsSlider;