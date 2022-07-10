import * as React from 'react';
import { TableHead, TableBody, TableRow, TableContainer, TableCell, Table, Box, Button, Paper } from '@mui/material';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useTheme } from '@mui/material/styles';
import moment from 'moment';


function createData(name, value) {
    return { name, value };
};

function createTableData(time, num,text,code) {
    return { time, num,text,code };
};
const rows = [
    createData('產品', '蝦皮'),
    createData('手機號', '0911112345')
];

const textrows = [
    createTableData(`${moment('2022-06-25 15:30:00').format('D/MM/YYYY')}`,'202201110011','code:0432422','1'),
    createTableData(`${moment('2022-06-25 15:30:00').format('D/MM/YYYY')}`,'202201110011','code:0432422','1'),
]; 
const GetCode = (props) => {
    const theme = useTheme();
    return (
        <>
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
          
        </Container>
        <Container>
              <Box >
                <Typography variant="subtitle1" color="text.primary" align="center" sx={{ my: 2 }}>
                    簡訊內容：
                </Typography>
                <TableContainer component={Paper} borderRadius="8px" align="center">
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell align="center" sx={{ color: theme.palette.primary.main, fontWeight: 'bold' }}>時間</TableCell>
                                <TableCell align="center" sx={{ color: theme.palette.primary.main, fontWeight: 'bold' }}>訂單編號</TableCell>
                                <TableCell align="center" sx={{ color: theme.palette.primary.main, fontWeight: 'bold' }}>簡訊內容</TableCell>
                                <TableCell align="center" sx={{ color: theme.palette.primary.main, fontWeight: 'bold' }}>文字複製</TableCell>
                                <TableCell align="center" sx={{ color: theme.palette.primary.main, fontWeight: 'bold' }}>使用點數</TableCell>
                                <TableCell align="center" sx={{ color: theme.palette.primary.main, fontWeight: 'bold' }}>回報錯誤</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {/* time, num,text,cod */}
                            {textrows.map((row) => (
                                <TableRow
                                    hover
                                    key={row.name}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                    <TableCell align="center" scope="row">
                                        {row.time}
                                    </TableCell>
                                    <TableCell align="center">{row.num}</TableCell>
                                    <TableCell align="center">{row.text}</TableCell>
                                    <TableCell align="center">
                                        <Button variant="outlined">文字複製</Button>
                                    </TableCell>
                                    <TableCell align="center">{row.code}</TableCell>
                                    <TableCell align="center">
                                        <Button variant="outlined">回報錯誤</Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
            <Box textAlign="center">
                <Box component="p" color={theme.palette.primary.main}>本次使用2點,剩餘98點</Box>
                <Button variant="contained" sx={{mb:2}}>完成</Button>
            </Box>
        </Container>
        </>
    )
};

export default GetCode;
