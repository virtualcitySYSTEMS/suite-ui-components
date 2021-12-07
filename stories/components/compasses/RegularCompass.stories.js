import { VcsCompass } from '../../../index.js';

import { rotationControlRegular } from '../../util/controls.js';
import getProps from '../../util/get-props.js';

export default {
  title: 'Compass/Regular',
  component: VcsCompass,
  argTypes: {
    viewMode: {
      table: {
        disable: true,
      },
    },
    value: {
      control: rotationControlRegular,
    },
  },
};

const Template = (args, { argTypes }) => {
  return {
    components: { VcsCompass },
    props: getProps(argTypes),
    template: `
      <VcsCompass
        :view-mode="viewMode"
        v-model="value"
      />
    `,
  };
};


export const Regular = Template.bind({});
Regular.args = {
  viewMode: '2d',
  value: 0,
};
