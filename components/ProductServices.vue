<template>
  <div class="container mt-6">
    <div class="mx-auto lg:px-32 py-6 ">
      <div class="flex justify-center leading-9">
        <div class="space-y-6">
          <div class="text-center text-3xl font-extrabold lg:pt-9 text-black">
            We Serve

            <span class="text-red inline p-1">You Better</span>
          </div>
        </div>
      </div>
      <div class="flex flex-wrap justify-center grid lg:grid-cols-3 gap-3 pt-8">
        <div
          class="bg-moodyblues hover:bg-white text-whitemilk hover:text-black p-5 shadow-lg rounded-lg border-1 mx-4 my-4 space-y-6"
          v-for="service in services"
          :key="service.id"
        >
          <TumbUp />
          <div>
            <div class="text-lg font-semibold text-red mb-3">
              {{ service.title }}
            </div>
            <p class="leading-relaxed pb-11">
              {{ service.frontsubtitle }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      services: [
        {
          id: "1",
          title: "Booking Services",
          frontsubtitle:
            "Nasmoco Menyediakan Booking Service untuk memudahkan servis kendaraan anda."
        },
        {
          id: "2",
          title: "General Repair",
          frontsubtitle:
            " Nasmoco menawarkan jasa perbaikan dan perawatan untuk memenuhi kebutuhan mobil Anda."
        },

        {
          id: "3",
          title: "Sparepart & Accesories",
          frontsubtitle:
            " Nasmoco menyediakan sparepart dan aksesoris yang dirancang, dibuat, diuji, dan disertifikasi untuk digunakan pada kendaraan Anda."
        }
      ]
    };
  }
};
</script>
