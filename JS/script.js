/*
*Consegna:*
Scrivi un programma che stampi in console i numeri da 1 a 100,
ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”.
Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.
*Prima di partire a scrivere codice poniamoci qualche domanda:*
Come faccio a sapere se un numero è divisibile per un altro?
Abbiamo visto qualcosa di particolare che possiamo usare?
*Consigli del giorno:*
1. Scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
2. Proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"
*BONUS 1:*
Crea un container nel DOM , aggiungendo (attraverso la funzione append() o innerHTML) un elemento html con il numero o la stringa corretta da mostrare.
*BONUS 2:*
Applica stili differenti agli elementi aggiunti al DOM nel BONUS 1, a seconda che il valore inserito sia un numero, un fizz, un buzz o un fizzbuzz.
Se sei a corto di idee per lo stile, potresti prendere spunto dallo screenshot fornito in consegna.
Buon lavoro e buon divertimento! :faccia_leggermente_sorridente:
*/

for (let i = 0; i <= 100; i++){
        
    //cycle stamp condition
    if(i % 3 == 0 && i % 5 == 0){
        console.log('FizzBuzz');

        //stamp box fizzbuzz
        document.getElementById('display').innerHTML +=`
        <div class="p-2 text-center fw-semibold fs-5">
            <div class="fizzbuzz">
                <p>FizzBuzz</p>
                <hr>
                <p>${i}</p>
            </div>
        </div>    
        `;

    }else if (i % 3 == 0){
        console.log('Fizz');

        //stamp box fizz
        document.getElementById('display').innerHTML +=`
        <div class="p-2 text-center fw-semibold fs-5">
            <div class="fizz">
                <p>Fizz</p>
                <hr>
                <p>${i}</p>
            </div>
        </div>
        `;

    }else if (i % 5 == 0){
        console.log('Buzz');

        //stamp box buzz
        document.getElementById('display').innerHTML +=`
        <div class="p-2 text-center fw-semibold fs-5">
            <div class="buzz">
                <p>Buzz</p>
                <hr>
                <p>${i}</p>
            </div>
        </div>   
        `;
    }else {
        console.log(i);
        //stamp number
        document.getElementById('display').innerHTML +=`
        <div class="p-2 text-center fw-semibold fs-5">
            <div class="number">
                <p>${i}</p>
            </div>
        </div>
        `;
    }
}

