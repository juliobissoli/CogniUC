export interface Uc {
    id: string;
    active: boolean,
    dateInit: Date; // Vigência inicial;
    concessionaire: string // Concessionária;
    uf: string // UF;
    numInstallation: number;// numero unidade/Instalação;
    numClient: number; // numero cliente;
    company: string; // Empresa;
    unitDescription: string// Descrição da unidade;
    type: string;  // Tipo;
    modality: string;   // Modalidade;
    isRural: boolean;   // É cliente rural;
    orgType: string;  // Tipo de organização;
    licenseType: string;// Tipo de ligação;
    personCode: string;// CPF/CNPJ;
    email: string;// E-mail;
    password: string;// Senha;
}

export const sanitizeUc = (data: any) => {
    const newData: Uc = {
        id: data?.id ?? new Date().getTime().toString(),
        dateInit: new Date(data?.dateInit ?? ''),
        active: data?.active || true,
        concessionaire: data?.concessionaire ??  '',
        uf: data?.uf ?? '',
        numInstallation: parseInt(data?.numInstallation ?? '0'),
        numClient:  parseInt(data?.numClient ?? '0'),
        company: data?.company ?? '',
        unitDescription: data?.unitDescription  ?? '',
        type: data?.type ?? '',
        modality: data?.modality  ?? '',
        isRural: data?.isRural === 'Sim',
        orgType: data?.orgType ?? '',
        licenseType: data?.licenseType ?? '',
        personCode: data?.personCode  ?? '',
        email: data?.email ??  '',
        password: data?.password ?? '',
    }

    return newData
}

export interface UcRepository {
    create(data: any): Promise<Uc>
    createMany(data: Array<any>): Promise<string>
    getList():  Promise<Array<Uc>>
    getById(id: string): Promise<Uc | null>
    update(id: string, data: any): Promise<Uc | null>
    delete(id: string): Promise<boolean>
}