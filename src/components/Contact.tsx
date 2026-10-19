import { identity } from "../data/content";
import { useSettings } from "../lib/settings";
import { CalendarIcon, GitHubIcon, LinkedInIcon, MailIcon } from "./icons";
import { SectionHead } from "./SectionHead";

export function Contact() {
	const { s } = useSettings();

	const channels = [
		{ k: s.contactEmail, v: identity.email, href: `mailto:${identity.email}`, Icon: MailIcon },
		{ k: s.contactCall, v: s.contactCallValue, href: identity.calendly, Icon: CalendarIcon },
		{ k: s.contactLinkedin, v: identity.linkedinHandle, href: identity.linkedin, Icon: LinkedInIcon },
		{ k: s.contactGithub, v: identity.githubHandle, href: identity.github, Icon: GitHubIcon },
	];

	return (
		<section className="col section" id="contato">
			<SectionHead n="04" title={s.contactTitle} lead={s.contactLead} />

			<div className="channels reveal">
				{channels.map(({ k, v, href, Icon }) => (
					<a
						key={k}
						href={href}
						target={href.startsWith("mailto:") ? undefined : "_blank"}
						rel="noopener noreferrer"
					>
						<span className="ico">
							<Icon />
						</span>
						<span className="txt">
							<span className="k">{k}</span>
							<span className="v">{v}</span>
						</span>
					</a>
				))}
			</div>
		</section>
	);
}
