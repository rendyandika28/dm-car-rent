<script setup lang="ts">
const footerMenus = markRaw([
  {
    title: "About",
    items: [
      {
        title: "How it works",
        link: "/",
      },
      {
        title: "Featured",
        link: "/",
      },
      {
        title: "Partnership",
        link: "/",
      },
      {
        title: "Business Relation",
        link: "/",
      },
    ],
  },
  {
    title: "Community",
    items: [
      {
        title: "Events",
        link: "/",
      },
      {
        title: "Blog",
        link: "/",
      },
      {
        title: "Podcast",
        link: "/",
      },
      {
        title: "Invite a friend",
        link: "/",
      },
    ],
  },
  {
    title: "Socials",
    items: [
      {
        title: "Discord",
        link: "/",
      },
      {
        title: "Instagram",
        link: "/",
      },
      {
        title: "Twitter",
        link: "/",
      },
      {
        title: "Facebook",
        link: "/",
      },
    ],
  },
]);
</script>
<template>
  <footer>
    <div class="info">
      <div class="info__company">
        <h1 class="info__company-logo">DM</h1>
        <span class="info__company-slug">
          Our vision is to provide convenience and help increase your sales
          business.
        </span>
      </div>
      <div class="info__link">
        <div
          v-for="menu in footerMenus"
          :key="menu.title"
          class="info__link-menu"
        >
          <h5>{{ menu.title }}</h5>
          <ul>
            <li v-for="item in menu.items" :key="item.title">
              <nuxt-link :to="item.link">{{ item.title }}</nuxt-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <hr class="hidden lg:block" />
    <div class="greetings">
      <h6>©2022 DM. All rights reserved</h6>
      <div class="greetings-right">
        <nuxt-link to="">Privacy & Policy</nuxt-link>
        <nuxt-link to="">Terms & Condition</nuxt-link>
      </div>
    </div>
  </footer>
</template>
<style lang="scss" scoped>
footer {
  @apply bg-white px-6 pt-4;
  @apply lg:px-14 lg:pt-20;

  & .info {
    @apply flex items-start justify-between flex-col gap-10 mb-4;
    @apply lg:flex-row lg:gap-0;

    &__company {
      @apply max-w-none flex gap-4 flex-col w-full;
      @apply lg:max-w-[18.25rem] lg:w-1/2;
      &-logo {
        @apply text-primary-500 font-bold text-2xl;
        @apply lg:text-3xl;
        line-height: 3rem;
        letter-spacing: -3%;
      }

      &-slug {
        @apply text-xs font-medium;
        @apply lg:text-base;
        color: #13131399;
      }
    }

    &__link {
      @apply grid grid-cols-2 gap-10 w-full;
      @apply lg:w-1/2 lg:grid-cols-3 lg:gap-4;

      &-menu {
        @apply flex flex-col;

        h5 {
          @apply text-xl font-semibold text-title-secondary mb-8;
        }

        ul li {
          @apply font-medium text-base mb-4;
          @apply lg:mb-7;
          color: #13131399;
        }
      }
    }
  }

  & .greetings {
    @apply flex justify-between items-center flex-col py-9 gap-8 text-xs font-semibold text-title-secondary;
    @apply lg:flex-row lg:text-base;

    h6 {
      @apply order-2 lg:order-1 w-full;
    }

    &-right {
      @apply order-1 lg:order-2 flex gap-12 w-full justify-between;
      @apply lg:justify-end;
    }
  }
}
</style>