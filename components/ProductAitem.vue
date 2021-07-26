<template>
  <div class="bg-white pt-5 flex items-center">
    <div class="container flex flex-wrap items-center lg:flex-no-wrap">
      <a
        href="#"
        class="lg:hidden ml-auto flex flex-col relative justify-center w-8 h-8 mt-3 mb-3"
        @click.prevent="mobileNavOpen = !mobileNavOpen"
      >
        <span
          class="bg-gray-900 h-1 w-8 rounded mb-1"
          :class="{
            'transition-all duration-200 transform rotate-45 absolute right-0': mobileNavOpen
          }"
        ></span>
        <span
          class="bg-gray-900 h-1 w-8 rounded mb-1"
          :class="{
            'transition-all duration-200 transform -rotate-45 absolute right-0': mobileNavOpen
          }"
        ></span>
        <span
          class="bg-gray-900 h-1 w-8 rounded mb-1"
          :class="{ hidden: mobileNavOpen }"
        ></span>
      </a>

      <div
        class="w-full flex"
        :class="{
          'mt-8': mobileNavOpen,
          'hidden lg:flex': !mobileNavOpen
        }"
      >
        <ul class=" lg:flex lg:flex-wrap  ml-auto lg:w-auto">
          <li class="">
            <nuxt-link
              :to="{ name: 'product-Hatchback' }"
              class="flex flex-row items-center p-1  rounded-lg text-secondary hover:bg-gray-900 hover:text-yellow "
            >
              <svg
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
                class="h-6 w-6"
              >
                <path
                  d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                ></path>
              </svg>

              <span class="p-1">Hatchback</span>
            </nuxt-link>
          </li>
          <li>
            <nuxt-link
              :to="{ name: 'product-Mpv' }"
              class="flex flex-row items-center p-1  rounded-lg text-secondary hover:bg-gray-900 hover:text-yellow "
            >
              <svg
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
                class="h-6 w-6"
              >
                <path
                  d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                ></path>
              </svg>

              <span class="p-1">Mpv</span>
            </nuxt-link>
          </li>
          <li>
            <nuxt-link
              :to="{ name: 'product-Suv' }"
              class="flex flex-row items-center p-1  rounded-lg text-secondary hover:bg-gray-900 hover:text-yellow "
            >
              <svg
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
                class="h-6 w-6"
              >
                <path
                  d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                ></path>
              </svg>

              <span class="p-1">SUV</span>
            </nuxt-link>
          </li>
          <li>
            <nuxt-link
              :to="{ name: 'product-Sedan' }"
              class="flex flex-row items-center p-1  rounded-lg text-secondary hover:bg-gray-900 hover:text-yellow "
            >
              <svg
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
                class="h-6 w-6"
              >
                <path
                  d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                ></path>
              </svg>

              <span class="p-1">Sedan</span>
            </nuxt-link>
          </li>
          <li>
            <nuxt-link
              :to="{ name: 'product-Sport' }"
              class="flex flex-row items-center p-1  rounded-lg text-secondary hover:bg-gray-900 hover:text-yellow "
            >
              <svg
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
                class="h-6 w-6"
              >
                <path
                  d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                ></path>
              </svg>

              <span class="p-1">Sport</span>
            </nuxt-link>
          </li>
          <li>
            <nuxt-link
              :to="{ name: 'product-Commercial' }"
              class="flex flex-row items-center p-1  rounded-lg text-secondary hover:bg-gray-900 hover:text-yellow "
            >
              <svg
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
                class="h-6 w-6"
              >
                <path
                  d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                ></path>
              </svg>

              <span class="p-1">Commercial</span>
            </nuxt-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mobileNavOpen: false
    };
  }
};
</script>
