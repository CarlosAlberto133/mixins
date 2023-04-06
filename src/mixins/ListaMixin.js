export default {
    data: () => ({
        itens: [],
        item: ''
    }),
    methods: {
        adicionarItem() {
            this.itens.push(this.item)
            this.item = ''
            //console.log('Chegamos até aqui', this.filmes, this.filme)
        }
    }
}