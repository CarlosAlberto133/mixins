<template>
    <div>
        <h3>Lista de Video Games</h3>
        <input type="text" placeholder="Nome do Video Game" v-model="item">
        <button type="button" @click="adicionarItem()">Adicionar</button>
        <br/>
        <ul>
            <li v-for="(item, index) in itens" :key="index">{{ item }}</li>
        </ul>
        <button type="button" @click="removerItem()">Remover</button>
    </div>
</template>

<script>
import ListaMixin from '@/mixins/ListaMixin.js'
import RemoverItemMixin from '@/mixins/RemoverItemMixin.js'

export default {
    name: 'ListaVideoGames',
    mixins: [ListaMixin, RemoverItemMixin]
}
</script>

<style scoped>

</style>