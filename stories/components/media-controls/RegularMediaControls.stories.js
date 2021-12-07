import { VcsInputColumnCoordinates, VcsInputColumnDimensions, VcsMediaControls } from '../../../index.js';

import getProps from '../../util/get-props.js';

export default {
  title: 'Media Controls/Regular',
  component: VcsMediaControls,
  argTypes: {
    value: {
      control: {
        type: 'range',
        min: 0,
        max: 100,
        step: 1,
      },
    },
    max: {
      table: {
        disable: true,
      },
    },
    min: {
      table: {
        disable: true,
      },
    },
  },
};


const Template = (args, { argTypes }) => {
  return {
    props: getProps(argTypes, { excludeKeys: ['default'] }),
    components: { VcsMediaControls, VcsInputColumnDimensions, VcsInputColumnCoordinates },
    template: '<VcsMediaControls v-bind="$props" />',
  };
};

export const Regular = Template.bind({});
Regular.args = {

};
