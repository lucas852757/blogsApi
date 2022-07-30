const model = require('../database/models');

const findCategoriesId = (async (categoryIds) => 
categoryIds.filter(async (categoryId) => {
 const [response] = await model.Category.findAll({ where: { id: categoryId } }); 
 //const {dataValues} = response;
return response;
}));

module.exports = findCategoriesId;