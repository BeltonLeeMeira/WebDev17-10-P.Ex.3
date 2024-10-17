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
