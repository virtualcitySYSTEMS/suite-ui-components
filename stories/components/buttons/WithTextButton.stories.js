import { VcsBadge, VcsButton } from '../../../index.js';

import { elevationControl, iconControl } from '../../util/controls.js';
import getProps from '../../util/get-props.js';

export default {
  title: 'Button/With Text',
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
    props: getProps(argTypes, { excludeKeys: ['input', 'default'] }),
    components: { Button, Badge },
    template: `
      <Button
        v-bind="$props"
        v-model="value"
        @input="value = $event"
        :has-update="hasUpdate"
      >
        {{ text }}
      </Button>
      `,
  };
};

export const WithText = Template.bind({});
WithText.args = {
  icon: '$vcsCircle',
  value: true,
  toggleable: true,
  hasUpdate: false,
  text: 'Hello World!',
};
WithText.parameters = {
  controls: {
    include: [
      'icon',
      'value',
      'toggleable',
      'elevation',
      'hasUpdate',
      'text',
      'input',
      'default',
    ],
  },
};
