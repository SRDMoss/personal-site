<template>
  <div class="portfolio">
    <h1>Portfolio</h1>
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
          id: 6,
          image: '/assets/img/portfolio/jrmatch.jpg',
          imageCaption: 'See the Repo!',
          title: "JR Match (Job Description and Resume Matcher)",
          description: "An NLP-powered application that parses resumes and job descriptions, extracts " + 
            "and normalizes skills, and uses semantic search to match candidates to roles with explainable results.",
          bulletsTitle: "Technology:",
          bullets: [
            'Python',
            'Streamlit',
            'FastAPI',
            'spaCy',
            'Regex',
            'sentence-transformers',
            'FAISS',
            'SQL',
          ],
          linkAddress: 'http://github.com/SRDMoss/jr-match/',
        },
        {
          id: 5,
          image: '/assets/img/portfolio/apptrack.jpg',
          imageCaption: 'See it now!',
          title: "Job Application Tracker",
          description: "An application where a job seeker can easily keep record of Companies, Postings, " +
            "Applications, and Communications all in one place! I'm using it myself, and you can too.",
          bulletsTitle: "Technology:",
          bullets: [
            'HTML', 
            'CSS', 
            'JavaScript',
            'Python',
            'Django',
            'MySQL',
            'Apache',
            'Ubuntu',
            'AWS EC2',
            ],
          linkAddress: 'http://stephenmossis.cool/apptrack/',
        },
        {
          id: 4,
          image: '/assets/img/portfolio/mossletters.jpg',
          imageCaption: 'See it now!',
          title: "Mossletters",
          description: "A demo newsletter contact management application",
          bulletsTitle: "Technology:",
          bullets: [
            'HTML', 
            'CSS', 
            'JavaScript',
            'Node.js',
            'MongoDB',
            'Bootstrap',
            'Handlebars',
            'Apache',
            'Ubuntu',
            'AWS EC2',
            ],
          linkAddress: 'http://stephenmossis.cool/mossletters/',
        },
        {
          id: 3,
          image: '/assets/img/portfolio/personalsite.jpg',
          imageCaption: 'See it now!',
          title: "Stephen Moss: Personal Site",
          subtitle: "You're looking at it!",
          description: "A simple application showing off my background, skills and custom gallery of woodworking projects.",
          bulletsTitle: "Technology:",
          bullets: [
            'HTML', 
            'CSS', 
            'JavaScript',
            'Vue.js',
            'Vue CLI build tool',
            'Apache',
            'Ubuntu',
            'AWS EC2',
            ],
          linkAddress: 'http://stephenmossis.cool/',
        },
        {
          id: 2,
          image: '/assets/img/portfolio/myaddingmachine.jpg',
          imageCaption: 'See it now!',
          title: "My Adding Machine",
          subtitle: '',
          description: 'A simple adding machine front-end application which allows the user to push calculator buttons to' +
            ' add two whole numbers together.',
          bulletsTitle: "Technology:",
          bullets: [
            'HTML', 
            'CSS', 
            'JavaScript', 
            'Apache',
            'Ubuntu',
            'AWS EC2',
            ],
          linkAddress: 'http://stephenmossis.cool/my-adding-machine/',
        },
        {
          id: 1,
          image: '/assets/img/portfolio/cpasl.jpg',
          imageCaption: 'See it now!',
          title: "Categorical Perception of Palm Orientation",
          subtitle: 'in American Sign Language',
          description: "This project consists of the work I did for my honors thesis at the end of my BA in Linguistics." + 
            " The project spanned 18 months. Working with a Java developer to create the application, upon which the participants" + 
            " were tested, was the seed of my interest in application development.",
          bulletsTitle: "Tech:",
          bullets: [
            'HTML', 
            'CSS', 
            'JavaScript', 
            'Apache',
            'Ubuntu',
            'AWS EC2',
            ],
          linkAddress: 'https://stephenmossis.cool/cp-asl/',
        },
      ]
    }
  }
}
</script>


