const config = require("./prisma.config.js");
console.log("Loaded config:", JSON.stringify(config, null, 2));
console.log("DATABASE_URL:", process.env.DATABASE_URL);
