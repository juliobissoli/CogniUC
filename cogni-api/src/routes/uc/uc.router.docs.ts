export const createUcDoc = {
    schema: {
        description: 'Create uc',
        tags: ['uc'],
        params: {
            type: 'object',
            properties: {
                active: { type: 'boolean' },
                dateInit: { type: 'string' },
                concessionaire: { type: 'string' },
                uf: { type: 'string' },
                numInstallation: { type: 'number' },
                numClient: { type: 'number' },
                company: { type: 'string' },
                unitDescription: { type: 'string' },
                type: { type: 'string' },
                modality: { type: 'string' },
                isRural: { type: 'boolean' },
                orgType: { type: 'string' },
                licenseType: { type: 'string' },
                personCode: { type: 'string' },
                email: { type: 'string' },
                password: { type: 'string' },
            },
            required: ['']
        }
    }
};


export const createManyUcDocs = {
    schema: {
        description: 'Create multiplos UCs',
        tags: ['uc'],
        body: {
            type: 'object',
            properties: {
                id: { type: 'string' },
                data: {
                    type: 'array',
                    items: {
                        type: 'object',
                        properties: {
                            active: { type: 'boolean' },
                            dateInit: { type: 'string' },
                            concessionaire: { type: 'string' },
                            uf: { type: 'string' },
                            numInstallation: { type: 'number' },
                            numClient: { type: 'number' },
                            company: { type: 'string' },
                            unitDescription: { type: 'string' },
                            type: { type: 'string' },
                            modality: { type: 'string' },
                            isRural: { type: 'boolean' },
                            orgType: { type: 'string' },
                            licenseType: { type: 'string' },
                            personCode: { type: 'string' },
                            email: { type: 'string' },
                            password: { type: 'string' },
                        },
                    }
                }
            },
            required: ['id', 'data']
        }
    }
};


export const listUcDocs = {
    schema: {
        description: 'Lista UCs',
        tags: ['uc'],
        body: {}
      
    }
};


