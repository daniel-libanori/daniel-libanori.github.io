const navSobreMim = document.querySelector('body > div > header > nav > a:nth-child(1)');
const navEstudos = document.querySelector('body > div > header > nav > a:nth-child(2)');
const navContato = document.querySelector('body > div > header > nav > a:nth-child(3)');

const mainTag = document.querySelector('main');



navSobreMim.addEventListener('click',(e) =>{
    const navClasses = e.target.classList;

    navClasses.add('active');
    navEstudos.classList.remove('active');
    navContato.classList.remove('active');
    
    mainTag.innerHTML = htmlSobre;
    ;

});

navEstudos.addEventListener('click',(e) =>{
    const navClasses = e.target.classList;

    navClasses.add('active');
    navSobreMim.classList.remove('active');
    navContato.classList.remove('active');
    
    mainTag.innerHTML =htmlEstudos;
    ;
   
});

navContato.addEventListener('click',(e) =>{
    const navClasses = e.target.classList;

    navClasses.add('active');
    navSobreMim.classList.remove('active');
    navEstudos.classList.remove('active');
    
    mainTag.innerHTML =htmlContato;
})


const htmlSobre = 
    `<div class="cover sobre">
        <h1 class="cover-heading mb-4">Sobre Mim</h1>
        <img src="fotominha.jpg" alt="Minha Foto" class="rounded-circle fotoPerfil">
        <p class="lead">Natural de Campinas - SP , vim para o Rio Grande do Sul estudar computação na Universidade Federal de Santa Maria.</p>
        <p class="lead">Agora, estou a procura de novos desafios, visando como meta me tornar um desenvolvedor React Frontend.</p>
    </div>`;

const htmlEstudos =
    `<div class="cover estudos">
        <h1 class="cover-heading mb-4">Estudos</h1>
        <p class="lead">Estudando meu <b>Quinto Semestre em Sistemas de Informação</b> (Segundo semestre de 2020).</p>
        <p class="lead">Capaz de realizar, na área de web, a criação de sites com <b>HTML</b>, <b>CSS</b> <b>e JavaScript</b>. E agora estudando a biblioteca <b>React.js</b></p>
    </div>`;

const htmlContato =
    `<div class="cover contato">
        <h1 class="cover-heading mb-4">Contato</h1>
        <p class="lead"> 
            <img src="whatsapp-logo.png" alt="Logo WhatsApp" class=" logo-contato">
            (48) 9.8446-2132
        </p>
        <p class="lead">
            <img src="gmail-logo.png" alt="Logo Email" class="logo-contato">
            daniel.lb68@gmail.com
        </p>
        <br>
        <p class="lead">E meu Linkedin e Github ao fim da pagina <b>(:</b></p>
    </div>`;


mainTag.innerHTML = htmlSobre;