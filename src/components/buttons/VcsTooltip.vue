<template>
  <v-tooltip
    :disabled="!tooltip"
    :content-class="`tooltip ${arrowClass}`"
    :bottom="tooltipPosition === 'bottom'"
    :top="tooltipPosition === 'top'"
    :left="tooltipPosition === 'left'"
    :right="tooltipPosition === 'right'"
    :open-delay="$attrs.openDelay || 200"
    v-bind="{...$props, ...$attrs}"
  >
    <template #activator="{ on, attrs }">
      <slot name="activator" :on="on" :attrs="attrs" />
    </template>
    <span>{{ tooltip }}</span>
  </v-tooltip>
</template>
<style scoped>

</style>
<script>

/**
 * @enum {string} TooltipPositions
 * @property {string} bottom
 * @property {string} left
 * @property {string} top
 * @property {string} right
 * @readonly
 * @module VcsTooltip
 */
  const TooltipPositions = {
    bottom: 'arrow-top',
    top: 'arrow-bottom',
    left: 'arrow-right',
    right: 'arrow-left',
  };

  /**
   * @description tooltip extending {@link https://vuetifyjs.com/en/api/v-tooltip/|vuetify v-tooltip}.
   * @vue-prop {string}                                 tooltip - Text content of a tooltip which appears on hover with default delay.
   * @vue-prop {string}                                 [tooltipPosition='bottom'] - Position of the tooltip (allowed values: 'bottom'|'left'|'top'|'right').
   * @vue-computed {string}                             arrowClass - direction of tooltip arrow
   */
  export default {
    name: 'VcsTooltip',
    props: {
      tooltip: {
        type: String,
        default: undefined,
      },
      tooltipPosition: {
        type: String,
        default: 'bottom',
        validator(value) { return Object.keys(TooltipPositions).includes(value); },
      },
    },
    computed: {
      arrowClass() {
        return TooltipPositions[this.tooltipPosition];
      },
    },
  };
</script>
