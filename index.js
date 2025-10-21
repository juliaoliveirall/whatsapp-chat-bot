import pkg from 'whatsapp-web.js';
const { Client, LocalAuth } = pkg;
import qrcode from "qrcode-terminal";
import dotenv from "dotenv";
import OpenAI from "openai";

dotenv.config();

const client = new Client({
  authStrategy: new LocalAuth(),
});

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const sessions = {};

client.on("qr", (qr) => {
  console.log("📱 Escaneie o QR Code para conectar o bot:");
  qrcode.generate(qr, { small: true });
});

client.on("ready", () => {
  console.log("✅ Bot conectado com sucesso!");
});

client.on("message", async (message) => {
  const from = message.from;
  const userMessage = message.body.trim();

  if (message.fromMe) return;

  if (!sessions[from]) {
    sessions[from] = { step: "inicio" };
  }

  const session = sessions[from];

  if (session.step === "inicio") {
    await message.reply(
      "Olá! 👋\n\nSeja bem-vindo(a) à *Oficina da UNINASSAU Olinda*. 🏥🦷\n\nSou *Luna*, assistente virtual e estou aqui para te ajudar 💙\n\nPor favor, selecione uma opção:\n\n1️⃣ Agendar consulta\n2️⃣ Ver agendamentos\n\nResponda com o número da opção."
    );
    session.step = "menu_principal";
    return;
  }

  if (session.step === "menu_principal") {
    if (userMessage === "1") {
      await message.reply(
        "🗓️ Ótimo! Vamos agendar sua consulta.\n\nEscolha uma opção:\n1️⃣ Ver agenda disponível\n2️⃣ Voltar ao menu principal"
      );
      session.step = "agendamento";
      return;
    } else if (userMessage === "2") {
      await message.reply(
        "📋 Seus agendamentos atuais:\n\n🦷 Limpeza - 23/10 às 14h\n🦷 Avaliação - 30/10 às 10h\n\nDeseja *remarcar* ou *cancelar* algum? (responda com a opção)"
      );
      session.step = "ver_agendamentos";
      return;
    } else {
      await message.reply("Por favor, escolha *1* ou *2* 😊");
      return;
    }
  }

  if (session.step === "agendamento") {
    if (userMessage === "1") {
      await message.reply(
        "📅 Agenda disponível:\n\n✅ 23/10 - 14h\n✅ 24/10 - 10h\n✅ 25/10 - 16h\n\nDigite a data desejada (ex: 24/10)."
      );
      session.step = "escolher_data";
      return;
    } else if (userMessage === "2") {
      session.step = "inicio";
      await message.reply("Voltando ao menu principal...");
      return;
    } else {
      await message.reply("Por favor, escolha *1* ou *2* 😊");
      return;
    }
  }

  if (session.step === "escolher_data") {
    const dataEscolhida = userMessage;
    await message.reply(
      `Perfeito! 🦷\nSua consulta foi agendada para *${dataEscolhida}*.\n\nDeseja adicionar alguma observação? (ex: dor no dente, retorno, avaliação...)`
    );
    session.step = "observacao";
    return;
  }

  if (session.step === "observacao") {
    const observacao = userMessage;

    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content:
            "Você é uma recepcionista de clínica odontológica. Resuma a observação do paciente de forma educada e confirme o agendamento.",
        },
        { role: "user", content: observacao },
      ],
    });

    const resumo = response.choices[0].message.content;

    await message.reply(
      `${resumo}\n\n✅ Consulta confirmada! Obrigado por escolher a Clínica-Escola UNINASSAU Olinda 💙`
    );

    session.step = "inicio";
    return;
  }

  const chatResponse = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      { role: "system", content: "Você é uma atendente de clínica odontológica simpática e prestativa." },
      { role: "user", content: userMessage },
    ],
  });

    const reply = chatResponse.choices[0].message.content.trim();
    await message.reply(reply);
});

client.initialize();
