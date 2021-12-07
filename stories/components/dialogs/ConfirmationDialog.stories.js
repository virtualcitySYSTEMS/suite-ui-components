import VcsConfirmationDialog from '../../../index.js';

import { vuetify } from '@/plugins/vuetify.js';

export default {
  title: 'Dialog/Confirmation',
  component: VcsConfirmationDialog,
  argTypes: {
  },
};

const Template = (args, { argTypes }) => {
  return {
    vuetify,
    components: { VcsConfirmationDialog },
    props: Object.keys(argTypes),
    template: `
      <div>
        <button @click="open = true">
          open
        </button>
        <VcsConfirmationDialog
          v-bind="$props"
          on-dialog-close="open = false"
        >
        </VcsConfirmationDialog>
      </div>
    `,
    methods: {
      close() {
      },
    },
  };
};


export const Confirmation = Template.bind({});
Confirmation.args = {
  title: 'Privacy Policy 123',
  body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
        et dolore magna aliqua. Ut enim ad minim veniam`,
  primaryText: 'Confirm',
  secondaryText: 'Cancel',
  open: false,
};
