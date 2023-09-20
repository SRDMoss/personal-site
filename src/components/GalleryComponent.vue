<template>  
    <div class="gallery-component">

      <!-- Gallery Blocks -->
      <div class="gridder"> 
        <div class="gallery-block" v-for="gallery in galleries" :key="gallery.id">
          <div class="label-block" @click="activateModal(gallery)">
            <img 
              class="gallery-photo" 
              :src="hoveredGallery === gallery.id ? gallery.afterImage : gallery.beforeImage" 
              @mouseover="hoveredGallery = gallery.id"
              @mouseout="hoveredGallery = null"
              alt="Gallery Image"
            />
            <span class="gallery-title">{{ gallery.title }}</span>
          </div>
        </div>
      </div>

      <!-- Modal -->
      <div class="modal-container" v-if="modalActive">
        <!-- Main Image Row -->
        <div class="active-image">
          <img :src="activeImage" alt="Active Gallery Image" />
            {{ activeCaption }}
        </div>      

        <!-- Thumbnails -->
        <div class="thumb-row">        
          <img v-for="index in visibleThumbs" 
              :key="index" 
              :src="thumbs[index]" 
              :class="{ 'active-thumb': isActiveThumb(index) }"
              alt="Thumbnail" 
              @click="switchImage(index)" />        
        </div>


        <!-- Nav buttons -->
        <div class="nav-buttons">
          <i class="fa-solid fa-circle-chevron-left" v-if="thumbs.length > 4" @click="shiftThumbs(-1)"></i>
          <i class="fa-solid fa-circle-xmark" @click="deactivateModal()"></i>
          <i class="fas fa-circle-chevron-right" v-if="thumbs.length > 4" @click="shiftThumbs(1)"></i>
        </div>
      </div>
    </div>

</template>

<script>
export default {
  props: {
    galleries: Array,
  },
  data() {
    return {
      hoveredGallery: null, 
      modalActive: false,
      activeGallery: null,
      activeImage: null,
      activeCaption: null,
      thumbs: [],
      fulls: [],
      captions: [],
      leftThumbIndex: 0,
      universalIndex: 0,
    };
  },
  computed: {
    visibleThumbs() {
      // Return an array of indices based on the leftThumbIndex
      return Array.from({ length: 5 }, (_, i) => i + this.leftThumbIndex).filter(i => i < this.thumbs.length);
    }
  },

  methods: {
    activateModal(gallery) {
      this.modalActive = true;
      this.activeGallery = gallery;
      this.thumbs = gallery.thumbs;
      this.fulls = gallery.fulls;
      this.captions = gallery.captions;
      this.leftThumbIndex = 0;

      if (gallery.fulls && gallery.fulls.length > 0) {
        this.activeImage = this.fulls[0];
        this.activeCaption = this.captions[0];
      }
    },
    deactivateModal() {
      this.modalActive = false;
      this.activeGallery = null;
    },
    shiftThumbs(direction) {
      const maxIndex = this.thumbs.length - 5;
      this.leftThumbIndex += direction * 5;
      if (this.leftThumbIndex < 0) {
        this.leftThumbIndex = 0;
      } else if (this.leftThumbIndex > maxIndex) {
        this.leftThumbIndex = maxIndex;
      }
    },
    switchImage(index) {
      this.activeImage = this.fulls[index];
      this.activeCaption = this.captions[index];
    },
    isActiveThumb(index) {
      const isActive = this.activeImage === this.fulls[index];
      return isActive;
    }
  }
};
</script>


<style scoped>
  .gallery-component {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .gridder {
    min-width: calc(100% - 149px);
    display: grid;
    grid-template-columns: repeat(auto-fill, 150px);
    gap: 10px;
  }
  
  .label-block {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: block-start;
  }
  .gallery-photo {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    border: 2px solid var(--color00);
    box-shadow: .33rem 1rem 3rem var(--color13);
  }

  .gallery-title {
    font-size: 1.5em;
    font-weight: 700;
    text-align: center;
  }

  .modal-container {
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.8);

  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: space-between;
  align-items: center;
}

/* The image */
.active-image {
  flex-grow: 1;
  height: calc(100vh - 125px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  color: white;
}

.active-image img {
  max-height: 95%;
  max-width: 95%;
  object-fit: contain;
  border-radius: 1rem;
  border: .25rem solid var(--color13)
}

.thumb-row {
  height: 85px;
  flex-shrink: 0;
}

.thumb-row img {
  margin-inline: 3px;
}

.active-thumb {
  border: 2px solid var(--color13);
}

/* Navbar */
.nav-buttons {
  height: 40px;
  flex-shrink: 0;
  color: white;
}

.nav-buttons i {
  font-size: 2rem;
  margin-inline: 1rem;
}
</style>




