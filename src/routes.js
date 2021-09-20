import ShowBlog from './components/ShowBlog.vue';
import addBlog from './components/addBlog.vue';
import singleBlog from './components/singleBlog.vue';

export default [
  {path: '/', component: ShowBlog},
  {path: '/add', component: addBlog},
  {path: '/blog/:id', component: singleBlog}
]