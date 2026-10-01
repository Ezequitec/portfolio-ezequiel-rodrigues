import { ArrowUpRight, Command } from "lucide-react";

export function SiteHeader() {
  return (
    <header className="site-header">
      <a className="wordmark" href="/#inicio" aria-label="Ezequiel Rodrigues, início">
        <span className="wordmark-icon"><Command size={16} strokeWidth={1.8} /></span>
        <span>EZEQUIEL<span className="wordmark-light">.DEV</span></span>
      </a>
      <nav className="desktop-nav" aria-label="Navegação principal">
        <a href="/#sobre">Sobre</a><a href="/#projetos">Projetos</a><a href="/#processo">Processo</a><a href="/#contato">Contato</a>
      </nav>
      <a className="header-cta" href="/#contato">Vamos conversar <ArrowUpRight size={15} /></a>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <a className="wordmark" href="/#inicio"><span className="wordmark-icon"><Command size={15}/></span><span>EZEQUIEL<span className="wordmark-light">.DEV</span></span></a>
      <span>ENGENHARIA DE SOFTWARE · DA IDEIA AO SISTEMA</span>
      <div><a href="/#contato" aria-label="GitHub"><span aria-hidden="true">GH</span></a><a href="/#contato" aria-label="LinkedIn"><span aria-hidden="true">IN</span></a></div>
      <span>© 2026 EZEQUIEL RODRIGUES</span>
    </footer>
  );
}
