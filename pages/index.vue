<template>
  <div class="page">
       <div class="container">
      <div class="page-inner">
        <PageHeader/>
        <Search v-model="searchValue" @handleSearch="handleSearch"/>
        <Table :items="packages" v-show="packages.length > 0">
            <div class="pagination">
              <b-pagination
                v-model="currentPage"
                :total-rows="total"
                :per-page="limit"
                class="mt-4"
              ></b-pagination>
          </div>
        </Table>


      </div>
    </div>

        <Loading v-show="pending"/>
  </div>
 
</template>

<script>
import Loading from '../components/Loading.vue'
import PageHeader from '../components/layout/PageHeader.vue'
import Table from '../components/Table.vue'
import Search from '../components/Search.vue'
import { mapGetters} from 'vuex'
export default {
  components: { Table, PageHeader,Search,Loading },
  name: 'IndexPage',
  data() {
      return {
        searchValue: '',
        initialPage: 1,
        currentPage: 1,
        offset: 0,
    }
  },
  computed: {
    ...mapGetters({
      packages: 'packages',
      total: 'total',
      limit: 'size',
      pending: 'pending',
    })
  },
  watch: {
    currentPage(val) {
      if(val > this.initialPage){
        this.offset = (this.limit * val) - this.limit
        this.initialPage = this.currentPage
      }else if(val < this.initialPage){
        this.offset = this.limit * (val - 1)
        this.initialPage = this.currentPage
      }
      this.handleSearch(val)
    }
  },
  methods:{
    handleSearch(page){
      this.$store.dispatch('fetchPackages',{search:this.searchValue,page:page,offset: this.offset})
    }
  }
}
</script>
