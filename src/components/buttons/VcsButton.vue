<template>
  <div
    class="d-inline-block vcs-button-wrap"
  >
    <v-tooltip
      v-if="tooltip"
      :content-class="`tooltip ${arrowClass}`"
      :bottom="tooltipPosition === 'bottom'"
      :top="tooltipPosition === 'top'"
      :left="tooltipPosition === 'left'"
      :right="tooltipPosition === 'right'"
      v-bind="{...mergedTooltipProps}"
    >
      <template #activator="{ on, attrs }">
        <v-btn
          :color="backgroundColor"
          :text="isTextButton"
          :class="buttonClassCss"
          v-bind="{...$attrs, attrs}"
          v-on="{...$listeners, ...on}"
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
      :class="buttonClassCss"
      v-bind="{...$attrs}"
      v-on="$listeners"
    >
      <v-icon v-if="icon" v-text="icon" :class="{ 'mr-2': hasDefaultSlot }" />
      <slot />
    </v-btn>

    <VcsBadge
      v-if="hasUpdate"
      :color="'warning'"
      class="position-absolute pos-t-0 pos-r-0"
    />
  </div>
</template>

<style lang="scss" scoped>
  .vcs-button-wrap{
    position: relative;
  }
  .v-btn{
    &.vcs-button--standard {
      min-width: 48px;
      height: 40px;
      position: relative;
    }

    &.vcs-button--menu {
      height: 16px;
      min-width: auto;
      &:hover{
        color: var(--v-primary-base);
      }
      &::before{
        display: none; /*prevents unwanted mouseover effect*/
      }
      ::v-deep {
          .v-icon{
            font-size: 16px;
          }

        .v-icon__component {
          height: 16px;
          width: 16px;
        }
      }
    }

    &.vcs-button--navigation {

    }
    &.vcs-button--list {
      width: 100%;
      &:hover{
        color: var(--v-primary-base);
      }
    }
  }
</style>

<script>
  import Vue from 'vue';
  import VcsBadge from '../notification/VcsBadge.vue';

  /**
   * Enumeration of button classes
   * @typedef {Object} VcsButton.ButtonClasses
   * @enum {string}
   * @property {string} standard
   * @property {string} list
   * @property {string} navigation
   * @property {string} menu
   * @module VcsButton
   */
  const ButtonClasses = {
    standard: ['vcs-button--standard', 'padding'],
    menu: ['vcs-button--menu', 'ma-1', 'pa-0'],
    list: ['vcs-button--list', 'd-block', 'rounded-0'],
    navigation: ['vcs-button--navigation'],
  };


  /**
   * @description a button with tooltip extending {@link https://vuetifyjs.com/en/api/v-btn/|vuetify v-btn} using
   * {@link https://vuetifyjs.com/en/api/v-tooltip/|vuetify v-tooltip}.
   * @vue-prop {boolean}                                active - Whether button has background color. Applies vuetify primary color if color property is not set.
   * @vue-prop {string}                                 tooltip - Text content of a tooltip which appears on hover with default delay.
   * @vue-prop {Object}                                 [tooltipProps={openDelay: 200}] - Properties to be passed to vuetify tooltip API. 'bottom', 'top', 'left', 'right' not supported. Use tooltipPosition instead.
   * @vue-prop {('bottom' | 'left' | 'top' | 'right')}  tooltipPosition - Position of the tooltip.
   * @vue-prop {boolean}                                hasUpdate - Whether the button shows a badge in the top right.
   * @vue-prop {string}                                 icon - When given, will display an icon in the button. Replaces vuetify icon property.
   * @vue-prop {string}                                 color - Passes poperty to v-btn in case prop active is true.
   * @vue-event {MouseEvent}                            click - Emits click event when the button is clicked.
   */
  export default Vue.extend({
    name: 'VcsButton',
    components: { VcsBadge },
    inheritAttrs: false,
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
      buttonClassCss() {
        return ButtonClasses[this.buttonClass];
      },
      hasDefaultSlot() {
        return !!this.$slots.default && !!this.$slots.default[0].text.trim();
      },
      backgroundColor() {
        if (this.active) {
          return this.color ? this.color : 'primary';
        } else {
          return null;
        }
      },
      isTextButton() {
        return !this.active ? true : null;
      },
      mergedTooltipProps() {
        return { ...{ openDelay: 200 }, ...this.tooltipProps };
      },
    },
    props: {
      active: {
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
      tooltipProps: {
        type: Object,
        default: () => ({}),
      },
      hasUpdate: {
        type: Boolean,
        default: false,
      },
      icon: {
        type: String,
        default: undefined,
      },
      color: {
        type: String,
        default: undefined,
      },
      buttonClass: {
        type: String,
        default: 'standard',
        validator(value) { return Object.keys(ButtonClasses).includes(value); },
      },
    },
  });
</script>
