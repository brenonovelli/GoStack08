import * as Yup from 'yup'; // Chama o Yup para validar os dados
import { parseISO, isBefore } from 'date-fns';
import Meetup from '../models/Meetup';

class MeetupController {
  async index(req, res) {
    const meetup = await Meetup.findAll({
      where: {
        user_id: req.userId,
      },
    });
    return res.json(meetup);
  }

  async store(req, res) {
    /**
     * Received data schema
     */
    const schema = Yup.object().shape({
      date: Yup.date().required(),
      title: Yup.string().required(),
      description: Yup.string().required(),
      local: Yup.string().required(),
      banner: Yup.number(),
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
    /**
     * Received data schema
     */
    const schema = Yup.object().shape({
      id: Yup.number(),
      date: Yup.date(),
      title: Yup.string().min(3),
      description: Yup.string(),
      local: Yup.string(),
      banner: Yup.number(),
    });
    /**
     * Check data(req.body) received is valid.
     */
    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails.' });
    }
    /**
     * Get utils variable for verifications
     */
    const { id, date } = req.body;
    /**
     * Check for past dates
     */
    const hourStart = parseISO(date);
    if (isBefore(hourStart, new Date())) {
      return res.status(400).json({ error: 'Past dates are not permitted.' });
    }
    /**
     * Get meetup on DB
     */
    const meetup = await Meetup.findByPk(id);
    if (!meetup) {
      return res.status(400).json({ error: 'Meetup not found.' });
    }
    /**
     * Check if is past meetup
     */
    const { past } = meetup;
    if (past) {
      return res.status(400).json({ error: 'Past meetups are not editable.' });
    }
    /**
     * Update meetup
     */
    const meetupUpdated = await meetup.update(req.body);
    /**
     * Return results
     */
    return res.json(meetupUpdated);
  }

  async delete(req, res) {
    const meetup = await Meetup.findByPk(req.params.id);
    /**
     * Get utils variable for verifications
     */
    const { user_id, past } = meetup;
    /**
     * Check if is owner
     */
    if (!(user_id === req.userId)) {
      return res
        .status(401)
        .json({ error: "You don't have permission to cancel this meetup." });
    }
    /**
     * Check if is past meetup
     */
    if (past) {
      return res.status(400).json({ error: 'Past meetups are not editable.' });
    }

    await meetup.destroy();

    return res.json({ error: 'Meetup deleted.' });
  }
}

export default new MeetupController();
