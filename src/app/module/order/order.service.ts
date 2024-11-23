/* import OrderModel, { IOrder } from "./order.model";

const createOrder = async (payload:IOrder) => {
    // const result = await OrderModel.create(payload)

      const data = new OrderModel(payload)

  //   data.color = "red"

     const result = await data.save()
  return result
}
 */

/* -------------------- */
/* const getOrders = async () => {
  const result = OrderModel.find()
  return result
}

const getSingleOrder = async (id: string) => {
  const result = OrderModel.findById(id)
  return result
}

const updateOrder = async (id: string, payload: Partial<IOrder>) => {
  const result = OrderModel.findByIdAndUpdate(id, payload)
  return result
}

const deleteOrder = async (id: string) => {
  const result = OrderModel.findByIdAndDelete(id)
  return result
}
 */

/* const getNextSchedule = async (id: string) => {
  const order = await OrderModel.getNextNearestStartDateAndEndData()
  //   const nextSchedule = order?.getNextNearestStartDateAndEndData()

  return {
    order,
    // nextSchedule,
  }
} */

/* export const orderService = {
  createOrder,
  getOrders,
  getSingleOrder,
  updateOrder,
  deleteOrder,
//   getNextSchedule,
} */