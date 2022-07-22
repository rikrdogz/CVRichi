<template>
    <div class="p-4 shadow mt-2 work">
        
        <div>
            <strong class="text-2xl print:text-xl">{{titleprofile}}</strong>
        </div>

        <div v-if="listTechs.length > 0"  class="m-2 ml-0 tech">
            <strong v-for="(word, index) in listTechs" :key="index" class="p-1 border-b border-gray-300 text-blue-700 ml-3 word">{{word}}</strong>
        </div>
        
        <div class="text-slate-700 mt-1 company">
            <font-awesome-icon icon="building" />
            <span class="tracking-wider uppercase  ml-1  font-light"> {{company}} </span>
        </div>

        <div class="mt-1 time">
            <font-awesome-icon icon="calendar" />
            <span class=" font-light ml-1"> {{time}} </span>
        </div>

        <div class="flex mt-1 message">
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
        resume:{type:Array, default:new Array},
        listTechs:{type:Array, default:new Array},
        company:{type:String, default:''},
        time:{type:String, default:''}
    }
}
</script>