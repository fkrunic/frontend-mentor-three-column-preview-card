<script setup lang="ts">
// import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <div class="flex justify-center items-center min-h-screen">
    <div class="flex flex-col w-56 m-10">

      <!-- Sedans -->
      <div class="flex flex-col items-start gap-6 p-8 bg-bright-orange rounded-tl-lg rounded-tr-lg">
        <img class="w-12" src="./assets/img/icon-sedans.svg" alt="sedan">
        <p class="font-big-shoulders text-very-light-gray text-2xl">SEDANS</p>
        <p class="font-lexend-deca text-xs text-transparent-white">
          Choose a sedan for its affordability and excellent fuel economy.
          Ideal for cruising in the city or on your next road trip.
        </p>
        <div class="flex justify-center bg-very-light-gray rounded-3xl px-4 py-2 w-28">
          <p class="text-bright-orange text-xs">Learn More</p>
        </div>
      </div>

      <!-- SUVS -->
      <div class="flex flex-col items-start gap-6 p-8 bg-dark-cyan">
        <img class="w-12" src="./assets/img/icon-suvs.svg" alt="sedan">
        <p class="font-big-shoulders text-very-light-gray text-2xl">SUVS</p>
        <p class="font-lexend-deca text-xs text-transparent-white">
          Take an SUV for its spacious interior, power, and versatility.
          Perfect for your next family vacation and off-road adventures.
        </p>
        <div class="flex justify-center bg-very-light-gray rounded-3xl px-4 py-2 w-28">
          <p class="text-dark-cyan text-xs">Learn More</p>
        </div>
      </div>

      <!-- Luxury -->
      <div class="flex flex-col items-start gap-6 p-8 bg-very-dark-cyan rounded-bl-lg rounded-br-lg">
        <img class="w-12" src="./assets/img/icon-luxury.svg" alt="sedan">
        <p class="font-big-shoulders text-very-light-gray text-2xl">LUXURY</p>
        <p class="font-lexend-deca text-xs text-transparent-white">
          Cruise in the best car brands without the bloated prices. Enjoy the enhanced
          comfort of a luxury rental and arrive in style.
        </p>
        <div class="flex justify-center bg-very-light-gray rounded-3xl px-4 py-2 w-28">
          <p class="text-very-dark-cyan text-xs">Learn More</p>
        </div>
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