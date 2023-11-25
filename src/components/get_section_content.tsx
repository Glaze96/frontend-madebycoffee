"use server";

import Image from "next/image";
import { promises as fs } from "fs";
import SectionContent from "./section_content";

export const GetSectionContent = async (file_name: string) => {
	const file = await fs.readFile(
		process.cwd() + "/src/assets/sections.json",
		"utf8"
	);

	const data = JSON.parse(file);

	function get_section(section_number: number) {
		const title = data.sections[section_number].title;
		const content = data.sections[section_number].content;
		const img_src = data.sections[section_number].image;
		return <SectionContent key={title} title={title} content={content} img_src={img_src} />;
	}
  
  const final = []
  for (let i = 0; i < data.sections.length; i++) {
    final.push(get_section(i))
  }

	return <>{final}</>;
};
