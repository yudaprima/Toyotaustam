<template>
  <div>
    <nuxt-link
      :to="{ name: 'index' }"
      class="inline-flex items-center p-2 mr-4 "
    >
      <svg
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        class="text-lg lg:py-8 lg:px-4 text-yellow"
      >
        <path
          d="M11 4a1 1 0 10-2 0v1a1 1 0 002 0V4zM10 7a1 1 0 011 1v1h2a1 1 0 110 2h-3a1 1 0 01-1-1V8a1 1 0 011-1zM16 9a1 1 0 100 2 1 1 0 000-2zM9 13a1 1 0 011-1h1a1 1 0 110 2v2a1 1 0 11-2 0v-3zM7 11a1 1 0 100-2H4a1 1 0 100 2h3zM17 13a1 1 0 01-1 1h-2a1 1 0 110-2h2a1 1 0 011 1zM16 17a1 1 0 100-2h-3a1 1 0 100 2h3z"
        />
      </svg>
      <span
        class="text-xl text-yellow bg-moodyblues inline px-2 py-2 px-2 rounded-full font-bold uppercase tracking-wide lg:mr-9"
        >KS</span
      >
    </nuxt-link>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
