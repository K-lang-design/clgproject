/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./utils/schema.js",
    dialect: 'postgresql',
    dbCredentials: {
        url: 'postgresql://neondb_owner:npg_mA9XKlU1Rtxq@ep-polished-bush-a8oax7vx-pooler.eastus2.azure.neon.tech/AI_Interview?sslmode=require',
    }
  };