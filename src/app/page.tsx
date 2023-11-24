import Header from "@/components/header";
import Section from "@/components/section";

export default function Home() {
	return (
		<>
			<main className="bg-secondary">
				<div className="m-auto lg:w-4/5 sm:w-full">
					<Header title="Made By Coffee" logo="/Square Logo.svg" />
					<Section section_number={0} />
					<Section section_number={1} />
				</div>
			</main>
		</>
	);
}
