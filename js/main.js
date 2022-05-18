const etaPasseggero = prompt ('Inserisca età del passeggero');
const kmViaggio = prompt ('Inserisca i km da percorrere');
const prezzoKm = 0.21;
let discount = 0
const prezzoBiglietto = kmViaggio * prezzoKm;

if (etaPasseggero < 18) {
    discount = (20 / 100);
} else if (etaPasseggero > 65) {
    discount = 40 / 100;
}

const prezzoCalcolato = prezzoBiglietto - prezzoBiglietto * discount;
const prezzoFinale = prezzoCalcolato.toFixed(2);

const spanTicket = document.getElementById('ticket')
spanTicket.innerHTML = `<strong>La tua età è:</strong> ${etaPasseggero} anni<br>
                        <strong>I chilometri della tratta sono:</strong> ${kmViaggio} km<br>
                        <strong>Il prezzo del biglietto è:</strong> ${prezzoFinale} €`