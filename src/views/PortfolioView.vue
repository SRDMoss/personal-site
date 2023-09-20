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
          id: 1,
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
            ],
          linkAddress: 'http://stephenmossis.cool/mossletters/',
        },
        {
          id: 2,
          image: '/assets/img/portfolio/personalsite.jpg',
          imageCaption: 'See it now!',
          title: "Stephen Moss: Personal Site",
          subtitle: "You're looking at it!",
          description: "A simple resume, portfolio, hobby application.",
          bulletsTitle: "Technology:",
          bullets: [
            'HTML', 
            'CSS', 
            'JavaScript',
            'Vue.js',
            'Vue CLI build tool'
            ],
          linkAddress: 'http://stephenmossis.cool/',
        },
        {
          id: 3,
          image: '/assets/img/portfolio/myaddingmachine.jpg',
          imageCaption: 'See it now!',
          title: "My Adding Machine",
          subtitle: '',
          description: '<p><a href="http://stephenmossis.cool/my-adding-machine/" target="_blank">Click Here!</a></p>' +
            'A simple adding machine front-end application which allows the user to push calculator buttons to add two' +
            'whole numbers together.',
          bulletsTitle: "Technology:",
          bullets: [
            'HTML', 
            'CSS', 
            'JavaScript', 
            ],
          linkAddress: 'http://stephenmossis.cool/my-adding-machine/',
        },
        {
          id: 4,
          image: '/assets/img/portfolio/cpasl.jpg',
          imageCaption: 'See it now!',
          title: "Categorical Perception of Palm Orientation",
          subtitle: 'in American Sign Language',
          description: "This project consists of the work I did for my honors thesis at the end of my BA in Linguistics. " + 
            "The project spanned 18 months and working with a developer to create the application upon which participants " + 
            "were tested was the seed of my interest in application development.",
          bulletsTitle: "Tech:",
          bullets: [
            'HTML', 
            'CSS', 
            'JavaScript', 
            ],
          linkAddress: 'https://stephenmossis.cool/cp-asl/',
        },
      ]
    }
  }
}
</script>


