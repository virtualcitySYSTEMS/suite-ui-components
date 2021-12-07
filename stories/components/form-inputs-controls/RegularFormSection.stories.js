import { VcsFormSection, VcsInputColumnCoordinates, VcsInputColumnDimensions } from '../../../index.js';

import getProps from '../../util/get-props.js';

export default {
  title: 'Form Section/Regular',
  component: VcsFormSection,
  argTypes: {
    title: {
      control: {
        type: 'text',
      },
    },
  },
};


const Template = (args, { argTypes }) => {
  return {
    props: getProps(argTypes, { excludeKeys: ['default'] }),
    components: {
      VcsFormSection,
      VcsInputColumnDimensions,
      VcsInputColumnCoordinates,
    },
    template: `
    <div style="max-width: 320px">
      <VcsFormSection
        v-bind="$props"
      >
        <div class="d-flex flex-row px-2 pb-3">
          <VcsInputColumnDimensions class="mr-10" />
          <VcsInputColumnCoordinates />
        </div>
      </VcsFormSection>
    </div>
      `,
  };
};

export const Regular = Template.bind({});
Regular.args = {
  title: 'Parameter',
  titleActions: [
    { name: 'help', icon: 'mdi-help-circle' },
    { name: 'settings', icon: 'mdi-cog' },
  ],
};
