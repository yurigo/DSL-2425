import Joi from "joi";

export const schema = Joi.object({
    num1: Joi.number().integer(),
    num2: Joi.number().integer(),
})


