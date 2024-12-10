import { FastifyRequest, FastifyReply } from "fastify"
import { DeleteClienteService } from "../services/DeleteClienteService"


class DeleteClienteControllers{
    async handle(request:FastifyRequest, reply:FastifyReply){
        const {id} = request.query as {id: string}
        const customerService = new DeleteClienteService();

        const customer = await customerService.execute({ id })

        reply.send(customer);
        

    }


}

export {DeleteClienteControllers}