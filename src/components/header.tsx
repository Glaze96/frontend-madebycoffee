import InternalLink from "./internal_link";
import Image from "next/image";

interface HeaderProps {
	title: string;
	logo: string;
}

const Header = ({ title, logo }: HeaderProps) => {
	return (
		<div className="flex flex-col items-center w-full bg-primary">
			<div className="flex flex-row m-2 space-x-1">
				<Image
					src={logo}
					width={64}
					height={64}
					alt={"made by coffee square logo left"}
				/>
				<h1 className="lg:text-xl text-lg text-primaryDark font-header underline underline-offset-4 text-center">{title}</h1>
				<Image
					src={logo}
					width={64}
					height={64}
					alt={"made by coffee square logo right"}
				/>
			</div>
			<hr className="lg:w-1/2 w-3/4" />
			<div className="flex flex-col items-center space-x-2 m-1">
        <h1>Bringing you pipin&#39; hot ideas since 2023.</h1>
				<InternalLink
					label="Created by Glaze"
					href="https://iamglaze.me/"
					external={true}
				/>
			</div>
		</div>
	);
};

export default Header;
