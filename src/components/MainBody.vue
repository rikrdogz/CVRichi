<template>
  <CVTitle></CVTitle>
</template>

<script>
import CVTitle from './title/CVTitle.vue';

export default {
  name: 'HelloWorld',
  components: {CVTitle},
  props: {
    msg: String
  }
}
</script>
