<template>
  <header-component></header-component>
  <div id="main-container">
    <main>
      <router-view />
    </main>
  </div>
  <footer-component></footer-component>
</template>

<script>
import HeaderComponent from "@/components/HeaderComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";

export default {
  components: {
    HeaderComponent,
    FooterComponent,
  },
  mounted() {
    // Set 3 backgrounds to random colors from this list
    const colors = ['var(--color07)', 'var(--color08)', 'var(--color09)'];

    // get color from array, remove color selected to avoid reuse
    function getRandomColor() {
      const randomIndex = Math.floor(Math.random() * colors.length);
      const selectedColor = colors[randomIndex];
      colors.splice(randomIndex, 1);
      return selectedColor;
    }

    // put color for body background
    document.body.style.backgroundColor = getRandomColor();

    // get header and footer title containerse
    const backgrounds = document.querySelectorAll('.title');

    // get color to apply to both
    const titleColor = getRandomColor(); 

    // apply same color to both title blocks in header and footer
    backgrounds.forEach((background) => {
      background.style.backgroundColor = titleColor;
    })

    // apply last color to main background
    document.querySelector('main').style.backgroundColor = getRandomColor(); 

    // display app
    document.body.style.opacity = "1";

  },  
};

</script>

<style>
@import "@/assets/style/global.css";

#main-container a:link {
  color: var(--color01);
}

#main-container a:visited {
  color: var(--color02);
}

#main-container a:hover {
  color: var(--color04);
}

#main-container a:active {
  color: var(--color05);
}

main {
  inline-size: calc(80% - 5rem);
  max-inline-size: calc(800px - 4.5rem);
  background-color: var(--color11);
  margin: 0.3rem;
  padding: 1rem;
  border: 0.25rem solid var(--color02);
}

@media (orientation: portrait) {
  header,
  footer {
    inline-size: 100%;
  }

  main {
    inline-size: calc(100% - 4.5em);
  }
}
</style>
