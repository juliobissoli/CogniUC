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
        active: !!!data.active,
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

export const listConcessionaireAvailable = [
    'Amazonas Energia',
    'CELESC-SC',
    'CELPE',
    'CEMAR - Companhia Energética do Maranhão',
    'CEMIG',
    'COPEL',
    'CPFL Paulista',
    'CPFL Piratininga',
    'CPFL RGE',
    'CPFL Santa Cruz',
    'DMED',
    'EDP ES',
    'EDP SP',
    'ELFSM',
    'Enel CE',
    'Enel RJ',
    'Enel SP',
    'Energisa AC',
    'Energisa PB',
    'Energisa Minas-Rio',
    'Energisa MS',
    'Energisa MT',
    'Energisa PB',
    'Energisa RO',
    'Energisa SE',
    'Energisa Sul Sudeste',
    'Energisa TO',
    'Equatorial AL',
    'Equatorial CEA AP',
    'CEEE - RS',
    'Equatorial GO',
    'Equatorial MA',
    'Equatorial PA',
    'Equatorial PI',
    'Light',
    'Neoenergia Brasília',
    'Neoenergia COELBA',
    'Neoenergia RN',
    'Neoenergia Elektro',
    'Neoenergia Elektro',
    'Neoenergia PE',
    'Roraima Energia',
    'Sulgipe',
    'Energisa SP'
]
export const listUfAvailable = [
    'AC',
    'AL',
    'AP',
    'AM',
    'BA',
    'CE',
    'DF',
    'ES',
    'GO',
    'MA',
    'MT',
    'MS',
    'MG',
    'PA',
    'PB',
    'PR',
    'PE',
    'PI',
    'RJ',
    'RN',
    'RS',
    'RO',
    'RR',
    'SC',
    'SP',
    'SE',
    'TO'
]

export const listModalityAvailable = [
    'A1',
    'A2',
    'A3',
    'A3a',
    'A4',
    'A optante B',
    'AS',
    'B1',
    'B2',
    'B3',
    'B3 Branca',
    'B4'
]

export const listOrgTypeAvailable = [
    'Associação',
    'Consórcio',
    'Cooperativa',
    'Autoconsumo'
];

export const listInstallTypeAvailable = [
    'Monofásico',
    'Bifásico',
    'Trifásico'
];



export const ucTypesAvailable = [
    'Consumidor',
    'Geradora',
]