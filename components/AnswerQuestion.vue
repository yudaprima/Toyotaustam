<template>
  <div class="container mx-auto">
    <div
      class="
        flex flex-wrap
        px-3
        lg:px-16
        pt-32
        grid
        lg:grid-cols-2 lg:gap-16 lg:pb-16
        justify-between
      "
    >
      <!-- Component Start -->
      <div class="w-full max-w-screen-sm">
        <button
          class="
            w-full
            border-b-2 border-gray-400
            pb-6
            text-left
            group
            mt-6
            focus:outline-none
          "
        >
          <div class="text-lg font-semibold">
            Q: Apakah beli mobil harus ke dealer ?
          </div>
          <div class="mt-3 hidden group-focus:flex">
            <p>
              Tidak harus, kami selalu senang bisa mempermudah calon pembeli
              mobil toyota, silahkan hubungi kami untuk proses selanjutnya
            </p>
          </div>
        </button>
        <button
          class="
            w-full
            border-b-2 border-gray-400
            pb-6
            text-left
            group
            mt-6
            focus:outline-none
          "
        >
          <div class="text-lg font-semibold">Q: Apakah bisa tukar tambah ?</div>
          <div class="mt-3 hidden group-focus:flex">
            <p>
              Bisa sekali, jika anda sudah memiliki mobil toyota lama dan ingin
              mengganti dengan mobil toyota jenis terbaru, jangan sungkan untuk
              menghubungi nomer kami
            </p>
          </div>
        </button>
        <button
          class="
            w-full
            border-b-2 border-gray-400
            pb-6
            text-left
            group
            mt-6
            focus:outline-none
          "
        >
          <div class="text-lg font-semibold">
            Q: Apakah ada promo untuk pembelian toyota ?
          </div>
          <div class="mt-3 hidden group-focus:flex">
            <p>
              Dealer Mobil toyota selalu memiliki bermacam promo untuk pembelian
              mobil toyota ditempat kami, silahkan menghubungi nomer kontak kami
              untuk mendapatkan update promo terbaru
            </p>
          </div>
        </button>
        <button
          class="
            w-full
            border-b-2 border-gray-400
            pb-6
            text-left
            group
            mt-6
            focus:outline-none
          "
        >
          <div class="text-lg font-semibold">
            Q: Untuk pembelian kredit apakah mudah dan bisa dibantu?
          </div>
          <div class="mt-3 hidden group-focus:flex">
            <p>
              Sangat mudah, silahkan menghubungi nomer kami untuk lebih
              detailnya terkait pembelian kredit mobil toyota di dealer kami
            </p>
          </div>
        </button>
      </div>
      <div class="lg:text-right mt-4 lg:mt-0">
        <div class="md:py-4 flex-grow flex flex-col space-y-8">
          <div class="">
            <h1 class="font-bold text-4xl tracking-wide text-red">
              Contact Us
            </h1>
            <p class="text-sm pt-2 text-lg">
              Please don't hesitate to contact us for another task
            </p>
            <!-- <p class="text-sm pt-2 text-lg">
              Phone 628122687656 <br />Instagram | oestamdwi_salestoyotajogja
              <br />Email | oestamdwikaryadi@gmail.com
            </p> -->
            <p class="text-sm pt-2 text-lg">Phone 08122687656</p>
            <a
              href="https://api.whatsapp.com/send?phone=+*628122687656*&text=%20*Saya ingin menanyakan tentang mobil..."
              target="_blank"
              rel="noopener noreferrer"
            >
              <button
                class="
                  rounded-lg
                  py-2
                  px-8
                  text-xl text-red text-center
                  border-2 border-red
                  hover:bg-red hover:text-white
                  mt-9
                "
              >
                Contact WhatsApp
              </button>
            </a>
          </div>
        </div>
        <a
          href="https://g.page/pusat-penjualan-toyota-jogja?share"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button
            class="
              rounded-lg
              py-2
              px-6
              text-xl text-red text-center
              border-2 border-red
              hover:bg-red hover:text-white
              mt-5
              mb-5
            "
          >
            check in Google Map
          </button>
        </a>
      </div>

      <!-- Component End  -->
    </div>
  </div>
</template>
<style>
.group:focus .group-focus\:flex {
  display: flex;
}
</style>
