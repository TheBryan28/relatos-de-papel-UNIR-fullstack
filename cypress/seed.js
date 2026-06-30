import mysql from "mysql2/promise";
import fs from "fs";
import path from "path";

// Función auxiliar para ejecutar un archivo SQL de semilla
async function resetDatabase(config, sqlBaseFilePath, schemaName) {
  const connection = await mysql.createConnection(config);
  try {
    // Eliminamos la tabla si existe para evitar conflictos
    await connection.query(`DROP DATABASE IF EXISTS ${schemaName};`);

    // Leemos el archivo SQL schema y ejecutamos sus comandos
    const sql = fs.readFileSync(path.resolve(`${sqlBaseFilePath}/1-schema.sql`), "utf8");
    // Dividimos por punto y coma para ejecutar comando por comando
    const statements = sql.split(";").filter(cmd => cmd.trim() !== "");
    for (const statement of statements) {
      await connection.query(statement);
    }

    // Leemos el archivo SQL seed y ejecutamos sus comandos
    const seedSql = fs.readFileSync(path.resolve(`${sqlBaseFilePath}/2-mock-data.sql`), "utf8");
    const seedStatements = seedSql.split(";").filter(cmd => cmd.trim() !== "");
    for (const statement of seedStatements) {
      await connection.query(statement);
    }

    return null; // Cypress requiere que las tareas retornen null o un valor
  } catch (error) {
    throw new Error(`Error reseteando DB: ${error.message}`);
  } finally {
    await connection.end();
  }
}

export default resetDatabase