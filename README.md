# Nexus Digital — Hub de Soluções Digitais (Official Website)

Site institucional oficial da **Nexus Digital**, desenvolvido seguindo rigorosamente a identidade visual premium, tecnológica e cinematográfica especificada no manual da marca.

---

## 🎨 Paleta de Cores Oficial

- **Preto Principal:** `#050807`
- **Superfícies Dark:** `#0B2B26`
- **Verde Floresta:** `#163832`
- **Texto & Detalhes:** `#E7F7D4` (Branco esverdeado)
- **Acentos Esmeralda:** `#10B981`

---

## 🏛️ Arquitetura das 10 Seções (Home)

1. **[Hero Cinematográfica](file:///Users/kevenmacedo/Downloads/nexus%20Site/src/components/Hero.tsx):** Headline oficial *"NÃO SOMOS APENAS UMA AGÊNCIA. SOMOS O PONTO DE CONEXÃO ENTRE IDEIAS E SOLUÇÕES."* e preview cinematográfico de alto impacto.
2. **[Quem é a Nexus](file:///Users/kevenmacedo/Downloads/nexus%20Site/src/components/AboutHub.tsx):** Apresentação institucional do posicionamento como Hub e os 4 pilares operacionais.
3. **[Portfólio Imersivo](file:///Users/kevenmacedo/Downloads/nexus%20Site/src/components/PortfolioImmersive.tsx):** Galeria editorial filtrável por 6 categorias (*Audiovisual, Fotografia, Branding e Design, Marketing e Campanhas, Tecnologia e Desenvolvimento, Inteligência Artificial*) com modal de detalhes completos de cada projeto ([`ProjectModal.tsx`](file:///Users/kevenmacedo/Downloads/nexus%20Site/src/components/ProjectModal.tsx)).
4. **[Os Criadores](file:///Users/kevenmacedo/Downloads/nexus%20Site/src/components/Founders.tsx):** Apresentação editorial dos três sócios fundadores: **Keven**, **Gabriel** e **Vitória**, com biografias, domínios técnicos e canais sociais.
5. **[Nexus Solution Finder](file:///Users/kevenmacedo/Downloads/nexus%20Site/src/components/SolutionFinder.tsx):** Principal área comercial onde o cliente descreve livremente suas necessidades, responde a perguntas complementares de escopo e gera um briefing estruturado direto para WhatsApp.
6. **[O Ecossistema Nexus](file:///Users/kevenmacedo/Downloads/nexus%20Site/src/components/EcosystemHub.tsx):** Painel interativo com as **14 especialidades conectadas** ao núcleo do Hub.
7. **[Marcas que Confiam](file:///Users/kevenmacedo/Downloads/nexus%20Site/src/components/TrustedBrands.tsx):** Marquee horizontal monocromático com logos e símbolos de parceiros.
8. **[Avaliações & Depoimentos](file:///Users/kevenmacedo/Downloads/nexus%20Site/src/components/Testimonials.tsx):** Prova social e confiança de clientes e lideranças.
9. **[CTA Final](file:///Users/kevenmacedo/Downloads/nexus%20Site/src/components/FinalCTA.tsx):** Chamada de fechamento *"SEU PRÓXIMO PASSO COMEÇA COM UMA BOA CONEXÃO."*.
10. **[Footer Completo](file:///Users/kevenmacedo/Downloads/nexus%20Site/src/components/Footer.tsx):** Rodapé com o feixe de luz interativo (*Beam Wordmark*), marca "NEXUS DIGITAL", links de navegação, categorias e contatos.

---

## ✏️ Onde Editar Textos e Dados

Todos os conteúdos institucionais, sócios, especialidades, projetos e depoimentos estão centralizados em:

👉 **[`src/data/nexusData.ts`](file:///Users/kevenmacedo/Downloads/nexus%20Site/src/data/nexusData.ts)**

---

## 🚀 Como Rodar Localmente

```bash
# Iniciar o servidor local (porta 5173)
npm run dev

# Gerar build de produção
npm run build
```
