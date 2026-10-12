NEXUS · ESTUDAR NA RÚSSIA — PÁGINA DE INSCRIÇÃO
================================================

CONTEÚDO
--------
index.html   Estrutura e textos da página
style.css    Cores, tipografia, layout e animações
script.js    Validação do formulário, envio por WhatsApp e animações
img/         Fotografias (capa, Eng. Fernando Júnior, Eng. Mayte, Eng. Denny Baloi)

COMO ABRIR
----------
Mantém os ficheiros na mesma pasta (com a subpasta img/) e abre o index.html
no navegador. Funciona sem instalar nada.

1) ATIVAR O FORMULÁRIO (OBRIGATÓRIO)
------------------------------------
Abre o script.js e, na primeira linha de código, preenche o número de WhatsApp
da organização, só com dígitos e com indicativo do país, sem + nem espaços:

    var WA_NUMBER="258841234567";

Enquanto estiver vazio, o formulário mostra "As inscrições abrem em breve".
Quando a pessoa preenche e submete, aparece o botão "ENVIAR NO WHATSAPP", que
abre uma conversa com este número com a inscrição já escrita.

2) ATUALIZAR DATA E HORÁRIO
---------------------------
No index.html, procura "A confirmar" (bloco "Data e horário") e substitui, por
exemplo, por "15 de Novembro de 2026 · 20h–22h".

3) OUTRAS ALTERAÇÕES
--------------------
- Cores: no início do style.css, em :root (--navy, --gold, --red...).
- Fotos: substitui os ficheiros em img/ mantendo os mesmos nomes
  (capa.jpg, fernando.jpg, mayte.jpg, denny.jpg).
- Campos do formulário: no index.html, dentro de <form id="f">.
  Se mudares ids de campos, ajusta também o script.js.

PUBLICAR NA INTERNET (GRATUITO)
-------------------------------
- Netlify Drop (app.netlify.com/drop): arrasta a pasta inteira e recebes um link.
- GitHub Pages: envia os ficheiros para um repositório e ativa o Pages.
Depois de publicado, partilha o link nos grupos.

NOTAS
-----
- As inscrições não ficam guardadas na página: chegam por WhatsApp.
- A tipografia (Sora) vem do Google Fonts; sem internet usa a fonte do sistema.
- Confirma que os oradores autorizam o uso das fotografias.
- Confirma prazos e requisitos de bolsas nas fontes oficiais antes de os divulgar.
