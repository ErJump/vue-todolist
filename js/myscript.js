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
    },
    methods: {
        removeToDo: function(index) {
            this.todos.splice(index, 1);
        },
    },
})