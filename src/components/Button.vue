<template>
  <div class="controlBtn">
     <v-btn v-on:click="action" class="mx-4" fab  small >
      <v-icon >{{btnIcon}}</v-icon>
    </v-btn>
    <span class="controlBtn__text">{{btnText}}</span>
  </div>
</template>

<script>


export default {
    props:{
        btnText: String,
        btnIcon: String,
        action: Function
    },
}
</script>

<style lang="scss">

.controlBtn{
    margin-right: 20px;

    &__text{
        margin-left: 10px;
    }

    & button:hover{
        box-shadow: 0 0 4px #aaaaaa inset;
    }
}
</style>