<template>
  <div class="mx-auto">
    <Hero />
    <div class="container px-16">
      <Portofolio />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "Siapa Kami",
    };
  },
  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Tentang roofel jasa pembuatan website siap pakai ",
        },
      ],
    };
  },
};
</script>
<style></style>
