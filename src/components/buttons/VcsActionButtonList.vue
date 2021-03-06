<template>
  <div v-if="actions.length > 0" class="d-flex align-center justify-end action-btn-wrap">
    <VcsButton
      class="d-flex"
      v-for="(button, index) in buttons"
      :key="`${button.name}-${index}`"
      :tooltip="button.title"
      :icon="button.icon"
      :active="button.active"
      @click.stop="button.callback($event)"
      v-bind="{...$attrs}"
    />
    <v-menu
      v-if="overflowButtons.length > 0"
      content-class="vcs-overflow-menu-wrap"
      max-width="none"
      :nudge-right=13
      offset-x
    >
      <template #activator="{ on, attrs }">
        <VcsButton
          v-bind="{...$attrs, ...attrs}"
          v-on="on"
          class="d-flex"
        >
          <v-icon v-text="overflowIcon" />
        </VcsButton>
      </template>
      <VcsActionList :actions="overflowButtons" />
    </v-menu>
    <v-spacer v-else-if="blockOverflow" class="flex-grow-0 d-inline-block px-2" />
  </div>
</template>
<style lang="scss">
.action-btn-wrap{
  gap: 8px;
}
</style>
<script>

  import VcsButton from './VcsButton.vue';
  import VcsActionList, { validateActions } from '../lists/VcsActionList.vue';

  /**
   * @description
   * A component rendering a list of actions with overflow mechanic using
   * {@link VcsButton} and {@link VcsActionList}.
   * @vue-prop {Array<VcsAction>} actions - Array of actions
   * @vue-prop {number} [overflowCount=2] - number of buttons rendered until overflow.
   * @vue-prop {string} [overflowIcon='$vcsKebab'] - optional custom icon for overflow button
   * @vue-prop {boolean} [blockOverflow=false] - if space for the overflow should be blocked or not (e.g. when rendering lists in a grid)
   * @vue-computed {Array<VcsAction>} buttons - buttons rendered directly, have to provide an icon
   * @vue-computed {Array<VcsAction>} overflowButtons - rest of buttons rendered in overflow
   */
  export default {
    name: 'VcsActionButtonList',
    components: { VcsActionList, VcsButton },
    props: {
      actions: {
        type: Array,
        required: true,
        validator: validateActions,
      },
      overflowCount: {
        type: Number,
        default: 2,
      },
      overflowIcon: {
        type: String,
        default: '$vcsKebab',
      },
      blockOverflow: {
        type: Boolean,
        default: false,
      },
    },
    computed: {
      right() { return this.$attrs.right !== undefined && this.$attrs.right !== false; },
      buttons() {
        const buttons = this.actions.filter(i => i.icon).slice(0, this.overflowCount);
        if (this.right) {
          return buttons.reverse();
        }
        return buttons;
      },
      overflowButtons() {
        const buttonsNames = this.buttons.map(i => i.name);
        return this.actions.filter(i => !buttonsNames.includes(i.name));
      },
    },
  };
</script>
