<template>
  <section class="vcs-form-section">
    <slot name="title">
      <article class="pa-2 accent">
        <div class="form-section-header d-flex justify-space-between align-center">
          <strong class="caption">{{ title }}</strong>

          <div v-if="titleActions.length" class="form-section-header__actions">
            <v-icon
              v-for="(action, index) of titleActions"
              :key="action.name"
              v-text="action.icon"
              :size="action.size || '16'"
              :class="{ 'mr-1': titleActions.length > 1 && (index + 1) < titleActions.length }"
              @click="$emit('click', action)"
            />
          </div>
        </div>
      </article>
    </slot>
    <article class="section-content">
      <slot />
    </article>
  </section>
</template>


<script>
  import Vue from 'vue';

  /**
   * // TODO standardize Action Items https://gitlab.virtualcitysystems.de/vcsuite/virtualcitymap_ui/-/issues/64
   * @typedef {Object} module:VcsFormSection.TitleAction
   * @property {string} name - name of the action
   * @property {string} icon - icon to display
   * @property {number|string} [size=16] - size of the icon
   * @module VcsFormSection
   */

  /**
   * @description
   * Stylized form section with action buttons
   * @vue-data {slot} [#title] - slot to override form section header
   * @vue-data {slot} [#default] - slot with the section content
   * @vue-prop {string}   title - Title to be displayed
   * @vue-prop {Array<TitleAction>}    titleActions - Icons to be displayed on the right side
   * @vue-event {TitleAction} click   - icons emit corresponding TitleAction on click
   */
  export default Vue.extend({
    name: 'VcsFormSection',
    props: {
      title: {
        type: String,
        default: undefined,
      },
      titleActions: {
        type: Array,
        default: () => ([]),
      },
    },
  });
</script>
