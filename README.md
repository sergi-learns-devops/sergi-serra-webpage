# Sergi Serra — Web personal

Web personal y portfolio profesional orientado a TI, construida con [Astro](https://astro.build). Multiidioma (catalán, inglés y castellano), con modo claro/oscuro y diseño accesible y responsive.

> **Nota de transparencia:** esta web está *vibe-codeada* — desarrollada con asistencia de inteligencia artificial. Este README documenta cómo se hizo, porque creo que el valor no está en "generar código", sino en dirigir las herramientas con criterio técnico, definir buenos requisitos y verificar el resultado.

---

## ¿Cómo se hizo? (Vibe Coding)

Esta web se construyó dirigiendo un flujo de agentes de IA mediante **[Kiro CLI](https://kiro.dev)**, un agente de IA que trabaja en la terminal. El proceso, en tres fases:

### 1. Orquestación vía prompt

Todo partió de una petición en lenguaje natural que definía los requisitos del producto:

> «Quiero crear mi propia página web con Astro para darme visibilidad para un futuro empleo. Sobre el diseño, que se vea atractivo, profesional y orientado a TI, agradable a la vista y de fácil lectura. Que esté disponible en catalán, inglés y castellano, con botones hacia mi LinkedIn y GitHub, y que se pueda alternar entre modo claro y oscuro.»

A partir de ahí se concretaron los requisitos técnicos: i18n nativo de Astro, modo claro/oscuro sin parpadeo, accesibilidad (contraste AA, HTML semántico) y diseño responsive.

### 2. Agentes especializados en pipeline

Kiro CLI orquestó varios agentes de IA especializados, cada uno encargado de su parte, en cadena:

```
desarrollo full-stack  →  diseño UI/UX  →  QA
```

- **fullstack-developer** — estructura del proyecto Astro, i18n, componentes y layout.
- **ui-designer** — paleta profesional, tipografía, tarjetas, estados hover/focus y responsive.
- **qa-agent** — verificación de requisitos y build.

### 3. Verificación y control humano

- `npm run build` limpio (generación estática de las 3 rutas de idioma).
- Pruebas visuales automatizadas con **Playwright** (navegador real).
- Revisión de accesibilidad: contraste AA, HTML semántico, atributos ARIA, *skip-link*.

**La decisión y la validación finales son humanas.** La IA ejecuta; el criterio, los requisitos y la revisión del resultado los pongo yo.

---

## Stack técnico

| Área            | Tecnología                        |
| --------------- | --------------------------------- |
| Framework       | Astro                             |
| Lenguaje        | TypeScript                        |
| i18n            | i18n nativo de Astro (CA/EN/ES)   |
| Estilos         | CSS con variables de tema         |
| Herramienta IA  | Kiro CLI (orquestación de agentes)|
| QA              | Playwright                        |

---

## Estructura del proyecto

```
src/
├── components/      # Hero, About, Skills, Projects, VibeCoding, Contact
├── i18n/            # ca.json, en.json, es.json + ui.ts (utilidades)
├── layouts/         # BaseLayout.astro (head, header, footer, lógica de tema)
├── pages/           # index.astro (ca), en/index.astro, es/index.astro
├── styles/          # global.css (variables de tema claro/oscuro)
└── config.ts        # Enlaces (LinkedIn, GitHub, repo, email)
```

---

## Desarrollo local

```bash
npm install      # Instalar dependencias
npm run dev      # Servidor de desarrollo (http://localhost:4321)
npm run build    # Build de producción (genera dist/)
npm run preview  # Previsualizar el build
```

---

## Idiomas

- **Catalán** (`ca`) — idioma por defecto, sin prefijo: `/`
- **Inglés** (`en`) — `/en`
- **Castellano** (`es`) — `/es`

El contenido editable está en `src/i18n/{ca,en,es}.json`. Los textos pendientes de personalizar están marcados con `[EDITAR]`.

---

## Licencia

Proyecto personal. El código es libre de consultar como referencia.
