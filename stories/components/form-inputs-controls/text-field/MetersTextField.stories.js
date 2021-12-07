import { VcsTextField } from '../../../../index.js';

import getProps from '../../../util/get-props.js';


export default {
  title: 'Text Field/Meter',
  component: VcsTextField,
  argTypes: {
  },
};


const Template = (args, { argTypes }) => {
  return {
    props: getProps(argTypes, { excludeKeys: [] }),
    components: { VcsTextField },
    template: `
      <div style="max-width: 220px">
        <VcsTextField
          v-bind="$props"
          v-model="value"
          hide-details
        >
        </VcsTextField>
      </div>
      `,
  };
};


export const Meter = Template.bind({});
Meter.args = {
  value: 12,
  label: 'Meter',
  dense: true,
  unit: 'm',
  type: 'number',
};
