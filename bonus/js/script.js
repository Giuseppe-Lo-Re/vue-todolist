// Bonus:
// 1- oltre al click sul pulsante, intercettare anche il tasto ENTER per aggiungere il todo alla lista
// 2- cliccando sul testo dell'item, invertire il valore della proprietà done del todo corrispondente (se done era uguale a false, impostare true e viceversa)

var app = new Vue(
    {
        el: '#root',
        data: {
            newTodoText:'',
            todos: [
                {
                    text: 'Dare da mangiare a Sirio',
                    done: true
                },
                {
                    text: 'Portare fuori Sirio',
                    done: false
                },
                {
                    text: 'Seguire lezione Boolean',
                    done: true
                },
                {
                    text: 'Preparate pranzo',
                    done: false
                },
                {
                    text: 'Fare esercitazione Boolean',
                    done: true,
                },
            ]
        },
        methods: {
            removeToDo(index) {
                this.todos.splice(index, 1);
            },
            addNewTodoText() {
                const trimmedString = newTodoText.trim();
                if(this.trimmedString.length > 0) {
                    const newTodo = {
                        text: this.trimmedString,
                        done: false
                    }
                    this.todos.push(newTodo);
                }
            },
            toogleDone(index) {
                this.todos[index].done = !this.todos[index].done;
            }
        }
    }
);