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
          id: "op-d",
          title: "Opção D — Official Card & Botanical Line-Art",
          subtitle: "Verde Sage • Linhas Orgânicas • Logo Frutas & Estilo Cartão Oficial",
          badge: "Novo (Cartão Oficial)",
          badgeColor: "#92a988",
          url: "clientes/silvia-nutri/opcao-d.html"
        },
        {
          id: "op-e",
          title: "Opção E — Sage Minimalist & Health Hub",
          subtitle: "Verde Floresta • Calculadora IMC • Glassmorphism",
          badge: "Novo (Health Hub)",
          badgeColor: "#b3c8a7",
          url: "clientes/silvia-nutri/opcao-e.html"
        },
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
          title: "Opção C — Organic Minimalist & Soft",
          subtitle: "Warm Sand • Terracota • Nutrição Humanizada",
          badge: "Minimalista",
          badgeColor: "#D87D56",
          url: "clientes/silvia-nutri/opcao-c.html"
        }
      ]
    }
  ]
};
