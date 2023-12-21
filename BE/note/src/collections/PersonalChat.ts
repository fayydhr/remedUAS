import { CollectionConfig } from "payload/types";

const PersonalChat: CollectionConfig = {
  slug: "personalchat",
  auth: false,
  admin: {
    useAsTitle: "email",
  },
  access: {
    create: () => true,
    read: () => true,
  },
  fields: [
    {
      name: "UserID",
      type: "text",
      required: true,
    },
    {
      name: "PersonalID",
      type: "relationship",
      relationTo: "personal",
    },
    {
      name: "content",
      type: "textarea",
    },
  ],
};

export default PersonalChat;
