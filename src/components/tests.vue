<template>
  <div>
    <b-container-fluid class="mt-4 bg-secondary" >
  <b-jumbotron   class="text-center bg-info">
       <h4>Worried your child may have a learning disability?</h4>
    <p>Take online test</p>
    <p>These tests are provided by <b-link target="_blank" class="text-secondary" href="https://www.lexercise.com">Lexercise</b-link><br>
          and are fully standard and authorized
    </p>
    <router-link to="schools"><b-button variant="secondary">Get Started</b-button></router-link>
  </b-jumbotron>
  <b-row class="justify-center m-4">
  <b-col sm='6' md='4' class="">
        <b-media class=" text-center m-auto bg-info p-4 rounded shadow" >
    <h2 class="mt-0 mb-3 ">Dyslexia</h2>
    <small>(Child must be present)</small> <br>
    <b-button variant="light" class="my-2"><b-link target="_blank" href="https://www.lexercise.com/tests/dyslexia-test/">Take Test</b-link></b-button>
  </b-media>
      </b-col>
<b-col sm='6' md='4' class="my-3 py-3">
        <b-media class=" text-center m-auto bg-info p-4 rounded shadow" >
    <h2 class="mt-0 mb-3 ">Learning Disability Test</h2>
    <b-button variant="light" class="my-2"><b-link target="_blank" href="https://www.lexercise.com/tests/learning-disability-test/">Take Test</b-link></b-button>
  </b-media>
      </b-col>
      <b-col sm='6' md='4' class="my-3" >
        <b-media class=" text-center m-auto bg-info p-4 rounded shadow" >
    <h2 class="mt-0 mb-3 ">Dysgraphia</h2>
    <b-button variant="light" class="my-2"><b-link target="_blank" href="https://www.lexercise.com/tests/dysgraphia-test/">Take Test</b-link></b-button>
  </b-media>
      </b-col>
      <b-col sm='6' md='4' class="my-3">
        <b-media class=" text-center m-auto bg-info p-4 rounded shadow" >
    <h2 class="mt-0 mb-3 ">Listening Comprehension Test</h2>
    <b-button variant="light" class="my-2"><b-link target="_blank" href="https://www.lexercise.com/tests/listening-comprehension-test/">Take Test</b-link></b-button>
  </b-media>
      </b-col>
      <b-col sm='6' md='4' class="my-3">
        <b-media class=" text-center m-auto bg-info p-4 rounded shadow" >
    <h2 class="mt-0 mb-3 ">Emotional and Behavioral Problems Test</h2>
    <b-button variant="light" class="my-2"><b-link target="_blank" href="https://www.lexercise.com/tests/emotional-behavioral-problems-test/">Take Test</b-link></b-button>
  </b-media>
      </b-col>
      <b-col sm='6' md='4' class="my-3">
        <b-media class=" text-center m-auto bg-info p-4 rounded shadow" >
    <h2 class="mt-0 mb-3 ">More general test</h2>
    <b-button variant="light" class="my-2"><b-link target="_blank" href="https://developlearning.co.nz/parent-resources/free-online-symptoms-test">Take Test</b-link></b-button>
  </b-media>
      </b-col>
      </b-row>
</b-container-fluid>
  </div>
</template>

<script>  
export default {
  name: 'Tests',
  data () {
    return {
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
