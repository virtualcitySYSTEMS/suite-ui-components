import { VcsTextField } from '../../../../index.js';

import getProps from '../../../util/get-props.js';


export default {
  title: 'Text Field/Seconds',
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


export const Seconds = Template.bind({});
Seconds.args = {
  value: 12,
  label: 'Seconds',
  dense: true,
  unit: 'sec',
  type: 'number',
};
