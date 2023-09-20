<template>
  <div class="experience">
    <h1>Experience</h1>
    <ListComponent :listItems="items" />
  </div>
</template>

<script>
import ListComponent from '@/components/ListComponent.vue';

export default {
  components: {
    ListComponent
  },
  data() {
    return {
      items: [
        {
          id: 1,
          image: '/assets/img/experience/pearson.jpg',
          title: "Pearson Virtual Schools",
          subtitle: 'Enrollment Management Assistent, Remote, 2016 - Present',
          description: "Evaluated internal software rollouts for enrollment applications. " +
               "Detected and secured personally identifiable information (PII) of consumers, students, and staff. " +
               "Reviewed documentation and ensured compliance with all legal standards. " +
               "Determined students' requirements for enrollment and academic success.",
          bulletsTitle: "Duties:",
          bullets: [
            'Linked non-traditional learners to school services and required resources', 
            'Consistently achieved individual and team key performance indicators (KPI).', 
            'Successfully assisted with internal auditing impacting state funding throughout the United States', 
            'Served as subject-matter expert and provided training in form of shadowing new/temporary employees'
            ]
        },
        {
          id: 2,
          image: '/assets/img/experience/hasa.jpg',
          title: "Hearing and Speech Agency",
          subtitle: 'Community Interpreter, Baltimore, MD, 2009 - 2016',
          description: "Interpreted in community settings including (but not limited to) healthcare, education, " +
               "workforce, and corrections facilities.",
          bulletsTitle: "Highlights:",
          bullets: [
            "Facilitated communication across Deaf community between English speakers and American Sign Language users", 
            "Recognized cultural demands of the clients and offered additional material to guarantee client " + 
            "understanding of all concepts"
          ]
        },
      ]
    }
  }
}
</script>


