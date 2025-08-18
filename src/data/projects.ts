import { GitHubLogoIcon } from "@radix-ui/react-icons";
import type { ElementType } from "react";

export type LinkType = {
	name: string;
	url: string;
	icon: ElementType;
};

export type ProjectType = {
	name: string;
	stack: string[];
	description: string[];
	links: LinkType[];
};

export const PROJECTS: ProjectType[] = [
	{
		name: "Memory Sharing MCP Server",
		stack: ["Python", "FastMCP", "Redis", "Next.js"],
		description: [
			"Awarded 3rd place in the MCP & Agents Hackathon, recognized for innovative cross-agent memory sharing",
			"Architected and implemented an MCP server, enabling seamless context sharing across multiple AI clients",
			"Integrated Redis vector store for storage; supporting both short-term and long-term knowledge retention",
			"Built web dashboard for managing API keys and memory records; enhancing user control and observability",
		],
		links: [
			{
				name: "Github",
				url: "https://www.github.com/khandrew1/vault-mcp",
				icon: GitHubLogoIcon,
			},
		],
	},
	{
		name: "AI Playlist Art Generator",
		stack: ["Python", "FastAPI", "SciKit-learn", "Dall-E", "ChatGPT"],
		description: [
			"Developed a backend app that analyzes Spotify playlists and generates custom AI art based on its mood",
			"Built and trained custom machine learning classification model using track metadata and genre embedding",
			"Engineered modular ML pipeline for preprocessing, feature extraction, training, evaluation, deployment",
			"Integrated Spotify Web API for user authentication and dynamically retrieved playlist metadata to power analysis",
		],
		links: [
			{
				name: "Github",
				url: "https://www.github.com/khandrew1/mood-ify",
				icon: GitHubLogoIcon,
			},
		],
	},
	{
		name: "AI Leetcode Tutor",
		stack: ["React", "Chrome API", "Gemini AI API"],
		description: [
			"A Google Chrome Extension that gives AI-powered contextual hints directly onto Leetcode problems",
			"Implemented content scripts to scrape the problem statement and code to query to deliver personalized guidance",
			"Integrated Google Gemini via secure background workers, while keeping all user code on-device for privacy",
		],
		links: [
			{
				name: "Github",
				url: "https://www.github.com/khandrew1/leetcode-tutor",
				icon: GitHubLogoIcon,
			},
		],
	},
	{
		name: "AI Song Recommender",
		stack: ["Next.js", "Tailwind CSS", "OpenAI", "Spotify API"],
		description: [
			"A website that helps streamline hackathon management by providing a dashboard for users and admins",
			"Optimized backend API routes with serverless functions to reliably scale and support 500+ concurrent users",
			"Currently in use by 5+ hackathon organizations on campus to host, maintain, and promote their events",
			"Implemented virtualized infinite scrolling on all dashboard tables reducing server load and queries by 30%",
		],
		links: [
			{
				name: "Github",
				url: "https://www.github.com/acm-ucr/aurora",
				icon: GitHubLogoIcon,
			},
		],
	},
];
