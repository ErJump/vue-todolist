const app = new Vue({
    el: '#root',
    data: {
        todos: [
            {
                text: 'Fare i compiti',
                done: false
            },
            {
                text: 'Fare la spesa',
                done: true
            },
            {
                text: 'Fare il bucato',
                done: false
            },
            {
                text: 'Fare il bravo ragazzo',
                done: true
            },
            {
                text: 'Vedere i Gorillaz',
                done: true
            },
            {
                text: 'Diventare un pro gamer di LoL',
                done: false
            },
            {
                text: 'Imparare a programmare',
                done: true
            },
        ],
        userInput: '',
    },
    methods: {
        removeToDo: function(index) {
            this.todos.splice(index, 1);
        },
        addToDo: function() {
            if (this.userInput !== '') {
            this.todos.push({
                text: this.userInput,
                done: false
            });
            } else {
                alert('Non hai inserito nessun ToDo');
            }
            this.userInput = '';
        },
        changeStatus: function(index) {
            this.todos[index].done = !this.todos[index].done;
        }
    },
})