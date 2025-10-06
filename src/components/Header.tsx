import { Menu, X, Globe, Sun, Moon } from "lucide-react";
import { useState } from "react";
import { useApp } from "../contexts/AppContext";
import { Button } from "./ui/button";
import { ColorSchemeSelector } from "./ColorSchemeSelector";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t, language, changeLanguage, theme, toggleTheme, isDark } = useApp();

  const navItems = [
    { label: t.nav.about, href: "#about" },
    { label: t.nav.experience, href: "#experience" },
    { label: t.nav.projects, href: "#projects" },
    { label: t.nav.skills, href: "#skills" },
    { label: t.nav.contact, href: "#contact" },
  ];

  return (
    <header className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
      <div className="container mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold">GC</span>
            </div>
            <span className="text-xl font-bold">Gustavo Cruz</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                {item.label}
              </a>
            ))}
            
            {/* Color Scheme Selector (discrete) */}
            <ColorSchemeSelector />
            
            {/* Theme Switcher */}
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleTheme}
              className="h-8 w-8 p-0"
              title={isDark ? "Switch to light mode" : "Switch to dark mode"}
            >
              {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </Button>
            
            {/* Language Switcher */}
            <div className="flex items-center gap-2">
              <Globe className="h-4 w-4 text-muted-foreground" />
              <Button
                variant={language === 'en' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => changeLanguage('en')}
                className="h-8 px-2 py-1"
              >
                EN
              </Button>
              <Button
                variant={language === 'pt' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => changeLanguage('pt')}
                className="h-8 px-2 py-1"
              >
                PT
              </Button>
            </div>
          </div>

          {/* Mobile Navigation Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-border">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              
              {/* Mobile Switchers */}
              <div className="flex flex-col gap-4 pt-4 border-t border-border">
                {/* Mobile Color Scheme Selector */}
                <div className="flex items-center gap-2">
                  <ColorSchemeSelector />
                </div>
                
                {/* Mobile Theme Switcher */}
                <div className="flex items-center gap-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={toggleTheme}
                    className="h-8 px-3 py-1 flex items-center gap-2"
                  >
                    {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
                    {isDark ? "Light Mode" : "Dark Mode"}
                  </Button>
                </div>
                
                {/* Mobile Language Switcher */}
                <div className="flex items-center gap-2">
                  <Globe className="h-4 w-4 text-muted-foreground" />
                  <Button
                    variant={language === 'en' ? 'default' : 'ghost'}
                    size="sm"
                    onClick={() => changeLanguage('en')}
                    className="h-8 px-2 py-1"
                  >
                    EN
                  </Button>
                  <Button
                    variant={language === 'pt' ? 'default' : 'ghost'}
                    size="sm"
                    onClick={() => changeLanguage('pt')}
                    className="h-8 px-2 py-1"
                  >
                    PT
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}