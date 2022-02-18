<template>
  <div v-if="actions.length > 0">
    <VcsButton
      v-for="button in buttons"
      :key="button.name"
      :tooltip="button.title"
      :icon="button.icon"
      :active="button.active"
      :button-class="buttonClass"
      @click="button.callback($event)"
      class="pa-0"
    />
    <v-menu
      v-if="overflowButtons.length > 0"
      content-class="vcs-overflow-menu-wrap"
      max-width="none"
      offset-x
    >
      <template #activator="{ on, attrs }">
        <VcsButton
          v-bind="attrs"
          v-on="on"
          :button-class="buttonClass"
          class="vcs-overflow-btn"
        >
          <v-icon v-text="overflowIcon" />
        </VcsButton>
      </template>
      <v-list
        class="vcs-overflow-menu pa-0"
      >
        <v-list-item
          v-for="button in overflowButtons"
          :key="button.name"
          class="pa-0"
        >
          <VcsButton
            :tooltip="button.title"
            :icon="button.icon"
            :active="button.active"
            @click="button.callback($event)"
            button-class="list"
          >
            {{ button.name }}
          </VcsButton>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>
<style lang="scss">

.vcs-overflow-menu-wrap{
  margin-left: 13px;
}
.vcs-overflow-menu{
  .v-list-item{
    min-height: 36px;
    border-bottom: 1px solid var(--v-accent-base);
  }
  .vcs-button-wrap{
    width: 100%;
  }
}
</style>
<script>
  import Vue from 'vue';
  import { is } from '@vcsuite/check';
  import VcsButton from '../buttons/VcsButton.vue';

  /**
   * @interface VcsAction
   * @property {string} name - reactive and translatable name rendered in overflow
   * @property {string} [title] - reactive and translatable title rendered as tooltip
   * @property {string} [icon] - icon rendered on the button. If no icon provided, item is rendered in overflow
   * @property {Function} callback - callback function is triggered when the button is clicked
   * @property {boolean} [active=false] - optional state of button. If active, button is rendered in primary color
   */

  /**
   * @description
   * A component rendering a list of action actions with overflow mechanic
   * @vue-prop {Array<VcsAction>} actions - Array of actions
   * @vue-prop {number} [overflowCount=2] - number of buttons rendered until overflow.
   * @vue-prop {string} [overflowIcon='$vcsKebab'] - optional custom icon for overflow button
   * @vue-prop {boolean} [iconShape=false] - whether to render button round as icon
   * @vue-prop {VcsButtonClass} [buttonClass=menu] - visual style of buttons
   * @vue-computed {Array<VcsAction>} buttons - buttons rendered directly, have to provide an icon
   * @vue-computed {Array<VcsAction>} overflowButtons - rest of buttons rendered in overflow
   */
  export default Vue.extend({
    name: 'VcsActionButtonList',
    components: { VcsButton },
    props: {
      actions: {
        type: Array,
        required: true,
        validator(actions) {
          return actions.every(item => is(item, {
            name: String,
            title: [undefined, String],
            icon: [undefined, String],
            callback: Function,
            active: [undefined, Boolean],
          }));
        },
      },
      overflowCount: {
        type: Number,
        default: 2,
      },
      overflowIcon: {
        type: String,
        default: '$vcsKebab',
      },
      iconShape: {
        type: Boolean,
        default: false,
      },
      buttonClass: {
        type: String,
        default: 'standard',
      },
    },
    computed: {
      buttons() {
        return this.actions.filter(i => i.icon).slice(0, this.overflowCount);
      },
      overflowButtons() {
        const buttonsNames = this.buttons.map(i => i.name);
        return this.actions.filter(i => !buttonsNames.includes(i.name));
      },
    },
  });
</script>
