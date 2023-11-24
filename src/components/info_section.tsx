"use client";

import { useEffect, useState } from "react";

import Button from "./button";

interface InfoSectionProps {
	sections: any;
}

const InfoSection = ({ sections }: InfoSectionProps) => {
	const [showSections, setShowSections] = useState(false);

	useEffect(() => {});

	return (
		<div className="w-full flex flex-col items-center">
			{!showSections && (
				<div className="self-center p-2 animate-fadeInSlow">
					<Button title="Learn more" callback={() => setShowSections(true)} />
				</div>
			)}
			{showSections && (
				<div className="animate-fadeInTop lg:w-3/4 flex lg:flex-row flex-col">
					{sections}
				</div>
			)}
		</div>
	);
};

export default InfoSection;
