<template>
  <footer class="relative bg-gray-900 border-2 border-gray-800 pt-8 pb-6">
    <div class="container mx-auto px-4">
      <div class="flex flex-wrap">
        <div class="w-full lg:w-6/12 px-4">
          <span class="text-3xl text-gray-200 font-semibold">
            Let's keep in touch!
          </span>
          <ul>
            <li>
              <a
                class="text-gray-200 hover:text-gray-700 pt-5 block pb-2 text-sm space-y-4"
                href="http://google.com/maps/dir/-7.6762044,109.652039/dealer+toyota+jogja+janti/@-7.8142056,109.4828604,9z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x2e7a5746a848f60d:0xbbb3d4fe962a232!2m2!1d110.4089297!2d-7.8097609"
                target="_blank"
                rel="noopener noreferrer"
              >
                Our Office
              </a>
            </li>
            <li class="mt-0 text-gray-200">
              Nasmoco Janti
              <br />

              Alamat : Jl Ring Road Timur 58A Banguntapan Bantul, Yogyakarta
              55198<br />

              Fax. : 0274-452-040
            </li>
          </ul>
        </div>
        <div class="w-full lg:w-6/12 px-4">
          <div class="flex flex-wrap items-top mb-6">
            <div class="w-full lg:w-4/12 px-4 ml-auto">
              <span
                class="block uppercase text-gray-200 text-sm font-semibold mb-2"
                >Useful Links</span
              >
              <ul
                class="list-unstyled text-gray-200 hover:text-gray-300  block pb-2 text-sm space-y-4"
              >
                <li>
                  <a class="" href="#">
                    About Us
                  </a>
                </li>
                <li>
                  <a class="" href="#">
                    Blog
                  </a>
                </li>
                <li>
                  <a class="" href="#">
                    Github
                  </a>
                </li>
                <!-- <li>
                  <a
                    class="text-gray-200 hover:text-gray-300 block pb-2 text-sm space-y-4"
                    href="#"
                  >
                    Free Products Demo
                  </a>
                </li> -->
              </ul>
            </div>
            <div class="w-full lg:w-4/12 px-4">
              <span
                class="block uppercase text-gray-200 text-sm font-semibold mb-2"
                >Other Resources</span
              >
              <ul
                class="list-unstyled text-gray-200 hover:text-gray-300  block pb-2 text-sm space-y-4"
              >
                <li>
                  <a class="" href="#">
                    MIT License
                  </a>
                </li>
                <li>
                  <a class="" href="#">
                    Terms & Conditions
                  </a>
                </li>
                <li>
                  <a class="" href="#">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a class="" href="#">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <hr class="my-6 border-gray-300" />
      <div
        class="flex flex-wrap items-center md:justify-between justify-center"
      >
        <div class="w-full md:w-4/12 px-4 mx-auto text-center">
          <div class="text-sm text-gray-300 py-1">
            Copyright © {{ new Date().getFullYear() }} by
            <a
              href="https://www.roofel.com"
              class="text-gray-200 hover:text-gray-300"
            >
              Roofel
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      currentDate: new Date()
    };
  }
};
</script>

<style></style>
