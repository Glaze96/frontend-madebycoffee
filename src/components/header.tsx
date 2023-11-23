import InternalLink from "./internal_link";

interface HeaderProps {
	title: String;
}

const Header = ({ title }: HeaderProps) => {
	return (
		<div className="flex flex-col items-center w-full bg-primary">
			<h1 className="lg:text-xl text-lg text-black m-2">{title}</h1>
      <hr className="w-1/2"/>
			<div className="flex items-center space-x-2 m-1">
				<InternalLink label="CREATOR" href="https://iamglaze.me/" external={true} />
			</div>
		</div>
	);
};

export default Header;
