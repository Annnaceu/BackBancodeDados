import { ok } from "assert";
import prismaClient from "../prisma";

interface CreateClienteProps{
    name: string;
    email: string;
}

class CreateClienteServi{
 async execute({name,email}:CreateClienteProps){ 
  if(!name || !email){
    throw new Error("Email ou Senha não informados")
  }
   
    const customer = await prismaClient.customer.create({
        data: {
            name,
            email,
            status: true
        }
    })
   
   
   
   
    return customer
 }

}

export {CreateClienteServi}