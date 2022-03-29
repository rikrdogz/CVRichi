<template>
    <div class="p-2 shadow mt-4">
        <div><strong class="text-2xl">{{titleprofile}}</strong></div>
        <div v-if="listTechs.lenght > 0">{{listTechs}}</div>
        <div><span>{{resum}}</span></div>
    </div>
</template>

<script>
export default {
    name:'exp-work',
    data() {
        return {
            
        }
    },
    props:{
        titleprofile : { type: String, default:''},
        resum:{type:String, default:''},
        listTechs:{type:Array, default:new Array},
    }
}
</script>