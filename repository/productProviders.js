const models = require('../models')

const productProvidersRepository = {
    getProductsByCategory: async (categoryId, offset, limit) => {
        try {
        return await models.product_providers.findAndCountAll({
            offset: offset,
            limit: limit,
            include: [{model: models.products, as: 'product', where: {category_id: categoryId}}, 'provider'],
            order: [['price', 'asc'], ['products_id', 'asc']],
        })
        } catch (error) {
        throw error;
        }
    }
}

module.exports = productProvidersRepository