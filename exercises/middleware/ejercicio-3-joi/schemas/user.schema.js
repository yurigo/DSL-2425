// const Joi = require('joi');
import Joi from 'joi';

// El campo nombre sea de tipo string y no esté vacío.
// El campo edad sea un número entero positivo mayor que 0.
// Si alguno de estos requisitos no se cumple,
// devuelve un mensaje de error y un código de 
// estado adecuado usando un middleware.

export const userSchema = Joi.object({
    nombre: Joi.string().required(),
    edad: Joi.number().min(0)

})