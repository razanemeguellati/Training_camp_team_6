import { useParams } from "react-router-dom";

const SingleCar = () => {
    const { id } = useParams();
    console.log(id)
    return (
        <div className="singleannonce">
            <h1>car that has the id : {id} </h1>
            <h2> here we're using a slider </h2>
        </div>
    );
}

export default SingleCar;