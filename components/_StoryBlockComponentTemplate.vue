<template>
  <div v-editable="blok">
    <pre>{{blok}}</pre>
  </div>
</template>
 
<script>
export default {
  props: {
    blok: {
      type: Object,
      required: true
    }
  }
}
</script>
