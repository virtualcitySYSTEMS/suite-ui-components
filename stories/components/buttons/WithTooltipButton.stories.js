import { VcsBadge, VcsButton } from '../../../index.js';

import { elevationControl, iconControl } from '../../util/controls.js';
import getProps from '../../util/get-props.js';

export default {
  title: 'Button/With Tooltip',
  component: Button,
  argTypes: {
    icon: {
      control: iconControl,
    },
    elevation: {
      control: elevationControl,
    },
    tooltipPosition: {
      control: {
        type: 'select',
        options: ['bottom', 'left', 'top', 'right'],
      },
    },
  },
};

const Template = (args, { argTypes }) => {
  return {
    props: getProps(argTypes, { excludeKeys: ['input', 'default'] }),
    components: { Button, Badge },
    template: `
      <div
        :style="{
          marginLeft: tooltipPosition === 'left' ? '5rem' : '',
          marginTop: tooltipPosition === 'top' ? '2rem' : ''
        }"
      >
        <Button
          v-bind="$props"
          v-model="value"
          @input="value = $event"
          :has-update="hasUpdate"
        >
          {{ text }}
        </Button>
      </div>

      `,
  };
};

export const WithTooltip = Template.bind({});
WithTooltip.args = {
  value: true,
  icon: '$vcsCircle',
  toggleable: true,
  tooltip: 'Hello',
  tooltipPosition: 'bottom',
  text: 'Hover here',
  hasUpdate: false,
};
