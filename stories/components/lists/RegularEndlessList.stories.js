import { VcsEndlessList } from '../../../index.js';

import { vuetify } from '@/plugins/vuetify.js';

import getProps from '../../util/get-props.js';

export default {
  title: 'VcsEndlessList/Regular',
  component: VcsEndlessList,
  argTypes: {
    items: {
      table: {
        disable: true,
      },
    },
  },
};

const Template = (args, { argTypes }) => {
  return {
    vuetify,
    components: { VcsEndlessList },
    props: getProps(argTypes, { excludeKeys: ['items', 'load-more'] }),
    template: '<VcsEndlessList v-bind="$props"/>',
  };
};


export const Regular = Template.bind({});
Regular.args = {
  items: Array(1000).fill('').map((k, i) => ({
    name: i,
    iconAppend: '$vcsExternalLink',
  })),
  itemsTotal: 2000,
  itemsLoaded: 1000,
  hasProgress: false,
  hasSearchbar: false,
  width: 320,
  itemsDisplayed: 5,
};
