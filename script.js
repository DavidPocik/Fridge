// =========================================================
// 1. NASTAVENIA TELEGRAMU
// =========================================================
const BOT_TOKEN = 964201492:AAGM4Po6C_02e1CX46OT_NzSHVuuQA-wsds; // Token z @BotFather
const CHAT_ID = 8834376176; // ID z @userinfobot

// =========================================================
// 2. LOGIKA ODOSIELANIA
// =========================================================
document.getElementById('orderForm').addEventListener('submit', function(e) {
  e.preventDefault();

  // Načítanie hodnôt z inputov
  const meno = document.getElementById('meno').value;
  const telefon = document.getElementById('telefon').value;
  const sprava = document.getElementById('sprava').value;

  // Formátovanie textu správy
  const textSpravy = `🍕 *NOVÁ OBJEDNÁVKA*\n\n` +
                      `👤 *Meno:* ${meno}\n` +
                      `📞 *Tel:* ${telefon}\n` +
                      `📝 *Správa:* ${sprava}`;

  // URL pre Telegram API
  const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;

  // Odoslanie dát
  fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      chat_id: CHAT_ID,
      text: textSpravy,
      parse_mode: 'Markdown'
    })
  })
  .then(response => response.json())
  .then(data => {
    if (data.ok) {
      alert('Objednávka bola úspešne odoslaná!');
      document.getElementById('orderForm').reset();
    } else {
      alert('Chyba pri odosielaní: ' + data.description);
    }
  })
  .catch(error => {
    alert('Nastal problém s pripojením na server.');
    console.error(error);
  });
});