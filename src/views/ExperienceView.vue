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
          image: '/assets/img/experience/dataanno.jpg',
          title: "DataAnnotation.tech",
          subtitle: 'Freelance AI Data Annotation Specialist & AI Trainer, Remote, 2023 - Present',
          description: "Champion the development of large language models (LLMs) by spearheading projects to refine " + 
              "AI responses for coding and general inquiries. Employ a deep understanding of natural language processing " + 
              "(NLP) and AI dynamics. Prompt AI models to generate and evaluate code-related responses dynamically. " +
              "Annotate responses focused on language style, accuracy, and safety, directly enhancing model precision " + 
              "and contextual intelligence.",
          bulletsTitle: "Duties:",
          bullets: [
            'Expertly trained LLMs in various projects, enhancing AI performance in both technical and general contexts.', 
            'Applied advanced data annotation for improved model accuracy and contextual relevance.', 
            'Specialized in NLP techniques, elevating AI user interactions and model efficiency.', 
            ]
        },
        {
          id: 2,
          image: '/assets/img/experience/pearson.jpg',
          title: "Pearson Virtual Schools",
          subtitle: 'Enrollment Management Assistent, Remote, 2016 - 2024',
          description: "Evaluated internal software rollouts for enrollment applications. " +
              "Detected and secured personally identifiable information (PII) of consumers, students, and staff. " +
              "Reviewed documentation and ensured compliance with all legal standards. " +
              "Determined students' requirements for enrollment and academic success. ",
          bulletsTitle: "Duties:",
          bullets: [
            'Linked non-traditional learners to school services and required resources', 
            'Achieved individual and team key performance indicators (KPI).', 
            'Assisted with internal auditing impacting state funding throughout the United States', 
            'Served as subject-matter expert and provided training in the form of shadowing new/temporary employees'
            ]
        },
        {
          id: 3,
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


