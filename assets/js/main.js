const app = new Vue({
    el: '#app',

    data: {
        squares: [],
        userNumber: '',
    },

    methods: {
        startsGame(){
            for(let i = 0; i < this.squares.length; i++) {
                if(this.squares[i].id === parseInt(this.userNumber)){
                   return this.squares[i] = {
                       id: this.squares[i].id,
                       color: true
                   }
                }

            }      
        },
        resetBoard(){
            document.querySelector('.squares_wrapper').innerHTML = ''
        }

    },

    mounted(){
        for(let i = 0; i < 100; i++){
            this.squares.push({
                id: i + 1 ,
            })
        }
    }

})
