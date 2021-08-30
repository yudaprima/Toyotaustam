<template>
  <div class="w-full mx-auto p-3 lg:pt-8 pb-7 mt-9">
    <div class="lg:space-y-6">
      <div class=" flex flex-wrap mx-auto lg:px-2 ">
        <div class="w-full">
          <div class="flex flex-wrap justify-center grid lg:grid-cols-2 gap-3">
            <div
              class=" rounded-lg mx-2 my-5 space-y-6 mx-auto flex flex-col md:flex-row"
              v-for="product in products"
              :key="product.id"
            >
              <div
                class="flex flex-col w-full lg:w-3/5 justify-center items-start"
              >
                <h1 class=" mb-5 text-red font-extrabold ">
                  {{ product.title }}
                </h1>
                <nuxt-img
                  v-if="product.image"
                  class=" object-cover rounded-lg"
                  :src="product.image"
                  width="500px"
                  height="290px"
                />
                <button
                  class="w-full border-b-2 border-gray-800 pb-4 text-left group mt-4 focus:outline-none"
                >
                  <div class=" font-semibold text-red  mb-5">
                    PRICE
                  </div>

                  <p
                    class="pt-3 justify-between text-red mb-4 flex flex-wrap hidden group-focus:flex"
                  >
                    {{ product.price }}
                    <!-- <span
                      v-if="product.sale"
                      class="text-xs inline-block p-2 uppercase rounded-lg  uppercase last:mr-0 mr-1"
                    >
                      Cicilan {{ product.sale }}
                    </span> -->
                  </p>

                  <p
                    class="pt-3 justify-between text-red mb-4 flex flex-wrap hidden group-focus:flex"
                  >
                    <span class="italic font-light">{{ product.price2 }}</span>
                  </p>
                  <p
                    class="pt-3 justify-between text-red mb-4 flex flex-wrap hidden group-focus:flex"
                  >
                    <span class="italic font-light">{{ product.price3 }}</span>
                  </p>
                  <p
                    class="pt-3 justify-between text-red mb-4 flex flex-wrap hidden group-focus:flex"
                  >
                    <span class="italic font-light">{{ product.price4 }}</span>
                  </p>
                  <p
                    class="pt-3 justify-between text-red mb-4 flex flex-wrap hidden group-focus:flex"
                  >
                    <span class="italic font-light">{{ product.price5 }}</span>
                  </p>
                  <p
                    class="pt-3 justify-between text-red mb-4 flex flex-wrap hidden group-focus:flex"
                  >
                    <span class="italic font-light">{{ product.price6 }}</span>
                  </p>
                  <p
                    class="pt-3 justify-between text-red mb-4 flex flex-wrap hidden group-focus:flex"
                  >
                    <span class="italic font-light">{{ product.price7 }}</span>
                  </p>
                  <p
                    class="pt-3 justify-between text-red mb-4 flex flex-wrap hidden group-focus:flex"
                  >
                    <span class="italic font-light">{{ product.price8 }}</span>
                  </p>
                  <p
                    class="pt-3 justify-between text-red mb-4 flex flex-wrap hidden group-focus:flex"
                  >
                    <span class="italic font-light">{{ product.price9 }}</span>
                  </p>
                  <p
                    class="pt-3 justify-between text-red mb-4 flex flex-wrap hidden group-focus:flex"
                  >
                    <span class="italic font-light">{{ product.price10 }}</span>
                  </p>
                </button>
              </div>
              <div class="p-2 bg-gray-900 text-white rounded-lg  lg:w-2/5">
                <button
                  class="w-full border-b-2 border-gray-800 pb-4 text-left group mt-4 focus:outline-none"
                >
                  <div class=" font-semibold mb-5">
                    DIMENSI
                  </div>

                  <p
                    class="  text-sm text-gray-400 mb-4 font-bold hidden group-focus:flex"
                  >
                    L / W / H / Wheelbase :
                  </p>
                  <p
                    class="  text-sm text-gray-400 mb-4 font-bold hidden group-focus:flex"
                  >
                    <span class="italic font-light">{{ product.Dimensi }}</span>
                  </p>
                </button>
                <button
                  class="w-full border-b-2 border-gray-800 pb-4 text-left group mt-4 focus:outline-none"
                >
                  <div class=" font-semibold mb-5">
                    SPESIFIKASI
                  </div>
                  <p
                    class="  text-sm text-gray-400 mb-4 font-bold hidden group-focus:flex"
                  >
                    Transmission :
                    <span class="italic font-light">{{
                      product.Transmission
                    }}</span>
                  </p>
                  <p
                    class="  text-sm text-gray-400 mb-4 font-bold hidden group-focus:flex"
                  >
                    BrakeSystem :
                    <span class="italic font-light">{{
                      product.BrakeSystem
                    }}</span>
                  </p>
                  <p
                    class="  text-sm text-gray-400 mb-4 font-bold hidden group-focus:flex"
                  >
                    FrontBrake :
                    <span class="italic font-light">{{
                      product.FrontBrake
                    }}</span>
                  </p>
                  <p
                    class="  text-sm text-gray-400 mb-4 font-bold hidden group-focus:flex"
                  >
                    RearBrake :
                    <span class="italic font-light">{{
                      product.RearBrake
                    }}</span>
                  </p>
                  <p
                    class="  text-sm text-gray-400 mb-4 font-bold hidden group-focus:flex"
                  >
                    FrontSuspension :
                    <span class="italic font-light">{{
                      product.FrontSuspension
                    }}</span>
                  </p>
                </button>
                <button
                  class="w-full border-b-2 border-gray-800 pb-4 text-left group mt-4 focus:outline-none"
                >
                  <div class=" font-semibold mb-5">
                    CHASSIS
                  </div>
                  <div>
                    <p
                      class="  text-sm text-gray-400 mb-4 font-bold hidden group-focus:flex"
                    >
                      Engine Type :
                    </p>
                    <p
                      class="  text-sm text-gray-400 mb-4 font-bold hidden group-focus:flex"
                    >
                      <span class="italic font-light">{{
                        product.EngineType
                      }}</span>
                    </p>
                    <p
                      class="  text-sm text-gray-400 mb-4 font-bold hidden group-focus:flex"
                    >
                      Bore x Stroke :
                      <span class="italic font-light">{{
                        product.BorexStroke
                      }}</span>
                    </p>
                    <p
                      class="  text-sm text-gray-400 mb-4 font-bold hidden group-focus:flex"
                    >
                      Displacement :
                      <span class="italic font-light">{{
                        product.Displacement
                      }}</span>
                    </p>
                    <p
                      class="  text-sm text-gray-400 mb-4 font-bold hidden group-focus:flex"
                    >
                      Max Power :
                      <span class="italic font-light">{{
                        product.MaxPower
                      }}</span>
                    </p>
                    <p
                      class="  text-sm text-gray-400 mb-4 font-bold hidden group-focus:flex"
                    >
                      Max Torque :
                      <span class="italic font-light">{{
                        product.MaxTorque
                      }}</span>
                    </p>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
export default {
  name: "products",
  components: {},
  props: ["products"]
};
</script>
<style>
.group:focus .group-focus\:flex {
  display: flex;
}
</style>
