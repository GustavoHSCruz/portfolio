# Assets

Toda arte, fonte, som ou mídia deste repositório tem uma linha aqui, adicionada no
**mesmo commit** que adiciona o arquivo. Regra da cooperativa (`DECISIONS.md`, 23/08/2026):
reconstruir procedência depois, sem lembrar de onde veio cada coisa, não é difícil — é
impossível.

## Tipografia

| arquivo / pacote | origem | autor | licença | data |
|---|---|---|---|---|
| `@fontsource-variable/schibsted-grotesk` | https://fontsource.org/fonts/schibsted-grotesk · https://github.com/schibsted/schibsted-grotesk | Schibsted Grotesk Project Authors | SIL Open Font License 1.1 | 2026-10-22 |

A família é servida do próprio bundle, não de CDN externo. Isso é deliberado:
o site precisa carregar igual numa rede sem saída para a internet, e uma fonte vinda de
terceiro é uma dependência de disponibilidade e um vazamento de IP do visitante.

## Imagem

| arquivo | origem | autor | licença | data |
|---|---|---|---|---|
| `public/favicon.svg` | desenhado para este site pelo Codex, nesta tarefa | — | mesmo licenciamento do repositório | 2026-08-26 |
| `public/og-card.svg` e `public/og.png` | desenhados para este site pelo Codex, nesta tarefa | — | mesmo licenciamento do repositório | 2026-08-26 |
| logo do Arch Linux na abertura (SVG inline em `src/components/Intro.tsx`) | https://simpleicons.org/?q=archlinux (pacote `simple-icons@13.21.0`), sem o subpath do "TM" | Arch Linux / Simple Icons | dados do ícone CC0 1.0; a marca é do Arch Linux, usada como referência pessoal | 2026-10-22 |
| avatar do hero e do cabeçalho | https://avatars.githubusercontent.com/u/66931989 (perfil GitHub `GustavoHSCruz`) | Gustavo Cruz | foto do próprio titular | 2026-08-26 |

O CDN anterior (`cdn.geg.dev.br`) foi desativado junto com o domínio; a referência antiga
apontava para um host morto e renderizava como ícone de imagem quebrada.

| `public/og.png` | renderizado de `tools/og.html` em 1200x630 (Chromium headless), fonte Schibsted Grotesk, avatar do GitHub | Gustavo Cruz | mesmo licenciamento do repositório | 2026-10-22 |

Card de prévia social. Hierarquia (nome primeiro, cargo depois) veio da proposta do Codex;
tipografia, paleta e o uso da foto real no lugar de um monograma vieram da versão do Claude.
A fonte editável é `tools/og.html`, versionada; o comando para refazer está no comentário do arquivo.

## Documentos

| arquivo | origem | observação |
|---|---|---|
| `public/cv/*.pdf` | produzidos pelo Gustavo | **Desatualizados**: vão até ago/2025 e não incluem a DXC. Não republicar sem revisão dele. |
