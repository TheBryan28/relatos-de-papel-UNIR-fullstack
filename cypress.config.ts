import { defineConfig } from "cypress";
import resetDatabase from "./cypress/seed";

export default defineConfig({
  allowCypressEnv: false,
  e2e: {
    specPattern: 'cypress/e2e/**/*.cy.ts',
    supportFile: 'cypress/support/e2e.ts',
    viewportWidth: 1280,
    viewportHeight: 720,
    video: true,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    setupNodeEvents(on, config) {
      on("task", {
        async resetAllDBs() {
          const catalogConfig = { host: "localhost", port: 4308, user: "catalog_user", password: "catalog_pass", database: "catalog" };
          const ordersConfig = { host: "localhost", port: 4309, user: "orders_user", password: "orders_pass", database: "orders" };
          const usersConfig = { host: "localhost", port: 4310, user: "users_user", password: "users_pass", database: "users" };

          console.log("🔄 Reseteando bases de datos de prueba...");

          // Ejecuta la limpieza usando los mismos archivos de seed mapeados en el docker-compose
          await resetDatabase(catalogConfig, "../relatos-de-papel-backend/catalog/src/main/resources/db", "catalog");
          await resetDatabase(ordersConfig, "../relatos-de-papel-backend/orders/src/main/resources/db", "orders");
          await resetDatabase(usersConfig, "../relatos-de-papel-backend/users/src/main/resources/db", "users");

          console.log("✅ Bases de datos reseteadas con éxito.");
          return null;
        }
      });
    },
    baseUrl: 'http://localhost:5173',
  },
});
