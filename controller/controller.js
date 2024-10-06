const User = require('../model/model.js')

const postData = async (req, res) => {
    const { name, email, age, phone } = req.body;
    try {
        if (!name || !email || !age || !phone) {
            return res.status(400).json({ message: 'Enter all fields' });
        }
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(409).json({ message: 'Email already exists' });
        }
        const newUser = new User({ name, email, age, phone });
        await newUser.save();

        return res.status(201).json({ message: 'User created successfully', newUser });
    } catch (error) {
        return res.status(500).json(error);
    }
};

const getData = async (req, res) => {
    try {
        const user = await User.find();
        if (!user) {
            return res.status(404).json({ message: 'No Users found' });
        }
        return res.status(200).json(user);
    } catch (error) {
        return res.status(500).json(error);
    }
};
const updateData = async(req, res) =>{
    const {id} = req.params;
    const { name, email, age, phone } = req.body;
    try {
        if (!id) {
            return res.status(400).json({ message: 'Enter Id' });
        }
        const user = await User.findByIdAndUpdate(
            id,
         { name, email, age, phone },
         { new: true }
        );
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        return res.status(200).json({ message: 'User updated', user });
    } catch (error) {
        return res.status(500).json(error);
    }
}

const deleteData = async(req, res) =>{
    const {id} = req.params;
    try {
        if (!id) {
            return res.status(400).json({ message: 'Enter Id' });
        }
        const user = await User.findByIdAndDelete(id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        return res.status(200).json({ message: 'User deleted' });
    } catch (error) {
        return res.status(500).json(error);
    }
}


module.exports = {
    postData,
    getData,
    updateData,
    deleteData
}