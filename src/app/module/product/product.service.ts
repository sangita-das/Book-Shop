/* import BookModel, { IBook } from "./product.model"

const createProduct = async (payload: IBook): Promise<IBook> =>{
    const result = await BookModel.create(payload)
    return result
}

const getProduct = async () => {
    const result = await BookModel.find()
    return result
}

const getSingleProduct = async (id: string) => {
  //   const result = await BookModel.findOne({name:"Bafog"})
  const result = await BookModel.findById(id)
  return result
}

const updateProduct = async (id: string, data: IBook) => {
  const result = await BookModel.findByIdAndUpdate(id, data, {
    new: true,
  })
  return result
}

const deleteProduct = async (id: string) => {
  const result = await BookModel.findByIdAndDelete(id)
  return result
}


export const productService = {
    createProduct,
    getProduct,
    getSingleProduct,
    updateProduct,
    deleteProduct
} */