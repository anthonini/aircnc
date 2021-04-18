const Spot = require('../model/Spot');
const User = require('../model/User');

module.exports = {
    async store(req, res) {
        const { filename } = req.file;
        const {company, techs, price} = req.body;
        const {user_id} = req.headers;

        const user = await User.findById(user_id);

        if(!user) {
            res.status(400).json({ error: 'User does not exists' });
        }

        const spot = await Spot.create({
            user: user_id,
            thumbnail: filename,
            company,
            techs: techs.split(',').map(tech => tech.trim()),
            price
        })

        return res.json(spot);
    }
}