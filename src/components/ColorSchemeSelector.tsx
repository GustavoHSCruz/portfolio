import { Palette } from "lucide-react";
import { Button } from "./ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { useApp, type ColorScheme } from "../contexts/AppContext";

const colorSchemes = [
  { name: 'blue', label: 'Azul', color: '#2563eb' },
  { name: 'purple', label: 'Roxo', color: '#7c3aed' },
  { name: 'green', label: 'Verde', color: '#059669' },
  { name: 'orange', label: 'Laranja', color: '#ea580c' },
  { name: 'red', label: 'Vermelho', color: '#dc2626' },
] as const;

export function ColorSchemeSelector() {
  const { colorScheme, changeColorScheme } = useApp();

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className="h-8 w-8 p-0 opacity-60 hover:opacity-100 transition-opacity"
          title="Alterar cores do tema"
        >
          <Palette className="h-4 w-4" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-48 p-3" align="end">
        <div className="space-y-1">
          <p className="text-sm font-medium mb-2">Esquema de Cores</p>
          {colorSchemes.map((scheme) => (
            <Button
              key={scheme.name}
              variant={colorScheme === scheme.name ? "default" : "ghost"}
              size="sm"
              onClick={() => changeColorScheme(scheme.name as ColorScheme)}
              className="w-full justify-start gap-2"
            >
              <div 
                className="w-3 h-3 rounded-full border border-gray-300"
                style={{ backgroundColor: scheme.color }}
              />
              {scheme.label}
            </Button>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  );
}