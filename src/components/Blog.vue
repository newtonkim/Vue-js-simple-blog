<template>
  <div id="add-blog">
    <h2>Add a New Blog Post</h2>
    <form v-if="!submitted">
      <label for="blog">Blog Title</label>
      <input type="text"  v-model="blog.title" required>
      <label for="blog-content">Blog Content</label>
      <textarea  v-model="blog.content"></textarea>
      <div id="checkboxes">
        <label>Ninjas</label>
        <input type="checkbox" value="ninjas" v-model="blog.categories"/>
        <label>Blessed</label>
        <input type="checkbox" value="blessed" v-model="blog.categories"/>
        <label>Favored</label>
        <input type="checkbox" value="favored" v-model="blog.categories"/>
        <label>Wealthy</label>
        <input type="checkbox" value="wealthy" v-model="blog.categories"/>
      </div>
       <label>Author</label>
       <select v-model="blog.author">
        <option v-for="(author, key) in authors" 
                v-bind:key="key">
                 {{author}}
        </option>
       </select>
        <button @click.prevent="postBlog">Add Blog</button>
    </form>
    <div v-if="!submitted">
      <h3>Thank you for adding a post</h3>
    </div>
    <div id="preview">
      <h3>Preview Blog</h3>
      <p>Blog Title: {{blog.title}}</p>
      <p>Blog Content:</p>
      <p>{{blog.content}}</p>
      <p>Blog Categories:</p>
      <ul>
        <li 
          v-for="(category, key) in blog.categories"
          v-bind:key="key">
          {{ category }}
        </li>
      </ul>
      <p>Author: {{blog.author}}</p>
    </div>
  </div>
</template>

<script>
export default {

  data() {
    return {
      blog:{
        title: '',
        content: '',
        categories: [],
        author: ''
      },
      authors: ['Vue Master', 'Sass Guru', 'Laravel Avengar', 'Javascript Hero', 'MySql Champ'],
      submitted:false,
    }
  },
  methods: {
    postBlog: function(){
      this.$http.post('http://jsonplaceholder.typicode.com/posts', {
        title: this.blog.title,
        body: this.blog.content,
        userId: 1
      }).then(function(data){
        console.log(data);
        this.submitted = true;
      });
    }
  }

}
</script>

<style>
#add-blog *{
  box-sizing: border-box;
}
#add-blog {
  margin: 20px auto;
  max-width: 500px;
}

h2 {
color: blueviolet;
}
label {
  display: block;
  margin: 20px 0 10px;
}
input[type="text"],textarea {
  display: block;
  width:100%;
  padding: 8px;
}
#preview {
  padding: 10px 20px;
  border: 1px dotted #ccc;
  margin: 30px 0;
}
h3 {
  margin-top: 10px;
}
#checkboxes input {
  display: inline-block;
  margin-right: 10px;
}
#checkboxes label {
  display: inline-block;
}
</style>
