# 1a Reactin alkeet

- App.js, App.css, App.test.js, logo.svg ja serviceWorker.js voi poistaa kunnet kuitenkaan muista.
- Babel hoitaa käännöksen JSX > js

## Muistilista

- Komponenttien nimet isolla
- Juurielementin pakollisuuden voi kiertää fragment-elementillä `<></>`

# 1b JS

- var funktio/global scope, let block scope
- taulukon destrukturointi: `const foo = ['one', 'two', 'three']; const [red, yellow, green] = foo;` red=one, yellow=two jne. Ei tarvi olla constructorissa. Default-arvon voi myös asettaa esim. `red='one'` jos destrukturoitavan taulukon kyseinen elementti on undefined.

## Muistilista

- objekti jolla funktio joka käyttää this -> viite olion funktioon -> kutsutaan funktiota viitteen kautta -> this osoittaa globaaliin eikä objektiin, voidaan korjata bindaamalla referenssi objektiin

# 1c Komponentin tila ja tapahtumankäsittely

## Muistilista

- const Komponentti = ({ name, age }) => {} propsien destrukturointi

# 1d Monimutkainen tila

- ehdollinen renderöinti

## Muistilista

- object spread: `{ ...clicks, right: clicks.right + 1 }` clicks olio, tulos kopio clicksistä, right-kentän arvo kasvaa yhdellä
- TILAA EI SAA MUUTTAA SUORAAN, `let new = old;` ei luo kopiota vaan viitteen, new:n muuttaminen muuttaa oldia. Esim object spread, array.concat
- Selaimen debugger, breakpointit, scope nähtävissä
- useState, useEffect ei saa loopata, kutsua ehtolauseista
