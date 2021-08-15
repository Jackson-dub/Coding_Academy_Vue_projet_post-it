<template>

<form @submit="onSubmit" class="mb-3 row">
  <div class="form-group">
      <label for="title" class="col-sm-2 col-form-label">Titre</label>
     <div class="col-sm-10">
      <input class="form-control" type="text" name="title" v-model="title">
    </div>
    <label for="content" class="col-sm-2 col-form-label">Note</label>
    <div class="col-sm-10">
      <textarea class="form-control" type="textarea" name="content" v-model="content"></textarea>
    </div>
  </div>
  <button class="btn btn-primary" type="submit" value="save note" >save note</button>

</form>

</template>

<script>

export default{
    name: 'AddNote',
    data(){
      return{
        title:'',
        content:'',
      }
    },

    methods:{

      onSubmit(e){

        e.preventDefault()

        if(!this.title){
          alert('Please add a note')
          return
          }

          const newTask = {
            id:'',
            title : this.title,
            content : this.content,
          }

          this.$emit('add-note',newTask)
          this.title = '',
          this.content = ''
        }
      }
}


</script>