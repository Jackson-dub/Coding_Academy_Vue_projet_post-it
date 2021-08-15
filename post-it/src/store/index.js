import { createStore } from 'vuex'

export default createStore({
  state: {
      notes:[]
  },
  mutations: {
      SET_NOTES(state,notes){
          state.notes = notes;
      },

      REMOVE_NOTE(state,note){
        state.notes = state.notes.filter(item => {item._id !== note._id})
      },

      NEW_NOTE(state,note){
        state.notes.unshift(note)
      },

      UPDATE_NOTE(state,note){
        const index = state.notes.findIndex(note => note._id === note._id);
        if(index !== -1){
          state.notes.splice(index, 1, note);
        }
      }


  },
  actions: {
    async getNotes({commit}) {
       await fetch('http://5.135.119.239:3090/notes')
       .then(response => response.json())
       .then(data => {commit('SET_NOTES', data.notes)
       })
    },

    async deleteNote({commit}, id){
       
        await fetch(`http://5.135.119.239:3090/notes/${id}`, {
            method: 'DELETE',
            headers: {
              'Content-Type':'application/json'
            },
          })
          .then(response => response.json())
          .then(data => {commit('REMOVE_NOTE', data.note)})
          .then(location.reload())
          .catch(err => console.log(err.message))
  
    },

    async addNewNote({commit},note){

      fetch('http://5.135.119.239:3090/notes', {
      method: 'POST',
      headers: {
        'Content-Type':'application/json'
      },
      body: JSON.stringify({
        'title': note.title,
        'content': [note.content]
      })
    })
      .then(response => response.json())
      .then(data => {if(data){commit('NEW_NOTE',note)}})
      .then(location.reload())
      .catch(err => console.log(err.message))
    },

    async editNote({commit},note){

       
       console.log(note);

       fetch(`http://5.135.119.239:3090/notes/${note[0]._id}`, {
           method: 'PUT',
           headers: {
             'Content-Type':'application/json'
           },
           body: JSON.stringify({
             'title': note[0].title,
             'content': [note[0].content]
           })
         })
         .then(response => response.json())
         .then(data => {if(data){commit('UPDATE_NOTE',note)}})
         .then(location.reload())
         .catch(err => console.log(err.message))
    }
  },
  modules: {
  }

})
