import {z} from 'zod'

export const usernameValidation = z.string()
    .min(2, "Username must have alteast 2 Characters")
    .max(20 , "Username must have atleast 20 Characters")
    .regex(/^[a-zA-Z0-9_]+$/ , "Username must contains special characters")

export const signUpSchema = z.object({
    username : usernameValidation,
    email : z.string().email({message : "Invalid email address"}),
    password : z.string().min(6, {message : "Password must have 6 characters"})
})