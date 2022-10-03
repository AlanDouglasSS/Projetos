//SELEÇÃO DE ELEMENTOS
const topoForm = document.querySelector('#topo-form');
const topoInput = document.querySelector('#topo-input');
const topoList = document.querySelector('#topo-list');
const editForm = document.querySelector('#edit-form');
const editInput = document.querySelector('#edit-input');
const cancelEditBtn = document.querySelector('#cancel-edit-btn');

let oldInputValue;


//FUNÇÕES
const saveTodo = (text) => {// CRIANDO TAGS DO HTML (EX: ÁREA DE TAREFAS CRIADAS!)

    const todo = document.createElement('div'); //TAG (DIV) CRIADA! (ELEMENTO CENTRAL)
    todo.classList.add('todo');//PUXANDO A (CLASS) DO ELEMENTO

    const todotitle = document.createElement('h3');//TAG (H3) CRIADA!
    todotitle.innerText = text; //CONDIÇÃO PARA ENTRADA DE DADOS NA (TAG)
    todo.appendChild(todotitle); //ADICIONANDO A TAG (H3) DENTRO DA TAG (DIV)

    const doneBtn = document.createElement('button');//ELEMENTO TAG (BUTTON) CRIADO
    doneBtn.classList.add('finish-taf');//PUXANDO A (CLASS) DO ELEMENTO
    doneBtn.innerHTML = '<i class="fa-solid fa-check"></i>' //MANIPULANDO HTML (ADICIONANDO O ICO!)
    todo.appendChild(doneBtn) //ACRECENTANDO O ATRIBUTO DENTRO DO (TOPO)

    const editBtn = document.createElement('button');//ELEMENTO TAG (BUTTON) CRIADO
    editBtn.classList.add('edit-taf');//PUXANDO A (CLASS) DO ELEMENTO
    editBtn.innerHTML = '<i class="fa-solid fa-pen"></i>' //MANIPULANDO HTML (ADICIONANDO O ICO!)
    todo.appendChild(editBtn) //ACRECENTANDO O ATRIBUTO DENTRO DO (TOPO)

    const deletBtn = document.createElement('button');//ELEMENTO TAG (BUTTON) CRIADO
    deletBtn.classList.add('delet-taf');//PUXANDO A (CLASS) DO ELEMENTO
    deletBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>' //MANIPULANDO HTML (ADICIONANDO O ICO!)
    todo.appendChild(deletBtn) //ACRECENTANDO O ATRIBUTO DENTRO DO (TOPO)

    topoList.appendChild(todo); //ADICIONA OS EVENTOS CRIADOS DENTRO DA (TAG) TOPOLIST(TOPO-LIST) - ELEMENTO CENTRAL
    topoInput.value = ""; //ZERA O VALOR DIGITADO APÓS A ADIÇÃO DA TAREFA!
    topoInput.focus(); //POSICIONA A BARRA DE DIGITAÇÃO NO CAMPO NOVAMENTE!

}

const toggleForms = () =>{
    //O QUE ESTIVER OCULTO SERÁ EXIBIDO, E VIRSE E VERSA!
    editForm.classList.toggle('hide');
    topoForm.classList.toggle('hide');
    topoList.classList.toggle('hide');
    
}

const updateTodo = (text) => {
    const todos = document.querySelectorAll('.todo');

    todos.forEach((todo) =>{
        let todoTitle = todo.querySelector('h3');

        if(todoTitle.innerText === oldInputValue){
            todoTitle.innerText = text;
        }
    })

};



//EVENTOS
topoForm.addEventListener('submit', (e) => {

    e.preventDefault();

    const inputValue = topoInput.value //PEGANDO O VALOR DO INPUT (ÁREA ADIÇÃO DE TAREFAS)!

    if (inputValue){
        //console.log(inputValue); CONDIÇÃO PARA VERIFICAR A CAPTURA DO VALOR!
        saveTodo(inputValue)
    }
})

document.addEventListener('click', (e) =>{ //CRIANDO EVENTO PARA O BOTÃO (FINISH-TAF)
    const targetEl = e.target;
    const parentEl = targetEl.closest('div'); //CRIANDO ACESSO A (DIV MAIS PRÓXIMA) ELEMENTO PAI!

    let todoTitle; //VARIÁVEL PARA IDENTIFICAÇÃO DOS TITULOS

    if (parentEl && parentEl.querySelector('h3')){ //CONDICIONAL PARA ENCONTRAR OS TITULOS, IGUALANDO AO TODOTITLE
        todoTitle = parentEl.querySelector('h3').innerText;
    }

    if (targetEl.classList.contains('finish-taf')){ //CONDIÇÃO PARA A CLASS (FINISH-TAF)
        parentEl.classList.toggle('done'); //ADICIONAR OU REMOVER TAREFAS!
    }

    if(targetEl.classList.contains('delet-taf')){ //CRIANDO A FUNÇÃO DO BOTÃO DELETAR TAREFA!
        parentEl.remove();
    }

    if(targetEl.classList.contains('edit-taf')){ //FUNAÇÃO DO BOTÃO EDITAR TAREFA!
        toggleForms();


        editInput.value = todoTitle; //PEGA O VALOR DO (EDITINPUT) E SALVA EM OUTRA VARIÁVEL 
        oldInputValue = todoTitle; //ARMAZENANDO O VALOR (TODOTITLE) EM OUTRA

    }

});

cancelEditBtn.addEventListener('click', (e) => { //CRIOU UM EVENTO PARA O BOTÃO CENCELAR EDIÇÃO
    e.preventDefault(); //EVITA O ENVIO DE FORMULÁRIO POR SE TRATAR DE UM BOTÃO!

    toggleForms();
})


editForm.addEventListener('submit', (e) =>{ //CRIOU UM EVENTO PARA O FORULÁRIO DE EDIÇÃO
    
    e.preventDefault() //EVITA O ENVIO DE FORMULÁRIO POR SE TRATAR DE UM BOTÃO!

    const editInputValue = editInput.value; //CRIOU UMA VARIÁVEL E IGUALOU OA VALOR DE (EDITINPUT)

    if(editInputValue){ //ESTRUTURA DE VARREDURA PARA ATUALIZAR A INFORMAÇÃO NA NOVA VARIÁVEL
        updateTodo(editInputValue) //RETORNO DA FUNÇÃO (UPDATETODO)
    }

    toggleForms()
});