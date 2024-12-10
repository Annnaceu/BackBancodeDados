import { FastifyReply, FastifyRequest } from "fastify"
import { ListClienteService } from "../services/ListClienteService"

class ListClienteControllers {

    async handle(request:FastifyRequest, reply:FastifyReply){
        const listClienteService = new ListClienteService();

        const customer = await listClienteService.execute();

        reply.send(customer);

    }
}

export { ListClienteControllers }