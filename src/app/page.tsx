import Header from "@/components/header";
import InfoSection from "@/components/info_section";

import { GetSectionContent } from "@/components/get_section_content";

export default function Home() {

	return (
		<main className="bg-secondary">
			<div className="m-auto lg:flex lg:flex-col lg:w-4/5 sm:w-full lg:items-center">
				<Header title="Made By Coffee" logo="/Square Logo.svg" />
        <InfoSection sections={GetSectionContent("/src/assets/sections.json")} />
			</div>
		</main>
	);
}
