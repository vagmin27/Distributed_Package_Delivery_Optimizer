import { body } from 'express-validator';

export const validateRegister = [
    body('name')
        .trim()
        .notEmpty().withMessage('Name is required')
        .isLength({ min: 2 }).withMessage('Name must be at least 2 characters long'),

    body('email')
        .trim()
        .isEmail().withMessage('Valid email is required'),

    body('password')
        .isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),

    body('role')
        .trim()
        .isIn(['customer', 'agent']).withMessage('Role must be either customer or agent')
];

export const validateLogin = [
    body('email')
        .trim()
        .isEmail().withMessage('Valid email is required'),

    body('password')
        .notEmpty().withMessage('Password is required')
];