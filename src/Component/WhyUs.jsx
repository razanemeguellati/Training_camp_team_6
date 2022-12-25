import SimpleAnnonce from "./SimpleAnnonce";
import Title from "./Title";

const WhyUs = () => {
    const PrqNousPics =
        [
            {
                description: "+1256 offers ",
                picture: "",
            },
            {
                description: "+2500 users",
                picture: "",
            },
            {
                description: "58 wilayas",
                picture: "",
            },
            {
                description: "+568 models",
                picture: "",
            }
        ]
    return (

        <div className="p-[10px]">
            <Title title={"Qui Sommes Nous ? "}></Title>
            <div className="flex flex-row mt-[50px]">
                {PrqNousPics.map((pic) =>
                (<div className=" flex flex-row w-1/5 mx-auto" >
                    <SimpleAnnonce image={pic.picture} desc={pic.description}></SimpleAnnonce>
                </div>
                ))}
            </div>
        </div>
    );
}

export default WhyUs;