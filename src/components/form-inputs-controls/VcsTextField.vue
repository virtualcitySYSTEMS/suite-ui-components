<template>
  <div
    class="d-flex flex-row align-end justify-space-between"
    :class="[...customClasses]"
  >
    <slot name="input">
      <div class="d-flex justify-center align-center w-full">
        <v-text-field
          v-bind="{...$props, ...$attrs}"
          @input="$emit('input', $event)"
        />
      </div>
    </slot>
  </div>
</template>

<style lang="scss" scoped>

  ::v-deep {
    input[type=number]::-webkit-outer-spin-button,
    input[type=number]::-webkit-inner-spin-button {
      -webkit-appearance: inner-spin-button !important;
      width: 25px;
      position: absolute;
      top: 0;
      right: 0;
      height: 100%;
      opacity: 1;
    }
  }

  label {
    white-space: nowrap;
  }

  // Firefox only
  @-moz-document url-prefix() {
    .v-input.input--seconds {
      &::after {
        right: 5px;
      }

      input {
        padding-right: 28px !important;
      }
    }
  }

  .v-text-field.v-text-field--solo:not(.v-text-field--solo-flat) > .v-input__control > .v-input__slot {
    box-shadow: none !important;
  }

  .v-input--checkbox {
    .v-icon.v-icon--dense {
      font-size: 16px;
    }
  }
</style>


<script>

  /**
   * @description extends API of {@link https://vuetifyjs.com/en/api/v-text-field/|vuetify v-text-field}
   * @vue-prop {string[]}   [customClasses=[]]  - Array of string CSS classes which will be applied to the container
   * @vue-data {slot} [#input] - slot to override input
   * @vue-event {InputEvent} input - text emitted on input
   */
  export default {
    name: 'VcsTextField',
    props: {
      customClasses: {
        type: Array,
        default: () => ([]),
      },
    },
  };
</script>
