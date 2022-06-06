<template>
    <b-row class="search">
        <b-col class="col-12 m-auto d-flex justify-content-center" >
            <b-form @submit.prevent="$emit('handleSearch')" class="d-flex">
              <b-form-input type="search" v-model="fieldValue" placeholder="Enter package name"></b-form-input>
              <button class="btn btn-primary ml-4" type="submit">Search</button>
            </b-form>
        </b-col>
    </b-row>
</template>

<script>
export default {
  name: "Search",
  props: {
  
  },
  computed: {
    fieldValue: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit("input", value);
      }
    }
  },
}
</script>
