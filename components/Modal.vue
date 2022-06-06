<template>
  <div class="modal-overlay" @click.self="handleBackdropClick" v-if="active">
      <div class="modal-content">
          <div class="modal-info">
              <h2>Package Details</h2>
              <ul>
                  <li><span>{{item.package.description}}</span></li>
                  <li>
                      <span>Publisher username:</span>
                      <strong>
                          {{item.package.publisher.username}}
                    </strong>
                    </li>
                     <li>
                      <span>Publisher email:</span>
                      <strong>
                          {{item.package.publisher.email}}
                    </strong>
                    </li>
              </ul>
              <div class="links">
                      <span>Links:</span>
                      <a :href="item.package.links.npm" target="_blank">
                          <img src="/npm.svg" alt="">
                      </a>
                      <a :href="item.package.links.homepage" target="_blank">
                          <img src="/home.png" alt="">
                      </a>
                      <a :href="item.package.links.repository" target="_blank">
                          <img src="/github-logo.png" alt="">
                      </a>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    props: {
        active: Boolean,
        item: Object,
    },
    methods: {
    handleEscapeKey(e) {
      if (this.active && e.key === 'Escape'){
        this.$emit('close');
      }
    },
    handleBackdropClick() {
        this.$emit('close');
    },
  },
  watch:{
    active(val) {
      if(val)
        document.body.classList.add('modal-active');
      else 
        document.body.classList.remove('modal-active');  

  },
  },
  mounted() {
    window.addEventListener('keydown', this.handleEscapeKey);
  },
  beforeDestroy() {
    window.removeEventListener('keydown', this.handleEscapeKey);
  }
}
</script>

<style>

</style>