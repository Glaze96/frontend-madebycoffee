import { promises as fs } from "fs";
import Image from "next/image";

interface SectionProps {
	section_number: number;
}

const Section = async ({ section_number }: SectionProps) => {
	const file = await fs.readFile(
		process.cwd() + "/src/assets/sections.json",
		"utf8"
	);

	const data = JSON.parse(file);

	const title = data.sections[section_number].title;
	const content = data.sections[section_number].content;
	const image_src = data.sections[section_number].image;

	return (
		<div className="w-full p-5">
			<h1 className="text-lg text-primaryDark">{title}</h1>
			<hr />
			<div className="flex flex-row p-2 space-x-4">
				{image_src && 
					<Image
						src={image_src}
						alt={title}
						height={0}
						width={0}
						sizes="100vw"
						style={{ width: "auto", height: "100%" }}
					/>
				}
				<p className="text-black">{content}</p>
			</div>
		</div>
	);
};

export default Section;
