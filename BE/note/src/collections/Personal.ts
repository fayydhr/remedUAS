import { text } from "express";
import { CollectionConfig } from "payload/types";

const Personal: CollectionConfig = {
  slug: "personal",
  auth: false,
  admin: {
    useAsTitle: "email",
  },
  access: {
    create: () => true,
    update: () => true,
  },
  fields: [
    {
      name: "UserID",
      type: "relationship",
      relationTo: "users",
      hasMany: true,
    },
  ],
};

export default Personal;
