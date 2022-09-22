import { ICompany } from "./company.types";


export interface ILoginProps {
    onLoginHandler: (CompanyInfo: ICompany) => void
    register: any
    errors: any
    getValues:any
    handleSubmit:any

}