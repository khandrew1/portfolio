import EducationCard from "@/components/EducationCard";

const Page = () => {
	const education = {
		name: "University of California, Riverside",
		graduateDate: "June 2025",
		location: "Riverside, CA",
		gpa: "3.7",
		courseWork: [
			"Computer Science I & II",
			"Data Structures and Algorithms",
			"Software Construction",
			"Machine Organization & Assembly Programming",
			"Formal Language and Automata",
			"Discrete Structures",
			"Machine Learning",
			"Edge Computing",
			"Computer Security",
		],
		clubs: ["ACM@UCR", "DesignVerse UCR"],
	};

	return (
		<div className="md:w-3/5">
			<EducationCard
				name={education.name}
				graduateDate={education.graduateDate}
				location={education.location}
				gpa={education.gpa}
				courseWork={education.courseWork}
				clubs={education.clubs}
			/>
		</div>
	);
};

export default Page;
