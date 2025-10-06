import { Calendar, GraduationCap } from "lucide-react";
import { useApp } from "../contexts/AppContext";
import { Card, CardContent } from "./ui/card";

export function EducationSection() {
	const { t } = useApp();

	return (
		<section className="py-20 bg-muted/30">
			<div className="container mx-auto px-6">
				<div className="max-w-4xl mx-auto">
					<div className="text-center mb-16">
						<h2 className="text-3xl md:text-4xl font-bold mb-4">
							{t.education.title}
						</h2>
						<div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
						<p className="text-lg text-muted-foreground">
							{t.education.subtitle}
						</p>
					</div>

					<div className="grid gap-8 mb-16">
						{t.education.degrees.map((edu, index) => (
							<Card
								key={index}
								className="border-border/50 hover:border-blue-600/50 transition-colors duration-300"
							>
								<CardContent className="p-8">
									<div className="flex items-start gap-4">
										<div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
											<GraduationCap className="h-6 w-6 text-white" />
										</div>
										<div className="flex-1">
											<div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-3">
												<div>
													<h3 className="text-xl font-bold mb-1">
														{edu.degree}
													</h3>
													<p className="text-muted-foreground">
														{edu.institution}
													</p>
												</div>
												<div className="flex items-center gap-4 mt-2 lg:mt-0">
													<div className="flex items-center gap-2 text-sm text-muted-foreground">
														<Calendar className="h-4 w-4" />
														<span>{edu.year}</span>
													</div>
													<div className="px-3 py-1 bg-blue-600/10 text-blue-600 rounded-full text-sm">
														{edu.type}
													</div>
												</div>
											</div>

											<p className="text-muted-foreground mb-4 leading-relaxed">
												{edu.description}
											</p>

											<div className="flex flex-wrap gap-2">
												{edu.highlights.map((highlight, hIndex) => (
													<span
														key={hIndex}
														className="px-3 py-1 bg-secondary text-secondary-foreground rounded-md text-sm"
													>
														{highlight}
													</span>
												))}
											</div>
										</div>
									</div>
								</CardContent>
							</Card>
						))}
					</div>

					{/* <Card className="border-border/50">
            <CardContent className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-blue-600 rounded-xl flex items-center justify-center">
                  <Award className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">{t.education.certificationsTitle}</h3>
                  <p className="text-muted-foreground">{t.education.certificationsSubtitle}</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {t.education.certifications.map((cert, index) => (
                  <div key={index} className="flex items-center gap-3 p-4 bg-background rounded-lg border border-border">
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
                    <span className="text-sm">{cert}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card> */}
				</div>
			</div>
		</section>
	);
}
