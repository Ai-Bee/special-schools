<template>
  <div id="app">
    <div>
  <b-navbar toggleable="lg" type="dark" variant="info">
    <b-navbar-brand href="/"><router-link class="text-dark" to="/">School Aid</router-link></b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav class="ml-auto">
        <router-link to="tests" class="text-dark"><b-nav-item href="tests">Tests </b-nav-item></router-link>
        <router-link to="learning" class="text-dark"><b-nav-item href="learning" class="text-dark">Learn More</b-nav-item></router-link>
      </b-navbar-nav>

  
    </b-collapse>
  </b-navbar>
</div>
    <router-view/>
    <footer class="border border-top">
      <div class="bg-light py-4">
  <b-nav class="pl-4">
    <router-link to="schools"><b-nav-item href="tests"> Find School</b-nav-item></router-link>
    <router-link to="tests"><b-nav-item href="tests">Tests</b-nav-item></router-link>
    <router-link to="learning"><b-nav-item href="learning">Learn More</b-nav-item></router-link>
  </b-nav>
</div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>

</style>
