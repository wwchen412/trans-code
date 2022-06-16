import * as React from 'react';
import { TableHead, TableBody, TableRow, TableContainer, TableCell, Table, Box, Paper, Checkbox, Button, Stack, styled, Divider  } from '@mui/material';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useTheme } from '@mui/material/styles';
import moment from 'moment';


function createData(account, name, points, uesdPoints, erroTimes) {
    return { account, name, points, uesdPoints, erroTimes };
};

const rows = [
    createData('aa111', '阿原', 65, 43, 2),
    createData('aa323111', '阿明', 65, 43, 2),
];
const Item = styled(Button)(({ theme }) => ({
    // backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    // margin: '1rem .5rem'
  }));

const Mange = (props) => {
    const theme = useTheme();
    return (
        <Container maxWidth="md">
            <Box>
                <Box sx={{ position: 'relative' }}>
                    <Typography variant="h4" color="text.primary" align="center" sx={{ mt: 3, mb: 2 }}>帳號管理</Typography>
                    <Button variant="outlined" sx={{ position: 'absolute', right: '0', top: '50%', transform: 'translateY(-50%)' }}>新增帳號</Button>
                </Box>
                <Box flexItem="row" display={"flex"} justifyContent="flex-end">
                    <Stack direction="row" divider={<Divider orientation="vertical" variant="middle" flexItem/>}  mb={2} >
                        <Item>修改帳號內容</Item>
                        <Item>交易紀錄與點數管理</Item>
                        <Item>重置密碼</Item>
                        <Item>刪除</Item>
                    </Stack>
                </Box>
                <TableContainer component={Paper} borderRadius="8px" align="center">
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell align="center"></TableCell>
                                <TableCell align="center" sx={{ color: theme.palette.primary.main, fontWeight: 'bold' }}>帳號</TableCell>
                                <TableCell align="center" sx={{ color: theme.palette.primary.main, fontWeight: 'bold' }}>暱稱</TableCell>
                                <TableCell align="center" sx={{ color: theme.palette.primary.main, fontWeight: 'bold' }}>可用點數</TableCell>
                                <TableCell align="center" sx={{ color: theme.palette.primary.main, fontWeight: 'bold' }}>已使用點數</TableCell>
                                <TableCell align="center" sx={{ color: theme.palette.primary.main, fontWeight: 'bold' }}>回報錯誤次數</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                                <TableRow
                                    hover
                                    key={row.name}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell>
                                        <Checkbox></Checkbox>
                                    </TableCell>
                                    <TableCell align="center" scope="row">
                                        {row.account}
                                    </TableCell>
                                    <TableCell align="center">{row.account}</TableCell>
                                    <TableCell align="center">{row.points}</TableCell>
                                    <TableCell align="center">{row.uesdPoints}</TableCell>
                                    <TableCell align="center">{row.erroTimes}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
        </Container>
    )
};

export default Mange;
