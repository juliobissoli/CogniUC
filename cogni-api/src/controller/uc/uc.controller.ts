import { Uc, UcRepository } from "../../interfaces/uc.interface"
import UcModel from "../../model/uc.model"


class UcController {

    public ucRepository: UcRepository
    constructor() {
        this.ucRepository = new UcModel
    }

    async cerate(data: any): Promise<Uc> {
        const uc = await this.ucRepository.create(data)
        return uc
    }

    async cerateMany(data: Array<any>): Promise<string> {
        return await this.ucRepository.createMany(data)
    }

    async findAll(): Promise<Array<Uc>> {
        const list = await this.ucRepository.getList()
        return list
    }


    async getById(id: string): Promise<Uc | null> {
        const uc = await this.ucRepository.getById(id)
        return uc
    }

    async update(id: string, data: any): Promise<Uc | null> {
        const updatedUc = await this.ucRepository.update(id, data);
        return updatedUc;
    }

    async delete(id: string): Promise<boolean> {
        const isDeleted = await this.ucRepository.delete(id);
        return isDeleted;
    }
}

export default UcController