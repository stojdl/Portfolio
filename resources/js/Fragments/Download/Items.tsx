import Divider from "@/Components/Divider";
import H2 from "@/Components/Headings/H2";
import Section from "@/Components/Section";
import DownloadTile from "@/Components/Tiles/DownloadTile";
import React from "react";
import { IoIosLock } from "react-icons/io";
import { RiLockPasswordLine } from "react-icons/ri";

const Items = () => {
    return (
        <Section size="thin" className="space-y-8">
            <H2>Užitečné věci ke stažení</H2>{" "}
            <div className="w-full flex flex-col space-y-4 md:max-w-xl">
                <DownloadTile>Strukturovaný životopis (CV)</DownloadTile>
                <Divider
                    heading="Jednorázové heslo obdržíte po domluvě"
                    icon={<IoIosLock />}
                />
                <div className="flex flex-col space-y-2">
                    <DownloadTile locked>Sunizer (zdrojový kód)</DownloadTile>
                    <DownloadTile locked>
                        Internal Paradigma (zdrojový kód)
                    </DownloadTile>
                </div>
            </div>
        </Section>
    );
};

export default Items;
