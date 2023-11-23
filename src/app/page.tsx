import Header from "@/components/header";
import Section from "@/components/section";

export default function Home() {

	return (
		<main className="bg-secondary">
			<div className="m-auto lg:w-1/2 md:w-3/4 w-full">
				<Header title="Made By Coffee" />
        <Section section_number={0}/>
        <Section section_number={1}/>
			</div>
		</main>
	);
}
