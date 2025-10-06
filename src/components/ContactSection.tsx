import {
	Download,
	Github,
	Linkedin,
	Mail,
	MapPin,
	MessageCircle,
	Phone,
} from "lucide-react";
import { useState } from "react";
import { useApp } from "../contexts/AppContext";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";

export function ContactSection() {
	const { t, language } = useApp();
	const [form, setForm] = useState({
		name: "",
		email: "",
		subject: "",
		message: "",
	});

	const [status, setStatus] = useState({
		loading: false,
		error: "",
		success: "",
	});

	async function handleSubmit(e: any) {
		e.preventDefault();
		setStatus({ loading: true, error: "", success: "" });

		// Basic validation
		if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
			setStatus({
				loading: false,
				error:
					language === "en"
						? "Please fill in the required fields."
						: "Por favor, preencha os campos obrigatórios.",
				success: "",
			});
			return;
		}

		// Simple email check
		const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if (!emailRe.test(form.email)) {
			setStatus({
				loading: false,
				error:
					language === "en"
						? "Please enter a valid email."
						: "Por favor, insira um email válido.",
				success: "",
			});
			return;
		}

		try {
			// Use Vite env var if provided, otherwise fallback to the requested domain
			let apiBase = import.meta.env.VITE_CONTACT_API_URL || "https://apigcruz.geg.dev.br";
			// Ensure the base includes a protocol
			if (!/^https?:\/\//i.test(apiBase)) {
				apiBase = `https://${apiBase}`;
			}
			const res = await fetch(`${apiBase}/contact`, {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(form),
			});

			if (!res.ok) {
				const text = await res.text();
				throw new Error(text || "Request failed");
			}

			setStatus({
				loading: false,
				error: "",
				success:
					language === "en"
						? "Message sent — I will reply soon."
						: "Mensagem enviada — responderei em breve.",
			});
			setForm({ name: "", email: "", subject: "", message: "" });
		} catch (err: any) {
			setStatus({
				loading: false,
				error:
					err && err.message
						? err.message
						: language === "en"
						? "An error occurred"
						: "Ocorreu um erro",
				success: "",
			});
		}
	}
	const contactInfo = [
		{
			icon: Mail,
			label: t.contact.info.labels.email,
			value: t.contact.info.email,
			href: `mailto:${t.contact.info.email}`,
		},
		{
			icon: Phone,
			label: t.contact.info.labels.phone,
			value: t.contact.info.phone,
			href: `tel:${t.contact.info.phone.replace(/\s|\(|\)|-/g, "")}`,
		},
		{
			icon: MapPin,
			label: t.contact.info.labels.location,
			value: t.contact.info.location,
			href: "#",
		},
	];

	const socialLinks = [
		{
			icon: Github,
			label: t.contact.social.labels.github,
			href: "https://github.com/gustavoHSCruz",
			username: t.contact.social.github,
		},
		{
			icon: Linkedin,
			label: t.contact.social.labels.linkedin,
			href: "https://www.linkedin.com/in/gusttavocruz/",
			username: t.contact.social.linkedin,
		},
	];

	return (
		<section id="contact" className="py-20">
			<div className="container mx-auto px-6">
				<div className="max-w-4xl mx-auto">
					<div className="text-center mb-16">
						<h2 className="text-3xl md:text-4xl font-bold mb-4">
							{t.contact.title}
						</h2>
						<div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
						<p className="text-lg text-muted-foreground">
							{t.contact.subtitle}
						</p>
					</div>

					<div className="grid lg:grid-cols-2 gap-12">
						{/* Contact Information */}
						<div className="space-y-8">
							<div>
								<h3 className="text-xl font-bold mb-6">
									{t.contact.info.title}
								</h3>
								<div className="space-y-4">
									{contactInfo.map((info, index) => (
										<div
											key={index}
											className="flex items-center gap-4 p-4 rounded-lg border border-border hover:border-blue-600/50 transition-colors"
										>
											<div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
												<info.icon className="h-5 w-5 text-white" />
											</div>
											<div>
												<div className="font-medium">{info.label}</div>
												<a
													href={info.href}
													className="text-muted-foreground hover:text-blue-600 transition-colors"
												>
													{info.value}
												</a>
											</div>
										</div>
									))}
								</div>
							</div>

							<div>
								<h3 className="text-xl font-bold mb-6">
									{t.contact.social.title}
								</h3>
								<div className="space-y-4">
									{socialLinks.map((social, index) => (
										<div
											key={index}
											className="flex items-center gap-4 p-4 rounded-lg border border-border hover:border-blue-600/50 transition-colors"
										>
											<div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
												<social.icon className="h-5 w-5 text-white" />
											</div>
											<div>
												<div className="font-medium">{social.label}</div>
												<a
													href={social.href}
													target="_blank"
													rel="noopener noreferrer"
													className="text-muted-foreground hover:text-blue-600 transition-colors"
												>
													{social.username}
												</a>
											</div>
										</div>
									))}
								</div>
							</div>

							<div className="flex flex-col sm:flex-row gap-4">
								<Button
								asChild
										size="lg"
										className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white flex-1"
								>
								<a href="/cv/Gustavo_Cruz_CVs.zip"
								download="Gustavo_Cruz_CVs.zip"
								className="inline-flex"
								>
									<Download className="mr-2 h-4 w-4" />
									{t.contact.buttons.downloadCV}
								</a>
								</Button>
								<Button
									asChild
									size="lg"
									variant="outline"
									className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white flex-1"
								>
									<a
										href={`https://wa.me/${t.contact.buttons.WhatsappNumber}`}
										target="_blank"
										rel="noopener noreferrer"
									>
										<MessageCircle className="mr-2 h-4 w-4" />
										{t.contact.buttons.whatsapp}
									</a>
								</Button>
							</div>
						</div>

						{/* Contact Form */}
						<Card className="border-border/50">
							<CardContent className="p-8">
								<h3 className="text-xl font-bold mb-6">
									{t.contact.form.title}
								</h3>
								<form onSubmit={handleSubmit} className="space-y-6">
									<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
										<div className="space-y-2">
											<Label htmlFor="name">{t.contact.form.name}</Label>
											<Input
												id="name"
												placeholder={t.contact.form.namePlaceholder}
												value={form.name}
												onChange={(e) =>
													setForm({ ...form, name: e.target.value })
												}
											/>
										</div>
										<div className="space-y-2">
											<Label htmlFor="email">{t.contact.form.email}</Label>
											<Input
												id="email"
												type="email"
												placeholder={t.contact.form.emailPlaceholder}
												value={form.email}
												onChange={(e) =>
													setForm({ ...form, email: e.target.value })
												}
											/>
										</div>
									</div>

									<div className="space-y-2">
										<Label htmlFor="subject">{t.contact.form.subject}</Label>
										<Input
											id="subject"
											placeholder={t.contact.form.subjectPlaceholder}
											value={form.subject}
											onChange={(e) =>
												setForm({ ...form, subject: e.target.value })
											}
										/>
									</div>

									<div className="space-y-2">
										<Label htmlFor="message">{t.contact.form.message}</Label>
										<Textarea
											id="message"
											placeholder={t.contact.form.messagePlaceholder}
											className="min-h-[120px]"
											value={form.message}
											onChange={(e) =>
												setForm({ ...form, message: e.target.value })
											}
										/>
									</div>

									{status.error && (
										<div className="text-sm text-red-600">{status.error}</div>
									)}
									{status.success && (
										<div className="text-sm text-green-600">
											{status.success}
										</div>
									)}

									<Button
										type="submit"
										disabled={status.loading}
										className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white disabled:opacity-50"
										size="lg"
									>
										<Mail className="mr-2 h-4 w-4" />
										{status.loading
											? language === "en"
												? "Sending..."
												: "Enviando..."
											: t.contact.form.send}
									</Button>
								</form>
							</CardContent>
						</Card>
					</div>

					{/* Call to Action */}
					<div className="text-center mt-16 p-8 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-2xl border border-blue-600/20">
						<h3 className="text-2xl font-bold mb-4">{t.contact.cta.title}</h3>
						<p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
							{t.contact.cta.description}
						</p>
						<div className="flex flex-col sm:flex-row gap-4 justify-center">
							<Button
								size="lg"
								className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
								onClick={() =>
									window.open("https://calendly.com/gustavo_cruz08", "_blank")
								}
							>
								{t.contact.buttons.scheduleCall}
							</Button>
							<div className="flex flex-col sm:flex-row gap-2">
									<Button
									asChild
										size="lg"
										variant="outline"
										className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
									>
								<a
									href="/cv/Gustavo_Cruz_CV_EN.pdf"
									download="Gustavo_Cruz_CV_EN.pdf"
									className="inline-flex"
								>
										<Download className="mr-2 h-4 w-4" />
										{t.contact.buttons.downloadCVEnglish}
								</a>
									</Button>
									<Button
									asChild
										size="lg"
										variant="outline"
										className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
									>
								<a
								href="/cv/Gustavo_Cruz_CV_PT.pdf"
								download="Gustavo_Cruz_CV_PT.pdf"
								className="inline-flex"
							>
									<Download className="mr-2 h-4 w-4" />
									{t.contact.buttons.downloadCVPortuguese}
								</a>
									</Button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
