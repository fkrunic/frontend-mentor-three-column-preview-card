<script setup lang="ts">
// import HelloWorld from './components/HelloWorld.vue'
import LearnMoreButton from './components/LearnMoreButton.vue'
</script>

<template>
  <div class="flex justify-center items-center min-h-screen">
    <div class="
      flex 
      flex-col 
      w-56 
      m-10 
      
      desktop:flex-row 
      desktop:w-[57rem]
      
      ">

      <!-- Sedans -->
      <div class="
        flex 
        flex-col 
        items-start 
        gap-6 
        p-8 

        bg-bright-orange 
        rounded-tl-lg 
        rounded-tr-lg
        
        desktop:rounded-bl-lg
        desktop:rounded-tr-none
        desktop:p-10
        desktop:px-12
        ">
        <img class="w-12 desktop:w-16" src="./assets/img/icon-sedans.svg" alt="sedan">
        <p class="font-big-shoulders text-very-light-gray text-2xl desktop:text-4xl">SEDANS</p>
        <p class="font-lexend-deca text-xs text-transparent-white desktop:text-sm desktop:leading-6">
          Choose a sedan for its affordability and excellent fuel economy.
          Ideal for cruising in the city or on your next road trip.
        </p>
        <LearnMoreButton textColor="text-bright-orange"></LearnMoreButton>
      </div>

      <!-- SUVS -->
      <div class="flex flex-col items-start gap-6 p-8 bg-dark-cyan desktop:p-10 desktop:px-12">
        <img class="w-12 desktop:w-16" src="./assets/img/icon-suvs.svg" alt="sedan">
        <p class="font-big-shoulders text-very-light-gray text-2xl desktop:text-4xl">SUVS</p>
        <p class="font-lexend-deca text-xs text-transparent-white desktop:text-sm desktop:leading-6">
          Take an SUV for its spacious interior, power, and versatility.
          Perfect for your next family vacation and off-road adventures.
        </p>
        <LearnMoreButton textColor="text-dark-cyan"></LearnMoreButton>
      </div>

      <!-- Luxury -->
      <div class="
        flex 
        flex-col 
        items-start 
        gap-6 
        p-8 

        bg-very-dark-cyan 
        rounded-bl-lg 
        rounded-br-lg
        
        desktop:rounded-bl-none
        desktop:rounded-tr-lg 
        desktop:rounded-br-lg
        desktop:p-10
        desktop:px-12
        ">
        <img class="w-12 desktop:w-16" src="./assets/img/icon-luxury.svg" alt="sedan">
        <p class="font-big-shoulders text-very-light-gray text-2xl desktop:text-4xl">LUXURY</p>
        <p class="font-lexend-deca text-xs text-transparent-white desktop:text-sm desktop:leading-6">
          Cruise in the best car brands without the bloated prices. Enjoy the enhanced
          comfort of a luxury rental and arrive in style.
        </p>
        <LearnMoreButton textColor="text-very-dark-cyan"></LearnMoreButton>
      </div>

    </div>
  </div>
</template>

<style scoped>
* {
  box-sizing: border-box;
}
</style>

<script lang="ts">
export default {
  data() {
    return {
      bodyClass: 'bg-very-light-gray'
    };
  },
  mounted() {
    document.body.className = this.bodyClass;
  },
  beforeDestroy() {
    // Reset the class when the component is destroyed
    document.body.className = '';
  }
};
</script>