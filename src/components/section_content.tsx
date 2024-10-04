import Image from "next/image";
import InternalLink from "./internal_link";

interface SectionContentProps {
	title: string;
	content: string;
	img_src: string;
	link: string;
}

const SectionContent = ({
	title,
	content,
	img_src,
	link,
}: SectionContentProps) => {
	return (
		<div className="lg:w-1/2 p-2">
			<div className="flex items-baseline space-x-2">
				<h1 className="text-md lg:text-lg text-primaryDark font-main">
					{title}
				</h1>
				{link && <InternalLink label={link} href={link} external={true} />}
			</div>
			<div className="flex my-2">
				{img_src && (
					<Image
						className="rounded-md"
						src={img_src}
						alt={title}
						height={0}
						width={0}
						sizes="400px"
						style={{ width: "25%", height: "25%" }}
					/>
				)}
				<div className="flex w-full lg:flex-row flex-col mx-2 p-2 rounded-md md:space-x-2 bg-secondary">
					<p className="text-black">{content}</p>
				</div>
			</div>
		</div>
	);
};

export default SectionContent;
