<template>
  <div>

    <CVTitle></CVTitle>

    <div v-for="(work, index) in ListWork" :key="index">

      <exp-work
        :titleprofile="work.titleprofile"
        :company="work.company"
        :time="work.time"
        :resume="work.resume"
		:listTechs="work.listTechs"
      ></exp-work>


    </div>
  </div>
</template>

<script>
import CVTitle from "./title/CVTitle.vue";
import ExpWork from "./experience/work.vue";

import Spanish from "../assets/json/spanish.json";

export default {
  name: "HelloWorld",
  components: { CVTitle, ExpWork },
  data() {
    return {
		ListWork:[],
	};
  },
  props: {
    msg: String,
  },
  methods: {
    LoadData() {
		this.ListWork = Spanish;
	},
  },

	created() {
		this.LoadData();
	},

};
</script>
