import { ArrowDown, ArrowDownRight, ArrowUpRight, Command, MoveUpRight } from "lucide-react";
import { SiteFooter, SiteHeader } from "@/components/site-header";
import { projects, type ProjectCase } from "@/data/projects";
import { ProjectVisual } from "@/components/project-visual";
import { Reveal, ScrollProgress } from "@/components/portfolio-motion";

const steps = [
  { n: "01", title: "Problema", text: "Tudo começa ao perceber o que pode funcionar melhor.", mark: "?" },
  { n: "02", title: "Análise", text: "Entender o contexto antes de escolher qualquer ferramenta.", mark: "⌕" },
  { n: "03", title: "Estratégia", text: "Desenhar um caminho simples, claro e possível de manter.", mark: "↗" },
  { n: "04", title: "Desenvolvimento", text: "Transformar a ideia em uma solução que funciona no dia a dia.", mark: "{ }" },
  { n: "05", title: "Resultado", text: "Medir o impacto e continuar evoluindo o produto.", mark: "✳" },
];

const chips = ["Desenvolvimento", "Automação", "Análise de sistemas", "Melhoria de processos"];

function ProjectCard({ project, index }: { project: ProjectCase; index: number }) {
  return (
    <Reveal className={`project-reveal ${index === 0 ? "reveal-featured" : ""}`} delay={index === 0 ? 0 : (index % 2) * 90}>
      <article className={`project-card ${index === 0 ? "project-card-featured" : ""}`}>
        <div className="project-card-top"><span>{project.number} / CASE</span><span>EM PRODUÇÃO</span></div>
        <div className="project-card-visual"><ProjectVisual slug={project.slug}/></div>
        <div className="project-card-content">
          <span className="project-category">{project.category}</span>
          <h3>{project.title}</h3>
          <p>{project.summary}</p>
          <div className="project-tags">{project.technologies.slice(0, 4).map((tech) => <span key={tech}>{tech}</span>)}</div>
          <a className="project-link" href={`/projetos/${project.slug}`}>Explorar case <ArrowUpRight size={16}/></a>
        </div>
      </article>
    </Reveal>
  );
}

function SystemCanvas() {
  return (
    <div className="system-canvas" aria-label="Ilustração de módulos digitais conectados">
      <div className="canvas-top"><span><i /> PROJETOS REAIS · EM PRODUÇÃO</span><span>01 — 05</span></div>
      <div className="orbit orbit-one" /><div className="orbit orbit-two" />
      <svg className="connections" viewBox="0 0 600 500" aria-hidden="true">
        <path d="M100 113 285 228M493 101 322 224M104 394 273 282M493 387 326 280M300 60v139M300 302v137" />
        <circle cx="100" cy="113" r="3"/><circle cx="493" cy="101" r="3"/><circle cx="104" cy="394" r="3"/><circle cx="493" cy="387" r="3"/>
      </svg>
      <div className="core-card">
        <div className="core-top"><span className="core-icon"><Command size={19}/></span><span className="live-pill"><i/> LIVE SYSTEM</span></div>
        <div className="core-copy"><span className="eyebrow">DA IDEIA AO SISTEMA</span><strong>Soluções que<br/>fazem sentido.</strong><span className="core-sub">Análise · Processo · Tecnologia</span></div>
        <div className="core-bottom"><span>CORE / 001</span><span>100% DIGITAL <span className="spark">✳</span></span></div>
      </div>
      <div className="float-card float-api"><span className="mini-symbol purple">↗</span><span><b>API</b><small>conectada</small></span><span className="status-dot"/></div>
      <div className="float-card float-data"><span className="mini-symbol lime">▦</span><span><b>Dados</b><small>organizados</small></span><span className="status-dot"/></div>
      <div className="float-card float-flow"><span className="mini-symbol orange">⟳</span><span><b>Processo</b><small>em movimento</small></span></div>
      <div className="float-card float-code"><span className="mini-symbol blue">{ }</span><span><b>Software</b><small>feito para pessoas</small></span></div>
      <div className="canvas-label label-left">OBSERVAR <span>→</span></div>
      <div className="canvas-label label-right"><span>→</span> CONSTRUIR</div>
      <div className="canvas-caption">UM POUCO DE LÓGICA. MUITO PROPÓSITO.</div>
    </div>
  );
}

