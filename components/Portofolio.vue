<template>
  <div class="container mx-auto">
    <div class="py-6 mt-9">
      <div class="flex justify-center leading-9">
        <div class="space-y-6">
          <div class="text-3xl font-semibold">
            We Serve

            <span class="text-red inline p-1">You Better</span>
          </div>
        </div>
      </div>
      <div class="flex flex-wrap justify-center grid lg:grid-cols-3 gap-3 mt-9">
        <div
          class="
            bg-moodyblues
            text-whitemilk
            p-5
            shadow-lg
            rounded-lg
            mx-4
            my-4
          "
          v-for="solution in solutions"
          :key="solution.id"
        >
          <div>
            <nuxt-img
              v-if="solution.image"
              class="object-cover"
              :src="solution.image"
              loading="lazy"
              :alt="solution.alt"
            />
            <!-- <div class="font-medium text-yellow mb-3 mt-3">
              {{ solution.title }}
            </div>
            <p class="text-sm leading-relaxed pb-3">
              {{ solution.frontsubtitle }}
            </p> -->
          </div>
        </div>
      </div>
      <div class="mx-auto">
        <div class="space-y-6">
          <div class="text-xl font-semibold">
            <h2
              class="
                text-center text-3xl
                font-extrabold
                lg:pt-9
                text-black
                mb-6
              "
            >
              Visi
            </h2>
            <p>
              Melayani pembeli toyota dengan baik sehingga merasa nyaman sebagai
              keluarga toyota dan loyal terhadap produk toyota.
            </p>
          </div>
        </div>
        <div class="space-y-6">
          <div class="text-xl font-semibold">
            <h2
              class="
                text-center text-3xl
                font-extrabold
                lg:pt-9
                text-black
                mb-6
              "
            >
              Misi
            </h2>
            <ul class="">
              <li>✓berdagang dengan baik</li>
              <li>✓pasti ada pembeli yang baik</li>
              <li>✓selalu ada harapan</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <AnswerQuestion />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      solutions: [
        {
          id: "1",
          image: "/dealer-toyota-jogja-info.webp",
          alt: "pembuatan website teroptimasi seo untuk rumah makan",
          title: "rempahasiayogya.com",
          frontsubtitle:
            "website jamstack teroptimasi seo restoran makanan asia di Sleman Yogyakarta",
        },
        {
          id: "2",
          image: "/dealer-toyota-jogja-profile.webp",
          alt: "website teroptimasi & seo friendly untuk company profile perusahaan karya sembada",
          title: "karyasembada.com",
          frontsubtitle:
            "website jamstack teroptimasi seo jasa pembangunan dan interior design di Sleman Yogyakarta",
        },
        {
          id: "3",
          image: "/dealer-toyota-jogja-sales.webp",
          alt: "pembuatan web toko online teroptimasi & seo friendly",
          title: "lalitakids.com",
          frontsubtitle:
            "website wordpress toko online seo friendly mainan anak Kebumen ",
        },
      ],
    };
  },
};
</script>

<style></style>
