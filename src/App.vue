<template>
  <div class="containers">
    <div>
      <lista-filmes></lista-filmes>
    </div>
    <div>
      <lista-pessoas></lista-pessoas>
    </div>
    <div>
      <lista-video-games></lista-video-games>
    </div>
  </div>
</template>

<script>
import ListaFilmes from '@/components/ListaFilmes.vue'
  import ListaPessoas from '@/components/ListaPessoas.vue'
  import ListaVideoGames from '@/components/ListaVideoGames.vue'
  
  export default {
    name: 'App',
    components: {
      ListaFilmes,
      ListaPessoas,
      ListaVideoGames
    }
  }
</script>

<style scoped>
.containers {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}


</style>