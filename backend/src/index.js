const express = require('express');
const routes = require('./routes');

const app = express();

app.use(cors())
app.use(express.json());
app.use(routes);
/**
 * Métodos HTTP:
 * 
 * GET: Buscar uma informação no back-end
 * POST: Criar informação no back-end
 * PUT: Alterar uma informação no back-end
 * DELETE: Deletar uma informação no back-end
 */

 /**
  * Tipos de parametros:
  * 
  * Query:parâmetros enviados na rota após "?" (filtros)
  * Route : parâmetros utilizados para identificar recursos
  * Body: Corpo da requisição. Utilizado pra criar/alterar recursos
  */

  /**
   * Driver: SELECT * FROM users
   * Query Builder: table('users').select('*').where()...
   */



app.listen(3333);

