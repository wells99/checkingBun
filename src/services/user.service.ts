import {createUser} from '../repositories/user.repository'
import {hashPassword} from '../auth'

export async function registerUser(email:string,password:string){
const hashedPassword = await hashPassword(password);

return createUser(email, hashedPassword);
}