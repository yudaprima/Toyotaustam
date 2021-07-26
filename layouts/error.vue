<template>
  <div class="h-screen w-screen bg-gray-100 flex items-center">
    <div
      class="
        container
        flex flex-col
        md:flex-row
        items-center
        justify-center
        px-5
      "
    >
      <div class="max-w-md">
        <div
          v-if="error.statusCode === 404"
          class="text-4xl font-emerald-700 font-bold mb-4"
        >
          Page not found
        </div>
        <div v-else class="text-5xl font-dark font-bold mb-6">
          An error occurred
        </div>

        <p class="mb-8">
          But dont worry, you can find plenty of other things on our homepage.
        </p>

        <button
          class="
            px-4
            inline
            py-2
            text-sm
            leading-5
            shadow
            text-white
            transition-colors
            duration-150
            border border-transparent
            rounded-lg
            focus:outline-none
            bg-gray-900
          "
        >
          <NuxtLink to="/">click here</NuxtLink>
        </button>
      </div>
      <div class="max-w-lg"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["error"],
};
</script>