export default function Home() {
  return (
    <main>
      <ScrollProgress/>
      <SiteHeader />
      <section className="hero" id="inicio">
        <div className="hero-copy">
          <div className="availability"><span className="availability-dot"/> PROJETOS REAIS · EM PRODUÇÃO <span className="availability-line"/></div>
          <h1>Ideias boas<br/>merecem <span className="headline-accent">sistemas</span><br/><span className="headline-last">à altura.</span></h1>
          <p className="hero-description">Sou <strong>Ezequiel Rodrigues</strong>, estudante de Engenharia de Software. Transformo problemas reais em soluções digitais claras e úteis.</p>
          <div className="hero-actions"><a className="button-primary" href="#processo">Conheça meu processo <ArrowDownRight size={17}/></a><a className="text-link" href="#sobre">Um pouco sobre mim <ArrowDown size={15}/></a></div>
          <div className="hero-foot"><span>ENGENHARIA DE SOFTWARE</span><span>SCROLL PARA EXPLORAR <span className="scroll-icon">↓</span></span></div>
        </div>
        <SystemCanvas />
        <span className="hero-index">01 / 05</span>
      </section>
      <div className="ticker" aria-label="Áreas de atuação"><div className="ticker-track">{[...chips, ...chips].map((chip, i) => <span key={`${chip}-${i}`}>{chip}<i>✳</i></span>)}</div></div>
      <section className="process-section" id="processo">
        <div className="section-heading"><div><span className="section-kicker">01 — MEU JEITO DE PENSAR</span><h2>Transformar problemas<br/>em <span>soluções.</span></h2></div><p>Boas soluções não começam pelo código. Começam com curiosidade, escuta e entendimento do problema.</p></div>
        <div className="process-layout"><div className="process-intro"><span className="intro-index">O PROCESSO, EM 5 ATOS</span><p>Cada etapa aproxima a necessidade de uma resposta que funciona de verdade.</p><a href="#contato">Tem um desafio? <MoveUpRight size={15}/></a></div><div className="steps-list">{steps.map((step, index) => <Reveal className="step-reveal" delay={index * 70} key={step.n}><article className="step-row"><span className="step-number">{step.n}</span><span className="step-mark">{step.mark}</span><div><h3>{step.title}</h3><p>{step.text}</p></div><ArrowUpRight className="step-arrow" size={18}/></article></Reveal>)}</div></div>
      </section>
      <section className="about-section" id="sobre"><div className="about-graphic"><div className="graphic-ring ring-a"/><div className="graphic-ring ring-b"/><div className="graphic-cross">✳</div><span className="graphic-note note-a">CURIOSIDADE<br/>COM MÉTODO</span><span className="graphic-note note-b">APRENDER<br/>FAZ PARTE</span><span className="graphic-center">ER<span>.</span></span><span className="graphic-stamp">FEITO COM<br/>INTENÇÃO ↗</span></div><div className="about-copy"><span className="section-kicker">02 — QUEM ESTÁ POR TRÁS</span><h2>Tecnologia com<br/><span>intenção.</span></h2><p>Sou Ezequiel, estudante de Engenharia de Software e alguém que gosta de entender como as coisas funcionam — e como podem funcionar melhor.</p><p>Este portfólio reúne projetos reais que conectam tecnologia a necessidades concretas da operação.</p><div className="about-tags"><span>Engenharia de Software</span><span>Aprendizado contínuo</span><span>Olhar analítico</span></div></div></section>
      <section className="projects-section" id="projetos">
        <div className="section-heading"><div><span className="section-kicker">03 — CASES SELECIONADOS</span><h2>Soluções que começam<br/>com <span>uma pergunta.</span></h2></div><p>Projetos implementados em produção para resolver desafios reais com tecnologia, dados e melhoria de processos.</p></div>
        <div className="case-note"><span>◇</span> Projetos reais em produção, com feedback positivo. Os ganhos foram relatados qualitativamente; não foram feitas medições quantitativas.</div>
        <div className="projects-grid">{projects.map((project, index) => <ProjectCard key={project.slug} project={project} index={index}/>)}</div>
      </section>
      <section className="closing-section" id="contato"><span className="section-kicker">04 — PRÓXIMO PASSO</span><h2>Vamos construir<br/>algo <span>que importa.</span></h2><a className="closing-link" href="mailto:ezequielrodrigueswj@gmail.com">Entre em contato <ArrowUpRight size={18}/></a><span className="closing-index">PORTFÓLIO / 2026</span></section>
      <SiteFooter />
    </main>
  );
}
