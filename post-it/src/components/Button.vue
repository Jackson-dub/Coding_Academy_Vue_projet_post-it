<template>
  <button @click="onClick()">Ad po</button>
</template>

<script>

export default {
name:'Button',

methods: {
    onClick(){
        console.log('click')
    },
    }
}
</script>
