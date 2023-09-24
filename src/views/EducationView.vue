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
          description: "In this master's program, I acquired skills in algorithms, operating systems," +
            "language usage, software development, and data management. Beyond coursework, I continua" +
            "lly investigated emerging technologies and applications to stay ahead of software trends.",
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
          description: "My honors thesis offered a specialized skill set that complemented my formal" +
            "education. I used MS Excel and R for data analysis, ensured the protection of PII under" +
            " IRB agreements, and managed all aspects of software development for an experiment on A" +
            "SL perception. This work was conducted in compliance with IRBs at both the University o" +
            "f Maryland and Gallaudet University.",
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


