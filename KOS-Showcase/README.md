# 🚀 KOS Hub — Sistema de Apresentação de Protótipos para Clientes

O **KOS Hub** é uma plataforma leve, elegante e interativa para apresentar protótipos de sites e web apps para os clientes da agência **KOS**.

---

## 🛠️ Como Adicionar Novos Clientes e Protótipos

Tudo é controlado através do arquivo **`kos-config.js`**. Você não precisa alterar o código do Hub!

### Passos:

1. Salve os arquivos HTML do protótipo do novo cliente dentro da pasta de projetos.
2. Abra o arquivo `kos-config.js` e adicione um novo bloco de cliente na lista `clients`:

```javascript
{
  id: "nome-do-cliente",
  clientName: "Nome do Cliente / Empresa",
  segment: "Segmento de Atuação",
  status: "Em Aprovação",
  avatar: "🏢",
  description: "Descrição breve dos modelos apresentados.",
  prototypes: [
    {
      id: "op-a",
      title: "Opção A — Estilo Moderno",
      subtitle: "Descrição do conceito A",
      badge: "Opção A",
      badgeColor: "#00E699",
      url: "caminho/para/opcao-a.html"
    },
    {
      id: "op-b",
      title: "Opção B — Estilo Minimalista",
      subtitle: "Descrição do conceito B",
      badge: "Opção B",
      badgeColor: "#3B82F6",
      url: "caminho/para/opcao-b.html"
    }
  ]
}
```

---

## 🔗 Compartilhando com o Cliente

Você pode enviar o link do Hub diretamente para o cliente com a opção pré-selecionada:

- **Link direto para o cliente abrir em uma opção específica**:
  `https://seusite.com/KOS-Showcase/?client=silvia-nutri&proto=op-a`

- O botão **"🔗 Copiar Link"** no topo da tela gera esse link automaticamente para a opção que estiver visível no momento!

---

## ✨ Recursos Inclusos no KOS Hub
- **Seletor de Cliente**: Troque entre clientes rapidamente pelo menu superior.
- **Alternador de Opções**: Botões coloridos personalizáveis por opção.
- **Modos de Dispositivo**: Alterne a visualização entre **Computador**, **Notebook**, **Tablet** e **Celular**.
- **Botão Abrir Direto**: Permite abrir o protótipo em tela cheia sem o frame.
- **Gaveta de Feedback via WhatsApp**: Permite que o cliente aprove ou solicite ajustes com mensagem pré-formatada.
