<template>
  <div id="footer-container">
    <footer>
      <div class="round-top links" id="icon-links">
        <nav>
          <div class="grouper">
            <a href="https://github.com/SRDMoss" target="_blank" rel="noopener noreferrer">
              <div class="icon-wrapper">
                <i class="fab fa-github"></i>
              </div>
              <div class="tooltip">
                <span class="tip-text">&nbsp;Github&nbsp;</span>
              </div>
            </a>
          </div>

          <div class="grouper">
            <a href="https://techhub.social/@Moss" target="_blank" rel="noopener noreferrer">
              <div class="icon-wrapper">
                <i class="fab fa-mastodon"></i>
              </div>
              <div class="tooltip">
                <span class="tip-text">&nbsp;Mastodon&nbsp;</span>
              </div>
            </a>
          </div>

          <div class="grouper">
            <a href="https://www.instagram.com/srdmoss/" target="_blank" rel="noopener noreferrer">
              <div class="icon-wrapper">
                <i class="fab fa-instagram"></i>
              </div>
              <div class="tooltip">
                <span class="tip-text">&nbsp;Instagram&nbsp;</span>
              </div>
            </a>
          </div>

          <div class="grouper">
            <div class="icon-wrapper icon-toggles" @click="toggleDarkMode">
              <i class="fas fa-moon"></i>
            </div>
            <div class="tooltip">
              <span class="tip-text">&nbsp;Dark Mode&nbsp;</span>
            </div>
          </div>

          <div class="grouper">
            <div class="icon-wrapper icon-toggles">
              <i class="fas fa-adjust" @click="toggleContrast"></i>
            </div>
            <div class="tooltip">
              <span class="tip-text">&nbsp;High Contrast&nbsp;</span>
            </div>
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
  position: relative;
}

.icon-wrapper i {
  font-size: 1rem;
}

.icon-toggles {
  color: var(--color07);
}

.grouper {
  margin-inline: 1rem;
  position: relative;
}

.tooltip {
  /* visibility: hidden; */
  display: none;
  background-color: var(--color00);
  color: var(--color13);
  border: 1px solid var(--color13);
  font-size: .75rem;

  position: absolute; 
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%);
}

.grouper:hover .tooltip {
  display: block;
  /* visibility: visible; */
}

.tip-text {
  white-space: nowrap;
}
</style>

