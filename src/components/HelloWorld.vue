<template>
<div class="bg-light py-4">
  <b-container class="mt-4">
    <b-row>
      <template v-for="(school, index) in schools">
          <b-col sm='12' md='6' class="my-3" :key="index">
        <b-media class=" text-left m-auto bg-secondary p-4 rounded shadow" >
    <h2 class="mt-0 mb-3 ">{{school.name}}</h2>
    <p class="mb-1 text-light">
     {{school.details}}
</p>
    <address class="mt-3"><span class="pr-2"><strong>Address:</strong> </span>{{school.address}}</address>
    <p class="number"><span class="pr-2"><strong>Number:</strong> </span>{{school.phone}}</p>
    <p class="mail"><span class="pr-2"><strong>Email:</strong> </span>{{school.mail}}</p>
    <p class="website"><span class="pr-2"><strong>Website:</strong> </span>{{school.website}}</p>
  </b-media>
      </b-col>
      </template>
      
    </b-row>
</b-container>
</div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
     schools: [
         {
           name: 'The Sage School',
           details: ' The Sage School is a friendly, safe and secure environment. They have a colourful and well equipped indoor and outdoor space. The classrooms are designed to foster individual attention for each child.  Teachers are qualified,  experienced and well trained.They run a very interactive curriculum – the Scholastic Early Childhood Curriculum, taking objectives from the UK EYFS and it’s infused with a ‘rich Nigerian flavor, the best of what Nigeria has to offer! Children are nurtured to be globally relevant, but very much in tune with their culture.Children are introduced to a wide range of themes interlaced into their everyday learning such as ‘Our community’, My family and me, Growing things, My school and friends, and more.',
           address: '10 Owena Close, Off Yedseram Street, Maitama, Abuja',
           phone: '+234 809 582 8142',
           mail: 'info@thesageschools.com',
           website: ''
         },
        {
           name: 'C.A.D.E.T. Academy',
           details: 'C.A.D.E.T. Academy is a research- and evidence-based special needs education and learning program located in Abuja, Nigeria, but serves a global community. The acronym C.A.D.E.T. signifies the type of beautiful transformation envisaged for children, almost akin to what is found in a military academy. The C.A.D.E.T. Academy adopts either an inclusive or intensive one-on-one approach, under a loving atmosphere, and applies research-based and evidence-based educational procedures  to exchange undesirable habits and behavior with acceptable and desirable ones. In addition, pre-academic skills, play, social skills and language skills are also employed in transforming the children and preparing them to reach their full potentials.',
           address: 'C.A.D.E.T. Academy,Block L2, No 13, Uruguay Street,  Maitama, Abuja, Nigeria',
           phone: '+234-809-127-3666',
           mail: 'info@cacademy.sch.ng',
           website: ''
         },
         {
             name: 'DAYSPRING INFANT AND JUNIOR SCHOOL',
           details: 'The school is a co-educational Nursery and Primary School with special learning resources and aids for physically challenged and mentally retarded children.',
           address: 'Port Harcourt, Rivers State.',
           phone: '',
           mail: '',
           website: ''
         },
           {
             name: 'Centre For Children With Special Needs',
           details: 'CCSN is a centre of excellence that provides quality service of International standard to children and families of  people with special needs, with the sole aim of maximizing their potentials, regardless of the degree of disability.The Early Intervention Unit provide stimulatory learning environment in the least restricted environment. Programmes are developmentally appropriate and consider the whole children’s development. The activities include talking and reading aloud to the student, giving a hand massage, bringing in objects the student does not normally have around such as sand and sea shells.',
           address: '4 Lake Chad Crescent, Off IBB Way Maitama District FCT-Abuja, Nigeria.',
           phone: '+2349020454575, +2348069738449',
           mail: 'info@ccsnabuja.org, ccsnabuja@yahoo.com',
           website: ''
         },
          {
             name: 'Open Doors',
           details: 'Open Doors for Special Learners is a registered non-governmental and not for profit organization dedicated to the: Provision of quality Special Education, vocational training, speech and language therapy and physiotherapy for children and youths with learning handicaps at the Open Doors Special Education Centre. Provision of opportunities for individuals with reading difficulties to develop literacy skills in the Reading Clinic Unit of Open Doors Special Education Centre. Expansion and upgrading of quality education for children with special needs through teacher training and advocacy. Open Doors Special Education Centre is located off Liberty Boulevard in Giring, Jos, Plateau State, Nigeria.',
           address: '4 Lake Chad Crescent, Off IBB Way Maitama District FCT-Abuja, Nigeria.',
           phone: '+234 (0)803 453 4990',
           mail: 'opendoorsng@gmail.com',
           website: ''
         }

        ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
