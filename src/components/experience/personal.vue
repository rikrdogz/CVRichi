<template>
    <div class="p-2">
        <div><strong>{{titleprofile}}</strong></div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            
        }
    },
    props:{
        titleprofile : { type: String, default:''}
    }
}
</script>