# PATRIMONIO Premium

Anteprima frontend professionale e mobile-first per le dashboard Nicola e Madre.

## Stato
- Interfaccia dark premium con variazioni EUR/% e selettore temporale.
- Nessun dato patrimoniale privato, password, chiave HMAC o URL segreto incorporato.
- Il progetto **non** è ancora collegato all'app pubblicata su spiffychick16.chatgpt.site.
- I grafici storici richiedono serie giornaliere autentiche: distinguere contributi e rendimenti; non inventare performance.

## Sviluppo
Aprire `index.html` nel browser per visualizzare la struttura. L'interfaccia espone internamente `update({current,base,holdings,updated})` come contratto preliminare per una futura integrazione autenticata. Prima di collegare dati privati, implementare autenticazione, autorizzazione lato server, controlli d'accesso e nessuna chiave in frontend. Verificare l'identità degli strumenti, i prezzi condivisi e i dati prima del rilascio.

## Distribuzione
Il repository è pubblico: **non committare mai dati personali o segreti**. Non distribuire questa anteprima come sostituto dell'app esistente finché non si dispone del progetto originario o di un percorso di migrazione verificato.
