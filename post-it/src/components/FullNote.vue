<template>
  <div class='note'>
    <h3>
      {{ note.title }}
    </h3>
    <div class="description text-wrap" v-for="(content,index) in note.content" :key="index">
      {{content}}
      </div>
  </div>
</template>

<script>
export default {
  name: "NoteExcerpt",
  props:{
    note: Object,
  },

};
</script>

<style scope>
.note {
  background: #f4f4f4;
  margin: 5px;
  padding: 10px 20px;
  cursor: pointer;
}

.note.reminder {
  border-left: 5px solid green;
}

.fas {
  color: red;
}
</style>