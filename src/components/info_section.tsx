"use client";

import { useEffect, useState } from "react";

import Button from "./button";

interface InfoSectionProps {
	sections: React.ReactNode;
	name: string
}

const InfoSection = ({ sections, name }: InfoSectionProps) => {
	const [showSections, setShowSections] = useState(false);

	return (
		<div className="lg:w-3/4 w-full flex flex-col items-center bg-white">
			{!showSections && (
				<div className="self-center p-2 animate-fadeInSlow">
					<Button title={name} callback={() => setShowSections(true)} />
				</div>
			)}
			{showSections && (
				<div className="animate-fadeInTop w-full">
					<h1 className="text-lg text-primaryDark font-extrabold">{name}</h1>
					<hr className="border-2 border-primaryDark" />
					<div className="w-full flex lg:flex-wrap justify-between lg:flex-row flex-col">
						{sections}
					</div>
				</div>
			)}
		</div>
	);
};

export default InfoSection;
