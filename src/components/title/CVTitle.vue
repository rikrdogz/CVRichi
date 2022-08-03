<template>
  <div class="p-4">
    <div class="name-employe">
      <div class="name text-4xl font-bold">LUIS RICARDO</div>
      <div class="last-name text-3xl font-light">GENOVEZ CRUZ</div>
    </div>

    <h3 class="text-3xl degree mt-3 font-mono">Desarrollador Full Stack</h3>

    <div class="contact-info mt-8">
      <h3 class="text-2xl">Contacto</h3>
      <div class="text-2xl print:text-lg p-1">
        <a href="mailto:luisricardogz@gmail.com" class="group email block">
          <span
            class="mr-2 ml-2 rounded-md p-2 group-hover:bg-blue-700 group-hover:text-gray-100 w-full flex justify-between"
          >
            <font-awesome-icon
              icon="envelope"
              class="text-blue-800 icon-title group-hover:text-gray-100"
            />
            <span>luisricardogz@gmail.com</span>
          </span>
        </a>
        <a href="tel:8992251561 ml-4" class="group phone-number block">
          <span
            class="mr-2 ml-2 rounded-md p-2 group-hover:bg-blue-700 group-hover:text-gray-100  w-full flex justify-between"
          >
            <font-awesome-icon
              icon="phone"
              class="text-blue-800 icon-title group-hover:text-gray-100"
            />
            <span>8992251561</span>
          </span>
        </a>
        <a href="https://github.com/rikrdogz" class="group github block">
          <span
            class="mr-2 ml-2 rounded-md p-2 group-hover:bg-blue-700 group-hover:text-gray-100  w-full flex justify-between"
          >
            <font-awesome-icon
              :icon="['fab', 'github']"
              class="text-blue-800 icon-title group-hover:text-gray-100"
            />
            <span>rikrdogz</span>
          </span>
        </a>
        <a href="https://gitlab.com/rikrdogz" class="group github block">
          <span
            class="mr-2 ml-2 rounded-md p-2 group-hover:bg-blue-700 group-hover:text-gray-100  w-full flex justify-between"
          >
            <font-awesome-icon
              :icon="['fab', 'gitlab']"
              class="text-blue-800 icon-title group-hover:text-gray-100"
            />
            <span>rikrdogz</span>
          </span>
        </a>

        <a
          href="https://dev.azure.com/ricardocode/_git/CreditosCoreDev"
          class="group azure-repos  "
        >
          <span
            class="mr-2 ml-2 rounded-md p-2 group-hover:bg-blue-700 group-hover:text-gray-100  w-full flex justify-between"
          >
            <font-awesome-icon
              :icon="['fab', 'git']"
              class="text-blue-800 icon-title group-hover:text-gray-100 pt-4"
            />
            <span>ricardocode</span>
          </span>
        </a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
};
</script>
