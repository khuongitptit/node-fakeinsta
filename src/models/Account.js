const mongoose = require('mongoose');

const AccountSchema = new mongoose.Schema(
  {
    active: {
      type: Boolean,
      default: false,
    },
    email: String,
    fullname: String,
    username: String,
    password: String,
    activeKey: String,
    accessToken: String,
    refreshToken: String,
  },
  { timestamps: true }
);
const Account = mongoose.model('accounts', AccountSchema);
async function get(id) {
  return Account.findById(id);
}
async function findOne(query) {
  return Account.findOne(query);
}
async function update(id, data) {
  console.log("id",id)
  console.log("data",data)
  return Account.updateOne({ _id: id }, data);
}
async function add(data) {
  return Account.create(data);
}
async function activate(activeKey) {
  return Account.updateOne({ activeKey }, { active: true });
}
module.exports = {
  get,
  findOne,
  update,
  add,
  find: Account.find.bind(Account),
  activate,
};
