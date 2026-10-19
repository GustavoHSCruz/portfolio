# Assets

Toda arte, fonte, som ou mídia deste repositório tem uma linha aqui, adicionada no
**mesmo commit** que adiciona o arquivo. Regra da cooperativa (`DECISIONS.md`, 23/08/2026):
reconstruir procedência depois, sem lembrar de onde veio cada coisa, não é difícil — é
impossível.

## Tipografia

| arquivo / pacote | origem | autor | licença | data |
|---|---|---|---|---|
| `@fontsource-variable/inter` | https://fontsource.org/fonts/inter · https://rsms.me/inter/ | Rasmus Andersson | SIL Open Font License 1.1 | 2026-08-26 |
| `@fontsource-variable/plus-jakarta-sans` | https://fontsource.org/fonts/plus-jakarta-sans · https://github.com/tokotype/PlusJakartaSans | Plus Jakarta Sans Project Authors | SIL Open Font License 1.1 | 2026-08-26 |

A família é servida do próprio bundle, não de CDN externo. Isso é deliberado:
o site precisa carregar igual numa rede sem saída para a internet, e uma fonte vinda de
terceiro é uma dependência de disponibilidade e um vazamento de IP do visitante.

## Imagem

| arquivo | origem | autor | licença | data |
|---|---|---|---|---|
| `public/favicon.svg` | desenhado para este site pelo Codex, nesta tarefa | — | mesmo licenciamento do repositório | 2026-08-26 |
| `public/og-card.svg` e `public/og.png` | desenhados para este site pelo Codex, nesta tarefa | — | mesmo licenciamento do repositório | 2026-08-26 |
| avatar do hero e do cabeçalho | https://avatars.githubusercontent.com/u/66931989 (perfil GitHub `GustavoHSCruz`) | Gustavo Cruz | foto do próprio titular | 2026-08-26 |

O CDN anterior (`cdn.geg.dev.br`) foi desativado junto com o domínio; a referência antiga
apontava para um host morto e renderizava como ícone de imagem quebrada.

| `public/og.png` | gerado nesta tarefa (HTML renderizado em 1200x630), fontes Plus Jakarta Sans e Inter, avatar do GitHub | Gustavo Cruz | mesmo licenciamento do repositório | 2026-08-26 |

Card de prévia social. Hierarquia (nome primeiro, cargo depois) veio da proposta do Codex;
tipografia, paleta e o uso da foto real no lugar de um monograma vieram da versão do Claude.
A fonte editável é `scratchpad/og.html`, não versionada: para refazer, renderizar o HTML a
1200x630 com as fontes carregadas do `node_modules`.

## Documentos

| arquivo | origem | observação |
|---|---|---|
| `public/cv/*.pdf` | produzidos pelo Gustavo | **Desatualizados**: vão até ago/2025 e não incluem a DXC. Não republicar sem revisão dele. |
