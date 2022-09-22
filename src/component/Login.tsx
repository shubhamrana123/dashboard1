import React ,{useState} from 'react'
import { ICompany } from '../types/company.types'
import { ILoginProps } from '../types/login.types'
// import { IPhysician } from '../types/physician.type'
import ViewCard from './layout/card/Card'
import Input from './layout/form-controls/Input'
import QrCode from './Qrcode'
import { Modal } from '@material-ui/core'
import ResponsiveDialog from './layout/Modal'
import FormDialog from './layout/Modal'

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { ErrorSharp } from '@mui/icons-material'
import { useForm } from 'react-hook-form';
const Login = (props: ILoginProps) => {
  const {register,handleSubmit,getValues,formState:{errors}} = useForm<any>()
  const [loginModelVisibility,seLoginModelVisibility] = useState<boolean>(false);
  const [showList,setShowList] = useState<boolean>(false);
    const [formData,setFormData] = useState(null)
    const [open, setOpen] = React.useState(false);
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
  
    const handleClickOpen = (data:any) => {
        console.log(data);
      setOpen(true);
      setFormData(data)
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  
    const onLoginHandler = (data:any) => {
     // const companyDetails: ICompany = {
        //     Year: props.getValues('year'),
        //     Staff: props.getValues('staff')
        // }
     
console.log(data);
setFormData(data)

        // props.onLoginHandler(companyDetails);
    }
    const openModelHandler = ()=>
    {
  
      seLoginModelVisibility(true);
    }
    return (
        <>


<form onSubmit={props.handleSubmit(onLoginHandler)}>
                <div className="login-form-control">


                    <Input controller='yearFounded' type='text' label='Year Founded' register={register} errors={errors}
                        fields={{ required: true, minLength: 2, maxLength: 100 }}></Input> <br />
                        {/* {props.errors && <p>Please Provide Valid Information</p>} */}
                </div>
                <div className="login-form-control">
                    <Input controller='founder' type='text' label='Founder' register={props.register} errors={props.errors}
                        fields={{ required: true, minLength: 2, maxLength: 100 }}></Input>
                          {/* {props.errors && <p>Please Provide Valid Information</p>} */}
                </div>
                <div className="login-form-control">
                    <Input controller='ceo' type='text' label='Ceo' register={props.register} errors={props.errors}
                        fields={{ required: true, minLength: 2, maxLength: 100 }}></Input>
                          {/* {props.errors && <p>Please Provide Valid Information</p>} */}
                </div>
                <div className="login-form-control">
                    <Input controller='staff' type='text' label='staff' register={props.register} errors={props.errors}
                        fields={{ required: true, minLength: 2, maxLength: 100 }}></Input>
                          {/* {props.errors && <p>Please Provide Valid Information</p>} */}
                </div>
                <div className="login-form-control">
                    <Input controller='netSales' type='text' label='Net Sales' register={props.register} errors={props.errors}
                        fields={{ required: true, minLength: 2, maxLength: 100 }}></Input>
                          
                </div>
                <div className="login-form-control">
                    <Input controller='bestKnownFor' type='text' label='Best Known For' register={props.register} errors={props.errors}
                        fields={{ required: true, minLength: 2, maxLength: 100 }}></Input>
                        
                </div>
                {/* <QrCode formData= {formData}/> */}
                <div className="login-form-btn">
                    <button type='submit'  onClick={openModelHandler}>Submit</button>
                    {/* <ResponsiveDialog></ResponsiveDialog> */}
                    {loginModelVisibility && 
      <FormDialog 
          Title=''
          onClose={seLoginModelVisibility} 
          component={<QrCode formData= {formData}/>}/>}
                    {/* <Button variant="outlined" onClick={handleClickOpen}>
        Submit form
      </Button> */}
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
          {"Qr code"}
        </DialogTitle>
        <DialogContent>
        <QrCode formData= {formData}/>
        </DialogContent>
        <DialogActions>
          {/* <Button autoFocus onClick={handleClose}>
            Disagree
          </Button> */}
          <Button onClick={handleClose} autoFocus>
            Close
          </Button>
        </DialogActions>
      </Dialog>
                </div>

            </form>

            

        </>
    )
}

export default Login