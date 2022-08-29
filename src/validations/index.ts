import * as Yup from 'yup';

const NewClientValidator = {
    name: Yup.string()
        .required()
        .min(1)
        .max(16),
    company: Yup.string()
        .required()
        .min(1),
    email: Yup.string()
        .email()
        .required(),
    phone: Yup.number()
        .integer('phone can only contain integers')
        .typeError('phone must be a valid phone number')
        .positive('invalid phone number')
        .optional(),
    notes: Yup.string()
        .optional()
}

export const NewClientSchema = Yup.object().shape(NewClientValidator);