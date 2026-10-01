import type { CSSProperties, ReactNode } from "react";

type ProjectVisualProps = { slug: string };

function Chrome({ children, variant }: { children: ReactNode; variant: string }) {
  return (
    <div className={`project-visual visual-${variant}`} aria-label="Mockup ilustrativo com dados fictícios">
      <div className="visual-chrome"><span className="chrome-lights"><i/><i/><i/></span><span>CASE VISUAL <b>·</b> DADOS FICTÍCIOS</span><span className="chrome-mark">ER / LAB</span></div>
      {children}
    </div>
  );
}

function AuditVisual() {
  return <Chrome variant="audit"><div className="audit-ui">
    <aside className="mock-sidebar"><span className="mock-brand">◇ <b>OPERAÇÃO</b></span><i className="sidebar-active">Visão geral</i><i>Auditorias</i><i>Localizações</i><i>Relatórios</i><span className="sidebar-bottom">TURNO · A</span></aside>
    <div className="mock-main"><div className="mock-title-row"><div><small>CONTROLE DE ESTOQUE</small><b>Auditorias de ciclo</b></div><span className="mock-pill">● AO VIVO</span></div>
      <div className="audit-stats"><div><small>EM ANDAMENTO</small><b>03 <i>↗</i></b></div><div><small>ÁREAS ATIVAS</small><b>08</b></div><div><small>STATUS</small><b className="mock-green">Sincronizado</b></div></div>
      <div className="warehouse-map"><div className="warehouse-grid">{Array.from({ length: 36 }, (_, i) => <i className={i === 13 ? "slot-locked" : i % 7 === 0 ? "slot-done" : ""} key={i}/>)}</div><div className="lock-callout"><span>▣</span><b>LOCAL A-14</b><small>Reservado para auditoria</small><i>EM CONTAGEM</i></div></div>
      <div className="audit-activity"><span>ÚLTIMAS ATIVIDADES</span><i><b/> Local B-02 · liberado</i><i><b/> Local A-14 · em contagem</i></div>
    </div>
  </div></Chrome>;
}

function AiVisual() {
  return <Chrome variant="ai"><div className="ai-ui"><div className="ai-topline"><span>CATALOG / TRIAGEM</span><span className="mock-pill">FLUXO ATIVO</span></div><div className="ai-product"><div className="product-art"><span>USB</span><i/><b>↗</b></div><div className="product-description"><small>NOVO PRODUTO · EXEMPLO</small><b>Cabo USB-C trançado<br/>1 m, preto</b><div className="product-code">ITEM DEMO · #024</div></div></div><div className="ai-decision"><div><small>SUGESTÃO DA IA</small><b>Acessórios eletrônicos <span>✓</span></b></div><div className="confidence"><span>CONFIANÇA</span><i><b/></i><strong>ALTA</strong></div></div><div className="ai-review"><span>FILA DE REVISÃO</span><i><b/> Adaptador multiporta <em>REVISÃO HUMANA</em></i><i><b/> Capa protetora <em>CLASSIFICADO</em></i></div></div></Chrome>;
}

function BleVisual() {
  return <Chrome variant="ble"><div className="ble-ui"><div className="ble-heading"><div><small>LEITURA SIMULADA</small><b>Captura de pesagem</b></div><span className="ble-connected"><i/> BLE CONECTADO</span></div><div className="weight-panel"><div className="scale-device"><div className="scale-top"><i/><i/><i/></div><div className="scale-display">12.40 <small>kg</small></div><div className="scale-base"/></div><div className="weight-reading"><span>PESO CAPTURADO</span><b>12,40 <i>kg</i></b><small>Enviado automaticamente</small><em>✓ REGISTRO RECEBIDO</em></div></div><div className="signal-chart"><div className="chart-grid"><i/><i/><i/><i/><i/><i/><i/><i/><i/><i/><i/><i/><i/><i/><i/><i/><i/><i/><i/><i/></div><span>SINAL BLE · ESTÁVEL</span></div><div className="ble-log"><span>EVENTOS RECENTES</span><i>14:32:08 <b>Dispositivo reconhecido</b></i><i>14:32:09 <b>Payload decodificado</b></i></div></div></Chrome>;
}

