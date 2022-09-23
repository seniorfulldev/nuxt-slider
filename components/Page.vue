<template>
  <div v-editable="blok" class="page-holder">
    <component
      class="component"
      v-for="blok in blok.body"
      :key="blok._uid"
      :blok="blok"
      :brandTheme="brandTheme"
      :is="blok.component" />
  </div>
</template>
 
<script>
export default {
  props: {
    blok: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      brandTheme: 'default'
    };
  },
  created(){
    //Set page Theme
    const path = this.$router.currentRoute.path.replace('/', ' ').split(' ')

    if(path.includes('ad')){ this.brandTheme = 'ad'; }
    else if(path.includes('pzc')){ this.brandTheme = 'pzc'; }
    else if(path.includes('ed')){ this.brandTheme = 'ed'; }
    else if(path.includes('bd')){ this.brandTheme = 'bd'; }
    else if(path.includes('bndestem')){ this.brandTheme = 'bndestem'; }
    else if(path.includes('destentor')){ this.brandTheme = 'destentor'; }
    else if(path.includes('tubantia')){ this.brandTheme = 'tubantia'; }
    else if(path.includes('gelderlander')){ this.brandTheme = 'gelderlander'; }
  }
}
</script>

<style lang="scss">
.page-holder{
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 40px;
  .component{
    max-width: 1200px;
    margin-top: 40px;
    @include desktopxl-down{
      margin-top: 48px;
    }
  }
}
</style>