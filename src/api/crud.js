const post = async (data, model) => {
  return await model.collection.insertOne({ ...data });
};

const getOne = async (where, model) => {
  return await model.find({ ...where }).exec();
};

const getAll = async (where = {}, model, projection = {}) => {
  return await model.find({ ...where }, { ...projection }).exec();
};

const update = async (data, where, model) => {
  return await model.updateOne({ ...where }, { ...data });
};

const destroy = async (where, model) => {
  return await model.deleteOne({ ...where });
};

module.exports = { post, getOne, update, getAll, destroy };