function CubageVisual() {
  return <Chrome variant="cubage"><div className="cube-ui"><div className="cube-header"><div><small>GUIA DE MEDIÇÃO</small><b>Conferência volumétrica</b></div><span>ETAPA 02 / 04</span></div><div className="cube-workspace"><div className="cube-stage"><div className="cube-object"><span>PRODUTO DEMO</span></div><div className="measure measure-x">32 cm</div><div className="measure measure-y">18 cm</div><div className="measure measure-z">14 cm</div><div className="laser-line"/></div><div className="cube-result"><span>MEDIDAS SIMULADAS</span><b>32 × 18 × 14 <i>cm</i></b><small>Posicione a lateral junto ao laser de altura.</small><div className="cube-check">✓ POSICIONAMENTO CONFERIDO</div></div></div><div className="guide-steps"><i className="guide-done">01 <b>Posicione</b></i><i className="guide-current">02 <b>Meça</b></i><i>03 <b>Confira</b></i><i>04 <b>Registre</b></i></div></div></Chrome>;
}

function OperationsDashboardVisual() {
  const bars = [32, 78, 48, 64, 38, 92, 55, 70, 43, 84, 58, 73];
  const metrics = [
    { label: "PENDENTES", value: "24", kind: "amber", icon: "◷" },
    { label: "CONFERIDOS", value: "68", kind: "green", icon: "✓" },
    { label: "DIVERGÊNCIAS", value: "03", kind: "red", icon: "!" },
    { label: "ANDAMENTO", value: "74%", kind: "blue", icon: "↗" },
  ];

  return <Chrome variant="operations"><div className="ops-app">
    <aside className="ops-sidebar"><div className="ops-brand"><span>▰</span><b>OPERAÇÃO</b></div><div className="ops-warehouse">⌂ <span>UNIDADE · DEMO</span><i>⌄</i></div><div className="ops-nav-label">ACOMPANHAMENTO</div><div className="ops-nav active"><i>▦</i> Visão geral <b>●</b></div><div className="ops-nav"><i>▣</i> Produtos na mesa <span>08</span></div><div className="ops-nav"><i>↗</i> Coleta operacional</div><div className="ops-nav"><i>✓</i> Controle de validação</div><div className="ops-sidebar-bottom"><i/> AMBIENTE SIMULADO</div></aside>
    <div className="ops-main"><header className="ops-topbar"><span>Visão geral <b>/</b> Painel</span><div><i className="ops-avatar">ER</i><span>Equipe demonstração<small>CONTA FICTÍCIA</small></span></div></header>
      <div className="ops-content"><div className="ops-heading"><div><small>PAINEL DE ACOMPANHAMENTO</small><h3>Visão geral da operação</h3><p>Indicadores ilustrativos · dados fictícios</p></div><span className="ops-live"><i/> ATUALIZAÇÃO SIMULADA</span></div>
        <div className="ops-metrics">{metrics.map((metric, index) => <div className={`ops-metric metric-${metric.kind}`} key={metric.label} style={{ "--metric-order": index } as CSSProperties}><span>{metric.icon}</span><small>{metric.label}</small><b>{metric.value}</b><i className="metric-spark">↗ <em>VISUAL DEMO</em></i></div>)}</div>
        <div className="ops-analytics"><section className="ops-panel ops-hourly"><div className="ops-panel-heading"><div><b>Produtividade por hora</b><small>Itens acompanhados · exemplo</small></div><span>HOJE⌄</span></div><div className="ops-line-chart"><div className="ops-chart-grid"><i/><i/><i/><i/></div><svg viewBox="0 0 600 120" preserveAspectRatio="none" aria-hidden="true"><path className="ops-area-fill" d="M0 105 C35 104 48 32 100 29 S160 88 200 82 S264 62 300 72 S355 96 400 73 S465 44 500 58 S558 88 600 30 L600 120 L0 120 Z"/><path className="ops-line-green" d="M0 105 C35 104 48 32 100 29 S160 88 200 82 S264 62 300 72 S355 96 400 73 S465 44 500 58 S558 88 600 30"/><path className="ops-line-orange" d="M0 112 C42 108 63 82 100 91 S161 104 200 99 S260 91 300 103 S361 109 400 98 S466 86 500 100 S560 107 600 91"/><circle className="ops-chart-point" cx="500" cy="58" r="4"/></svg><div className="ops-axis-labels"><span>08h</span><span>10h</span><span>12h</span><span>14h</span><span>16h</span><span>18h</span></div></div><div className="ops-legend"><span><i/> Conferidos</span><span><i/> Divergências</span></div></section>
          <section className="ops-panel ops-queue"><div className="ops-panel-heading"><div><b>Status da fila</b><small>Distribuição ilustrativa</small></div><span>◌</span></div><div className="ops-donut"><div><b>95</b><small>ITENS DEMO</small></div></div><div className="ops-queue-legend"><span><i/> Conferidos <b>68</b></span><span><i/> Pendentes <b>24</b></span><span><i/> Divergências <b>03</b></span></div></section></div>
        <div className="ops-lower"><section className="ops-panel ops-team"><div className="ops-panel-heading"><div><b>Atividade da equipe</b><small>Resumo de exemplo</small></div><span>VER DETALHES ↗</span></div><div className="ops-team-row"><i>OP</i><span>Equipe de demonstração<small>Turno ilustrativo</small></span><b>12 <em>ITENS</em></b></div><div className="ops-team-cards"><div>CONFERIDOS <b>10</b></div><div>DIVERGÊNCIAS <b>02</b></div><div>REVISÃO <b>03</b></div></div></section><section className="ops-panel ops-week"><div className="ops-panel-heading"><div><b>Volume acompanhado</b><small>Período ilustrativo</small></div><span>7 DIAS⌄</span></div><div className="ops-bars">{bars.map((height, i) => <div className="ops-bar-column" key={i}><i style={{ "--bar-size": `${height}%`, "--bar-order": i } as CSSProperties}/><small>{["S", "T", "Q", "Q", "S", "S", "D", "S", "T", "Q", "Q", "S"][i]}</small></div>)}</div></section></div>
      </div>
    </div>
  </div></Chrome>;
}

