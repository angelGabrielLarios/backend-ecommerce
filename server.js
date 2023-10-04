import { createApp } from "./app.js"

import { ProductModel } from "./models/ProductModel.js"
import { SeccionModel } from "./models/SeccionModel.js"
import { UserModel } from "./models/UserModel.js"
import { UserProductModel } from "./models/UserProductModel.js"


createApp({
    productModel: ProductModel,
    userModel: UserModel,
    seccionModel: SeccionModel,
    userProductModel: UserProductModel
})

