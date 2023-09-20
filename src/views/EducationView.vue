<template>
  <div class="education main-block">
    <h1>Education</h1>
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
          image: '/assets/img/education/bu.jpg',
          imageCaption: 'Photo by <a href="https://unsplash.com/@octoberroses?utm_source=unsplas' + 
            'h&utm_medium=referral&utm_content=creditCopyText">Aubrey Odom</a> on <a href="https:' +
            '//unsplash.com/photos/s9wRk6E83nc?utm_source=unsplash&utm_medium=referral&utm_conten' + 
            't=creditCopyText">Unsplash</a>',
          title: "Boston University, MS: Software Development",
          subtitle: 'MS: Software Development, Est December 2023',
          description: "Acquire skills in algorithms, operating systems, computer language usage, " + 
            "software development, and management of data, networks, or security. Capable of inves" + 
            "tigating continually emerging new software technologies, and applications.",
          bulletsTitle: "Highlights:",
          bullets: ['Artificial Intelligence', 
            'Advanced Programming Techniques', 
            "Web App Development", 
            "Server-Side Web App Developement",
             "Design Patterns"]
        },
        {
          id: 2,
          image: '/assets/img/education/umd-mall.jpg',
          imageCaption: 'Photo by me, Stephen Moss.',
          title: "University of Maryland, College Park",
          subtitle: 'BA: Linguistics, BA: Psychology, May, 2015',
          description: "My honors thesis allowed me to develop many skills undocumented elsewhere. " + 
            "I utilized MS Excel and R to analyze and display data. I updated records and protected" + 
            " PII in accordance with IRB agreements. I created, managed, texted and implemented sof" + 
            "tware paradigms according to requirements developed in service of the experiment desig" + 
            "ned to evaluate perceptin of palm orientation categories in ASL. Additionally I negoti" + 
            "ated for documentation and space according to requirements set out by IRBs at Universi" + 
            "ty of Maryland and Gallaudet University. ",
          bulletsTitle: "Highlights:",
          bullets: [
            "Statistics", 
            "Baggett Summer Research Scholarship", 
            "Honors Thesis Research Application Design"
          ]
        },
        {
          id: 3,
          image: '/assets/img/education/ccbc.jpg',
          imageCaption: 'Photo by Nancy DeVilbiss',
          title: "Community College of Baltimore County",
          subtitle: 'AAS: Interpreter Preparation, December, 2010',
          description: "",
          bulletsTitle: "Highlights:",
          bullets: ["Multimedia Authoring"]
        },
      ]
    }
  }
}
</script>


