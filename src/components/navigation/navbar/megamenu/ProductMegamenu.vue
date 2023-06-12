<script setup lang="ts">
const emit = defineEmits(['close'])
</script>

<template>
  <div class="megamenu-inner">
    <button class="close-button" @click="emit('close')">
      <i class="iconify" data-icon="feather:arrow-left"></i>
    </button>
    <Container>
      <div class="columns">
        <div class="column is-4">
          <div class="megamenu-block">
            <div class="media">
              <div class="media-left is-bolt">
                <span
                  class="iconify"
                  data-icon="heroicons-solid:lightning-bolt"
                  data-inline="false"
                ></span>
              </div>
              <div class="media-content">
                <h3>Awesome Features</h3>
                <p>
                  Vulk is a Vue 3 UI kit that makes it easy to build gorgeous
                  interfaces.
                </p>
                <RouterLink v-preload-link to="/blocks/colors/">
                  <span>Theme colors overview</span>
                  <i
                    class="iconify"
                    data-icon="feather:arrow-right"
                    data-inline="false"
                  ></i>
                </RouterLink>
              </div>
            </div>
          </div>
        </div>
        <div class="column is-2">
          <div class="megamenu-block ml-6">
            <h4>DEMOS</h4>
            <ul>
              <li>
                <RouterLink v-preload-link to="/landing/" class="list-link">
                  Landing pages
                </RouterLink>
              </li>
              <li>
                <RouterLink v-preload-link to="/about/" class="list-link">
                  About pages
                </RouterLink>
              </li>
              <li>
                <RouterLink v-preload-link to="/pricing/" class="list-link">
                  Pricing pages
                </RouterLink>
              </li>
              <li>
                <RouterLink v-preload-link to="/profile/" class="list-link">
                  Profile pages
                </RouterLink>
              </li>
            </ul>
          </div>
        </div>
        <div class="column is-2">
          <div class="megamenu-block ml-6">
            <h4 class="is-vhidden">DEMOS</h4>
            <ul>
              <li>
                <RouterLink v-preload-link to="/blog/" class="list-link">
                  Blog pages
                </RouterLink>
              </li>
              <li>
                <RouterLink v-preload-link to="/auth/" class="list-link">
                  Auth pages
                </RouterLink>
              </li>
              <li>
                <RouterLink v-preload-link to="/master/" class="list-link">
                  Layouts
                </RouterLink>
              </li>
              <li>
                <RouterLink v-preload-link to="/blocks/" class="list-link">
                  Components
                </RouterLink>
              </li>
            </ul>
          </div>
        </div>
        <div class="column is-4">
          <div class="megamenu-block is-left-bordered">
            <div class="media">
              <div class="media-content">
                <h3>Vulk documentation</h3>
                <p>
                  Learn more about how you can get the most from the Vulk
                  component library.
                </p>
                <a href="https://docs.cssninja.io/vulk">
                  <span>Read Documentation</span>
                  <i
                    class="iconify"
                    data-icon="feather:arrow-right"
                    data-inline="false"
                  ></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  </div>
</template>
