import H2 from "@/Components/Headings/H2";
import Section from "@/Components/Section";
import ShowOfferTile from "@/Components/Tiles/ShowOfferTile";

const Show = () => {
    const offer = {
        name: "Franta",
        email: "jehomail@mail.to",
        text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Etiam dui sem, fermentum vitae, sagittis id, malesuada in, quam. Integer tempor. Aliquam erat volutpat. Curabitur sagittis hendrerit ante. Maecenas lorem. Etiam dictum tincidunt diam. Fusce tellus odio, dapibus id fermentum quis, suscipit id erat.",
    };
    return (
        <Section>
            <div className="w-full flex px-4 sm:px-8 md:px-8 lg:px-16">
                <H2>Nabídky</H2>
            </div>
            <div className="mt-4 w-full px-4 flex flex-col space-y-4 sm:mt-8 sm:px-8 md:px-8 lg:px-16">
                <ShowOfferTile
                    name={offer.name}
                    email={offer.email}
                    text={offer.text}
                />
                <ShowOfferTile
                    name={offer.name}
                    email={offer.email}
                    text={offer.text}
                />
                <ShowOfferTile
                    name={offer.name}
                    email={offer.email}
                    text={offer.text}
                />
                <ShowOfferTile
                    name={offer.name}
                    email={offer.email}
                    text={offer.text}
                />
                <ShowOfferTile
                    name={offer.name}
                    email={offer.email}
                    text={offer.text}
                />
                <ShowOfferTile
                    name={offer.name}
                    email={offer.email}
                    text={offer.text}
                />
            </div>
        </Section>
    );
};

export default Show;
