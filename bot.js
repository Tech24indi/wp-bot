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
      await sock.sendMessage(msg.key.remoteJid, { text: 'https://youtube.com/@tech24indi' });
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

    if (text && text.toLowerCase() === 'i miss you') {
      await sock.sendMessage(msg.key.remoteJid, { text: 'Miss You To' });
      }

    if (text && text.toLowerCase() === 'I Miss You') {
      await sock.sendMessage(msg.key.remoteJid, { text: 'Miss You To' });
      }

    if (text && text.toLowerCase() === 'ki korcho') {
      await sock.sendMessage(msg.key.remoteJid, { text: 'bose achi Tumi ki korcho?' });
      }

    if (text && text.toLowerCase() === 'ami suye achi') {
      await sock.sendMessage(msg.key.remoteJid, { text: 'Gd' });
      }

    if (text && text.toLowerCase() === 'kmn acho') {
      await sock.sendMessage(msg.key.remoteJid, { text: 'alhamdulillah valo achi' });
      }

    if (text && text.toLowerCase() === 'ghumabe kokhon') {
      await sock.sendMessage(msg.key.remoteJid, { text: 'Ektu por ' });
      }

    if (text && text.toLowerCase() === 'vat kheyecho') {
      await sock.sendMessage(msg.key.remoteJid, { text: 'Hmm Tumi?' });
      }

    if (text && text.toLowerCase() === 'na') {
      await sock.sendMessage(msg.key.remoteJid, { text: 'kno?' });
      }

    if (text && text.toLowerCase() === 'Na') {
      await sock.sendMessage(msg.key.remoteJid, { text: 'Kno?' });
      }

    if (text && text.toLowerCase() === 'Tomake khub Miss korchi') {
      await sock.sendMessage(msg.key.remoteJid, { text: 'Ami O' });
      }

    if (text && text.toLowerCase() === 'tomake khub miss korchi') {
      await sock.sendMessage(msg.key.remoteJid, { text: 'Ami O' });
      }

    if (text && text.toLowerCase() === 'Wait') {
      await sock.sendMessage(msg.key.remoteJid, { text: 'Ok' });
      }

    if (text && text.toLowerCase() === 'good morning ') {
      await sock.sendMessage(msg.key.remoteJid, { text: 'Good Morning 😊' });
      }

    if (text && text.toLowerCase() === 'Good Morning ') {
      await sock.sendMessage(msg.key.remoteJid, { text: 'Good Morning 😊' });
      }

    if (text && text.toLowerCase() === 'Good Morning🌄 ') {
      await sock.sendMessage(msg.key.remoteJid, { text: 'Good Morning 😊' });
      }

    if (text && text.toLowerCase() === 'sad ') {
      await sock.sendMessage(msg.key.remoteJid, { text: '😔' });
      }

    if (text && text.toLowerCase() === 'Sad ') {
      await sock.sendMessage(msg.key.remoteJid, { text: '😔' });
      }

    if (text && text.toLowerCase() === 'Happy') {
      await sock.sendMessage(msg.key.remoteJid, { text: '🥰' });
      }

    if (text && text.toLowerCase() === 'happy') {
      await sock.sendMessage(msg.key.remoteJid, { text: '🥰' });
      }

    if (text && text.toLowerCase() === 'morning') {
      await sock.sendMessage(msg.key.remoteJid, { text: 'Good Morning' });
      }

    if (text && text.toLowerCase() === 'Morning') {
      await sock.sendMessage(msg.key.remoteJid, { text: 'Good Morning' });
      }

    if (text && text.toLowerCase() === 'good morning') {
      await sock.sendMessage(msg.key.remoteJid, { text: 'Good Morning' });
      }

    if (text && text.toLowerCase() === 'Good Morning') {
      await sock.sendMessage(msg.key.remoteJid, { text: 'Good Morning' });
      }

    if (text && text.toLowerCase() === 'MORNING') {
      await sock.sendMessage(msg.key.remoteJid, { text: 'Good Morning' });
      }

    if (text && text.toLowerCase() === 'GOOD MORNING') {
      await sock.sendMessage(msg.key.remoteJid, { text: 'Good Morning' });
      }

    if (text && text.toLowerCase() === 'O sona ki korcho') {
      await sock.sendMessage(msg.key.remoteJid, { text: 'ai to janu bose achi' });
      }

    if (text && text.toLowerCase() === 'o sona ki korcho') {
      await sock.sendMessage(msg.key.remoteJid, { text: 'ai to janu bose achi' });
      }

    if (text && text.toLowerCase() === 'O sona') {
      await sock.sendMessage(msg.key.remoteJid, { text: 'Bolo Janu' });
      }

    if (text && text.toLowerCase() === 'o sona') {
      await sock.sendMessage(msg.key.remoteJid, { text: 'Bolo Janu' });
    }
  });
}

startBot();
