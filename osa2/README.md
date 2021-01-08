# 2a Kokoelmien renderöinti ja moduulit

- .map():lla ja muilla toistorakenteilla elementtejä luodessa niillä pitää olla uniikki key-property. Ei suoraan listaindeksi, mielummin uniikki ja pysyvä.

- `import Component from './components/Component'` ja `export default Component`

# 2b Lomakkeet

- Muista onChange controlled componentteihin.
- Filter-funktio: `notes.filter(note => note.important === true)` palauttaa noten jos tärkeä. Voi käyttää suoraa booleania tietenkin.

# 2c Palvelindata

- JSON server `npx json-server --port=3001 --watch db.json`
