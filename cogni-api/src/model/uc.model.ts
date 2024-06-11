
import { prisma } from "../database/prisma-client";
import { Uc, UcRepository, sanitizeUc } from "../interfaces/uc.interface";

class UcModel implements UcRepository {
    async create(data: any): Promise<Uc> {
        const { id, ...newUc } = sanitizeUc(data);

        const uc = await prisma.uc.create({
            data: newUc
        })

        return uc
    }

    async createMany(data: Array<any>): Promise<string> {
        // const {id, ...newUc} = sanitizeUc(data);
        const list = data.map(el => {
            const { id, ...newData } = sanitizeUc(el)

            return newData
        }
        )
        const ucList = await prisma.uc.createMany({
            data: list
        })

        return ucList ? 'Success' : 'Error'
    }

    async getList(): Promise<Array<Uc>> {
        const list = await prisma.uc.findMany()
        return list
    }

    async getById(id: string): Promise<Uc | null> {
        const uc = await prisma.uc.findUnique({
            where: {
                id
            }
        })
        return uc
    }

    async update(id: string, data: any): Promise<Uc | null> {
        const updatedUc = await prisma.uc.update({
            where: { id },
            data: data
        });
        return updatedUc;
    }

    async delete(id: string): Promise<boolean> {
        const deletedUc = await prisma.uc.delete({
            where: { id }
        });
        return !!deletedUc;
    }
}


export default UcModel