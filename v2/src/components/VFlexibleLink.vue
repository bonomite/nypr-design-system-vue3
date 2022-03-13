<script setup>
import { computed } from 'vue'

const props = defineProps({
  to: {
    type: [String, Object],
    default: null,
  },
  target: {
    type: String,
    default: '_blank',
  },
  raw: {
    type: Boolean,
    default: false,
  },
})
const isExternal = computed(() => {
  var reg = new RegExp('^(?:[a-z]+:)?//', 'i')
  if (typeof props.to === 'string' && reg.test(props.to)) {
    return true
  }
  return false
})
</script>

<template>
  <div v-if="!to" class="flexible-link null" v-bind="{ ...$attrs }">
    <slot name="default"></slot>
  </div>
  <a
    v-else-if="isExternal"
    v-bind="{ ...$props, ...$attrs }"
    :href="to"
    :target="target"
    :rel="`noopener ${props.target === '_blank' ? 'noreferrer' : ''}`"
    class="flexible-link external"
    :class="{ ['raw']: raw }"
  >
    <slot name="default"></slot>
  </a>
  <nuxt-link
    v-else
    class="flexible-link internal"
    :class="{ ['raw']: raw }"
    :to="to"
    v-bind="{ ...$attrs }"
  >
    <slot name="default"></slot>
  </nuxt-link>
</template>
<style lang="scss">
.flexible-link:not(.raw) {
  color: rgb(var(--linkButtonColor));
  transition: all var(--transitionDuration);
  * {
    transition: all var(--transitionDuration);
  }
  &:hover {
    color: rgb(var(--linkButtonHoverColor)) !important;
    text-decoration: var(--linkButtonTextHoverDecoration);
    * {
      color: rgb(var(--linkButtonHoverColor)) !important;
      text-decoration: var(--linkButtonTextHoverDecoration);
    }
  }
  &:focus {
    @include focused();
  }
}
.flexible-link.raw {
  text-decoration: none;
}
</style>
