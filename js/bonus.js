const etaPasseggero = prompt ('Inserisca età del passeggero');
const kmViaggio = prompt ('Inserisca i km da percorrere');
const numEta = parseInt(etaPasseggero);
const numKm = parseFloat(kmViaggio);
const prezzoKm = 0.21;
let discount = 0;
const prezzoBiglietto = numKm * prezzoKm;
const spanTicket = document.getElementById('ticket');
const spanEta = document.getElementById('invalidEta');
const spanKm = document.getElementById('invalidKm');


if (isNaN(numEta)) {
    spanEta.innerHTML = `<strong>La tua età è:</strong> *Inserisci valore numerico valido<br>
                        <strong>I chilometri della tratta sono:</strong> ${numKm} km<br>
                        <strong>Il prezzo del biglietto è:</strong> *Controlla i valori precedenti`;
} else if (isNaN(numKm) || numKm < 5 || numKm > 100) {
    spanKm.innerHTML = `<strong>La tua età è:</strong> ${numEta} anni<br>
                        <strong>I chilometri della tratta sono:</strong> *Inserisci valore km valido<br>
                        <strong>Il prezzo del biglietto è:</strong> *Controlla valori precedenti`;
} else if (!isNaN(numEta) && numEta < 18) {
    discount = (20 / 100);
    const prezzoCalcolato = prezzoBiglietto - prezzoBiglietto * discount;
    const prezzoFinale = prezzoCalcolato.toFixed(2);
    spanTicket.innerHTML = `<strong>La tua età è:</strong> ${numEta} anni<br>
                            <strong>I chilometri della tratta sono:</strong> ${numKm} km<br>
                            <strong>Il prezzo del biglietto è:</strong> ${prezzoFinale} €`;
} else if (!isNaN(numEta) && numEta > 65) {
    discount = 40 / 100;
    const prezzoCalcolato = prezzoBiglietto - prezzoBiglietto * discount;
    const prezzoFinale = prezzoCalcolato.toFixed(2);
    spanTicket.innerHTML = `<strong>La tua età è:</strong> ${numEta} anni<br>
                            <strong>I chilometri della tratta sono:</strong> ${numKm} km<br>
                            <strong>Il prezzo del biglietto è:</strong> ${prezzoFinale} €`;
} 