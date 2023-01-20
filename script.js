//marcando os ID

const button = document.getElementById('button');
const nome = document.getElementById('nome');
const peso = document.getElementById('peso');
const altura = document.getElementById('altura');
const resultado = document.getElementById('resultado');

//declarando a mensagem que aparecerá nos texto

const msg = (imc) =>{
    if (imc > 40) return 'Obesidade grau III';
    if (imc > 35) return 'Obesidade grau II';
    if (imc > 30) return 'Obesidade grau I';
    if (imc > 25) return 'Levemente acima do peso';
    if (imc > 18) return 'Peso ideal';
 
}

// montando as vonstantes de calculos da calculadora
const imCalc = () => {
    const valorimc = (+peso.value / (+altura.value *+altura.value));
    resultado.textContent = msg(valorimc);

}
button.addEventListener('click',imCalc);    
