<template>
  <div id="footer-container">
    <footer>
      <div class="round-top links" id="icon-links">
        <nav>
          <!-- prettier-ignore -->
          <a href="https://github.com/SRDMoss" target="_blank" rel="noopener noreferrer">
            <div class="icon-wrapper">
              <i class="fab fa-github"></i>
            </div>
          </a>
          <!-- prettier-ignore -->
          <a href="https://techhub.social/@Moss" target="_blank" rel="noopener noreferrer">
            <div class="icon-wrapper">
              <i class="fab fa-mastodon"></i>
            </div>
          </a>
          <!-- prettier-ignore -->
          <a href="https://www.instagram.com/srdmoss/" target="_blank" rel="noopener noreferrer">
            <div class="icon-wrapper">
              <i class="fab fa-instagram"></i>
            </div>
          </a>
          <div class="icon-wrapper icon-toggles" @click="toggleDarkMode">
            <i class="fas fa-moon"></i>
          </div>
          <div class="icon-wrapper icon-toggles">
            <i class="fas fa-adjust" @click="toggleContrast"></i>
          </div>
        </nav>
      </div>

      <div class="round-bottom title" id="copyright">
        &copy; 2023 - Stephen Moss
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "footer-component",
  methods: {
    toggleContrast() {
      document.body.classList.toggle('high-contrast');
    },
    toggleDarkMode() {
      document.body.classList.toggle('dark');
    }
  },
};
</script>

<style scoped>
.icon-wrapper {
  inline-size: 2rem;
  block-size: 2rem;
  border: .15rem solid var(--color10);
  border-radius: 25%;  
  background-color: var(--color03);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-inline:.5rem;
  margin-block: .3rem;
}

.icon-wrapper i {
  font-size: 1rem;
}

.icon-toggles {
  color: var(--color07);
}
</style>

