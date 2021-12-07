import { VcsTextField } from '../../../../index.js';

import getProps from '../../../util/get-props.js';


export default {
  title: 'Text Field/Degree',
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


export const Degree = Template.bind({});
Degree.args = {
  value: 12,
  label: 'Degree',
  dense: true,
  unit: 'deg',
  type: 'number',
};
