<template>
  <div>
    <app-header></app-header>
    <router-view></router-view>
  </div>
</template>

<script>
import Blog from './components/Blog.vue';
import addBlog from './components/addBlog.vue';
import ShowBlog from './components/ShowBlog.vue';
import ListBlog from './components/ListBlog.vue';
import Header from './components/Header.vue';

export default {
  components: {
    'add-blog':addBlog,
    'show-blog': ShowBlog,
    'list-blog': ListBlog,
    'app-header': Header,
    },
  data() {
    return {

    }
  },
  methods: {

  }

}
</script>

<style>
  body{
    margin:0;
    font-family: 'Nunito semi-bold';
  }
</style>
