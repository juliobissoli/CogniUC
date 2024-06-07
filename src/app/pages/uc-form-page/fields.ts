import {
    listConcessionaireAvailable,
    listInstallTypeAvailable,
    listModalityAvailable,
    listOrgTypeAvailable,
    listUfAvailable,
    ucTypesAvailable
} from '../../interfaces/uc';


export const ucFormFields = [

    {
        type: 'date',
        options: undefined,
        line: 0,
        required: true,
        entity: 'dateInit',
        label: 'Vigência inicial'
    },
    {
        type: 'text',
        options: listConcessionaireAvailable,
        line: 1,
        required: true,
        entity: 'concessionaire',
        label: 'Concessionária'
    },
    {
        type: 'text',
        options: listUfAvailable,
        line: 1,
        required: true,
        entity: 'uf',
        label: 'UF'
    },
    {
        type: 'number',
        options: undefined,
        line: 1,
        required: true,
        entity: 'numInstallation',
        label: 'numero unidade/Instalação'
    },
    {
        type: 'number',
        options: undefined,
        line: 1,
        required: true,
        entity: 'numClient',
        label: 'numero cliente'
    },
    {
        type: 'text',
        options: undefined,
        line: 2,
        required: true,
        entity: 'company',
        label: 'Empresa'
    },
    {
        type: 'text',
        options: undefined,
        line: 2,
        required: true,
        entity: 'unitDescription',
        label: 'Descrição da unidade'
    },
    {
        type: 'text',
        options: ucTypesAvailable,
        line: 2,
        required: true,
        entity: 'type',
        label: 'Tipo'
    },
    {
        type: 'text',
        options: listModalityAvailable,
        line: 2,
        required: true,
        entity: 'modality',
        label: 'Modalidade'
    },
    {
        type: 'text',
        options: ['Sim', 'Não'],
        line: 2,
        required: true,
        entity: 'isRural',
        label: 'É cliente rural'
    },
    {
        type: 'text',
        options: listOrgTypeAvailable,
        line: 3,
        required: true,
        entity: 'orgType',
        label: 'Tipo de organização'
    },
    {
        type: 'text',
        options: listInstallTypeAvailable,
        line: 3,
        required: true,
        entity: 'licenseType',
        label: 'Tipo de ligação'
    },
    {
        type: 'text',
        options: undefined,
        line: 4,
        required: true,
        entity: 'personCode',
        label: 'CPF/CNPJ'
    },
    {
        type: 'email',
        options: undefined,
        line: 4,
        required: true,
        entity: 'email',
        label: 'E-mail'
    },
    {
        type: 'password',
        options: undefined,
        line: 4,
        required: true,
        entity: 'password',
        label: 'Senha'
    },
]