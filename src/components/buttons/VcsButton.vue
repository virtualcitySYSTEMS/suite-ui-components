<template>
  <div
    :class="[...customClasses]"
    class="vcs-button"
  >
    <v-tooltip
      v-if="tooltip"
      :content-class="`tooltip ${arrowClass}`"
      :bottom="tooltipPosition === 'bottom'"
      :top="tooltipPosition === 'top'"
      :left="tooltipPosition === 'left'"
      :right="tooltipPosition === 'right'"
    >
      <template #activator="{ on, attrs }">
        <v-btn
          :color="backgroundColor"
          :text="isTextButton"
          @click="$emit('click', $event)"
          class="ma-1 px-2"
          v-bind="{...$attrs, attrs}"
          v-on="on"
        >
          <v-icon v-if="icon" v-text="icon" :class="{ 'mr-2': hasDefaultSlot }" />
          <slot />
        </v-btn>
      </template>
      <span>{{ tooltip }}</span>
    </v-tooltip>
    <v-btn
      v-else
      :color="backgroundColor"
      :text="isTextButton"
      @click="$emit('click', $event)"
      class="ma-1 px-2"
      v-bind="{...$attrs}"
    >
      <v-icon v-if="icon" v-text="icon" :class="{ 'mr-2': hasDefaultSlot }" />
      <slot />
    </v-btn>

    <Badge
      v-if="hasUpdate"
      :color="'warning'"
      class="position-absolute pos-t-0 pos-r-0"
    />
  </div>
</template>

<style scoped>
  .v-btn:not(.v-btn--round).v-size--default {
    min-width: 48px;
    height: 40px;
  }

  .vcs-button {
    position: relative;
    display: inline-block;
  }
</style>

<script>
  import Vue from 'vue';

  import Badge from '../notification/VcsBadge.vue';

  /**
   * @description a button with tooltip extending {@link https://vuetifyjs.com/en/api/v-btn/|vuetify v-btn} using
   * {@link https://vuetifyjs.com/en/api/v-tooltip/|vuetify v-tooltip}.
   * @vue-prop {boolean}                                isActive - Whether button has background color. Applies vuetify primary color if color property is not set.
   * @vue-prop {string}                                 tooltip - Text content of a tooltip which appears on hover.
   * @vue-prop {('bottom' | 'left' | 'top' | 'right')}  tooltipPosition - Position of the tooltip.
   * @vue-prop {boolean}                                hasUpdate - Whether the button shows a badge in the top right.
   * @vue-prop {string}                                 icon - When given, will display an icon in the button. Replaces vuetify icon property.
   * @vue-prop {Array}                                  customClasses - Array of strings which will be added as classes.
   * @vue-prop {string}                                 color - Passes poperty to v-btn in case prop isActive is true.
   * @vue-event {MouseEvent}                            click - Emits click event when the button is clicked.
   */
  export default Vue.extend({
    name: 'VcsButton',
    components: { Badge },
    computed: {
      arrowClass() {
        switch (this.tooltipPosition) {
        case 'bottom': return 'arrow-top';
        case 'top': return 'arrow-bottom';
        case 'left': return 'arrow-right';
        case 'right': return 'arrow-left';
        default: return '';
        }
      },
      hasDefaultSlot() {
        return !!this.$slots.default && !!this.$slots.default[0].text.trim();
      },
      backgroundColor() {
        if (this.isActive) {
          return this.color ? this.color : 'primary';
        } else {
          return null;
        }
      },
      isTextButton() {
        return !this.isActive ? true : null;
      },
    },
    props: {
      isActive: {
        type: Boolean,
        default: false,
      },
      tooltip: {
        type: String,
        default: undefined,
      },
      tooltipPosition: {
        type: String,
        default: 'bottom',
      },
      hasUpdate: {
        type: Boolean,
        default: false,
      },
      icon: {
        type: String,
        default: undefined,
      },
      customClasses: {
        type: Array,
        default: () => ([]),
      },
      color: {
        type: String,
        default: undefined,
      },
    },
  });
</script>
