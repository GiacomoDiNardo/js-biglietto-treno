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

const prezzoFinale = prezzoBiglietto - prezzoBiglietto * discount;

const spanTicket = document.getElementById('ticket')
spanTicket.innerHTML = `<strong>La tua età è:</strong> ${etaPasseggero}<br>
                        <strong>I chilometri della tratta sono:</strong> ${kmViaggio}<br>
                        <strong>Il prezzo del biglietto è:</strong> ${prezzoFinale}`