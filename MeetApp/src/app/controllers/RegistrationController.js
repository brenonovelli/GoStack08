// import { Op } from 'sequelize';
import { format } from 'date-fns';
import pt from 'date-fns/locale/pt';
import User from '../models/User';
import Meetup from '../models/Meetup';
import Registration from '../models/Registration';
import Mail from '../../lib/Mail';
// import Queue from '../../lib/Queue';
// import SubscriptionMail from '../jobs/SubscriptionMail';

class RegistrationController {
  async store(req, res) {
    const user = await User.findByPk(req.userId);
    const meetup = await Meetup.findByPk(req.params.meetupId, {
      include: [User],
    });

    if (meetup.user_id === req.userId) {
      return res
        .status(400)
        .json({ error: "Can't register to you own meetups" });
    }

    if (meetup.past) {
      return res.status(400).json({ error: "Can't register to past meetups" });
    }

    const checkDate = await Registration.findOne({
      where: {
        user_id: user.id,
      },
      include: [
        {
          model: Meetup,
          required: true,
          where: {
            date: meetup.date,
          },
        },
      ],
    });

    if (checkDate) {
      return res
        .status(400)
        .json({ error: "Can't register to two meetups at the same time" });
    }

    const registration = await Registration.create({
      user_id: user.id,
      meetup_id: meetup.id,
    });

    await Mail.sendMail({
      to: 'Nome <norpley@meetapp.com>',
      subject: `Nova inscrição no MeetUp: ${meetup.title}`,
      template: 'registration',
      context: {
        user_name: user.name,
        meetup_name: meetup.title,
        meetup_date: format(meetup.date, "'dia' dd 'de' MMMM', às' H:mm'h'", {
          locale: pt,
        }),
        meetup_owner: meetup.User.name,
      },
    });

    return res.json(registration);
  }
}

export default new RegistrationController();
