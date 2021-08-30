<template>
  <div class="mx-auto">
    <Hero />

    <div class="container px-16">
      <div class="h-auto  overflow-hidden px-4 flex flex-wrap">
        <div
          class="container lg:w-2/3  mx-auto relateive py-20 space-y-5 px-0 lg:px-24"
        >
          <h1 class="font-extrabold text-2xl leading-tight">
            INTEGRATION.
          </h1>
          <p class="leading-9 ">
            What sets Karya Sembada apart from our competition is the
            integration of architecture and construction within a single
            company. Clients can sometimes struggle to coordinate between their
            architects and their contractors. Clients often work with architects
            who have a poor understanding of cost and constructability or with
            contractors who have no design sense or ability to build outside of
            industry norms. This dynamic leads to boring work that costs the
            client more in the end.
          </p>
          <h1 class="font-extrabold text-2xl leading-tight">
            EFFICIENCY.
          </h1>
          <p class="leading-9 ">
            Karya Sembada offers clients a single point of contact for the
            entire design and construction process. This means no
            finger-pointing between architects and contractors; we are
            completely responsible for the entire project. We’re able to work
            quickly, overlapping design and construction, which allows for more
            aggressive construction schedules and more design creativity. As
            designers, we also creatively problem-solve in the field to find
            aesthetically appropriate solutions to the many hurdles that present
            themselves during the construction process.
          </p>
          <!-- <h1 class="font-extrabold text-2xl leading-tight">
            Misi Kami.
          </h1>
          <p class="leading-9">
            Menjadi mitra yang bisa memberikan masukan, ide dan gambaran yang
            sebenar benarnya tentang web aplikasi sehingga bisa sesuai dan
            bersinergi dengan bisnis yang anda bangun
          </p> -->
          <!-- <h1 class="font-extrabold text-2xl leading-tight">
            Our Project
          </h1> -->
          <!-- <p class="leading-9 ">
            salah satu project yang sedang dikerjakan
          </p> -->

          <!-- <button class="bg-primary rounded-lg py-2 px-8 text-white">
            <a
              class=""
              href="https://lalitakids.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Lihat Project
            </a>
          </button> -->
        </div>
        <!-- <div class="lg:w-1/3  hidden md:block">
          <nuxt-img src="/about.webp" alt="student" class="rounded-lg h-auto " />
        </div> -->
      </div>
    </div>
    <!-- <ContactCard /> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "Siapa Kami"
    };
  },
  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Tentang roofel jasa pembuatan website siap pakai "
        }
      ]
    };
  }
};
</script>
<style></style>
