/**
 * Script da eseguire SOLO nel Google Sheet privato esistente.
 * Celle verificate il 19 ottobre 2026:
 * Nicola: Dashboard!A5 (valore), Dashboard!H5 (base).
 * Madre: 'Dashboard Madre'!C5 (valore), A5 (base).
 * Nessun dato privato o credenziale è incorporato.
 */
function registraStoricoPatrimonio() {
  const book = SpreadsheetApp.getActiveSpreadsheet();
  const history = book.getSheetByName('Storico Patrimonio');
  if (!history) throw new Error('Manca il foglio Storico Patrimonio');
  const date = Utilities.formatDate(new Date(), book.getSpreadsheetTimeZone(), 'yyyy-MM-dd');
  const sources = [
    {name:'Nicola', tab:'Dashboard', value:'A5', base:'H5'},
    {name:'Madre', tab:'Dashboard Madre', value:'C5', base:'A5'}
  ];
  const previous = history.getLastRow() > 1
    ? history.getRange(2, 1, history.getLastRow() - 1, 2).getValues() : [];
  for (const source of sources) {
    const tab = book.getSheetByName(source.tab);
    if (!tab) throw new Error('Scheda assente: ' + source.tab);
    const value = tab.getRange(source.value).getValue();
    const base = tab.getRange(source.base).getValue();
    if (![value,base].every(n => typeof n === 'number' && Number.isFinite(n) && n >= 0))
      throw new Error('Valore non valido: ' + source.name);
    const delta = value - base;
    const record = [date, source.name, value, base, delta, base > 0 ? delta / base : '',
      source.tab + '!' + source.value + '/' + source.base,
      source.name === 'Madre' ? 'Valore stimato: verificare NAV e quantità' : 'Confronto con base fissa; non rendimento TWR'];
    const index = previous.findIndex(row => {
      const d = row[0] instanceof Date ? Utilities.formatDate(row[0], book.getSpreadsheetTimeZone(), 'yyyy-MM-dd') : String(row[0]).slice(0,10);
      return d === date && row[1] === source.name;
    });
    if (index >= 0) history.getRange(index + 2, 1, 1, record.length).setValues([record]);
    else history.appendRow(record);
  }
}
/** Eseguire una volta dopo la verifica, poi creare un trigger giornaliero dal pannello Apps Script. */
