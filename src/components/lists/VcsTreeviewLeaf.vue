<template>
  <div
    class="d-flex flex-row align-center"
    v-if="item"
  >
    <span v-if="item.icon">
      <v-icon
        v-if="iconType === iconTypes.string"
        v-text="item.icon"
        :size="16"
      />
      <span ref="imgContainer" />
    </span>

    <div class="position-relative col-8 pa-1 mr-4">
      <span>{{ label }}</span>
      <VcsBadge v-if="item.hasUpdate" class="update-badge position-absolute" />
    </div>
    <VcsActionButtonList
      v-if="item.actions.length > 0"
      :actions="item.actions"
      :overflow-count="3"
      small
      right
    />
  </div>
</template>

<style lang="scss">
  .update-badge {
    right: -16px;
    bottom: 50%;
    transform: translateY(50%);
  }
</style>

<script>
  import
  {
    computed,
    inject,
    onMounted,
    ref,
  } from '@vue/composition-api';

  import VcsBadge from '../notification/VcsBadge.vue';
  import VcsActionButtonList from '../buttons/VcsActionButtonList.vue';


  const iconTypes = {
    image: 'HTMLImageElement',
    canvas: 'HTMLCanvasElement',
    string: 'StringIcon',
  };

  /**
   * @description
   * Template for a treeview leaf, see: https://vuetifyjs.com/en/api/v-treeview/
   */
  export default {
    components: { VcsActionButtonList, VcsBadge },
    props: {
      item: {
        type: Object,
        default: undefined,
      },
    },
    setup(props) {
      const iconType = ref();
      const imgContainer = ref();
      const language = inject('language');

      const leaf = computed(() => props.item.children.length === 0);
      const label = computed(() => {
        const titleObj = props.item.title;
        if (titleObj) {
          if (typeof titleObj === 'string') {
            return titleObj; // TODO translateable text
          } else {
            return titleObj[language]; // TODO translateable text
          }
        }
        return props.item.name;
      });

      onMounted(() => { // TODO make icon reactive
        const { icon } = props.item;
        if (icon) {
          if (icon instanceof HTMLImageElement) {
            imgContainer.value.appendChild(icon);
            iconType.value = iconTypes.image;
          }
          if (icon instanceof HTMLCanvasElement) {
            imgContainer.value.appendChild(icon);
            iconType.value = iconTypes.canvas;
          }
          if (typeof icon === 'string') {
            iconType.value = iconTypes.string;
          }
        }
      });

      return {
        iconTypes,
        iconType,
        label,
        imgContainer,
        leaf,
      };
    },
  };
</script>
