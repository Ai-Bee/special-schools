<template>
  <div>
    <b-container-fluid class="mt-4">
  <b-jumbotron header="School Help" lead="Children with special needs matter">
    <p></p>
    <router-link to="hello"><b-button variant="secondary">Learn More</b-button></router-link>
  </b-jumbotron>
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
