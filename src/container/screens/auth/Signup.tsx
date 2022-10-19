import React, {useState} from 'react'
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import {
    Box,
    Button,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Container,
    Divider,
    Grid,
    Paper,
    Stack,
    TextField,
    Typography,
  } from "@mui/material";
  import Checkbox from '@mui/material/Checkbox';

  import BackgroundImage from "../../../assets/image/background-image-auth.png";
import AppLogo from "../../../assets/image/infrablok-logo.png";
import GoogleButton from "../../../assets/image/google-button.png";
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
const SignupScreen = () => {
    const navigate = useNavigate()
 const [email ,setEmail] = useState('')
 const [password ,setPassword] = useState('')
 const [confirmPassword ,setConfirmPassword] = useState('')
 const [errorMessage,setErrorMessage] = useState('')
 const [emailErrorMessage,setEmailErrorMessage] = useState('')
 const [confirmPasswordErrorMessage,setConfirmPasswordEmailErrorMessage] = useState('')
 const [isRequired,setIsRequired] = useState('')
 const [error ,setError] = useState(false)
 const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const styles = {
        flex: 1,
        paperContainer: {
          backgroundImage: `url(${BackgroundImage})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          width: "100vw",
          height: "100vh",
        },
      };
     
      function validateEmail(email:string) {
        var re = /\S+@\S+\.\S+/;
        // console.log(re.test(email));
        
        return re.test(email);
      }
      const signup = ()=>{
        // console.log(email);
        // console.log(password);
        // console.log(confirmPassword);
validateEmail(email);
if(!validateEmail(email)){
  setEmailErrorMessage('Please Enter Valid Email')
}
        if(!email  ){
       
            setEmailErrorMessage('Email is Required')
        
            setError(true)
        }
          if(!confirmPassword){
          setConfirmPasswordEmailErrorMessage('Confirm Password is Required')
          setError(true)
        }
         if(!password){
        setErrorMessage(' Password is Required')
        if(!confirmPassword){
          setConfirmPasswordEmailErrorMessage('Confirm Password is Required')
          // setError(true)
        }
          setError(true)
        }
       

     else    if(password.length<8 && confirmPassword.length <8){
            setErrorMessage('Password length should be greater than 8 ')
            setEmailErrorMessage('');
            setConfirmPasswordEmailErrorMessage('')
            setError(true)
        }
        else if(password.length>=8 && confirmPassword.length >=8){
          setEmailErrorMessage('');
          setConfirmPasswordEmailErrorMessage('')
            setErrorMessage('')
            setError(false)
        }
      
        // else if (!password.match('/[a-z]/g'))
        // {
        //     setErrorMessage('Please Enter atleast lowerCase letter')
        //     setError(true)
        // }
        // else if (!password.match(/[A-Z]/g))
        // {
        //     setErrorMessage('Please Enter atleast upperCase letter')
        //     setError(true)
        // }
        // else if (!password.match(/[0-9]/g))sdd
        // {
        //     setErrorMessage('Please Enter atleast  one digit')
        //     setError(true);
        // }
      }
  return (

    <Paper style={styles.paperContainer}>
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      style={{ minHeight: "100vh" }}
    >
      <Grid item xs={3} style={{ backgroundColor: "white", padding: 20 }}>
        <Grid item xs={3}>
          <CardMedia
            component="img"
            sx={{
              height: "41px",
              width: "200px",
            }}
            image={AppLogo}
            alt="green iguana"
            onClick={() => alert("hi")}
          />
        </Grid>
        <Typography
          sx={{
            marginTop: 1.5,
            fontWeight: "bold",
            fontSize: "22px",
            lineHeight: "48px",
          }}
        >
          Create New Account{" "}
        </Typography>
        {/* <Grid>
          <CardMedia
            component="img"
            sx={{
              height: 36,
              cursor: "pointer",
              marginTop: 1.5,
            }}
            image={GoogleButton}
            alt="green iguana"
            //   onClick={() => alert("hi")}
          />
        </Grid> */}
        {/* <Divider sx={{ marginTop: 2 }} orientation="horizontal">
          <Typography sx={{ fontSize: 10, color: "#425466" }}>or</Typography>
        </Divider> */}

     
            <>
        <div>
            
          <TextField
            required
            id="outlined-required"
            label="Email"
            error={error}
            helperText={emailErrorMessage}
            onChange={(e) => 
                {setEmail(e.target.value);
                }}
            defaultValue=""
            inputProps={{  pattern: '/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,15}$/' }}
            // {...register("email",{required:true,pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/})}
            sx={{ marginTop: 2, width: 325 }}
          />
        </div>
        {errors.email && <p>Please enter Valid Information</p>}
        <div>
          <TextField
          required
          type='password'
          error = {error}
          helperText={errorMessage}
              onChange={(e) => 
                {setPassword(e.target.value);
               
               
                }}
                inputProps={{  pattern: '/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,15}$/' }}
            id="outlined-required"
            label=" Create Password"
            defaultValue=""
            
            sx={{ marginTop: 2, width: 325 }}

          
          />
        </div>
        {errors.password && <p>Please enter Valid Information</p>}
        <div>
          <TextField
          required
          type='password'
          autoFocus={true}
          error = {error}
          inputProps={{ pattern: '/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,15}$/' }}
          helperText={confirmPasswordErrorMessage}
    //    errorText= {errors.confirmPassword && <p>Please enter Valid Information</p>}
    
            id="outlined-required"
            label=" Confirm Password"
            defaultValue=""
            
            onChange={(e) => 
                {setConfirmPassword(e.target.value);
                }}
            // {...register("confirmPassword",{required:true, pattern:/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,15}$/})}
            sx={{ marginTop: 2, width: 325 }}
            
            />
        </div>
        {errors.confirmPassword && <p>Please enter Valid Information</p>}
        <div style={{display:"inline"}}>
        <Checkbox {...label} defaultChecked />
         I accept the <a href="">Term and conditions</a> and <a href="">Privacy policy</a> 
        </div>
      
        <Stack display={'flex'} alignItems={'center'} marginTop={2}>
          <Button fullWidth variant="contained" disableElevation onClick={signup}>
            Signup
          </Button>
        </Stack>
        </>
       
        <p>Already have an account? <a  onClick={()=>navigate('/')} style={{textDecoration:'underline'}} > Login</a> </p>
      </Grid>
    </Grid>
  </Paper>
);
}

export default SignupScreen