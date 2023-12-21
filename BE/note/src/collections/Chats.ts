import { CollectionConfig } from "payload/types";

const Chats: CollectionConfig = {
  slug: "chats",
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
      name: "GroupID",
      type: "relationship",
      relationTo: "group",
    },
    {
      name: "content",
      type: "textarea",
    },
  ],
};

export default Chats;
