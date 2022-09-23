<template>
  <div class="label-small" v-if="this.text != ''">
    <span :class="brandTheme">{{ text }}</span>
  </div>
</template>

<script>
export default {
  props: {
    text: String,
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
};
</script>

<style lang="scss">
.label-small {
  span{
    padding: 2px 4px;
    background-color: #D10A10;
    font-family: "Flama";
    font-style: normal;
    font-weight: 750;
    font-size: 12px;
    line-height: 24px;
    text-transform: uppercase;
    color: #ffffff;
    &.ad{ background-color: #d10a10; }
    &.pzc{ background-color: #0055a3; }
    &.ed{ background-color: #0055a3; }
    &.bd{ background-color: #d10a10; }
    &.bndestem{ background-color: #d10a10; }
    &.destentor{ background-color: #d10a10; }
    &.tubantia{ background-color: #d10a10; }
    &.gelderlander { background-color: #d10a10; }
  }
}
</style>