function ScheduleVisual() {
  const days = ["SEG", "TER", "QUA", "QUI", "SEX", "SÁB", "DOM"];
  const rows = ["EQUIPE A", "EQUIPE B", "EQUIPE C", "EQUIPE D"];
  const schedule = ["on on on off off on on", "off off on on on off off", "on on off off on on on", "on off off on on on off"];
  return <Chrome variant="schedule"><div className="schedule-ui"><div className="schedule-heading"><div><small>ESCALA · CICLO 3 × 2</small><b>Disponibilidade semanal</b></div><span className="mock-pill">SEMANA DEMO</span></div><div className="schedule-grid"><span/><div className="schedule-days">{days.map((day) => <i key={day}>{day}</i>)}</div>{rows.map((row, i) => <div className="schedule-row" key={row}><b>{row}</b><div>{schedule[i].split(" ").map((status, n) => <i className={status === "on" ? "day-on" : "day-off"} key={n}>{status === "on" ? "TRAB." : "FOLGA"}</i>)}</div></div>)}</div><div className="schedule-footer"><span><i className="legend-work"/> EM TURNO</span><span><i className="legend-rest"/> DESCANSO</span><b>REGRA CALCULADA · DATA ZERO</b></div></div></Chrome>;
}

export function ProjectVisual({ slug }: ProjectVisualProps) {
  switch (slug) {
    case "auditoria-de-estoque": return <AuditVisual/>;
    case "categorizacao-com-ia": return <AiVisual/>;
    case "captura-ble-de-pesagem": return <BleVisual/>;
    case "cubagem-e-ux-documental": return <OperationsDashboardVisual/>;
    case "agenda-dinamica-de-turnos": return <ScheduleVisual/>;
    default: return null;
  }
}
