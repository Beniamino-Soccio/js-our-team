console.log('js ok');
/*
Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.

MILESTONE 0:
Creare l’array di oggetti con le informazioni fornite.

MILESTONE 1:
Stampare su console le informazioni di nome, ruolo e la stringa della foto

MILESTONE 2:
Stampare le stesse informazioni su DOM sottoforma di stringhe

BONUS 1:
Trasformare la stringa foto in una immagine effettiva

BONUS 2:
Organizzare i singoli membri in card/schede (allego qualche immagine per darvi ispirazione

Consigli del giorno:
Ragioniamo come sempre a step.
Prima la logica in italiano e poi traduciamo in codice.
E ricordiamoci che console.log() è nostro amico!
Buon lavoro!

# DATI
Wayne Barnett |	Founder & CEO        |	wayne-barnett-founder-ceo.jpg
Angela Caroll |	Chief Editor         |	angela-caroll-chief-editor.jpg
Walter Gordon |	Office Manager       |	walter-gordon-office-manager.jpg
Angela Lopez  |	Social Media Manager |	angela-lopez-social-media-manager.jpg
Scott Estrada |	Developer            |	scott-estrada-developer.jpg
Barbara Ramos |	Graphic Designer     |	barbara-ramos-graphic-designer.jpg
*/
//prendo gli elementi di interesse dal dom
const teamList = document.getElementById('teammates-list');
//creazione array di oggetti con i dati
const teammates = [
    {name: 'Wayne Barnett', role: 'Founder & CEO', photo: 'wayne-barnett-founder-ceo.jpg'},
    {name: 'Angela Caroll', role: 'Chief Editor', photo: 'angela-caroll-chief-editor.jpg'},
    {name: 'Walter Gordon', role: 'Office Manager', photo: 'walter-gordon-office-manager.jpg'},
    {name: 'Angela Lopez', role: 'Social Media Manager', photo: 'angela-lopez-social-media-manager.jpg'},
    {name: 'Scott Estrada', role: 'Developer', photo: 'scott-estrada-developer.jpg'},
    {name: 'Barbara Ramos', role: 'Graphic Designer', photo: 'barbara-ramos-graphic-designer.jpg'},
]
console.table(teammates);
// ciclando nell'array stampo in console le info dei nomi , ruoli e la stringa foto

let listItem = '';
for(let teammate of teammates){
    console.log('nome: ', teammate['name']);
    console.log('ruolo: ', teammate['role']);
    console.log('url foto: ', teammate['photo']);
    console.log('---------------------------------');
    listItem += `
    <li>
        <div class="card" style="width: 17rem;">
            <img src="img/${teammate['photo']}" class="card-img-top" alt="teammate">
            <div class="card-body">
                <h2> Nome: ${teammate['name']} </h2>
                <p> Ruolo: ${teammate['role']} </p>
            </div>
        </div>
    `; 
    listItem += '</li>';
}
//stampo in pagina
teamList.innerHTML = listItem;
