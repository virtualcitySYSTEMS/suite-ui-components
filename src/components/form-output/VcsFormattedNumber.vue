<template>
  <span>
    {{ formatted }}
    <span v-if="unit === SpecialUnits.SQM">
      m<sup>2</sup>
    </span>
    <span v-else-if="unit === SpecialUnits.CBM">
      m<sup>3</sup>
    </span>
    <span v-else-if="unit === SpecialUnits.DEG">
      °
    </span>
    <span v-else>
      {{ unit }}
    </span>
  </span>
</template>

<script>
  import { computed } from '@vue/composition-api';
  import { numberToLocaleString } from '../../filters/locale-string.filter.js';

  /**
   * Enumeration of units displayed with special symbol
   * @typedef {Object} VcsFormattedNumber.SpecialUnits
   * @enum {string}
   * @property {string} SQM square meters
   * @property {string} CBM cubic meters
   * @property {string} DEG degrees
   * @module VcsFormattedNumber
   */
  export const SpecialUnits = {
    SQM: 'sqm',
    CBM: 'cbm',
    DEG: 'deg',
  };

  /**
   * @description Formatted number display, optionally with unit
   * @vue-prop {string|SpecialUnits} [unit=undefined]
   * @vue-prop {number} [fractionDigits=undefined]
   * @vue-prop {number} value
   * @vue-computed {string} formatted - value formatted to locale string
   */
  export default {
    name: 'VcsFormattedNumber',
    props: {
      unit: {
        type: [String || SpecialUnits],
        default: undefined,
      },
      fractionDigits: {
        type: Number,
        default: 2,
      },
      value: {
        type: Number,
        default: 0,
      },
    },
    setup(props) {
      const formatted = computed(() => numberToLocaleString(props.value, props.fractionDigits));
      return {
        SpecialUnits,
        formatted,
      };
    },
  };
</script>
