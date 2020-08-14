const productService = require('../services/products');
const productProvidersService = require('../services/productProviders');
const pagination = require('../middlewares/pagination')
exports.getAllProducts = async (req,res) => {
    try {
    const {count, products} = await productService.getAllProducts(req.offset,req.query.limit);
        return res.status(200).json({products, paginate: pagination.getPaginationObject(res.locals.paginate,count)})
    } catch (error) {
        return res.status(400).json({message: "There's an error fetching data", error: error.message})
    }
}

exports.getProductsByCategory = async (req,res) => {
    try {
    const {count, products} = await productProvidersService.getProductsByCategory(req.params.categoryId,req.offset,req.query.limit);
        
        return res.status(200).json({products, paginate: pagination.getPaginationObject(res.locals.paginate,count)})
    } catch (error) {
        return res.status(400).json({message: "There's an error fetching data", error: error.message})
    }
}

exports.setUnSetCategory = async (req, res) => {
    try {
        const result = await productService.setUnSetCategory(req.body);
        res.status(200).json({message: "Product updated successfuly", result})
    } catch (error) {
        return res.status(400).json({message: "There's an error updating data", error: error.message})
    }
}