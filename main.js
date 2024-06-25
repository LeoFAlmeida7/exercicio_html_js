
function verifica(){
    let number1 = window.document.getElementById('n1');    // Nessa parte pegamos o valor da variável e armazenamos.
    let num1 = Number(number1.value); 
    let number2 = window.document.getElementById('n2');
    let num2 = Number(number2.value);
    if(num2 > num1){             //Verifica se o numero é maior ou menor e retorna a opção mais adequada.
        res.innerHTML =`O <span>${num2}</span> é maior que o <span>${num1}</span> `
        res.style.background= 'green'
    } else if (num2 < num1) { 
            res.innerHTML =`O <span>${num2}</span> não é maior que o <span>${num1}</span> `
            res.style.background= 'red'
            }   else if(num2 === num1){
                res.innerHTML =`O <span>${num2}</span> não é maior e nem menor que o <span>${num1}</span> eles são iguais. `
                res.style.background= 'yellow'
            }
            event.preventDefault();  // Evita que a página recarregue.
}

