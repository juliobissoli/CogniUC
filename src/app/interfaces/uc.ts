export interface Uc {
    id: string;
    initialValidity: string;
    concessionaire: string;
    state: string;
    unitNumberInstallation1: number;
    unitNumberInstallation2: number;
    clientNumber: number;
    company: string;
    unitDescription: string;
    type: string;
    modality: string;
    isRuralClient: boolean;
    concessionaireLogin: {
        taxId: string;
        email: string;
        password: string;
    };
}
