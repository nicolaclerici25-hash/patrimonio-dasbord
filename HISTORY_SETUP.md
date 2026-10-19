# Storico giornaliero privato

Il grafico mensile e annuale richiede rilevazioni effettive, non stime ricostruite. La raccolta deve avvenire nel Google Sheet privato, non nel repository pubblico.

## Procedura di implementazione

1. Creare una scheda privata `Storico Patrimonio` con colonne `Data`, `Portafoglio`, `Valore investito EUR`, `Base confronto EUR`, `Flussi netti EUR`, `Data/ora rilevazione`, `Fonte`.
2. Registrare ogni giorno, dopo il consolidamento delle quotazioni, una riga per Nicola e una per Madre; se la data esiste, aggiornare la riga anziché duplicarla.
3. Verificare che i valori siano numerici e che tutte le formule abbiano terminato il ricalcolo. Se manca una quotazione essenziale, segnare la rilevazione come parziale, senza dichiararla definitiva.
4. Tenere distinti variazione del valore, contributi netti e rendimento. Per il rendimento percentuale usare una metodologia coerente (per esempio TWR) e conservare i flussi con data.
5. Pubblicare i dati solo tramite endpoint autenticato, mai tramite link pubblico al foglio, chiavi nel JavaScript o file JSON nel repository.
6. Controllare manualmente le celle sorgente prima di creare un trigger automatico.

## Stato
Documentazione pronta. Trigger, endpoint e pubblicazione non ancora configurati. Il codice sorgente della PWA esistente non è ancora disponibile.
