# Lottatori di Strada

Picchiaduro 2D in pixel art, per uso privato fra amici.

Si gioca dal browser e si installa come app: apri il link dal telefono e scegli "Aggiungi a schermata Home". Funziona anche senza rete e si aggiorna da solo.

## Online

Dal menu, modalità **Online**: scegli il tuo lottatore e l'arena, poi scrivi il tuo nome e il **codice del gruppo**. Chi usa lo stesso codice si ritrova nella stessa sala e può sfidare chi vuole, 1 contro 1. Più coppie possono giocare nello stesso momento.

- Non c'è nessun server da pagare: i due telefoni si parlano direttamente (WebRTC). Per trovarsi usano punti di incontro pubblici e gratuiti, senza iscrizione. Sulla rete viaggiano solo i tasti premuti.
- La sala è chiusa: entra solo chi conosce il codice. Per togliere qualcuno per sempre basta cambiare codice e dirlo agli altri.
- Amministratore: in `online-config.js` metti il tuo ID (si legge in fondo alla sala, toccalo per copiarlo) dentro `admins`. Da quel momento accanto a ogni giocatore hai il tasto **Espelli**.
- Tutti devono avere la stessa versione del gioco. Se la sala dice "versione diversa", chiudete e riaprite il gioco.
- Se due amici non riescono a collegarsi fra loro (capita con certe reti del telefono), provate con il Wi-Fi. In alternativa si può aggiungere un server TURN in `online-config.js`.
- `online-lib.js` è la libreria [Trystero](https://github.com/dmotz/trystero) (licenza MIT), impacchettata in un file solo.

