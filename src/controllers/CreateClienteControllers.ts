import { FastifyReply, FastifyRequest } from "fastify"
import { CreateClienteServi } from "../services/CreateClienteServi"
import { send } from "process";

class CreateClienteControllers{
    async handle(request:FastifyRequest, reply:FastifyReply){
      const { name, email } = request.body as {name: string, email: string};
      
        const createClienteServi = new CreateClienteServi()
        const customer = await createClienteServi.execute({name,email});

        reply.send(customer)


    }

}

export { CreateClienteControllers }