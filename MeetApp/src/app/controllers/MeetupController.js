import * as Yup from 'yup'; // Chama o Yup para validar os dados
import { parseISO, isBefore } from 'date-fns';
import Meetup from '../models/Meetup';

class MeetupController {
  async store(req, res) {
    /**
     * Received data schema
     */
    const schema = Yup.object().shape({
      date: Yup.date().required(),
      title: Yup.string().required(),
      description: Yup.string().required(),
      local: Yup.string().required(),
    });
    /**
     * Check data(req.body) received is valid.
     */
    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails.' });
    }
    /**
     * Check for past dates
     */
    const { date, title, description, local, banner } = req.body;
    const hourStart = parseISO(date);
    if (isBefore(hourStart, new Date())) {
      return res.status(400).json({ error: 'Past dates are not permitted.' });
    }
    /**
     * Create and save meetup
     */
    const meetup = await Meetup.create({
      user_id: req.userId,
      date,
      title,
      description,
      local,
      banner,
    });

    return res.json(meetup);
  }

  async update(req, res) {
    return res.json();
  }
}

export default new MeetupController();
