import { Code2, Shield, Zap, Target } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { useApp } from "../contexts/AppContext";

export function AboutSection() {
  const { t } = useApp();
  
  const highlights = [
    {
      icon: Code2,
      title: t.about.highlights[0].title,
      description: t.about.highlights[0].description
    },
    {
      icon: Shield,
      title: t.about.highlights[1].title,
      description: t.about.highlights[1].description
    },
    {
      icon: Zap,
      title: t.about.highlights[2].title,
      description: t.about.highlights[2].description
    },
    {
      icon: Target,
      title: t.about.highlights[3].title,
      description: t.about.highlights[3].description
    }
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.about.title}</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-4">
                {t.about.paragraphs.map((paragraph, index) => (
                  <p key={index} className="text-lg leading-relaxed" dangerouslySetInnerHTML={{ __html: paragraph }} />
                ))}
              </div>

              <div className="flex flex-wrap gap-4">
                {t.about.badges.map((badge, index) => (
                  <div key={index} className={`px-4 py-2 rounded-full ${
                    index % 2 === 0 
                      ? "bg-blue-600/10 text-blue-600" 
                      : "bg-purple-600/10 text-purple-600"
                  }`}>
                    {badge}
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <Card key={index} className="border-border/50 hover:border-blue-600/50 transition-colors duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mr-3">
                        <item.icon className="h-5 w-5 text-white" />
                      </div>
                      <h3 className="font-semibold">{item.title}</h3>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}