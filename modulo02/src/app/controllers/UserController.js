import * as Yup from 'yup';
// YUP -> JavaScript object schema validator and object parser.
import User from '../models/User';

class UserController {
  // Store
  async store(req, res) {
    // Validando os dados
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string()
        .email()
        .required(),
      password: Yup.string()
        .required()
        .min(6),
    });

    if (!(await schema.isValid(req.body))) {
      // Pega o req.body e compara com a const schema
      return res.status(400).json({ error: 'Validation fails' });
    }

    // Checando se usuário já existe
    const userExist = await User.findOne({ where: { email: req.body.email } });
    if (userExist) {
      return res.status(400).json({ error: 'User already exists.' });
    }

    // Desestruturando a req.body
    const { id, name, email, provider } = await User.create(req.body);

    return res.json({
      id,
      name,
      email,
      provider,
    });
  }

  // Update
  async update(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string(),
      email: Yup.string().email(),
      oldPassword: Yup.string().min(6),
      password: Yup.string()
        .min(6)
        .when('oldPassword', (oldPassword, field) =>
          oldPassword ? field.required() : field
        ),
      confirmPassword: Yup.string().when('password', (password, field) =>
        password ? field.required().oneOf([Yup.ref('password')]) : field
      ),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    // Pega o digitado na requisição
    const { email, oldPassword } = req.body;

    // Pegando os dados do usário no banco
    const user = await User.findByPk(req.userId);

    // Checando se o nome e-mail é diferente do existente
    if (email !== user.email) {
      // Checando se usuário já existe
      const userExist = await User.findOne({ where: { email } });
      if (userExist) {
        return res.status(400).json({ error: 'User already exists.' });
      }
    }

    // Checando se a senha bate
    // Primeiro parametro é para ter certeza que ele quer mudar a senha
    if (oldPassword && !(await user.checkPassword(oldPassword))) {
      return res.status(401).json({ error: 'Password does not match' });
    }

    const { id, name, provider } = await user.update(req.body);

    return res.json({
      id,
      name,
      email,
      provider,
    });
  }
}

export default new UserController();
