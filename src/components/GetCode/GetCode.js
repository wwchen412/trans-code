import * as React from 'react';
import { TableHead, TableBody, TableRow, TableContainer, TableCell, Table, Box, Button } from '@mui/material';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useTheme } from '@mui/material/styles';


function createData(name, value) {
    return { name, value };
};

const rows = [
    createData('日期-時間', 159),
    createData('產品', '蝦皮'),
    createData('點數', 2),
    createData('手機號', '0911112345')
];
const GetCode = (props) => {
    const theme = useTheme();
    return (
        <Container maxWidth="sm">
            <Box>
                <Typography variant="h4" color="text.primary" align="center" sx={{ mt: 3,mb:2 }}>接碼服務</Typography>
                <Typography variant="subtitle1" color="text.secondary" align="center" sx={{ mb: 2 }}>訂單編號: 202111210008</Typography>

                <TableContainer sx={{ border: `1px solid ${theme.palette.grey[300]}`, borderRadius: '8px', background: '#fff' }} >

                    <Table aria-label="simple table">
                        <TableHead></TableHead>
                        <TableBody>
                            {rows.map((row,index) => (
                                <TableRow
                                    key={row.name}
                                    sx={{ '&:last-child td, &:last-child th': { borderBottom: 0 } }}
                                >
                                    <TableCell component="th" align="center" scope="row" sx={{ color: theme.palette.primary.main }}>
                                        {row.name}
                                    </TableCell>
                                    <TableCell align="center" sx={{ borderLeft: `1px solid ${theme.palette.grey[300]}` }}>
                                        {row.value}
                                        { (index === (rows.length -1)) &&
                                        < Button variant="outlined" sx={{ml: 2}}>複製</Button>
                                        }
                                    </TableCell>
                                </TableRow>
                            ))}
                        </ TableBody>
                    </Table>
                </TableContainer>
                <Typography variant="body2" color="text.secondary" align="center" sx={{ my: 2 }}>
                    完成註冊手機號後,請等待簡訊內容接收,確認收到簡訊後再離開此頁面,若超過3分鐘未收到簡訊,也可以按回報錯誤後離開。
                </Typography>
            </Box>
            <Box >
                <Typography variant="subtitle1" color="text.primary" align="center" sx={{ my: 2 }}>
                    簡訊內容：
                </Typography>
                <Box sx={{ border: `1px solid ${theme.palette.grey[300]}`, padding: '1rem', background: '#fff'}} borderRadius="8px">
                    <Box component="p">code:322134</Box>
                    <Box display="flex" justifyContent="center">
                        <Button variant="outlined" sx={{mr: 2}}>複製內容</Button>
                        <Button variant="outlined">回報錯誤</Button>
                    </Box>
                </Box>
            </Box>
            <Box textAlign="center">
                <Box component="p" color={theme.palette.primary.main}>本次使用2點,剩餘98點</Box>
                <Button variant="contained">完成</Button>
            </Box>
        </Container>
    )
};

export default GetCode;
