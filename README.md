# 🤖 WhatsApp ChatBot - Clínica Automática

Este projeto é um **ChatBot para WhatsApp** desenvolvido em **Node.js**, utilizando a biblioteca [`whatsapp-web.js`](https://github.com/pedroslopez/whatsapp-web.js) integrada à **API do ChatGPT (OpenAI)**.  
O objetivo é simular um **assistente automatizado de uma clínica médica**, capaz de interagir com pacientes e oferecer opções de atendimento, como **agendar consultas** ou **ver agendamentos existentes**.

---

## ⚙️ Tecnologias Utilizadas

- **Node.js**
- **whatsapp-web.js** → integração com WhatsApp Web
- **OpenAI API (ChatGPT)** → processamento inteligente das mensagens
- **dotenv** → gerenciamento de variáveis de ambiente
- **qrcode-terminal** → exibição do QR Code no terminal para login

---

## 📦 Estrutura do Projeto

whatsapp-chat-bot/
│
├── index.js # Código principal do bot
├── package.json # Dependências e scripts do projeto
├── .env # Chaves de API e configurações (não versionado)
├── .gitignore # Ignora node_modules e arquivos sensíveis
└── README.md # Este arquivo 😄


---

### 🧠 Lógica Básica

- O código principal (index.js) faz o seguinte:

1. Inicia uma sessão com o WhatsApp via whatsapp-web.js.
2. Mostra o QR Code no terminal.
3. Escuta novas mensagens recebidas.
4. Envia o texto recebido para o ChatGPT.
5. Retorna uma resposta formatada ao usuário no WhatsApp.

---

### ⚠️ Observações Importantes

- Este projeto é para fins educacionais/testes pessoais.
- O uso não oficial do WhatsApp Web pode resultar em bloqueio da conta se usado em massa.

---

### 🧹 Manutenção do Repositório

Durante a configuração:
- Removemos a pasta node_modules do histórico do Git.
- Adicionamos um .gitignore para evitar arquivos grandes.
- Mantivemos o repositório leve e limpo.

---

### 💙 Autoria

Desenvolvido por Júlia Oliveira e Luiza Pessoa 🧠
Projeto criado para testes e aprendizado de automação de mensagens com IA.
