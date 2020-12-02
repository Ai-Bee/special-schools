<template>
  <div>
    <b-container-fluid class="mt-4">
  <b-jumbotron header="Special School Directory" class="bg-info" lead="Children with special needs matter">
    <p></p>
    <router-link to="schools"><b-button class="btn-light">Find School</b-button></router-link>
  </b-jumbotron>
  <div>
  <b-row class="m-4 p-4 text-center justify-content-center">
    <b-col sm="11" class="bg-light rounded" >
        <h5 class="p-4">
        Learning disabilities or learning disorders are umbrella terms for a wide variety of learning problems. A learning disability is not a problem with intelligence or motivation and kids with learning disabilities aren’t lazy or dumb. In fact, most are just as smart as everyone else. Their brains are simply wired differently—and this difference affects how they receive and process information.
        </h5>
    </b-col>
  </b-row>
  <b-row class="m-4 p-4 text-center justify-content-around">
    <b-col sm="5" class="bg-light rounded" >
        <h4 class="p-4">
        A 2017 report in 19 middle- and low-income countries on inclusive education by the World Bank and GPE concluded that 3 in 10 children with disabilities have never enrolled in school. Educational plans in these countries most likely do not address the needs of those with disabilities, pushing them further to the margins of society.
        </h4>
    </b-col>
    <b-col sm="5" class="rounded bg-light" >
        <h5 class="p-4">
        In Nigeria, a country with the highest number of out-of-school children in the world, determining the percentage of children with learning disabilities is next to impossible because official data is nonexistent. The national policy on education endorses inclusive and free education for people with special needs, but the government has yet to deliver on that commitment. Advocates are fighting to raise awareness about learning disorder but instructional materials on inclusive education are scarce and a lot needs to be done to sensitize  teachers.
        </h5>
    </b-col>
  </b-row>
</div>  
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
