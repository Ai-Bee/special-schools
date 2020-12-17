<template>
  <div id="app">
    <div>
  <b-navbar toggleable="lg" type="dark" id='pageNav'>
    <b-navbar-brand href="/"><router-link class="text-dark" to="/">School Aid</router-link></b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav class="ml-auto">
        <router-link to="tests" class="text-dark px-3">Tests </router-link>
        <router-link to="learning" class="text-dark px-3">Learn More</router-link>
      </b-navbar-nav>

  
    </b-collapse>
  </b-navbar>
</div>
    <router-view/>
    <footer class="border border-top text-end" id='pageFooter'>
      <div class="py-4">
  <b-nav class="pl-4">
    <router-link to="schools" class="px-3">Find School</router-link>
    <router-link to="tests" class="px-3">Tests</router-link>
    <router-link to="learning" class="px-3">Learn More</router-link>
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
#app{
  background-image: linear-gradient(to right, #fff, #f8f9fb, #dcdfe4, #a0a1a3);
}
#pageNav, #pageFooter{
   background:linear-gradient(90deg, #007991 0%,#78ffd6 100% );
}
#pageFooter .nav{
  text-transform: uppercase;
  text-decoration: none;
}
#pageFooter .nav a{
    color: #f8f9fb;
}
a{
  transition: all 1.2s ease-out;
}
#pageFooter .nav a:hover{
  color: rgb(66, 66, 66);
  text-decoration: none !important;
}
ul.navbar-nav a:hover{
  color: #f8f9fb !important;
  text-decoration: none !important;
}
</style>
