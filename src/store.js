import Vue from 'vue';
import Vuex from 'vuex';
import db from '@/firebase/init'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    tareas: [],
    tarea:{nombre:'', id:''}
  },
  mutations: {
    setTareas(state, tareas){
      state.tareas = tareas
    },
    setTarea(state, tarea){
      state.tarea=tarea
    },
    eliminarTarea(state,id){
      state.tareas=state.tareas.filter(doc=>{
        return doc.id!=id
      } )
    }
  },
  actions: {
    getTareas({commit}){
      const tareas=[]
      db.collection('tareas').get()
      .then(snapshot => {
        snapshot.forEach(doc=>{
          //console.log(doc.id);
          //console.log(doc.data());
          let tarea = doc.data();
          tarea.id=doc.id
          tareas.push(tarea)
        })
      })

      commit('setTareas', tareas)
    },
    agregarTarea({commit},nombre){
      const tareas=[]
      db.collection('tareas').add({
        nombre: nombre
      })
      .then(doc=>{
        console.log(doc.id);
      }),
      db.collection('tareas').get()
      .then(snapshot => {
        snapshot.forEach(doc=>{
          //console.log(doc.id);
          //console.log(doc.data());
          let tarea = doc.data();
          tarea.id=doc.id
          tareas.push(tarea)
        })
      })

      commit('setTareas', tareas)
    },
    eliminarTarea({commit, dispatch},id){
      db.collection('tareas').doc(id).delete()
      .then(()=>{
        console.log('Tarea Eliminada');
        commit('eliminarTarea',id)
      })
    }
    
  }
  
});
