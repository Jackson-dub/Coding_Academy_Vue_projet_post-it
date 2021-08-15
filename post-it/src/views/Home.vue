<template>
  <div class="container">
    <Header title="Welcome to your post-it note list" />
    <AddNote @add-note="addNote"/>
    <Notes
      @delete-note="deleteNote"
      @edit-note ="editNote"
      :notes="notes"
    />
    <transition  name="slide" mode="out-in"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "../components/Header";
import Notes from "../components/Notes";
import AddNote from "../components/AddNote";

export default {
  name: "Home",
  components: {
    Header,
    Notes,
    AddNote,
  },

     mounted() {
       this.$store.dispatch("getNotes");  
  },
  computed: {
    notes(){
      return this.$store.state.notes
    }
  },

  methods: {

    addNote(note){
        this.$store.dispatch('addNewNote', note)
      },

    deleteNote(id) {
      this.$store.dispatch('deleteNote', id)
    },
    editNote(id){
      let note = this.notes.filter((note) => note._id == id);
      this.$store.dispatch('editNote', note)
    },

  }, 

};
</script>

<style>

  .slide-enter-active,
  .slide-leave-active{
    transition:opacity 1s, transform 1s;
  }

  .slide-enter,
  .slide-leave-to{
    opacity:0;
    transform:translateX(-30%);
  }

</style>