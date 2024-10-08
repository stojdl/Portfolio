import H2 from "@/Components/Headings/H2";
import Section from "@/Components/Section";
import ShowKeyTile from "@/Components/Tiles/ShowKeyTile";
import { ShowKeyTileProps } from "@/types/ShowKeyTile";

const Show = () => {
    const key: ShowKeyTileProps = {
        keyFor: "Sunizer",
        value: "EFJVDL",
        valid: true,
        used: false,
    };

    return (
        <Section size="thin">
            <div className="w-full flex px-4 sm:px-8 md:px-8 lg:px-16">
                <H2>Klíče</H2>
            </div>
            <div className="mt-4 w-full px-4 flex flex-col space-y-4 sm:mt-8 sm:px-8 md:px-8 lg:px-16">
                <ShowKeyTile
                    keyFor={key.keyFor}
                    value={key.value}
                    valid={key.valid}
                    used={key.used}
                />
                <ShowKeyTile
                    keyFor={key.keyFor}
                    value={key.value}
                    valid={key.valid}
                    used={key.used}
                />
                <ShowKeyTile
                    keyFor={key.keyFor}
                    value={key.value}
                    valid={key.valid}
                    used={key.used}
                />
            </div>
        </Section>
    );
};

export default Show;
