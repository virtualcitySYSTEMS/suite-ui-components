import { VcsContextMenu } from '../../../index.js';

import { vuetify } from '@/plugins/vuetify.js';

import getProps from '../../util/get-props.js';

export default {
  title: 'Context Menu/Regular',
  component: VcsContextMenu,
  argTypes: {
    clickEvent: {
      table: {
        disable: true,
      },
    },
  },
};

const Template = (args, { argTypes }) => {
  return {
    vuetify,
    components: { VcsContextMenu },
    props: getProps(argTypes, { excludeKeys: ['items', 'load-more'] }),
    template: `
    <div>
      <h2> Right-click somewhere to open context-menu</h2>

      <VcsContextMenu
        v-if="clickEvent"
        :click-event="clickEvent"
        v-bind="$props"
        @menu-closed="clickEvent = undefined"
      />
    </div>
    `,
    mounted() {
      const self = this;
      document.body.addEventListener('contextmenu', (event) => {
        event.preventDefault();
        self.clickEvent = event;
      });
    },
  };
};


export const Regular = Template.bind({});
Regular.args = {
  clickEvent: undefined,
  width: 220,
};
