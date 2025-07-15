const makeWASocket = require("@whiskeysockets/baileys").default;
const {
  useMultiFileAuthState,
  DisconnectReason
} = require("@whiskeysockets/baileys");

const qrcode = require("qrcode-terminal");
const pino = require("pino");

async function startBot() {
  const { state, saveCreds } = await useMultiFileAuthState('./auth_info');

  const sock = makeWASocket({
    auth: state,
    logger: pino({ level: 'silent' }),
  });

  // Save credentials when updated
  sock.ev.on('creds.update', saveCreds);

  // QR code and connection updates
  sock.ev.on('connection.update', (update) => {
    const { connection, lastDisconnect, qr } = update;

    if (qr) {
      console.log("📲 Scan this QR code using WhatsApp > Linked Devices:\n");
      qrcode.generate(qr, { small: true }); // ✅ Show scannable QR
    }

    if (connection === 'close') {
      const shouldReconnect =
        lastDisconnect?.error?.output?.statusCode !== DisconnectReason.loggedOut;
      console.log('Connection closed. Reconnecting:', shouldReconnect);
      if (shouldReconnect) startBot();
    } else if (connection === 'open') {
      console.log('✅ Bot connected to WhatsApp!');
    }
  });

  // Message handler
  sock.ev.on('messages.upsert', async ({ messages }) => {
    const msg = messages[0];
    if (!msg.message || msg.key.fromMe) return;

    const text = msg.message.conversation || msg.message.extendedTextMessage?.text;

    if (text && text.toLowerCase() === 'hi') {
      await sock.sendMessage(msg.key.remoteJid, { text: 'Hello Welcome To Tech24indi Bot 🤖' });
    }

    if (text && text.toLowerCase() === 'bye') {
      await sock.sendMessage(msg.key.remoteJid, { text: 'bye 👋' });
}

    if (text && text.toLowerCase() === 'i love you') {
      await sock.sendMessage(msg.key.remoteJid, { text: 'i love you to ' });
}

    if (text && text.toLowerCase() === 'I Love You') {
      await sock.sendMessage(msg.key.remoteJid, { text: 'I Love You Too' });
      }

    if (text && text.toLowerCase() === 'Ki Korcho') {
      await sock.sendMessage(msg.key.remoteJid, { text: 'Bose Achi U?' });
      }

    if (text && text.toLowerCase() === '❤️') {
      await sock.sendMessage(msg.key.remoteJid, { text: '❤️❤️ '});
      }

    if (text && text.toLowerCase() === 'I Love You❤️') {
      await sock.sendMessage(msg.key.remoteJid, { text: 'Love You To ❤️🥰' });
      }

    if (text && text.toLowerCase() === 'I Miss You😌') {
      await sock.sendMessage(msg.key.remoteJid, { text: 'Miss You too😌' });
      }

    if (text && text.toLowerCase() === 'Assalamu Alaikum') {
      await sock.sendMessage(msg.key.remoteJid, { text: 'Wa Alaikum Assalam' });
      }

    if (text && text.toLowerCase() === 'assalamu alaikum') {
      await sock.sendMessage(msg.key.remoteJid, { text: 'Wa Alaikum assalam' });
      }

    if (text && text.toLowerCase() === 'assalamualaikum') {
      await sock.sendMessage(msg.key.remoteJid, { text: 'Wa alaikum Assalam' });
      }

    if (text && text.toLowerCase() === 'yt') {
      await sock.sendMessage(msg.key.remoteJid, { text: 'https://youtu.be/5w8txkoa0FQ' });
      }

    if (text && text.toLowerCase() === 'wp') {
      await sock.sendMessage(msg.key.remoteJid, { text: 'https://whatsapp.com/channel/0029VaxyzHsB4hdWoz0cmt3s' });
      }

    if (text && text.toLowerCase() === 'are you busy') {
      await sock.sendMessage(msg.key.remoteJid, { text: 'No' });
      }

    if (text && text.toLowerCase() === 'Are You Busy') {
      await sock.sendMessage(msg.key.remoteJid, { text: 'Na Bolo' });
      }

    if (text && text.toLowerCase() === 'Good Night') {
      await sock.sendMessage(msg.key.remoteJid, { text: 'Good Night bye' });
      }

    if (text && text.toLowerCase() === 'good night') {
      await sock.sendMessage(msg.key.remoteJid, { text: 'Good Night Bye' });
      }

    if (text && text.toLowerCase() === 'Pore Kotha Bolchi') {
      await sock.sendMessage(msg.key.remoteJid, { text: 'Ok' });
      }

    if (text && text.toLowerCase() === 'Allah Hafej') {
      await sock.sendMessage(msg.key.remoteJid, { text: 'Sm 2 U' });
      }

    if (text && text.toLowerCase() === 'AllahHafej') {
      await sock.sendMessage(msg.key.remoteJid, { text: 'Sm 2 U' });
      }

    if (text && text.toLowerCase() === 'allah hafej') {
      await sock.sendMessage(msg.key.remoteJid, { text: 'Sm 2 U' });
      }

    if (text && text.toLowerCase() === 'allahhafej') {
      await sock.sendMessage(msg.key.remoteJid, { text: 'Sm 2 U' });
 }

    if (text && text.toLowerCase() === 'How Are You') {
      await sock.sendMessage(msg.key.remoteJid, { text: ' I Am Fine' });
 }

    if (text && text.toLowerCase() === 'how are you') {
      await sock.sendMessage(msg.key.remoteJid, { text: 'i am fine' });
 }

    if (text && text.toLowerCase() === 'howareyou') {
      await sock.sendMessage(msg.key.remoteJid, { text: 'i Am Fine' });
 }

    if (text && text.toLowerCase() === 'Miss you') {
      await sock.sendMessage(msg.key.remoteJid, { text: 'Miss You to' });
 }

    if (text && text.toLowerCase() === 'Miss You') {
      await sock.sendMessage(msg.key.remoteJid, { text: 'Miss You To' });
 }

    if (text && text.toLowerCase() === 'miss you') {
      await sock.sendMessage(msg.key.remoteJid, { text: 'Miss You To' });
    }
  });
}

startBot();
