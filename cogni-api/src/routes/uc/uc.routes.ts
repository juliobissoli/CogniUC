import { FastifyInstance } from "fastify";
import UcController from "../../controller/uc/uc.controller";
import { createManyUcDocs, createUcDoc, listUcDocs } from "./uc.router.docs";




export async function ucRoutes(fastify: FastifyInstance) {

    fastify.post<{ Body: any }>(
        '/',
        createUcDoc,
        async (req, reply) => {
            const ucController = new UcController();
            try {

                const uc = await ucController.cerate(req.body);

                reply.status(201).send(uc);
            } catch (error) {
                reply.send(error);
            }
        });

    fastify.post<{ Body: Array<any> }>(
        '/create-many',
        createManyUcDocs,
        async (req, reply) => {
            const ucController = new UcController();
            try {

                const response = await ucController.cerateMany(req.body);
                reply.status(201).send({ response });
            } catch (error) {
                reply.send(error);
            }
        });

    fastify.get<{ Querystring: any }>(
        '/',
        // listUcDocs,
        async (req, reply) => {
            const ucCOntroller = new UcController();
            try {
                const ucList = await ucCOntroller.findAll();
                reply.send(ucList);
            } catch (error) {
                reply.send(error);
            }
        });


    fastify.get<{ Params: { id: string } }>('/:id', async (req, reply) => {
        const ucCOntroller = new UcController();
        try {
            const ucList = await ucCOntroller.getById(req.params.id);
            reply.send(ucList);
        } catch (error) {
            reply.send(error);
        }
    });


    fastify.put<{ Params: { id: string }, Body: any }>(
        '/:id',
        async (req, reply) => {
            const ucController = new UcController();
            try {
                const updatedUc = await ucController.update(req.params.id, req.body);
                reply.send(updatedUc);
            } catch (error) {
                reply.send(error);
            }
        });

    fastify.delete<{ Params: { id: string } }>(
        '/:id',
        async (req, reply) => {
            const ucController = new UcController();
            try {
                const isDeleted = await ucController.delete(req.params.id);
                reply.send({ success: isDeleted });
            } catch (error) {
                console.log('error => ', error)
                reply.send(error);
            }
        });

}
