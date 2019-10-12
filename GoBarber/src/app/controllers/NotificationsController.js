import User from '../models/User';
import Notification from '../schemas/Notification';

class NotificationsController {
  async index(req, res) {
    const checkIsProvider = await User.findOne({
      where: { id: req.userId, provider: true },
    });

    if (!checkIsProvider) {
      return res
        .status(401)
        .json({ error: 'Only provider can load notifications.' });
    }

    const notifications = await Notification.find({
      user: req.userId,
    })
      .sort({ createdAt: -1 })
      .limit(20);

    return res.json(notifications);
  }

  async update(req, res) {
    const checkIsRead = await Notification.findById(req.params.id);

    const notification = await Notification.findByIdAndUpdate(
      req.params.id,
      { read: !checkIsRead.read },
      { new: true }
    );

    return res.json(notification);
  }
}

export default new NotificationsController();
