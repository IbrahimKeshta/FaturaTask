const models = require('../models')

const productRepository = {
    getAllProducts: async (offset,limit) => {
        try {
        return await models.products.findAndCountAll({
            offset: offset,
            limit: limit,
            include: [{model: models.product_providers, as: 'productProviders', include: ['provider']}],
            order: [[{model: models.product_providers, as: 'productProviders'}, 'price', 'asc' ]]
        })
        } catch (error) {
        throw error;
        }
    },
    setCategory: async (productId, categoryId) => {
        try {
            if(!productId || !categoryId){
                throw new Error('product ID and category ID should be provided to set category')
            }
            let product = await models.products.findOne({where: {id: productId}})
            product.category_id = categoryId;
            await product.save();
            return product;
        } catch (error) {
            throw error;
        }
    },
    unsetCategory: async (productId) => {
        try {
            const product = await models.products.findOne({where: {id: productId}})
            product.category_id = null;
            await product.save()
            return product;
        } catch (error) {
            throw error;
        }
    }
}
module.exports = productRepository