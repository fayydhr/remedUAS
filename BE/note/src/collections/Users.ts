import { CollectionConfig } from "payload/types";

const Users: CollectionConfig = {
  slug: "users",
  access: {
    create: () => true,
    read: () => true,
    update: () => true,
    delete: () => true,
  },
  auth: true,
  admin: {
    useAsTitle: "email",
  },
  fields: [
    // Email added by default
    // Add more fields as needed
  ],
};

export default Users;
