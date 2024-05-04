export default {
  schema: "./utils/schema.js",
  driver: "mysql2",
  dbCredentials: {
    host: process.env.NEXT_PUBLIC_HOST,
    user: process.env.NEXT_PUBLIC_USER,
    database: process.env.NEXT_PUBLIC_DB,
    password:process.env.NEXT_PUBLIC_PASSWORD,
    port: "3306",
  },
};
