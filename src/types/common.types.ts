export interface IInputFields{
    required: boolean,
    maxLength: number,
    minLength: number
}
export interface IInputProps {
    controller:string,
    label:string,
    type:string,
    fields:IInputFields,
    errors:any,
    register: (controller: string, fields: IInputFields) => {},
}
export interface ISnackBarProps {
    open?: boolean;
    alertMessage?: string;
    setOpen?: any;
    isError?: boolean;
};
export interface IModal {
    Title : string,
    component : any,
    onClose: any
}