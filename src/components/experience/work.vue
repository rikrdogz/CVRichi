<template>
    <div class="p-4 shadow mt-4">
        
        <div>
            <strong class="text-2xl">{{titleprofile}}</strong>
        </div>

        <div v-if="listTechs.length > 0"  class="m-2 ml-0">
            <span v-for="(word, index) in listTechs" :key="index" class="p-1 border text-blue-400 ml-1">{{word}}</span>
        </div>
        
        <div class="text-slate-700 mt-1">
            <font-awesome-icon icon="building" />
            <span class="tracking-wider uppercase  ml-1  font-light"> {{company}} </span>
        </div>

        <div class="mt-1">
            <font-awesome-icon icon="calendar" />
            <span class=" font-light ml-1"> {{time}} </span>
        </div>

        <div class="flex mt-1">
            <font-awesome-icon icon="message" />
            <div class="ml-1">
                <p v-for="(word, index) in resume" :key="index"> 
                {{word}}
                </p>
            </div>
        </div>
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
        resume:{type:String, default:''},
        listTechs:{type:Array, default:new Array},
        company:{type:String, default:''},
        time:{type:String, default:''}
    }
}
</script>