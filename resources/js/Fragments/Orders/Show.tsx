import H2 from "@/Components/Headings/H2";
import Section from "@/Components/Section";
import ShowOfferTile from "@/Components/Tiles/ShowOfferTile";
import { Offer } from "@/types/Offer";
import { usePage } from "@inertiajs/react";

const Show = () => {
    const { offers } = usePage<{ offers: any }>().props;

    return (
        <Section size="thin">
            <div className="w-full flex px-4 sm:px-8 md:px-8 lg:px-16">
                <H2>Nabídky</H2>
            </div>
            <div className="mt-4 w-full px-4 flex flex-col space-y-4 sm:mt-8 sm:px-8 md:px-8 lg:px-16">
                {offers.data.map((offer: Offer) => (
                    <ShowOfferTile
                        name={offer.name}
                        email={offer.email}
                        text={offer.text}
                    />
                ))}
            </div>
        </Section>
    );
};

export default Show;
