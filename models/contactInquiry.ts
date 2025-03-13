import { list } from "@keystone-6/core";
import { allowAll } from "@keystone-6/core/access";
import { text, timestamp, select, relationship } from "@keystone-6/core/fields";

export const ContactInquiry = list({
  access: allowAll,
  fields: {
    fullName: text({
      validation: { isRequired: true },
    }),
    phoneNumber: text({
      validation: {
        isRequired: false,
        match: { regex: /^\d{8,15}$/ },
      },
    }),
    message: text({
      validation: { isRequired: true },
      ui: {
        displayMode: "textarea",
      },
    }),
    inquiryType: select({
      options: [
        { label: "General Inquiry", value: "general" },
        { label: "Support", value: "support" },
        { label: "Feedback", value: "feedback" },
        { label: "Other", value: "other" },
      ],
      defaultValue: "general",
    }),
    relatedAgency: relationship({
      ref: "Agency", // Assumes you have an 'Agencies' list defined elsewhere in your Keystone schema
      many: false,
    }),
    createdAt: timestamp({
      defaultValue: { kind: "now" },
    }),
    updatedAt: timestamp({
      defaultValue: { kind: "now" },
    }),
  },
  hooks: {
    async resolveInput({ resolvedData }) {
      // Automatically update the updatedAt field when an inquiry is updated
      if (resolvedData.updatedAt === undefined) {
        resolvedData.updatedAt = new Date();
      }
      return resolvedData;
    },
  },
});
