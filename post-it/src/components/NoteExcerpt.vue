<template>

  <div class="card-body text-dark">
    <h3 class="card-title" @click="currentNote = note">
          {{ note.title }}<br>
          <small class="btn btn-secondary">click to edit</small>
        </h3>
    </div>
    <div>
      <button @click="$emit('delete-note',note._id)" class="btn btn-secondary"><i class="fas fa-times"></i></button>
      <button class="btn btn-secondary"><router-link :to="{name: 'Noteview', params: {id: note._id}}">Read More</router-link></button>
    </div>


<div v-if="currentNote" class="current-note">
<form @submit="onSubmit">
  <div class="form-group">
  <input type="text" name="titre" v-model="currentNote.title">
  <textarea class="form-control" rows="3" type="textarea" name="description" v-model="currentNote.content"></textarea>
   <input @click="$emit('edit-note',note._id)" type="submit" value="save note" class="btn btn-primary">
    </div>
</form>
</div>
  
</template>

<script>

export default {
  name: "NoteExcerpt",
  props:{
    note: Object,

  },
  data(){
    return{
     currentNote: null,
    }
  },
methods:{
  onSubmit(e){

        e.preventDefault()

        this.currentNote = null
      
  }
  
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