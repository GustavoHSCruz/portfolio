import { identity } from "../data/content";
import { useSettings } from "../lib/settings";
import { ArrowRight, GitHubIcon, LinkedInIcon } from "./icons";

export function Hero() {
	const { s } = useSettings();

	return (
		<section className="col hero" id="top">
			<img
				className="hero-photo reveal"
				src={identity.avatar}
				alt={identity.name}
				width={68}
				height={68}
			/>
			<h1 className="hero-title reveal">
				{s.heroPre}
				<span className="accent">{s.heroAccent}</span>
				{s.heroPost}
			</h1>
			<p className="hero-blurb reveal">{s.heroBlurb}</p>

			<div className="hero-actions reveal">
				<a className="btn is-primary" href="#contato">
					{s.contactTitle}
					<ArrowRight />
				</a>
				<a className="btn" href={identity.linkedin} target="_blank" rel="noopener noreferrer">
					<LinkedInIcon />
					{s.contactLinkedin}
				</a>
				<a className="btn" href={identity.github} target="_blank" rel="noopener noreferrer">
					<GitHubIcon />
					{s.contactGithub}
				</a>
			</div>
		</section>
	);
}
