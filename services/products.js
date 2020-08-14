const productRepo = require('../repository/products');

exports.getAllProducts = async (offset, limit) => {
 try {
    const {count, rows: products} = await productRepo.getAllProducts(offset, limit)
    return {count, products}
 } catch (error) {
    throw error;
 }
}

exports.setUnSetCategory = async (data) => {
    try {
        if(data.productId && data.categoryId){
            return await productRepo.setCategory(data.productId, data.categoryId);
        } else if (data.productId && !data.categoryId) {
            return await productRepo.unsetCategory(data.productId);
        }else{
            throw new Error("Can't set/unset Category to this product")
        }
    } catch (error) {
        throw error
    }
}