import prismaClient from "../prisma";

class ListClienteService{
    async execute(){

    const customer = await prismaClient.customer.findMany();
    
    return customer;


    }
        
    
}

export { ListClienteService };
