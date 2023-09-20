<template>
  <div id="header-container">
    <header>
      <div class="round-top title" id="main-title">
        <img id="face" src="/assets/img/face.jpg" alt="It's a fashion face." />
        <div id="stephen-moss">Stephen Moss</div>
      </div>

      <div class="links round-bottom">
        <nav>
          <router-link to="/">Home</router-link>
          <span class="bully">&nbsp;&bull;&nbsp;</span>
          <router-link to="/experience">Experience</router-link>
          <span class="bully">&nbsp;&bull;&nbsp;</span>
          <router-link to="/education">Education</router-link>
          <span class="bully">&nbsp;&bull;&nbsp;</span>
          <router-link to="/portfolio">Portfolio</router-link>
          <span class="bully">&nbsp;&bull;&nbsp;</span>
          <router-link to="/personal">Personal</router-link>
        </nav>
      </div>
    </header>
  </div>
</template>

<script>
  export default {
    name: "header-componenet",
  };
</script>

<style>
  #stephen-moss {
    font-size: 3rem;
  }

  @media (max-width: 700px) {
    #stephen-moss {
      font-size: 3rem;
    }
  }

  @media(max-width: 420px) {
    #stephen-moss {
      font-size: 2rem;
    }
  }

  #face {
    block-size: 3.5rem;
    inline-size: 3.5rem;
    border: 4px solid var(--color03);
    border-radius: 50%;
    margin: 0.25rem;
  }
</style>
