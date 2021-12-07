import { VcsBadge, VcsButton } from '../../../index.js';

import { elevationControl, iconControl } from '../../util/controls.js';
import getProps from '../../util/get-props.js';

export default {
  title: 'Button/With Badge',
  component: Button,
  argTypes: {
    icon: {
      control: iconControl,
    },
    elevation: {
      control: elevationControl,
    },
  },
};


const Template = (args, { argTypes }) => {
  return {
    props: getProps(argTypes, { excludeKeys: ['input', 'default', 'text'] }),
    components: { Button, Badge },
    template: `
      <Button
        v-bind="$props"
        v-model="value"
        @input="value = $event"
        :has-update="hasUpdate"
      >
      </Button>
      `,
  };
};

export const WithBadge = Template.bind({});
WithBadge.args = {
  icon: '$vcsCircle',
  value: true,
  toggleable: true,
  hasUpdate: true,
  text: '',
};
WithBadge.parameters = {
  controls: {
    include: [
      'icon',
      'value',
      'toggleable',
      'elevation',
      'hasUpdate',
      'input',
      'default',
    ],
  },
};
