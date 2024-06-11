import Fastify, { FastifyInstance } from "fastify"
import cors from '@fastify/cors'




import config from "./config"
import { ucRoutes } from "./routes/uc/uc.routes"

const app: FastifyInstance = Fastify({
    logger: false
})


app.register(cors, {
    origin: "*"
})

app.register(require('@fastify/swagger'))

app.register(require('@fastify/swagger-ui'), {
  routePrefix: '/docs',
  uiConfig: {
    docExpansion: 'full',
    deepLinking: false
  },
  uiHooks: {
    onRequest: function (request, reply, next) { next() },
    preHandler: function (request, reply, next) { next() }
  },
  staticCSP: true,
  transformStaticCSP: (header) => header,
  transformSpecification: (swaggerObject, request, reply) => { return swaggerObject },
  transformSpecificationClone: true
})


app.register(ucRoutes, { prefix: '/uc' })


// Run the server!
app.listen(
    { port: config.apiPort  },
    () => {
       console.log("Server is running in ", config.apiHost)
      console.log('Show API documentation in ', config.apiHost + '/docs')
      }
    )


