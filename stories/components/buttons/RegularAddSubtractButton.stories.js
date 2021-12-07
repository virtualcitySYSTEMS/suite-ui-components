import VcsAddSubtractButtons from '../../../src/components/buttons/VcsAddSubtractButtons.vue';

import getProps from '../../util/get-props.js';

export default {
  title: 'Buttons/Add&Subtract Button/Regular',
  component: VcsAddSubtractButtons,
  argTypes: {
  },
};


const Template = (args, { argTypes }) => {
  return {
    props: getProps(argTypes, { excludeKeys: ['input', 'default'] }),
    components: { VcsAddSubtractButtons },
    template: `
      <div>

        <VcsAddSubtractButtons
          v-bind="$props"
          v-model="value"
          @input="value = $event"
        >
        </VcsAddSubtractButtons>

        {{value}}
      </div>
      `,
  };
};


export const Regular = Template.bind({});
Regular.args = {
  value: 0,
};
Regular.parameters = {
  controls: {
    include: [
      'value',
      'elevation',
    ],
  },
};
