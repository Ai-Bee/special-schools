<template>
  <div class="bg-light py-4 progress-bar-striped">
    <b-container class="mt-4">
      <b-row justify-center>
        <b-col sm="8">
          <b-form-group>
            <b-form-input
              v-model="searchText"
              type="text"
              required
              placeholder="Search for state or school"
            ></b-form-input>
          </b-form-group>
        </b-col>
        <b-col>
          <b-button type="submit" class="search" @click="searching"
            >Search</b-button
          >
          <b-button type="submit" variant="dark" v-if="searched" @click="reset"
            >Show all</b-button
          >
        </b-col>
      </b-row>

      <b-row>
        <template v-for="(school, index) in schools">
          <b-col sm="12" md="6" class="my-3" :key="index" v-if="school.show">
            <b-media class=" text-left m-auto p-4 rounded shadow" data-aos="slide-right"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="1500">
              <h2 class="mt-0 mb-3 ">{{ school.name }}</h2>
              <p class="mb-1 text-light">
                {{ school.details }}
              </p>
              <address
                class="mt-3"
                @click="copying(school.address)"
                title="Click to copy"
              >
                <span class="pr-2 theAddress"><strong>Address:</strong> </span
                >{{ school.address }}
              </address>
              <p
                class="number"
                @click="copying(school.phone)"
                title="Click to copy"
              >
                <span class="pr-2"><strong>Number:</strong> </span
                >{{ school.phone }}
              </p>
              <template v-for="(mail, index) in school.mail">
                <div class="pb-3" :key="index">
                  <span class="pr-2"
                    ><strong>Email {{ index + 1 }}:</strong> </span
                  ><a :href="`mailto:${mail}`">{{ mail }}</a>
                </div>
              </template>
              <div class="pb-3">
                <span class="pr-2"><strong>Website:</strong> </span
                ><a :href="school.website" target="_blank">{{
                  school.website
                }}</a>
              </div>
            </b-media>
          </b-col>
        </template>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "SchoolPage",
  computed: {
    searched() {
      return this.schools.some(el => el.show == false);
    }
  },
  methods: {
    copying(section) {
      /* Get the text field */
      const copyText = section;
      /* Select the text field */
      document.addEventListener("copy", function(e) {
        // e.clipboardData is initially empty, but we can set it to the
        // data that we want copied onto the clipboard.
        e.clipboardData.setData("text/plain", copyText);
        // This is necessary to prevent the current document selection from
        // being written to the clipboard.
        e.preventDefault();
      });

      /* Copy the text inside the text field */
      document.execCommand("copy");

      /* Alert the copied text */
      // this.$bvToast.show('text-copy-toast')
      this.$bvToast.toast(copyText, {
        title: "Text copied!",
        solid: true,
        variant: "success",
        toaster: "b-toaster-top-center",
        autoHideDelay: 2500
      });
    },
    searching() {
      let search = this.searchText;

      this.schools.map(school => {
        if (school.address.includes(search) || school.name.includes(search)) {
          school.show = true;
        } else {
          school.show = false;
        }
      });
    },
    reset() {
      this.searchText = "";
      this.schools.map(el => {
        el.show = true;
      });
    }
  },
  data() {
    return {
      searchText: "",
      schools: [
        {
          name: "The Sage School",
          details:
            " The Sage School is a friendly, safe and secure environment. They have a colourful and well equipped indoor and outdoor space. The classrooms are designed to foster individual attention for each child.  Teachers are qualified,  experienced and well trained.They run a very interactive curriculum – the Scholastic Early Childhood Curriculum, taking objectives from the UK EYFS and it’s infused with a ‘rich Nigerian flavor, the best of what Nigeria has to offer! Children are nurtured to be globally relevant, but very much in tune with their culture.Children are introduced to a wide range of themes interlaced into their everyday learning such as ‘Our community’, My family and me, Growing things, My school and friends, and more.",
          address: "10 Owena Close, Off Yedseram Street, Maitama, Abuja",
          phone: "+234 809 582 8142",
          show: true,
          mail: ["info@thesageschools.com"],
          website: ""
        },
        {
          name: "C.A.D.E.T. Academy",
          details:
            "C.A.D.E.T. Academy is a research- and evidence-based special needs education and learning program located in Abuja, Nigeria, but serves a global community. The acronym C.A.D.E.T. signifies the type of beautiful transformation envisaged for children, almost akin to what is found in a military academy. The C.A.D.E.T. Academy adopts either an inclusive or intensive one-on-one approach, under a loving atmosphere, and applies research-based and evidence-based educational procedures  to exchange undesirable habits and behavior with acceptable and desirable ones. In addition, pre-academic skills, play, social skills and language skills are also employed in transforming the children and preparing them to reach their full potentials.",
          show: true,
          address:
            "C.A.D.E.T. Academy,Block L2, No 13, Uruguay Street,  Maitama, Abuja, Nigeria",
          phone: "+234-809-127-3666",
          mail: ["info@cacademy.sch.ng"],
          website: ""
        },
        {
          name: "DAYSPRING INFANT AND JUNIOR SCHOOL",
          show: true,
          details:
            "The school is a co-educational Nursery and Primary School with special learning resources and aids for physically challenged and mentally retarded children.",
          address: "Port Harcourt, Rivers State.",
          phone: "",
          mail: "",
          website: ""
        },
        {
          name: "Centre For Children With Special Needs",
          details:
            "CCSN is a centre of excellence that provides quality service of International standard to children and families of  people with special needs, with the sole aim of maximizing their potentials, regardless of the degree of disability.The Early Intervention Unit provide stimulatory learning environment in the least restricted environment. Programmes are developmentally appropriate and consider the whole children’s development. The activities include talking and reading aloud to the student, giving a hand massage, bringing in objects the student does not normally have around such as sand and sea shells.",
          address:
            "4 Lake Chad Crescent, Off IBB Way Maitama District Abuja, Nigeria.",
          phone: "+2349020454575, +2348069738449",
          show: true,
          mail: ["info@ccsnabuja.org", "ccsnabuja@yahoo.com"],
          website: "http://ccsnabuja.org/"
        },
        {
          name: "Open Doors",
          details:
            "Open Doors for Special Learners is a registered non-governmental and not for profit organization dedicated to the: Provision of quality Special Education, vocational training, speech and language therapy and physiotherapy for children and youths with learning handicaps at the Open Doors Special Education Centre. Provision of opportunities for individuals with reading difficulties to develop literacy skills in the Reading Clinic Unit of Open Doors Special Education Centre. Expansion and upgrading of quality education for children with special needs through teacher training and advocacy. Open Doors Special Education Centre is located off Liberty Boulevard in Giring, Jos, Plateau State, Nigeria.",
          address: "",
          phone: "+234 (0)803 453 4990",
          mail: ["opendoorsng@gmail.com"],
          show: true,
          website: ""
        },
        {
          name: "Patrick Speech and Language Centre",
          details:
            "Their mission is to create a world class centre for individual living with Autism in Nigeria. Speech language therapy is the treatment for most children with speech and/or language disorders. A speech disorder refers to a problem with the actual production of sounds, whereas a language disorder refers to a difficulty understanding or putting words together to communicate ideas.",
          address: "13b Fani Kayode Street, GRA Ikeja, Lagos.",
          phone: "+234-803 301 9865 +234-0705 502 8215",
          mail: [
            " info@pslcautism-ng.org",
            "dakande@pslcautism-ng.org",
            "dakande2002@yahoo.com"
          ],
          show: true,
          website: "http://www.pslcautism-ng.org/"
        },
        {
          name: "The Zamarr Institute",
          details:
            "The concept of the Zamarr Institute was born in 1991 to promote excellence in educational and training opportunities for exceptional children when the founder returned to Nigeria from studying abroad. It had always been her idea to establish a centre of high standard like she had seen in the United States and the United Kingdom. The dream was now realized in 2006 when she felt the need for such a centres was paramount.",
          address:
            "LEA Nursery & Primary School,  Patrick O. Bokkor Crescent, Off Ebitu Ukiwe Street, Jabi, Abuja.",
          phone: "+ 2348098143671, +2348098659760",
          mail: ["info@thezamarrinstitute.org"],
          show: true,
          website: "https://thezamarrinstitute.org/"
        },
        {
          name: "Comrade David Ofoeyeno School For Special Children",
          details:
            "Comrade David Ofoeyeno School For Special Children is special needs school for children living with autism and other related challenges. Boarding facilities is available with full air-condition class-rooms. etc.",
          address: "DSC township Orhuwhorun, Warri Delta State",
          phone: "08054707148",
          show: true,
          mail: "",
          website: ""
        },
        {
          name: "Special Needs Kids Warri",
          details:
            "The Vision is that infants and children with various disabilities will benefit from early life programs and achieve maximization of their potential for development.  Thus in the long term, would emerge artists, craftsmen, other vocational achievers, even professionals particularly among the blind and hearing impaired.",
          address: "No.17, Refnery road Effurn Warri, Delta State",
          phone: "+234-8023438780",
          mail: ["nigerwives@specialneedskidswarri.com"],
          show: true,
          website: "http://specialneedskidswarri.com/"
        },
        {
          name: "Step One Special Care",
          details:
            "Step One Special Care is a one on one therapy with children with special needs to help them become better and independent.",
          address: "512 Rd, B Close, House 6, Festac Town, Lagos Nigeria",
          phone: "0806 045 1980",
          show: true,
          mail: "",
          website: ""
        },
        {
          name: "Hope House Initiative",
          details:
            "Hope House Initiative is committed to provide a caring and safe environment so as to: Passionately champion the cause of all children and adults with special needs, Assist them in patience and love to achieve their optimum potential. We aim to discover, cultivate, develop and support the skills and talents inherent in them. With our team of specialist therapists, educators and vocational trainers, provide good quality education. Our methods are tailored to support the individual person’s development towards leading a more independent life.",
          address:
            "Plot 61 Dahiru Sale Street off road 622, 6th Avenue Gwarimpa (Directly Opp. AEDC Office), Abuja",
          phone: "+234 (0) 813 733 3081",
          show: true,
          mail: [
            "info@hopehouseinitiative.com",
            "administrator@hopehouseinitiative.com",
            "hr@hopehouseinitiative.com"
          ],
          website: "http://hopehouseinitiative.com/"
        },
        {
          name: "Do-Estdot International School",
          show: true,
          details:
            "DoEstdot provides Educational services for hearing, hearing impaired and atypical students. DoEstdot currently caters to students in the crèche, nursery, primary and secondary departments. An enterprising couple nurtured its conception with the sole aim creating a school that prepared students, without regard for background, for a future of service, excellence and leadership. The couples’ experience raising two hearing-impaired daughters is fundamental to DoEstdot’s commitment to an educational experience that is mind-deep and lifelong.",
          address:
            " 4/14/16, Ifelodun Street, Off Oladun Street, Council B/Stop, Idimu, Lagos, Nigeria",
          phone: "08138345023 , 08164824623, 08130070242",
          mail: ["info@doestdot.sch.ng"],
          website: "http://www.doestdot.sch.ng/"
        },
        {
          name: "Distinct Abilities",
          details:
            "Distinct Abilities focuses on providing awareness about disabilities, providing therapies and strategies in teaching children with disabilities and also educating teachers, parents on behavioral approach to support children with disabilities.",
          address: "",
          phone: "0908 347 2253, 0805 351 3496",
          mail: "",
          show: true,
          website: "https://distinctabilities.business.site/"
        },
        {
          name: "Disability Empowerment Solution",
          details:
            "Disability Empowerment Solution [DES] is a Non-governmental, Non-profit making, Charitable and Empowerment organization that engage in various activities to meet the needs and yearnings of persons with disabilities.",
          address: "22, Alaafin Avenue, Oluyole Estate Road, Ibadan",
          phone: "0807 450 5252",
          show: true,
          mail: ["desnigeria@aol.com"],
          website: "http://desinigeria.org/"
        },
        {
          name: "Child Developmental Therapy Services",
          details:
            "Child Developmental Therapy is concerned about special children with communication difficulties, problem with writing skills and delayed eating, toileting and dressing skills.",
          address: "15 Omolola Street, Surulere, Lagos Nigeria",
          phone: "+234 809 877 5031",
          show: true,
          mail: "",
          website: ""
        },
        {
          name: "Centre for Autism and Developmental Disabilities",
          details:
            "Centre for Autism and Developmental Disabilities (CADD) is a non-governmental organization focusing on autism spectrum disorders and related developmental disabilities providing educational learning and training",
          address:
            "2 Chika Omo Street, Off Nnebisi Road, Asaba, Delta State Nigeria",
          phone: "0816 342 8389",
          mail: "",
          show: true,
          website: "http://caddnigeria.org/"
        },
        {
          name: "Benny Child Care Services Outreach",
          details:
            "Benny Child Care Services is concerned about (children with special needs) with communication difficulties, problem with handwriting skills, behavioral problems and delayed eating, toileting and dressing skills.",
          address:
            "13 Adamu Fika Street, 1st Gate, Lifecamp District Abuja Nigeria",
          phone: "0809 877 5031",
          mail: "",
          show: true,
          website: ""
        },
        {
          name: "Royal School Of Educational Therapy Foundation",
          details:
            "We are a non-profit private school comprising of General Education and Special Education services for students (Kindergarten to High School for General Education; Kindergarten to Adulthood for Special Education) services for students with and without disabilities.We prepare pupils in General Education for University Education and pupils in Special Education for Vocational Life-Long Skills",
          address:
            "Plot 194, 4461 Crescent (Abubakar Ali Gombe Street) Close to Christ Chosen Group of Schools Citec Villa, off 4th/6th Avenue by the Citec Gate Gwarinpa Abuja Nigeria",
          phone: "0803 953 0275, 0906 041 0074",
          show: true,
          mail: ["rsetfoundation@gmail.com", "info@rseducationaltherapy.com"],
          website: "http://rseducationaltherapy.com/"
        },
        {
          name: "Ri-Care Therapy",
          details:
            "Ri-Care Therapy are licensed behavior therapist and special educators that specializes on providing therapy and facilitation to children with learning disabilities such as autism, down syndrome, asperger, cerebral palsy and others.",
          address:
            "Ri-Care Therapy Lekki-Epe Expressway, Lagos Island, Lagos Nigeria",
          phone: "0803 384 4189, 0809 969 7552",
          mail: "",
          show: true,
          website: ""
        },
        {
          name: "Disability Rights Advocacy Center - DRAC",
          details:
            "Disability Rights Advocacy Center is an Abuja based non-governmental organisation that protects the human rights of persons with disabilities, thereby encouraging independent living and increase their inclusion in the development agenda.",
          address:
            "Plot 142, Durunmi District, off Victor Ndoma Egba Street, Before American International School, Durumi District 2, Abuja Nigeria",
          phone: "0811 532 6607",
          mail: ["drac.nigeria@gmail.com", "info@drac-ng.org"],
          show: true,
          website: "http://www.drac-ng.org/"
        },
        {
          name: "Blazing Heart Autism Center",
          details:
            "Blazing Heart Autism Centre is a visionary non-profit establishment designed to meet the needs of current and future generation of children with special needs and their families",
          address:
            "31C,Ohiamini Close. Behind Wokocha's Playground by Wholeman, Hospital Rd, Rukpakulosi Town, Port Harcourt",
          phone: "0802 999 8884",
          mail: "",
          show: true,
          website: ""
        },
        {
          name: "Benola",
          details:
            "Our Vision:An inclusive Africa in which those living with Cerebral Palsy get proper recognition and are given equal opportunity to fully develop and exploit their potentials. Our mission: To become the lead supportive agency on Cerebral Palsy in Africa and a leading advocate for the rights of those living with limitations.",
          address: "Suite 19/20, Praise Plaza, Ajah, Addo Rd, Lekki",
          phone: "0817 097 3349",
          mail: ["info@benola.org"],
          show: true,
          website: "https://www.benola.org/"
        }
      ]
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
button.search {
  background-color: #007991;
}
div.media {
  background-image: linear-gradient(
    to right,
    #07f1ce,
    #03bb9f,
    #00ae95,
    #04b49a,
    #03917b
  );
}
div.media a {
  color: #03505f !important;
}
div.media a:hover {
  text-decoration: slateblue;
  color: slateblue !important;
}
div.media a:visited {
  color: #5f8e96 !important;
}
</style>
