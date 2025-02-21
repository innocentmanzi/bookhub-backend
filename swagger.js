const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

// Swagger Configuration
const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Book Hub API",
      version: "1.0.0",
      description: "API Documentation for Book Hub Backend",
    },
    servers: [
      {
        url: "http://localhost:5000", // Update with your backend URL if deployed
      },
    ],
  },
  apis: ["./routes/*.js"], // Path to API routes for documentation
};

const swaggerSpec = swaggerJsdoc(options);

const setupSwagger = (app) => {
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
  console.log("📜 Swagger Docs available at: http://localhost:5000/api-docs");
};

module.exports = setupSwagger;
