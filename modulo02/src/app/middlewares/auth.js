import jwt from 'jsonwebtoken';
import { promisify } from 'util';

import authConfig from '../../config/auth';

export default async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ error: 'Token not provider' });
  }

  // Usamos o split para separar o array e usamos a desestruturação para descartar a primeira posição e pegar só o token
  const [, token] = authHeader.split(' ');

  /*
    O método verify do JWT usa por padrão de callback na chamada async.
    Para contornar o padrão callback e usar async/await podemos usar o
    `promisify` da lib `util` do próprio NodeJS.
   */
  try {
    const decoded = await promisify(jwt.verify)(token, authConfig.secret);

    req.userId = decoded.id;

    return next();
  } catch (err) {
    return res.status(401).json({ error: 'Token invalid' });
  }
};
