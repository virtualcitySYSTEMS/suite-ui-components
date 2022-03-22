<template>
  <div v-if="actions.length > 0">
    <VcsButton
      v-for="button in buttons"
      :key="button.name"
      :tooltip="button.title"
      :icon="button.icon"
      :active="button.active"
      @click="button.callback($event)"
      v-bind="{...$attrs}"
    />
    <v-menu
      v-if="overflowButtons.length > 0"
      content-class="vcs-overflow-menu-wrap"
      max-width="none"
      offset-x
    >
      <template #activator="{ on, attrs }">
        <VcsButton
          v-bind="{...$attrs, ...attrs}"
          v-on="on"
          class="vcs-overflow-btn"
        >
          <v-icon v-text="overflowIcon" />
        </VcsButton>
      </template>
      <VcsActionList :actions="overflowButtons" />
    </v-menu>
  </div>
</template>
<style lang="scss">
.vcs-overflow-menu-wrap{
  margin-left: 13px;
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
  };
</script>
