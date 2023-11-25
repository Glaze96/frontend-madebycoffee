import Image from "next/image";

interface SectionContentProps {
	title: string;
	content: string;
	img_src: string;
}

const SectionContent = ({ title, content, img_src }: SectionContentProps) => {
	return (
		<div className="lg:w-1/2 p-5">
			<h1 className="text-lg text-primaryDark text-bold font-main font-bold">
				{title}
			</h1>
			<hr />
			<div className="flex lg:flex-row flex-col p-2 space-x-2">
				{img_src && (
					<Image
						src={img_src}
						alt={title}
						height={0}
						width={0}
            sizes="400px"
						style={{ width: "50%", height: "50%" }}
					/>
				)}
				<p className="text-black">{content}</p>
			</div>
		</div>
	);
};

export default SectionContent;
