import { VcsFormattedNumber } from '../../../../index.js';

import { formattedNumberUnitControl } from '../../../util/controls.js';
import getProps from '../../../util/get-props.js';


export default {
  title: 'Form Inputs and Controls/Formatted Number/Square Meter',
  component: VcsFormattedNumber,
  argTypes: {
    unit: {
      control: formattedNumberUnitControl,
    },
  },
};


const Template = (args, { argTypes }) => {
  return {
    props: getProps(argTypes, { excludeKeys: [] }),
    components: { VcsFormattedNumber },
    template: `
      <VcsFormattedNumber
        v-bind="$props"
        v-model="value"
      >
      </VcsFormattedNumber>
      `,
  };
};


export const SquareMeter = Template.bind({});
SquareMeter.args = {
  value: 1.123123,
  unit: 'sqm',
};

