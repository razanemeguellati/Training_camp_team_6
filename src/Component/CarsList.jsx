import AnnonceComp from "./AnnonceComp";
const CarsList = ({ cars }) => {

    return (
        <div className="bg-ahmar w-[800px] h-[800px]">
            <div> this is {cars[0].id}</div>
            {cars.map((car) =>
            (<div className="" key={car.id}>

                <AnnonceComp car={car}></AnnonceComp>
            </div>
            ))}
        </div>
    );
}

export default CarsList;