<template>
  <div>
    <b-container-fluid class="mt-4">
      <b-jumbotron class="bg-transparent">
        <h2>Welcome to the Inclusive Learning Hub</h2>
        <router-link to="schools"
          ><b-button class="btn-light" variant="secondary"
            >Find School</b-button
          ></router-link
        >
      </b-jumbotron>
      <div>
        <b-row class="m-4 p-4 text-right justify-content-end">
          <b-col sm="7" class=" rounded">
            <h5 class="p-4">
              Learning disabilities or learning disorders are umbrella terms for
              a wide variety of learning problems. A learning disability is not
              a problem with intelligence or motivation and kids with learning
              disabilities aren’t lazy or dumb. In fact, most are just as smart
              as everyone else. Their brains are simply wired differently—and
              this difference affects how they receive and process information.
            </h5>
          </b-col>
        </b-row>
        <b-row class="m-4 p-4 text-center text-light justify-content-around">
          <b-col sm="5" class="rounded" id="partOne">
            <p class="custom-text">
              A 2017 report in 19 middle- and low-income countries on inclusive
              education by the World Bank and GPE concluded that 3 in 10
              children with disabilities have never enrolled in school.
              Educational plans in these countries most likely do not address
              the needs of those with disabilities, pushing them further to the
              margins of society.
            </p>
          </b-col>
          <b-col sm="5" class="rounded" id="partTwo">
            <p class="custom-text">
              In Nigeria, a country with the highest number of out-of-school
              children in the world, determining the percentage of children with
              learning disabilities is next to impossible because official data
              is nonexistent. The national policy on education endorses
              inclusive and free education for people with special needs, but
              the government has yet to deliver on that commitment. Advocates
              are fighting to raise awareness about learning disorder but
              instructional materials on inclusive education are scarce and a
              lot needs to be done to sensitize teachers.
            </p>
          </b-col>
        </b-row>
      </div>
    </b-container-fluid>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.jumbotron {
  background-image: url("../assets/Taieri.png");
  background-size: 100%;
  background-origin: padding-box;
  background-repeat: no-repeat;
}
.custom-text {
  padding-top: 20%;
  line-height: 2rem;
  font-weight: bolder;
}
#partTwo {
  background-image: url("../assets/lilSimba.jpg");
  background-color: #d4d3c5;
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100%;
  transition: all 2s;
}
#partOne {
  background-image: url("../assets/cuteBaby.jpg");
  background-color: #f1ede4;
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100%;
  transition: all 2s;
}
#partTwo:hover,
#partTwo:active {
  background-size: 60%;
  filter: grayscale(75%);
}
#partOne:hover,
#partOne:active {
  background-size: 60%;
}
</style>
