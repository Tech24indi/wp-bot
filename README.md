<p align="center">
  <img src=".github/misc/logo.png">
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Version-2.3.5-green?style=for-the-badge">
  <img src="https://img.shields.io/github/license/Tech24indi/zc?style=for-the-badge">
  <img src="https://img.shields.io/github/stars/Tech24indi/zc?style=for-the-badge">
  <img src="https://img.shields.io/github/issues/Tech24indi/zc?color=red&style=for-the-badge">
  <img src="https://img.shields.io/github/forks/Tech24indi/zc?color=teal&style=for-the-badge">
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Author-Tech24indi-blue?style=flat-square">
  <img src="https://img.shields.io/badge/Open%20Source-Yes-darkgreen?style=flat-square">
  <img src="https://img.shields.io/badge/Maintained%3F-Yes-lightblue?style=flat-square">
  <img src="https://img.shields.io/badge/Written%20In-Bash-darkcyan?style=flat-square">
  <img src="https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fgithub.com%2FTech24indi%2Fzc&title=Visitors&edge_flat=false"/></a>
</p>
# 🤖 WhatsApp Bot using Baileys (Termux Compatible)

A simple WhatsApp bot built using [@whiskeysockets/baileys](https://github.com/WhiskeySockets/Baileys), designed to run directly on **Termux**. This bot connects to WhatsApp Web and responds to simple text commands like `hi` and `bye`.

---

## 📱 Features

- 📲 QR Code authentication for WhatsApp Web
- 💬 Auto-replies to incoming messages:
  - `hi` → Hello from Termux Bot 🤖
  - `bye` → Goodbye 👋
- 🔁 Reconnects automatically if disconnected (unless logged out)
- 🧠 Uses Multi-File Auth for session persistence

---

## 📦 Installation

### 1. Termux Setup

```bash

pkg update && pkg upgrade -y
pkg install nodejs git -y
apt update -y
apt upgrade -y
```

### 2. Clone the Repository

```bash
git clone https://github.com/Tech24indi/wp-bot
cd wp-bot
```

### 3. Install Dependencies

```bash
npm install @whiskeysockets/baileys qrcode-terminal pino
```

---

## 🚀 Run the Bot

```bash
node bot.js
```


- A QR code will appear in the terminal.
- Scan it using **WhatsApp > Linked Devices**.

---

## 🗂 Folder Structure

```
whatsapp-bot-termux/
├── auth_info/       # Auto-created: stores session credentials
├── bot.js           # Your bot script file
└── README.md        # This file
```

---

## 🔐 Authentication

- The `auth_info/` folder is automatically created to save your WhatsApp session.
- Don’t delete it unless you want to reset and re-scan the QR code.

---

## 📌 Notes

- Works best on Termux or Linux environments.
- Only handles basic text messages by default.
- No media, group, or advanced command handling unless extended.

---

## 🧑‍💻 Author

Made with ❤️ by **Tech24indi**  
Feel free to fork, modify, and share!

---

## 📄 License

This project is licensed under the MIT License (LICENSE)
