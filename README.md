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

## 🚀 Como Executar o Projeto

Siga os passos abaixo para configurar e rodar o bot em sua máquina local.

### 1. Pré-requisitos

* **[Node.js](https://nodejs.org/en/)** (versão 18 ou superior recomendada)
* Uma conta do **WhatsApp** ativa
* Uma chave de API da **[OpenAI](https://platform.openai.com/account/api-keys)**

### 2. Instalação

1.  Clone este repositório (ou apenas baixe os arquivos):
    ```bash
    git clone [https://github.com/seu-usuario/seu-repositorio.git](https://github.com/seu-usuario/seu-repositorio.git)
    ```
2.  Acesse a pasta do projeto:
    ```bash
    cd whatsapp-chat-bot
    ```
3.  Instale todas as dependências:
    ```bash
    npm install
    ```

### 3. Configuração

1.  Crie um arquivo chamado `.env` na raiz do projeto.
2.  Adicione sua chave de API da OpenAI dentro deste arquivo:
    ```ini
    OPENAI_API_KEY=sk-sua-chave-secreta-aqui
    ```

### 4. Execução

1.  Inicie o bot:
    ```bash
    node index.js
    ```
    *(Ou `npm start` se você configurar um script no `package.json`)*

2.  Um **QR Code** aparecerá no seu terminal.
3.  Abra o WhatsApp no seu celular, vá em "Aparelhos conectados" e escaneie o QR Code.
4.  Pronto! O bot estará online e respondendo às mensagens.

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
