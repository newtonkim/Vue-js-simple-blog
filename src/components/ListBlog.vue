<template>
  <div id="show-blogs">
    <h1>List Blog Titles</h1>
    <input type="text" v-model="search" placeholder="search blog" class="search-blog">
    <div v-for="(blog, key) in filterBlogs" class="single-blog" v-bind:key="key">
      <h2>{{blog.title}}</h2>

    </div>
    
  </div>
</template>

<script>
import searchMixin from '../mixins/searchMixin';

export default {
  data() {
    return {
      blogs: [],
      search: '',
    }
  },
  methods: {

  },
  created(){
    this.$http.get('https://jsonplaceholder.typicode.com/posts').then(function(data){
      this.blogs = data.body.slice(0,10);
    });
  },
  computed: {
    
  },
  mixins:[searchMixin]

}
</script>

<style>
#show-blog{
  max-width: 800px;
  margin: 0 auto;
}
h1{
  text-align: center;
}
.single-blog{

  padding: 20px;
  margin: 20px;
  box-sizing: border-box;
  background: #eee;
}
#search-blog{
  text-align: center; 
}
</style>
