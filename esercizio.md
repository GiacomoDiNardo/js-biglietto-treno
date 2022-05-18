esercizio di oggi: calcolo del prezzo del biglietto del treno
cartella/repo: js-biglietto-treno
Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:

    il prezzo del biglietto è definito in base ai km (0.21 € al km)
    va applicato uno sconto del 20% per i minorenni
    va applicato uno sconto del 40% per gli over 65.
    L’output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.

Formula per il calcolo: km * 0.21 = prezzoBigliettoStampare in HTML una lista con eta inserità, km inseriti ed il prezzo finale

    eta: 50
    km: 120
    prezzzo: 24,50

BONUS:
validare/ controllare i dati inseriti

    età è un numero?
    età è stata inserita
    km è un numero valido?
    posso inserire un minimo / massimo di km possibili?


<!-- PSEUDOCODICE -->

Chiedere numero di chilometri da percorrere
chiedere età del passeggero
calcolare prezzo del biglietto (km * 0.21)
se età passeggero < 18 anni
    applica sconto del 20%
altrimenti se passeggero > 65 anni
    applica sconto del 40%

stampa prezzo finale biglietto con massimo 2 cifre