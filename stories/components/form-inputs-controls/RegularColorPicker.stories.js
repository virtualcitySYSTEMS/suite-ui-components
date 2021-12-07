import { VcsColorPicker } from '../../../index.js';

import getProps from '../../util/get-props.js';

export default {
  title: 'Form Inputs and Controls/Color Picker/Regular',
  component: VcsColorPicker,
  argTypes: {
    mode: {
      control: {
        type: 'select',
        options: [
          'rgba',
          'hsla',
          'hexa',
        ],
      },
    },
    dotSize: {
      control: {
        type: 'range',
        min: 0,
        max: 100,
        step: 1,
      },
    },
    value: {
      control: {
        type: 'color',
      },
    },
  },
};

const Template = (args, { argTypes }) => {
  return {
    components: { VcsColorPicker },
    props: getProps(argTypes),
    template: `
      <VcsColorPicker
        v-bind="$props"
      />
    `,
  };
};


export const Regular = Template.bind({});
Regular.args = {
  dotSize: 12,
};
