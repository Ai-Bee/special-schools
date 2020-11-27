<template>
  <div>
    <b-container-fluid class="mt-4">
  <b-jumbotron header="Special School Directory" class="bg-info" lead="Children with special needs matter">
    <p></p>
    <router-link to="schools"><b-button class="btn-light">Find School</b-button></router-link>
  </b-jumbotron>
  <b-row class="m-4 justify-content-center">
    <b-col class="ml-4">
      <iframe height="483" class="ml-4" width="90%" src="https://www.youtube.com/embed/_3ONz6TaKIk" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </b-col>
  </b-row>
</b-container-fluid>
  </div>
</template>

<script>  
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
