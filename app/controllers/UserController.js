import sequelize from '../db/sequelize.js';
import Permission from '../models/Permission.js';
import User from '../models/User.js';

const getAll = async (req, res) => {
    User.belongsTo(Permission, { foreignKey: 'permission_id' });
    const users = await User.findAll({ 
        include: Permission 
    });
    res.render('users', { 
        title: 'Пользователи',
        users,
     });
}

export { getAll };