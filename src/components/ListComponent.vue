<template>
  <div class="list-component">
    <div class="item-block" v-for="item in listItems" :key="item.id">

      <div class="photo-block" v-if="item.linkAddress">
        <a :href="item.linkAddress" target="_blank">
          <img class="item-photo" :src="item.image" alt="List Image" /> 
          <div v-html="item.imageCaption" class="photo-caption"></div>
        </a>  
      </div>  

      <div class="photo-block" v-else>
        <img class="item-photo" :src="item.image" alt="List Image" /> 
        <div v-html="item.imageCaption" class="photo-caption"></div>       
      </div>  
        
      <div class="item-text">
        <div class="item-titles">
          <h2 class="item-title" v-if="item.linkAddress"><a :href="item.linkAddress" target="_blank">{{ item.title }}</a></h2>
          <h2 class="item-title" v-else>{{ item.title }}</h2>

          <div class="item-subtitle">{{ item.subtitle }}</div>
        </div>
        
        <div class="item-details">
          <p>
            <span class="list-heading">{{ item.bulletsTitle }}</span>
            <ul>
              <li v-for="bullet in item.bullets" :key="bullet">
                <span v-html="bullet"></span>
              </li>
            </ul>
          </p>

          <p class="item-description">
            <span v-html="item.description"></span>
          </p>          
        </div>
      </div>    
    </div>
  </div>
</template>

<script>
export default {
  props: {
    listItems: Array,
  },
};
</script>

<style scoped>
  .port-link {
    font-size: 2rem;
    font-weight: 900;
  }
  
  .item-block {
    margin-block: 1rem;
    margin-block-start: 2rem;
    display: flex;
  }
  .first-row {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
  .photo-block {
    flex: 0 0 25%;
    max-width: 25%;
    font-size: .75em;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
  }

  .item-photo {
    width: 90%;
    max-width: 100%;
    border-radius: 50%;
    border: 2px solid var(--color00);
    box-shadow: .33rem 1rem 3rem var(--color13);
    text-align: center;
  }

  .photo-caption {
    font-size: 1.5em;
    text-align: center;
  }
  .item-text {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
  .item-title, .item-subtitle {
    margin: 0;
    text-align: right;
    flex: 1;
  }
  .item-subtitle {
    font-size: 1em;
    font-weight: 700;
    border-block-end: .25rem solid var(--color13);
  }
  .list-heading {
    font-weight: 700;
    margin-block-end: 0;
    margin-inline-start: 1rem;
  }
  .item-details {
    display: flex;
  }
  p {
    flex: 1;
    margin: 0;
    padding: 0.5rem;
  }

  .port-link {
    font-size: 2rem;
    font-weight: 900;
  }

  ul {
    margin-block-start: 0;
    text-align: left;
  }
  
  @media screen and (max-width: 600px) {
    .item-block {
      flex-direction: column;
      align-items: center;
    }
    .photo-block {
      flex: 0 0 50%;
      max-width: 50%;    
    }
  }

  @media screen and (max-width: 450px) {
    .item-block {
      flex-direction: column;
      align-items: center;
    }
    .photo-block {
      flex: 0 0 75%;
      max-width: 75%;
      font-size: .75em;
      align-items: center;
    }
    .item-title, .item-subtitle {
      margin: 0;
      text-align: left;
      flex: 1;
    }
    .item-subtitle {
      font-size: 0.8em;
    }
    .item-details {
      flex-direction: column;
    }
  }
</style>

