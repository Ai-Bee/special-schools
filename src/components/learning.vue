<template>
  <div>
    <b-container-fluid class="mt-4">
      <b-jumbotron class="text-left">
        <h3 class="">Learn More About These Disorders</h3>
        <p>You can provide better help if you understand them better</p>
      </b-jumbotron>
      <b-row class="my-4 ml-4 justify-content-center">
        <b-col class="ml-4">
          <iframe
            height="483"
            class="ml-4"
            width="90%"
            src="https://www.youtube.com/embed/_3ONz6TaKIk"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </b-col>
      </b-row>
      <div>
        <h4 class="text-center">Useful Learning Resources</h4>
        <b-row class="m-4 p-4 text-center justify-content-around">
          <b-col sm="5" class="rounded">
            <b-list-group>
              <b-list-group-item
                ><b-link target="_blank" href="https://ldaamerica.org"
                  >Learning Disabilities of America</b-link
                ></b-list-group-item
              >
              <b-list-group-item
                ><b-link target="_blank" href="https://www.understood.org/"
                  >Understood</b-link
                ></b-list-group-item
              >
              <b-list-group-item
                ><b-link
                  target="_blank"
                  href="https://www.helpguide.org/articles/autism-learning-disabilities/learning-disabilities-and-disorders.htm"
                  >The Help Guide</b-link
                ></b-list-group-item
              >
              <b-list-group-item
                ><b-link
                  target="_blank"
                  href="http://ldapei.ca/types-of-learning-disabilities.html"
                  >Learning Disabilities Association</b-link
                ></b-list-group-item
              >
              <b-list-group-item
                ><b-link target="_blank" href="https://dyslexianigeria.com/"
                  >Dyslexia Nigeria</b-link
                ></b-list-group-item
              >
              <b-list-group-item
                ><b-link
                  target="_blank"
                  href="https://www.healthychildren.org/English/health-issues/conditions/learning-disabilities/Pages/Learning-Disabilities-What-Parents-Need-To-Know.aspx"
                  >Healthy Children</b-link
                ></b-list-group-item
              >
            </b-list-group>
          </b-col>
          <b-col sm="5" class="rounded">
            <b-list-group>
              <b-list-group-item
                ><b-link
                  target="_blank"
                  href="https://www.mayoclinic.org/healthy-lifestyle/childrens-health/in-depth/learning-disorders/art-20046105"
                  >Mayo Clinic</b-link
                ></b-list-group-item
              >
              <b-list-group-item
                ><b-link
                  target="_blank"
                  href="https://www.healthychildren.org/English/health-issues/conditions/learning-disabilities/Pages/Learning-Disabilities-What-Parents-Need-To-Know.aspx"
                  >HealthyChildren.org</b-link
                ></b-list-group-item
              >
              <b-list-group-item
                ><b-link
                  target="_blank"
                  href="https://en.wikipedia.org/wiki/Learning_disability"
                  >Wikipedia</b-link
                ></b-list-group-item
              >
              <b-list-group-item
                ><b-link
                  target="_blank"
                  href="https://www.goodtherapy.org/learn-about-therapy/issues/learning-difficulties"
                  >Good Therapy</b-link
                ></b-list-group-item
              >
              <b-list-group-item
                ><b-link
                  target="_blank"
                  href="https://childrensnational.org/visit/conditions-and-treatments/mental-health-behavioral-disorders/learning-disorders"
                  >Children's National</b-link
                ></b-list-group-item
              >
            </b-list-group>
          </b-col>
        </b-row>
      </div>
    </b-container-fluid>
  </div>
</template>

<script>
export default {
  name: "Learning",
  data() {
    return {};
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.jumbotron {
  background-image: url("../assets/Aare.png"),
    linear-gradient(to right, #fff, #f8f9fb, #dcdfe4, #a0a1a3);
  background-size: 100%;
  background-origin: padding-box;
  background-repeat: no-repeat;
}
.list-group-item a {
  color: rgba(23, 24, 26, 0.952);
}
.list-group-item a:hover {
  text-decoration: none;
}
.list-group-item:hover {
  background-color: #00ae95;
}
</style>
