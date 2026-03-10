<div align="center">
  <img src="https://i.postimg.cc/t4hqNMf2/hero-portfolio.png" alt="Hero do portfólio josevitorsoares.dev" width="100%" />

<br><br>

# José Vitor Soares | Portfólio Técnico

_Uma vitrine interativa combinando apresentação pessoal, design moderno e demonstrações práticas de engenharia de software._

  <p align="center">
    <a href="https://josevitorsoares.dev"><b>🌐 Acesse a versão publicada (josevitorsoares.dev)</b></a>
  </p>

  <div>
    <img src="https://img.shields.io/badge/React_19-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React 19" />
    <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
    <img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" />
    <img src="https://img.shields.io/badge/Tailwind_CSS_4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="Tailwind CSS 4" />
    <img src="https://img.shields.io/badge/TanStack_Query-FF4154?style=for-the-badge&logo=reactquery&logoColor=white" alt="TanStack Query" />
  </div>
  <div>
    <img src="https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white" alt="Axios" />
    <img src="https://img.shields.io/badge/Zod-3E67B1?style=for-the-badge&logo=zod&logoColor=white" alt="Zod" />
    <img src="https://img.shields.io/badge/Zustand-443E38?style=for-the-badge" alt="Zustand" />
    <img src="https://img.shields.io/badge/React_Hook_Form-EC5990?style=for-the-badge&logo=reacthookform&logoColor=white" alt="React Hook Form" />
    <img src="https://img.shields.io/badge/React_PDF-E11E26?style=for-the-badge&logo=adobeacrobatreader&logoColor=white" alt="React PDF" />
  </div>
</div>

<br>

<details>
  <summary><b>📖 Índice</b></summary>
  <ol>
    <li><a href="#-visão-geral">Visão Geral</a></li>
    <li><a href="#-o-que-você-encontra">O que você encontra</a></li>
    <li><a href="#-destaques-técnicos">Destaques Técnicos</a></li>
    <li><a href="#-stack-e-camadas">Stack e Camadas</a></li>
    <li><a href="#-projetos-em-destaque">Projetos em Destaque</a></li>
    <li><a href="#-arquitetura-e-estrutura">Arquitetura e Estrutura</a></li>
    <li><a href="#-propósito-do-repositório">Propósito do Repositório</a></li>
  </ol>
</details>

---

## ✨ Visão Geral

> Este projeto transforma um portfólio tradicional em uma **vitrine técnica interativa**.

A aplicação foi pensada para comunicar identidade visual, organização de código e capacidade de integração em um único fluxo. Além do conteúdo institucional, o portfólio incorpora experiências reais de frontend moderno, como consumo de API, visualização de PDF nativa no navegador, gerenciamento de estados assíncronos e componentes reutilizáveis orientados a um design system.

### 📌 O que você encontra

- 🎯 **Hero de apresentação** com navegação direta para as principais seções.
- 💻 **Vitrine prática** com projetos reais e contexto técnico detalhado de cada solução.
- 🎓 **Sessões dedicadas** a experiências profissionais, background educacional e stack.
- 🌓 **Alternância de temas** (Claro/Escuro) integrada de forma fluida.
- 📱 **Interface 100% responsiva** com foco apurado em leitura, contraste e hierarquia visual.

---

## 🚀 Destaques Técnicos

| Área            | Abordagem                | Destaque                                                                           |
| :-------------- | :----------------------- | :--------------------------------------------------------------------------------- |
| **Integração**  | `Axios`                  | Consumo de APIs para conectar a interface a serviços externos de forma eficiente.  |
| **Dados**       | `TanStack Query`         | Implementação de cache, sincronização e gestão de estados assíncronos.             |
| **Validação**   | `Zod`                    | Schemas estritos e variáveis de ambiente tipadas e validadas em tempo de execução. |
| **Interface**   | `Radix UI` + `shadcn/ui` | Construção de componentes acessíveis, customizáveis e de alta performance.         |
| **Conteúdo**    | `React PDF`              | Solução nativa para renderização de documentos complexos diretamente no DOM.       |
| **Estilo**      | `Tailwind CSS 4`         | Experiência visual moderna, escalável e de fácil manutenção.                       |
| **Organização** | `Domain-Driven`          | Estrutura modularizada com aliases de importação e forte separação por domínio.    |

---

## 🧰 Stack e Camadas

A arquitetura foi dividida logicamente para garantir a responsabilidade única de cada tecnologia:

- **Core & Build:** React 19, TypeScript, Vite
- **UI & Estilização:** Tailwind CSS 4, Radix UI, shadcn/ui, Lucide Icons
- **Fetching & Validação:** Axios, TanStack Query, Zod
- **Estado & Inputs:** Zustand, React Hook Form
- **Features Específicas:** React PDF

---

## 🗂 Arquitetura e Estrutura

O código-fonte segue princípios de isolamento de responsabilidades e separação de conceitos:

```text
src/
 ├── api/        # Cliente HTTP, tipagens de request/response e actions
 ├── features/   # Páginas e componentes aglomerados por contexto de domínio
 ├── shared/     # Componentes de UI genéricos, hooks, schemas, libs e estilos
 ├── App.tsx     # Ponto de entrada e composição principal (Rotas/Providers)
 └── main.tsx    # Bootstrap da aplicação React
```

Diretrizes de Organização:

- O diretório src/features/home concentra a experiência principal e o fluxo do portfólio.

- A camada src/api isola completamente o acesso a dados, facilitando testes e manutenção.

- O diretório src/shared atua como uma biblioteca interna, reunindo abstrações reutilizáveis e a fundação do Design System.

## 🎯 Propósito do Repositório

Este repositório existe primordialmente como vitrine do projeto publicado e da abordagem arquitetural adotada na construção da interface. O foco deste material é apresentar decisões técnicas, direção visual, preocupação com código limpo e capacidade de execução (não servir como um template genérico).

## 💡 Autor

Feito com 💜 por [José Vitor G. Soares](https://github.com/josevitorsoares)
