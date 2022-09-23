<template>
  <div class="dates" v-if="this.text != ''">
    <img class="time-icon" src="../../assets/img/icons/schedule.svg" alt="">
    <span class="date-text">{{ text }}</span>
  </div>
</template>

<script>
export default {
  props: {
    text: String,
  },
};
</script>

<style lang="scss">
.dates {
  display: flex;
  align-items: center;
  font-family: "Helvetica";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 20px;
  color: #a9a9a9;
  .date-text{
    margin-left: 8px;
  }
}
</style>
