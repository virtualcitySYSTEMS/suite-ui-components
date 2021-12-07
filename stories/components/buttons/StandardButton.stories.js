import { VcsBadge, VcsButton } from '../../../index.js';

import { elevationControl, iconControl } from '../../util/controls.js';
import getProps from '../../util/get-props.js';


export default {
  title: 'Button/Standard',
  component: VcsButton,
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
    components: { VcsButton, VcsBadge },
    template: `
      <VcsButton
        v-bind="$props"
        v-model="value"
        @input="value = $event"
        :has-update="hasUpdate"
      >
      </VcsButton>
      `,
  };
};


export const Standard = Template.bind({});
Standard.args = {
  icon: '$vcsCircle',
  value: false,
  toggleable: true,
};
Standard.parameters = {
  controls: {
    include: [
      'icon',
      'value',
      'toggleable',
      'elevation',
      'input',
      'default'],
  },
};
