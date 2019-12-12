<template>
  <div class="home text-center">
    <form v-on:submit.prevent="submit">
      <h1>Upload Image</h1>
      <div class="form-group center">
        <label for="title">Title</label>
        <input
          v-model="newBlog.title"
          type="text"
          class="form-control"
          id="title"
          placeholder="Enter  title"
        />
      </div>
      <div class="form-group">
        <label for="image">Image</label>
        <input @change="onFileChanged" type="file" class="form-control" id="image" />
      </div>
      <div class="form-group">
        <label for="body">Body</label>
        <textarea v-model="newBlog.body" class="form-control" id="body" rows="3"></textarea>
      </div>
      <button type="submit" class="btn btn-primary w-100">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newBlog: {},
      selectedFile: null,
      isCreatingBlog: false,
      isConnectingUser: false
    };
  },
  methods: {
    onFileChanged(event) {
      this.selectedFile = event.target.files[0];
    }
  }
};
</script>