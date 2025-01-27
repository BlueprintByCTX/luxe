<template>
  <footer id="contact" class="sticky w-full bg-[#567675] px-8 font-recoleta text-white lx:px-16 xl:px-24">
    <div class="flex flex-col items-center gap-4 pt-16 lx:flex-row lx:items-end lx:justify-between">
      <h1 class="text-center text-sm sm:text-base">
        Sign up to our newsletter for our latest news and special events
      </h1>
      <form @submit.prevent="console.log('implement me!')" class="flex items-center justify-center text-right">
        <input type="email" placeholder="Email Address"
          class="mr-4 h-8 w-56 border-b-2 bg-transparent text-xs outline-none placeholder:text-xxs sm:text-sm sm:placeholder:text-xs"
          required />
        <button type="submit"
          class="border px-5 py-2 text-xxs uppercase tracking-wider transition-colors duration-300 hover:bg-white hover:text-[#5E807F] sm:px-6 sm:py-3 sm:text-xs">
          Sign up to our newsletter
        </button>
      </form>
    </div>
    <div class="flex flex-row flex-wrap justify-between pt-16 text-xs">
      <div class="tracking-wider">
        <a href="https://magazine.ceylon.luxe">
          <img alt="Ceylon LUXE" src="../assets/imgs/logos/Lux Aniii.gif"
            class="mb-10 w-44 transition-opacity duration-300 hover:opacity-70" />
        </a>
        <h1 class="mb-1">
          Tel:
          <a href="tel:+94 773 553 553" class="transition-opacity duration-300 hover:opacity-60">+94 773 553 553</a>
        </h1>
        <h1 class="mb-5 transition-opacity duration-300 hover:opacity-60">magazine@ceylon.luxe</h1>

        <h1 class="mb-1">Ceylon Travelex (Pvt) Ltd,</h1>
        <h1 class="mb-1">No. 21/6, Subuthi Dr,</h1>
        <h1 class="mb-1">Battaramulla, Sri Lanka.</h1>

        <div class="flex flex-wrap items-center gap-x-[10px] pt-5">
          <a href="https://www.instagram.com/ceylonluxe/" target="_blank"
            class="opacity-50 transition-all duration-300 hover:opacity-100"><img
              src="https://wp.resplendentceylon.com/wp-content/uploads/2024/07/instagram.svg" width="18" height="19"
              loading="eager" alt="instagram" /></a><a href="https://www.facebook.com/CeylonLUXE" target="_blank"
            class="opacity-50 transition-all duration-300 hover:opacity-100"><img
              src="https://wp.resplendentceylon.com/wp-content/uploads/2024/07/facebook.svg" width="18" height="19"
              loading="eager" alt="facebook" /></a><a href="https://x.com" target="_blank"
            class="opacity-50 transition-all duration-300 hover:opacity-100"><img
              src="https://wp.resplendentceylon.com/wp-content/uploads/2024/11/x-logo-1.svg" width="18" height="19"
              loading="eager" alt="" /></a><a href="https://youtube.com/@ceylontravelex" target="_blank"
            class="opacity-50 transition-all duration-300 hover:opacity-100"><img
              src="https://wp.resplendentceylon.com/wp-content/uploads/2024/07/Youtube.svg" width="18" height="19"
              loading="eager" alt="Youtube" /></a><a href="https://www.linkedin.com/showcase/ceylonluxe" target="_blank"
            class="opacity-50 transition-all duration-300 hover:opacity-100"><img
              src="https://wp.resplendentceylon.com/wp-content/uploads/2024/07/Linkedin.svg" width="18" height="19"
              loading="eager" alt="Linkedin" /></a>
        </div>
      </div>
      <div class="footer-navbar text-white" style="opacity: 1; will-change: auto; transform: none">
        <h6 class="xlscreen:text-[20px] text-[24px]">
          <a target="" class="" href="/our-resorts/">Navigators</a>
        </h6>
        <div class="ipad:gap-y-[20px] grid gap-y-[40px] pt-10">
          <div class="submenu">
            <span class="text-11 inline-block pb-5 uppercase text-white"><a target=""
                class="text-14 antialiased transition-all duration-300 hover:opacity-50"
                href="/resplendent-collection/">Volumes</a></span>
            <table>
              <tr>
                <td>
                  <a target="" class="text-14 antialiased transition-all duration-300 hover:opacity-50"
                    href="/resort/wild-coast-tented-lodge/">Vol. 01</a>
                </td>
                <td>
                  <a target="" class="text-14 px-2 antialiased transition-all duration-300 hover:opacity-50"
                    href="/resort/wild-coast-tented-lodge/">
                    •
                  </a>
                </td>
                <td>
                  <a target="" class="text-14 antialiased transition-all duration-300 hover:opacity-50"
                    href="/resort/wild-coast-tented-lodge/">Emerald Isle Of The Indian Ocean</a>
                </td>
              </tr>
              <tr>
                <td>
                  <a target="" class="text-14 antialiased transition-all duration-300 hover:opacity-50"
                    href="/resort/wild-coast-tented-lodge/">Vol. 02</a>
                </td>
                <td>
                  <a target="" class="text-14 px-2 antialiased transition-all duration-300 hover:opacity-50"
                    href="/resort/wild-coast-tented-lodge/">
                    •
                  </a>
                </td>
                <td>
                  <a target="" class="text-14 antialiased transition-all duration-300 hover:opacity-50"
                    href="/resort/wild-coast-tented-lodge/">TBA (to be annouced)</a>
                </td>
              </tr>
            </table>
          </div>
          <div class="submenu">
            <span class="text-11 inline-block pb-5 uppercase text-white"><a target=""
                class="text-14 antialiased transition-all duration-300 hover:opacity-50"
                href="/reverie-collection/">Writers</a></span>
            <ul class="grid gap-y-[5px]">
              <li>
                <a target="" class="text-14 antialiased transition-all duration-300 hover:opacity-50"
                  href="/resort/kayaam-house/">Sheneli Wickremasinghe</a>
              </li>
              <li>
                <a target="" class="text-14 antialiased transition-all duration-300 hover:opacity-50"
                  href="/resort/ahu-bay/">Nathalie Claudia</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="footer-navbar tracking-normal text-white" style="opacity: 1; will-change: auto; transform: none">
        <div class="submenu">
          <ul class="grid gap-y-6">
            <li>
              <a target=""
                class="xlscreen:text-[20px] font-heading text-[24px] antialiased transition-all duration-300 hover:opacity-50"
                href="/volumes">Volumes</a>
            </li>
            <li>
              <a target=""
                class="xlscreen:text-[20px] font-heading text-[24px] antialiased transition-all duration-300 hover:opacity-50"
                href="/articles">Articles</a>
            </li>
            <li>
              <a target=""
                class="xlscreen:text-[20px] font-heading text-[24px] antialiased transition-all duration-300 hover:opacity-50"
                href="/writers">Writers
              </a>
            </li>
            <li>
              <a target=""
                class="xlscreen:text-[20px] font-heading text-[24px] antialiased transition-all duration-300 hover:opacity-50"
                href="/awards">Awards</a>
            </li>
            <li>
              <a target=""
                class="xlscreen:text-[20px] font-heading text-[24px] antialiased transition-all duration-300 hover:opacity-50"
                href="/podcasts">Podcasts</a>
            </li>
          </ul>
        </div>
      </div>

      <div class="footer-navbar font-cormorant text-sm text-white antialiased"
        style="opacity: 1; will-change: auto; transform: none">
        <div class="grid gap-y-[40px]">
          <div
            class="submenu smscreen:flex-col smscreen:gap-y-[20px] xlscreen:gap-x-[50px] smscreen:items-center flex flex-wrap items-start gap-x-[100px]">
            <ul class="grid gap-y-[12px]">
              <li>
                <a target="" class="text-14 leading-[18px] antialiased transition-all duration-300 hover:opacity-50"
                  href="/about-us/">About Us</a>
              </li>
              <li>
                <a target="" class="text-14 leading-[18px] antialiased transition-all duration-300 hover:opacity-50"
                  href="/positive-impact/">Our Partners</a>
              </li>
              <li>
                <a target="" class="text-14 leading-[18px] antialiased transition-all duration-300 hover:opacity-50"
                  href="/why-book-with-us/">Resort of the Month</a>
              </li>
              <li>
                <a target="" class="text-14 leading-[18px] antialiased transition-all duration-300 hover:opacity-50"
                  href="/press/">Press</a>
              </li>
              <li>
                <a target="" class="text-14 leading-[18px] antialiased transition-all duration-300 hover:opacity-50"
                  href="/gallery/">Gallery</a>
              </li>
              <li>
                <a target="" class="text-14 leading-[18px] antialiased transition-all duration-300 hover:opacity-50"
                  href="/careers/">Careers</a>
              </li>
            </ul>
            <ul class="grid gap-y-[12px]">
              <li>
                <a href="/our-journal/" target=""
                  class="text-14 antialiased transition-all duration-300 hover:opacity-50">Our Journal</a>
              </li>
              <li>
                <a href="/best-rate/" target=""
                  class="text-14 antialiased transition-all duration-300 hover:opacity-50">Best Rate Guaranteed</a>
              </li>
              <li>
                <a href="/gds-access-codes/" target=""
                  class="text-14 antialiased transition-all duration-300 hover:opacity-50">GDS Access Codes</a>
              </li>
              <li>
                <a href="https://shop.resplendentceylon.com/" target="_blank"
                  class="text-14 antialiased transition-all duration-300 hover:opacity-50">LUXE Shop</a>
              </li>
              <li>
                <a href="https://rc.lk/GuestPortal" target=""
                  class="text-14 antialiased transition-all duration-300 hover:opacity-50">Guest Portal</a>
              </li>
              <li>
                <a href="https://resources.resplendentceylon.com/collections/62fb70fa7ddfdb223c892389/sections/62fb70fa7ddfdb223c892384"
                  target="" class="text-14 antialiased transition-all duration-300 hover:opacity-50">Partner Portal</a>
              </li>
              <li>
                <a href="/contact-us/" target=""
                  class="text-14 antialiased transition-all duration-300 hover:opacity-50">Contact Us</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div
      class="flex w-full items-center justify-center gap-x-4 divide-x-2 py-8 text-xxs text-gray-50 sm:text-center md:text-xs">
      <span>© {{ new Date().getFullYear() }}
        <RouterLink to="/" class="hover:underline">Blueprint<sup>®</sup></RouterLink>
        • All Rights Reserved.
      </span>
      <span class="pl-4">Terms & Conditions</span>
      <span class="pl-4">Privacy Policy</span>
    </div>
  </footer>
</template>
