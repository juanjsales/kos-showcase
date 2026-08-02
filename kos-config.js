/**
 * ====================================================================
 * KOS WEB & AUTOMAÇÃO - CONFIGURAÇÃO CENTRAL DE CLIENTES E PROTÓTIPOS
 * ====================================================================
 * 
 * Para adicionar um novo cliente:
 * 1. Crie uma pasta em: /clientes/<id-do-cliente>/
 * 2. Adicione as opções em HTML: opcao-a.html, opcao-b.html, etc.
 * 3. Adicione a estrutura abaixo na lista 'clients'.
 */

const KOS_HUB_CONFIG = {
  agency: {
    name: "KOS",
    sub: "Web & Automação",
    brandColor: "#22d3ee",
    contactWhatsapp: "5521987385146"
  },
  
  clients: [
    {
      id: "silvia-nutri",
      clientName: "Dra. Silvia de Oliveira Lemos",
      segment: "Nutrição Clínica, Esportiva e Emagrecimento",
      status: "Em Aprovação",
      avatar: "🌿",
      description: "Modelos de site para clínica de nutrição da Dra. Silvia de Oliveira Lemos.",
      prototypes: [
        {
          id: "op-a",
          title: "Opção A — Wellness & Clinical Luxury",
          subtitle: "Verde Floresta • Dourado • Estilo Editorial Sophisticated",
          badge: "Recomendado",
          badgeColor: "#C69C5E",
          url: "clientes/silvia-nutri/opcao-a.html"
        },
        {
          id: "op-b",
          title: "Opção B — Performance & Sports Focus",
          subtitle: "Dark Mode • Verde Menta • Alta Energia & Treinos",
          badge: "Alta Energia",
          badgeColor: "#00E699",
          url: "clientes/silvia-nutri/opcao-b.html"
        },
        {
          id: "op-c",
          title: "Opção C — SOL OneScreen Executive Hub",
          subtitle: "100% Single Viewport • Sem Rolagem da Página • Painel de Abas Interativo",
          badge: "OneScreen (Sem Rolagem)",
          badgeColor: "#9eb896",
          url: "clientes/silvia-nutri/opcao-c.html"
        },
        {
          id: "op-d",
          title: "Opção D — Official Card & Botanical Line-Art",
          subtitle: "Verde Sage • Linhas Orgânicas • Logo Frutas & Estilo Cartão Oficial",
          badge: "Cartão Oficial",
          badgeColor: "#92a988",
          url: "clientes/silvia-nutri/opcao-d.html"
        },
        {
          id: "op-e",
          title: "Opção E — Sage Minimalist & Health Hub",
          subtitle: "Verde Floresta • Calculadora IMC • Glassmorphism",
          badge: "Health Hub",
          badgeColor: "#b3c8a7",
          url: "clientes/silvia-nutri/opcao-e.html"
        },
        {
          id: "op-f",
          title: "Opção F — SOL Lotus Glow & Signature Elegance",
          subtitle: "Sand Nude • Logo Lótus Dourada • Assinatura Cursiva • Diagnóstico 360°",
          badge: "Lótus Nude",
          badgeColor: "#c5a059",
          url: "clientes/silvia-nutri/opcao-f.html"
        },
        {
          id: "op-g",
          title: "Opção G — SOL Holistic Bio-Reset Timeline",
          subtitle: "Velvet Nude • Assinatura Cursiva • Cronograma 30 Dias",
          badge: "Bio-Reset",
          badgeColor: "#5e8465",
          url: "clientes/silvia-nutri/opcao-g.html"
        },
        {
          id: "op-h",
          title: "Opção H — SOL Mouse-Driven Interactive Experience",
          subtitle: "Parallax 3D no Mouse • Spotlight Cards • Lente de Revelação",
          badge: "Interativo no Mouse",
          badgeColor: "#c9a55c",
          url: "clientes/silvia-nutri/opcao-h.html"
        },
        {
          id: "op-i",
          title: "Opção I — SOL Golden Hour Luxury & VIP Concierge",
          subtitle: "Dourado Champagne • Concierge VIP • Simulador de Metas",
          badge: "VIP Luxury",
          badgeColor: "#cba358",
          url: "clientes/silvia-nutri/opcao-i.html"
        },
        {
          id: "op-j",
          title: "Opção J — Organic Minimalist & Soft",
          subtitle: "Warm Sand • Terracota • Nutrição Humanizada",
          badge: "Minimalista",
          badgeColor: "#D87D56",
          url: "clientes/silvia-nutri/opcao-j.html"
        },
        {
          id: "op-k",
          title: "Opção K — SOL Neo-Brutalist & Botanical Pop",
          subtitle: "Vibrant Magazine Style • Tipografia Forte & Contrastes",
          badge: "Novo (Neo-Brutalist)",
          badgeColor: "#f4d068",
          url: "clientes/silvia-nutri/opcao-k.html"
        },
        {
          id: "op-l",
          title: "Opção L — SOL Tech Bio-Hacking & Metabolic Matrix",
          subtitle: "Cyberpunk Bio-Hacking • Calculadora Circadiana • Neon Matrix",
          badge: "Novo (Bio-Hacking)",
          badgeColor: "#00ff9d",
          url: "clientes/silvia-nutri/opcao-l.html"
        }
      ]
    }
  ]
};
