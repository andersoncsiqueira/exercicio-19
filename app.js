/*
Este exercício será um pouquinho diferente dos anteriores.

Seu desafio é desenvolver uma versão do quiz que:

- Aborda um tema diferente (não pode ser de filmes);
- Tem um tema de cores diferente do que foi apresentado na aula;
- Exibe na tela a pontuação que o usuário fez. Não há certo ou errado, apenas faça. Essa exibição de pontos é uma das implementações que faremos na próxima aula =D

Independente se você já fez o quiz dos filmes enquanto acompanhava a aula, tente fazer esse exercício sem rever partes da aula.

É importante que a sua versão do quiz seja feita apenas com o conteúdo que vimos até aqui.

Depois de fazer o que foi pedido acima, crie um repositório no GitHub para a sua aplicação e abra uma issue no repositório do curso com:

- O link da sua versão do quiz;
- Quais foram as suas maiores dúvidas ou dificuldades durante a execução desse exercício;
- Quais foram as suas menores dificuldades durante a execução desse exercício.

Link do repositório do curso: https://github.com/roger-melo-treinamentos/curso-de-js-roger-melo/issues

Ps: se você não conseguiu fazer tudo o que foi pedido acima, abra a issue mesmo assim =)
Ps2: o uso do Bootstrap (ou qualquer outra lib CSS) é opcional.
*/

/*const rightAnswers = ['B','A','B','A','A','B']
const form = document.querySelector('form') 
const paragraph = document.createElement('p')


form.addEventListener('submit', event => {
    event.preventDefault()
    let score = 0
    const usersResponse = [
        form.inputQuestion1.value,
        form.inputQuestion2.value,
        form.inputQuestion3.value,
        form.inputQuestion4.value]

    usersResponse.forEach( (response, index) => {
        if(response === rightAnswers[index]) {
            score += 16.666666666666666666666666666667
        }
    })
    
    form.insertAdjacentElement('beforeend', paragraph)
    paragraph.textContent = `Você acertou ${score}% das questões sobre a Europa!`
    paragraph.style.fontSize = '40px'
    paragraph.style.textAlign = 'center'
    paragraph.style.color = 'red'

}) */

const form = document.querySelector('.quiz-form')
const finalResult = document.querySelector('.result')
const correctAnswers = ['B','A','B','A','B',]
let counter = 0

const insertScore = event => {
    event.preventDefault()

    let score = 0
    const userAnswers = [
        form.inputQuestion1.value,
        form.inputQuestion2.value,
        form.inputQuestion3.value,
        form.inputQuestion4.value,
        form.inputQuestion5.value,
    ]
        scrollTo({top:0,
            left:0,
            behavior:'smooth'
        })
    userAnswers.forEach((userAnswer, index) => {
        if(userAnswer === correctAnswers[index]) {
            score += 20
        }
    })
        
        finalResult.classList.remove('d-none')

        const timer = setInterval(()=>{
            finalResult.querySelector('span').textContent = `${++counter}%`
            console.log(counter, 'counter')
           
            if (counter === score) {
                clearInterval(timer)            
            }
        },100)
        
    }
    form.addEventListener('submit', insertScore)