function calcular() {
    let numerox = Number (document.getElementById('numerox').value)
    let numeroy = Number (document.getElementById('numeroy').value)
    let igualdifmul = numerox*numeroy
    let igualdifdiv = numerox/numeroy

    if(numerox == numeroy){
        document.getElementById('result').innerText =  'o result' + igualdifmul
    }else{
        document.getElementById('result').innerText = 'O result' + igualdifdiv
    }
}



// function mediaPercapta(){
//     let salario = Number(document.getElementById('salario').value)
//     let numpess = Number(document.getElementById('numpess').value)
//     let mediaPercapta = salario / numpess
    
//     if (mediaPercapta <= 2118) {
//         document.getElementById('mediaPercapta').innerText = 'Familia aprovada para o curso no Senac' + mediaPercapta
//     } else {
//          document.getElementById('mediaPercapta').innerText = 'A Familia não foi aprovada para o curso no Senac'+ mediaPercapta
//     }
       
// }



// function calcularNota() {
//     let nota1 = Number(document.getElementById('nota1').value)
//     let nota2 = Number(document.getElementById('nota2').value)
//     let nota3 = Number(document.getElementById('nota3').value)
//     let media = (nota1 + nota2 + nota3) / 3
   
//     if (media <= 6 ) {
//         document.getElementById('media').innerText = 'Aluno foi reprovado com media ' + media
//     } else {
//         document.getElementById('media').innerText = 'Aluno aprovado!' + media

//     }       
// }


// function verificaParImpar() {
//     let num = Number(document.getElementById('num').value);
//     if (num % 2 == 0) {
//         document.getElementById('resultado').innerText = 'Número ' + num + ' é Par';
//     } else {
//         document.getElementById('resultado').innerText = 'Número ' + num + ' é Ímpar';
//     }
// }
    