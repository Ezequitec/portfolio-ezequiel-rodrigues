import type { Metadata } from "next";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { notFound } from "next/navigation";
import { SiteFooter, SiteHeader } from "@/components/site-header";
import { findProject, projects } from "@/data/projects";
import { ProjectVisual } from "@/components/project-visual";
import { Reveal, ScrollProgress } from "@/components/portfolio-motion";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = findProject(slug);
  if (!project) return { title: "Case não encontrado — Ezequiel Rodrigues" };
  return {
    title: `${project.title} — Ezequiel Rodrigues`,
    description: project.summary,
  };
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = findProject(slug);
  if (!project) notFound();

  return (
    <main className="case-page">
      <ScrollProgress/>
      <SiteHeader />
      <article>
        <section className="case-hero">
          <a className="back-link" href="/#projetos"><ArrowLeft size={15}/> Voltar aos cases</a>
          <div className="case-hero-meta"><span>{project.number} / EM PRODUÇÃO</span><span>{project.category}</span></div>
          <h1>{project.title}</h1>
          <p>{project.summary}</p>
          <div className="case-status"><span>◇</span> Projeto real em produção. O feedback foi positivo; o impacto não foi medido quantitativamente.</div>
        </section>
        <Reveal className="case-hero-visual" delay={80}><ProjectVisual slug={project.slug}/></Reveal>
        <section className="case-content">
          <div className="case-aside"><span className="section-kicker">CASO {project.number}</span><h2>Da operação<br/>ao <span>sistema.</span></h2><p>Como o problema foi entendido, como a solução foi implementada e como seus componentes se conectam.</p><a href="/#contato">Conversar sobre um desafio <ArrowUpRight size={15}/></a></div>
          <div className="case-sections">
            <Reveal className="case-section-reveal"><section className="case-section"><span className="case-section-number">01</span><div><h3>O problema</h3><p>{project.problem}</p></div></section></Reveal>
            <Reveal className="case-section-reveal" delay={70}><section className="case-section"><span className="case-section-number">02</span><div><h3>Abordagem implementada</h3><p>{project.approach}</p></div></section></Reveal>
            <Reveal className="case-section-reveal" delay={120}><section className="case-section architecture-section"><span className="case-section-number">03</span><div><h3>Arquitetura em etapas</h3><p>O fluxo abaixo resume os principais blocos da solução implementada.</p><div className="architecture-flow">{project.architecture.map((node, index) => <div className="architecture-node" key={node}><span>{String(index + 1).padStart(2, "0")}</span><b>{node}</b>{index < project.architecture.length - 1 && <ArrowRight className="architecture-arrow" size={16}/>}</div>)}</div></div></section></Reveal>
            <Reveal className="case-section-reveal" delay={70}><section className="case-section"><span className="case-section-number">04</span><div><h3>O que a solução faz</h3><p className="detail-note">Escopo implementado em produção</p><ul className="outcome-list">{project.outcomes.map((outcome) => <li key={outcome}>{outcome}</li>)}</ul></div></section></Reveal>
            <Reveal className="case-section-reveal" delay={120}><section className="case-section"><span className="case-section-number">05</span><div><h3>Tecnologias e métodos</h3><div className="case-tags">{project.technologies.map((technology) => <span key={technology}>{technology}</span>)}</div></div></section></Reveal>
          </div>
        </section>
        <div className="case-next"><a href="/#projetos"><ArrowLeft size={16}/> Ver todos os cases</a><span>DA IDEIA AO SISTEMA · {project.number}</span></div>
      </article>
      <SiteFooter />
    </main>
  );
}
