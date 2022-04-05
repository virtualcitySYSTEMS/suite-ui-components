<template>
  <div
    @mouseover="hover = true"
    @mouseleave="hover = false"
  >
    <VcsTooltip
      :tooltip-position="tooltipPosition"
      :tooltip="tooltipError"
      :value="(hover || focus) && isError"
      v-bind="{...tooltipProps}"
      color="error"
      :max-width="200"
    >
      <template #activator="{ attrs }">
        <v-text-field
          ref="textFieldRef"
          hide-details
          :dense="$attrs.dense!==false"
          :clearable="isClearable"
          @focus="focus = true"
          @blur="focus = neverBlurred = false"
          @input="firstInput = true"
          :outlined="isOutlined"
          v-bind="{...$attrs, ...attrs}"
          v-on="{...$listeners}"
          :height="$attrs.dense ? 24 : 32"
          class="ma-0 pb-1 pt-1"
        >
          <template v-if="tooltip" #append-outer>
            <VcsTooltip
              :tooltip-position="tooltipPosition"
              :tooltip="tooltip"
              :value="help"
              v-bind="{...tooltipProps}"
              color="black"
              :max-width="200"
              :z-index="10000"
              transition="fade-transition"
            >
              <template #activator>
                <v-icon
                  :small="$attrs.dense!==false"
                  @mouseover="help = true"
                  @mouseleave="help = false"
                >
                  mdi-help-circle
                </v-icon>
              </template>
            </VcsTooltip>
          </template>
        </v-text-field>
      </template>
    </VcsTooltip>
  </div>
</template>

<style lang="scss" scoped>

</style>

<script>
  import VcsTooltip from '../buttons/VcsTooltip.vue';

  /**
   * @description extends API of {@link https://vuetifyjs.com/en/api/v-text-field/|vuetify v-text-field}.
   * Provides two height options depending on "dense" property:
   * - if dense is set true (default), height is 24 px
   * - if dense is set false, height is 32 px
   * Provides VcsTooltip to
   * - show error messages on focus
   * - show tooltips, if supplied, when hovered over append-icon
   * @vue-prop {string}                                 tooltip - Text content of a tooltip which appears on hover with default delay.
   * @vue-prop {('bottom' | 'left' | 'top' | 'right')}  [tooltipPosition='right'] - Position of the tooltip.
   * @vue-prop {Object<string, any>}                    tooltipProps - Properties to be passed to VcsTooltip {@link https://vuetifyjs.com/en/api/v-tooltip/#props|vuetify v-tooltip}
   *                                                    Non overwritable vuetify v-tooltip presets: disabled, value, open-on-[click | focus | hover].
   * @vue-computed {boolean}                            isClearable - Whether textfield is isClearable. Makes sure icon is only shown on focus, hover or error.
   * @vue-computed {boolean}                            isError - Whether errorBucket is not empty and textfield was focused at least once.
   * @vue-computed {boolean}                            isOutlined - Textfield is outlined on either hover, focus or error, if not disabled.
   * @vue-computed {Array<string>}                      joinedErrorBucket - errorBucket + errorMessages of child v-text-field.
   */
  export default {
    name: 'VcsTextField',
    components: {
      VcsTooltip,
    },
    props: {
      tooltip: {
        type: String,
        default: undefined,
      },
      tooltipPosition: {
        type: String,
        default: 'right',
      },
      tooltipProps: {
        type: Object,
        default: () => ({}),
      },
    },
    data() {
      return {
        hover: false,
        focus: false,
        firstInput: false,
        neverBlurred: true,
        isMounted: false,
        help: false,
        tooltipError: '',
      };
    },
    computed: {
      isClearable() {
        // eslint-disable-next-line no-prototype-builtins
        return !!this.$attrs.hasOwnProperty('clearable') && (this.hover || this.focus || this.isError);
      },
      isError() {
        return this.joinedErrorBucket.length > 0 && (this.firstInput || !this.neverBlurred);
      },
      isOutlined() {
        return (this.hover || this.focus || this.isError) && !(this.$attrs.disabled || this.$attrs.disabled === '');
      },
      joinedErrorBucket() {
        if (!this.isMounted) {
          return false;
        } else {
          return this.$refs.textFieldRef.errorBucket.concat(this.$refs.textFieldRef.errorMessages).join('\n');
        }
      },
    },
    watch: {
      joinedErrorBucket(newValue, oldValue) {
        if (oldValue && !newValue) {
          setTimeout(() => {
            this.tooltipError = newValue;
          }, 200);
        } else {
          this.tooltipError = newValue;
        }
      },
    },
    mounted() {
      this.isMounted = true;
    },
  };
</script>
