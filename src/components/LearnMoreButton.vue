<script setup lang="ts">
defineProps<{ textColor: string }>()
</script>

<template>
  <div class="
      flex 
      justify-center 

      px-4 
      py-2 
      w-28
      rounded-3xl

      bg-very-light-gray 
      border-2
      border-solid
      border-very-light-gray 
      
      group
      hover:cursor-pointer
      hover:bg-opacity-0
      
      desktop:w-32
      desktop:mt-16

      ">
      <p class=
        "text-xs 

        group-hover:text-very-light-gray

        desktop:text-sm

        "
        :class="textColor"
        >
        Learn More
      </p>
    </div>
</template>