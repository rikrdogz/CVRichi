<template>
    <div class="text-center">
        <h1 class="text-5xl name-employe">LUIS RICARDO GENOVEZ CRUZ</h1>
        <h3 class="text-3xl degree">Desarrollador Full Stack</h3>
        <div class="flex justify-center text-2xl print:text-lg">
            <a href="mailto:luisricardogz@gmail.com" class="group email">
                <span class=" mr-2 ml-2 rounded-md p-2 group-hover:bg-blue-700 group-hover:text-gray-100">
                    <font-awesome-icon icon="envelope" class="text-blue-800 icon-title group-hover:text-gray-100" /> <span>luisricardogz@gmail.com</span> 
                </span>
                 
            </a>
            <a href="tel:8992251561 ml-4" class="group phone-number"> 
                <span class=" mr-2 ml-2 rounded-md p-2 group-hover:bg-blue-700 group-hover:text-gray-100">
                    <font-awesome-icon icon="phone" class="text-blue-800 icon-title group-hover:text-gray-100" /> <span>8992251561</span> 
                </span>
             </a>
            <a href="https://github.com/rikrdogz" class="group github"> 
                <span class=" mr-2 ml-2 rounded-md p-2 group-hover:bg-blue-700 group-hover:text-gray-100">
                    <font-awesome-icon :icon="['fab', 'github']" class="text-blue-800 icon-title group-hover:text-gray-100"/> <span>rikrdogz</span>
                </span>
            </a>
            <a href="https://gitlab.com/rikrdogz" class="group github"> 
                <span class=" mr-2 ml-2 rounded-md p-2 group-hover:bg-blue-700 group-hover:text-gray-100">
                    <font-awesome-icon :icon="['fab', 'gitlab']" class="text-blue-800 icon-title group-hover:text-gray-100"/> <span>rikrdogz</span>
                </span>
            </a>

            <a href="https://dev.azure.com/ricardocode/_git/CreditosCoreDev" class="group azure-repos">
            <span class=" mr-2 ml-2 rounded-md p-2 group-hover:bg-blue-700 group-hover:text-gray-100">
                    <font-awesome-icon :icon="['fab', 'git']" class="text-blue-800 icon-title group-hover:text-gray-100 pt-4"/> <span>ricardocode</span>
                </span>
            </a>
            
        </div>

       
        
    </div>
</template>
<script>
export default {
    data() {
        return {
            
        }
    },
}
</script>