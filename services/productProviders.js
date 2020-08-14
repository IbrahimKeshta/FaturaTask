const productProviderRepo = require('../repository/productProviders');

exports.getProductsByCategory = async (categoryId, offset, limit) => {
 try {
    const {count, rows: products} = await productProviderRepo.getProductsByCategory(categoryId, offset, limit)
    return {count, products}
 } catch (error) {
    throw error;
 }
}