import { column, defineDb, defineTable } from "astro:db";

const Subscription = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    email: column.text(),
  },
});

// https://astro.build/db/config
export default defineDb({
  tables: { Subscription },
});
