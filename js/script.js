const bodyElement = document.querySelector('body')

const teamMembers = [
    {
        nome: 'Wayne Barnett', 
        ruolo: 'Founder & CEO',
        foto: 'wayne-barnett-founder-ceo.jpg'
    },
    {
        nome: 'Angela Caroll', 
        ruolo: 'Chief Editor',
        foto: 'angela-caroll-chief-editor.jpg'
    },
    {
        nome: 'Walter Gordon', 
        ruolo: 'Office Manager',
        foto: 'walter-gordon-office-manager.jpg'
    },
    {
        nome: 'Angela Lopez', 
        ruolo: 'Social Media Manager',
        foto: 'angela-lopez-social-media-manager.jpg'
    },
    {
        nome: 'Scott Estrada', 
        ruolo: 'Developer',
        foto: 'scott-estrada-developer.jpg'
    },
    {
        nome: 'Barbara Ramos', 
        ruolo: 'Graphic Designer',
        foto: 'barbara-ramos-graphic-designer.jpg'
    }
]


for (let i = 0; i < teamMembers.length; i++){
    const singoloMembro = teamMembers[i];
    
    let cardElement = document.createElement('card')
        cardElement.append(singoloMembro.nome, '', singoloMembro.ruolo, '', singoloMembro.foto)
        bodyElement.appendChild(cardElement)
    

    for(let key in teamMembers[i]){
        
        console.log(singoloMembro[key]);
    }
}

// function generateCard(nome, ruolo, foto) {
//     let cardElement = document.createElement('card')
//     // `<div class='card'>
//     //     <span>${nome}</span>
//     //     <span>${ruolo}</span>
//     //     <img src='${foto}'></img>
//     // </div>`
    
//     return cardElement;
// }

