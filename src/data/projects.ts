export type ProjectCase = {
  slug: string;
  number: string;
  title: string;
  category: string;
  summary: string;
  problem: string;
  approach: string;
  architecture: string[];
  technologies: string[];
  outcomes: string[];
};

export const projects: ProjectCase[] = [
  {
    slug: "auditoria-de-estoque",
    number: "01",
    title: "Auditoria de estoque em tempo real",
    category: "OPERAÇÕES · SISTEMAS · DADOS",
    summary: "Um fluxo digital de conferência com rastreabilidade e controle de concorrência para auditorias de estoque.",
    problem: "A auditoria manual de estoque estava sujeita a erros de digitação, demora no repasse de informações e baixa rastreabilidade. Dois auditores também podiam iniciar a contagem do mesmo lote ao mesmo tempo.",
    approach: "A solução conecta uma interface móvel de operação a uma camada de validação e a diferentes armazenamentos: banco relacional para histórico e Firestore para estado em tempo real. Um bloqueio distribuído reserva o lote durante a contagem.",
    architecture: ["Coletor móvel", "Validação", "Bloqueio em tempo real", "Dados e painel"],
    technologies: ["AppSheet", "Apps Script", "Node.js", "JavaScript", "Python", "PostgreSQL", "MySQL", "Firestore", "Looker Studio"],
    outcomes: ["Registro das contagens com trilha de auditoria", "Bloqueio do lote durante a contagem para evitar disputas", "Painel de dados operacionais para acompanhamento"],
  },
  {
    slug: "categorizacao-com-ia",
    number: "02",
    title: "Triagem de produtos assistida por IA",
    category: "AUTOMAÇÃO · IA · INTEGRAÇÕES",
    summary: "Um pipeline interpreta descrições de produtos, sugere categorias e direciona casos incertos para revisão humana.",
    problem: "A entrada de novos produtos exigia triagem manual para escolher uma categoria. Em períodos de grande volume, a análise de descrições tornava-se um gargalo.",
    approach: "O fluxo no n8n envia a descrição a um modelo de IA por API e pede uma resposta estruturada em JSON. Webhooks encaminham a classificação para atualização dos dados; resultados com baixa confiança seguem para revisão de uma pessoa.",
    architecture: ["Descrição do produto", "Fluxo n8n", "IA + validação", "Atualização ou revisão"],
    technologies: ["n8n", "APIs de IA", "Webhooks", "REST", "JSON"],
    outcomes: ["Classificação inicial das descrições por IA", "Revisão humana para respostas com baixa confiança", "Sincronização do resultado com os dados operacionais"],
  },
  {
    slug: "captura-ble-de-pesagem",
    number: "03",
    title: "Captura de pesagem por Bluetooth",
    category: "IOT · PYTHON · AUTOMAÇÃO",
    summary: "Uma ponte entre uma balança BLE e o fluxo de registro reduz a transcrição manual do peso.",
    problem: "Os pesos medidos por balanças inteligentes ficavam restritos ao aplicativo do equipamento. O operador precisava ler a tela e digitar o valor novamente no sistema.",
    approach: "A comunicação BLE foi analisada para identificar os pacotes e características que carregam a medição. Um script em Python decodifica o valor e combina o loop assíncrono de captura com uma interface Tkinter.",
    architecture: ["Balança BLE", "Captura Python", "Decodificação", "Registro e log"],
    technologies: ["Bluetooth Low Energy", "nRF Connect", "Python", "Bleak", "GATT", "Tkinter", "Bot API"],
    outcomes: ["Captura da medida por Bluetooth para evitar transcrição manual", "Interface desktop para acompanhar as leituras", "Registro remoto das medições"],
  },
  {
    slug: "cubagem-e-ux-documental",
    number: "04",
    title: "App de cubagem com painel operacional",
    category: "CUBAGEM · OPERAÇÕES · DASHBOARD",
    summary: "Um aplicativo de cubagem acompanhado por um painel visual de coletas, validações, pendências e atividade da operação.",
    problem: "A equipe precisava acompanhar em um só lugar o andamento das coletas e identificar itens pendentes ou com divergências durante a operação.",
    approach: "A solução combina o uso do equipamento de medição com um painel de acompanhamento operacional. Gráficos e indicadores organizam o status da fila, a produtividade por período e o resumo de atividade, enquanto um guia visual apoia o primeiro acesso aos fluxos de qualidade.",
    architecture: ["Coleta e medição", "Validação dos dados", "Painel por período", "Acompanhamento operacional"],
    technologies: ["Análise de processo", "CubiScan", "UX Writing", "Design da informação", "5S"],
    outcomes: ["Painel para acompanhar coletas e itens pendentes", "Visualização da produtividade por hora e período", "Fluxo de validação com atenção às divergências", "Guia visual de apoio ao primeiro acesso"],
  },
  {
    slug: "agenda-dinamica-de-turnos",
    number: "05",
    title: "Agenda dinâmica para escalas de trabalho",
    category: "AUTOMAÇÃO · CALENDÁRIO · DADOS",
    summary: "Uma regra de calendário calcula dias de trabalho a partir do ciclo da escala e mantém convites alinhados aos turnos.",
    problem: "A escala de ciclos de três dias de trabalho e dois de descanso podia ser interpretada incorretamente quando gestores dependiam apenas das cores exibidas no calendário.",
    approach: "A lógica calcula o ciclo a partir de uma data de referência, em vez de usar a cor como fonte da verdade. Tarefas diárias no Apps Script sincronizam os eventos com o Google Calendar API; uma matriz de horários alimenta um painel de disponibilidade.",
    architecture: ["Data de referência", "Cálculo do ciclo", "Sincronização diária", "Calendário e painel"],
    technologies: ["Google Apps Script", "JavaScript", "Calendar API", "CRON", "Looker Studio"],
    outcomes: ["Cálculo do dia de trabalho a partir do início do ciclo", "Sincronização dos eventos com os turnos calculados", "Visualização da disponibilidade por matriz de horários"],
  },
];

export const findProject = (slug: string) => projects.find((project) => project.slug === slug);
