<template>
  <div id="app">
    <div>
  <b-navbar toggleable="lg" type="dark" variant="dark">
    <b-navbar-brand href="/"><router-link class="text-light" to="/">School Aid</router-link></b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav class="ml-auto">
        <router-link to="tests"><b-nav-item href="tests"> Take Test </b-nav-item></router-link>
        <b-nav-item href="#" disabled>Learn More</b-nav-item>
      </b-navbar-nav>

  
    </b-collapse>
  </b-navbar>
</div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>

</style>
