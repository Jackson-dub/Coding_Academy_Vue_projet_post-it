<template>
<p v-if="!notes.length">No notes saved</p>
<div class="card-group d-flex bd-highlight row justify-content-around" v-if="notes.length">
    <div class="card border-dark mb-3 flex-fill bd-highlight col-md-4 shadow  mb-5 rounded" style="max-width: 18rem;" v-for="note in notes" :key="note._id">
    <NoteExcerpt  @delete-note="$emit('delete-note',note._id)" @edit-note="$emit('edit-note',note._id)" :note="note" />   
    
</div>
</div>

</template>

<script>
import NoteExcerpt from './NoteExcerpt';

export default {
    name: 'Notes',
   props:{
       notes : Array
   },
    components:{
            NoteExcerpt
        },
 
    emits:['delete-note','toggle-reminder'],
}
</script>