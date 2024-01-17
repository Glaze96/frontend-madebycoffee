import InternalLink from "./internal_link";
import Image from "next/image";

interface HeaderProps {
	title: string;
	logo: string;
}

const Header = ({ title, logo }: HeaderProps) => {
	return (
		<div className="flex flex-col items-center w-full bg-white">
			<div className="flex flex-col items-center space-x-2 m-1">
				<span className="animate-type text-md overflow-x-hidden whitespace-nowrap text-primary">
					A place where ideas are...
				</span>
			</div>
			<div className="flex flex-row m-2 space-x-1">
				<Image
					src={logo}
					width={512}
					height={64}
					alt={"made by coffee rect logo right"}
					className="animate-fadeInSlow"
				/>
			</div>
				<div className="animate-fadeInSlow text-primary">

				</div>
		</div>
	);
};

export default Header;
