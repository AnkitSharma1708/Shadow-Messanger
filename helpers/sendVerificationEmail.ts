import { resend } from '@/app/lib/resend';

import { ApiResponse } from '../types/ApiResponse';
import { url } from 'inspector';

export async function sendVerificationEmail(
    email: string,
    username : string,
    verifyCode : string
): Promise<ApiResponse> {
    try{
        await resend.emails.send({
            from : 'you@example.com' ,
            to : email,
            subject : 'Verification code',
            react : sendVerificationEmail, //By default...
        });
        return {success : true, message : 'Verification email send Successfully'}
    }catch (emailError){
        console.error("Error Sending Verification Email" ,emailError)
        return {success : false , message : 'Verification email send failed.'}
    }
}