// 3. Generatore di "nomi cognomi" casuali: prendendo una lista di nomi e una
// lista di cognomi, Gatsby vuole generare una falsa lista di 3 invitati.

//Creare lista nomi e cognomi
const guestNames = [ 'Michele', 'Giovanni', 'Francesco', 'Matteo', 'Andrea', 'Manuele', 'Piero' ];
const guestLastnames = [ 'Rossi', 'Bisceglia', 'Guerra', 'Magnani' , 'Prencipe' ];

//Generare tre falsi invitati
for (let i = 0; i < 3; i++) {
    const randomNameindex = Math.floor(Math.random() * guestNames.length);
    const randomName = guestNames[randomNameindex]
    console.log(randomName);

    const randomLastnameindex = Math.floor(Math.random() * guestLastnames.length);
    const randomLastname = guestLastnames[randomLastnameindex]
    console.log(randomLastname);
}
