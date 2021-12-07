import { VcsTextField } from '../../../../index.js';

import getProps from '../../../util/get-props.js';


export default {
  title: 'Text Field/Regular',
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


export const Regular = Template.bind({});
Regular.args = {
  value: 'Hello World',
  label: 'Text Field',
};
