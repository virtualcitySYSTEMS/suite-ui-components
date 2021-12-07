import { VcsFormattedNumber } from '../../../../index.js';

import { formattedNumberUnitControl } from '../../../util/controls.js';
import getProps from '../../../util/get-props.js';


export default {
  title: 'Form Inputs and Controls/Formatted Number/Cubic Meter',
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


export const CubicMeter = Template.bind({});
CubicMeter.args = {
  value: 123456.123123,
  unit: 'cm',
  fractionDigits: 4,
};

