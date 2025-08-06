import ExperienceCard from "@/components/ExperienceCard";
import { EXPERIENCE } from "@/data/experience";

const Page = () => {
	return (
		<div className="flex flex-col w-3/5 gap-y-3">
			{EXPERIENCE.map(
				({ role, companyName, startDate, endDate, location, points }) => (
					<ExperienceCard
						key={companyName}
						role={role}
						companyName={companyName}
						startDate={startDate}
						endDate={endDate}
						location={location}
						points={points}
					/>
				),
			)}
		</div>
	);
};

export default Page;
