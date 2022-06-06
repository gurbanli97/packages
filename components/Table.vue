<template>
  <div class="table-responsive">
    <table class="table table-borderless">
      <thead>
        <tr>
          <th>
              Name
          </th>
          <th>Scope</th>
          <th>Version</th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody>
          <tr v-for="item in items" :key="item.package.name" @click="openModal(item)">
              <td>{{item.package.name}}</td>
              <td>{{item.package.scope}}</td>
              <td>{{item.package.version}}</td>
              <td>{{item.package.date}}</td>
          </tr>
      </tbody>
    </table>
      <slot></slot>

    <Modal :active="showModal" @close="showModal = false" :item="modalItem"/>

  </div>
</template>

<script>
import Modal from '../components/Modal.vue'
export default {
  name: "Table",
  components: {Modal},
  props: {
    items: {
      type: Array,
    },
  },
  data() {
      return {
        modalItem: null,
        showModal: false,
      }
  },
  methods: {
    openModal(item) {
      this.modalItem = item
      this.showModal = true
    },
  }
}
</script>
