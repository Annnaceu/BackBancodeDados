
import { ok } from "assert"
import fastify, { FastifyInstance, FastifyPluginOptions,FastifyRequest,FastifyReply} from "fastify"
import { CreateClienteControllers } from "./controllers/CreateClienteControllers"
import { ListClienteControllers } from "./controllers/ListClienteControllers"
import { DeleteClienteControllers } from "./controllers/DeleteClienteControllers"

export async function routes(fastify:FastifyInstance, opts:FastifyPluginOptions) {
  
    fastify.get("/teste", async (request :FastifyRequest, reply:FastifyReply) => {
        return {ok: true}
})
    fastify.post("/cliente", async (request :FastifyRequest,reply:FastifyReply) => {
      return new CreateClienteControllers().handle(request,reply)

    })

    fastify.get("/customer", async (request :FastifyRequest,reply:FastifyReply) => {
      return new ListClienteControllers().handle(request,reply)


    })
    fastify.delete("/customer", async (request :FastifyRequest,reply:FastifyReply) => {
      return new DeleteClienteControllers().handle(request,reply)

    })

}
 
