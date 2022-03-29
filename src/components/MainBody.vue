<template>
  <div>
    
    <CVTitle></CVTitle>

    <div>
      <exp-work :titleprofile="'Desarrollador de software'"></exp-work>
    </div>
    

  </div>
</template>

<script>
import CVTitle from './title/CVTitle.vue';
import ExpWork from './experience/work.vue';

export default {
  name: 'HelloWorld',
  components: {CVTitle, ExpWork},
  props: {
    msg: String
  }
}
</script>
