import prismaClient from "../prisma";


interface DeleteClienteProps{
    id: string;
}

class DeleteClienteService {
    async execute({id}:DeleteClienteProps){

        if(!id){
          throw new Error("Id não informado")
        }

        const findCustomer = await prismaClient.customer.findFirst({where:
            {
                id
            }
        })

        if(!findCustomer){
            throw new Error("Cliente não encontrado")
    }

    await prismaClient.customer.delete({
        where:{
            id: findCustomer.id

        }

    })

    return {message: "Cliente deletado com sucesso"}
}

}

export {DeleteClienteService}