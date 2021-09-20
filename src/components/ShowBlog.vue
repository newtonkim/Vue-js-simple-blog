<template>
  <div id="show-blogs">
    <h1>All Blog Articles</h1>
    <input class="form-control" v-model="search" type="text" placeholder="Search blog..">
    <div v-for="(blog, key) in filterBlogs" class="single-blog" v-bind:key="key">
      <router-link v-bind:to="'/blog/' + blog.id"><h2>{{blog.title}}</h2></router-link>
      <article>{{blog.content}}</article>
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
    this.$http.get('https://vue-js-playlist-5f223-default-rtdb.firebaseio.com/posts.json').then(function(data){
      return data.json();
    }).then(function(data){
      var blogsArray = [];
      for(let key in data){
        data[key].id = key
        blogsArray.push(data[key]);
      } 
      this.blogs = blogsArray;
    });
  },
  computed: {
   
  },
  mixins:[searchMixin]

}
</script>

<style>
#show-blogs{
  max-width: 960px;
  margin: 0 auto;
}

h1{
  text-align: center;
}
form-control{

  padding: 12px;
  margin: auto;
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
