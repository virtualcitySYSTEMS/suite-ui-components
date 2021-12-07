import { VcsCompass } from '../../../index.js';

import { rotationControlOblique } from '../../util/controls.js';
import getProps from '../../util/get-props.js';

export default {
  title: 'Compass/Oblique',
  component: VcsCompass,
  argTypes: {
    viewMode: {
      table: {
        disable: true,
      },
    },
    value: {
      control: rotationControlOblique,
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


export const Oblique = Template.bind({});
Oblique.args = {
  viewMode: 'oblique',
  value: 0,
};
