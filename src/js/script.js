// criando slide show

// declarando as variaveis

let imagens =[
    "src/assets/img1.jpg",
    "src/assets/img2.jpg",
    "src/assets/img3.jpg"
];
let i=0;
let time=3000;

function slideShow(){
    document.getElementById("image").src=imagens[i];
    i++;
    if(i == imagens.length) {i=0;}
    setTimeout("slideShow()",time)
}
slideShow();

//cadastrando no formulário

//cadastrando no formulario

//declarando a varaivel e recebendo o id do form
let form = document.getElementById("form")
//criando o evento que ao clicar ele primeiro previne o formulario Ex. load
form.addEventListener("submit", function(e){
    e.preventDefault();
    
    //passando os campos que vão ser manipulados pelo form ao cadastrar no input
    let[nome, email]=['nome', 'email'].map(name =>
        //o querySelecto vai pegar o que for digitado no input
        form.querySelector(`[name=${name}]`).value);
        //passando o que foi digitado e mostrando na tela o nome e o email
        document.getElementById("1").innerHTML =nome;
        document.getElementById("2").innerHTML=email
        console.log(nome)
})
