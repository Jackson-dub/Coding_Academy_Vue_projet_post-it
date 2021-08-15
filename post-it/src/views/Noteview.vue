
<template>
<FullNote :note="note"/>
</template>

<script>
import FullNote from"../components/FullNote.vue";

export default {
    name: "Noteview",
    components: {
        FullNote
    },
  
    computed: {
        
        note(){
            return this.$store.state.notes.find(note=>note._id == this.$route.params.id) || {}
        }
    }   
}
</script>


 
