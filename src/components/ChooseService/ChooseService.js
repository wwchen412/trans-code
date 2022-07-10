import * as React from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Button } from '@mui/material';



const GetCode = (props) => {
    return (
        <Container maxWidth="md" align="center" component={Paper} sx={{p:2,mt:3}}>
            <Typography variant="h4" align="center" sx={{m:3}}>選擇服務</Typography>
            <p>會員帳號： aa122</p>
            <Button variant="outlined" sx={{m:2}}>蝦皮(2點)</Button>
            <Button variant="outlined" sx={{m:2}}>Uber(2點)</Button>
            <Button variant="outlined" sx={{m:2}}>Google(2點)</Button>
            <Button variant="outlined" sx={{m:2}}>Line(2點)</Button>
            <Button variant="outlined" sx={{m:2}}>Foodpanda(2點)</Button>
        </Container>
    )
};

export default GetCode;
