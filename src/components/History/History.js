import React, { useState } from 'react';
import {
    TableHead, TableBody, TableRow, TableContainer, TableCell,
    Table, Box, Paper, Button, styled, Modal, TextField, Divider
} from '@mui/material';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useTheme } from '@mui/material/styles';
import moment from 'moment';


function createData(time, number, product, spentPoint, point, note,success) {
    return { time, number, product, spentPoint, point, note ,success};
};

const rows = [
    createData('3/15/2022', 'L232329832', '蝦皮', -2, 65, '',true),
    createData('aa323111', '阿明', 65, 43, 2),
];
const Item = styled(Button)(({ theme }) => ({
    // backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    // margin: '1rem .5rem'
}));

const History = (props) => {
    const theme = useTheme();
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const modalBoxStyle = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        maxWidth: 650,
        width: '100%',
        bgcolor: '#fff',
        boxShadow: 24,
        p: 3,
        m: 'auto',
        borderRadius: 2
    };

    return (
        <>
            <Container maxWidth="md">
                <Box>
                    <Box sx={{ position: 'relative' }}>
                        <Typography variant="h4" color="text.primary" align="center" sx={{ mt: 3, mb: 2 }}>交易紀錄管理</Typography>
                        <Typography variant='subtitle1' align="center" color="text.secondray">
                            會員帳號:aa111 剩餘點數:65
                        </Typography>
                        <Button
                            onClick={handleOpen}
                            variant="outlined" sx={{ position: 'absolute', right: '0', top: '50%', transform: 'translateY(-50%)' }}>
                            點數設定
                        </Button>
                    </Box>
                    <Typography variant="h6" color="text.secondray" sx={{ mb: 2 }}>
                        點數變動紀錄
                    </Typography>
                    <TableContainer component={Paper} borderRadius="8px" align="center">
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell align="center" sx={{ color: theme.palette.primary.main, fontWeight: 'bold' }}>日期-時間</TableCell>
                                    <TableCell align="center" sx={{ color: theme.palette.primary.main, fontWeight: 'bold' }}>訂單編號</TableCell>
                                    <TableCell align="center" sx={{ color: theme.palette.primary.main, fontWeight: 'bold' }}>產品</TableCell>
                                    <TableCell align="center" sx={{ color: theme.palette.primary.main, fontWeight: 'bold' }}>點數變動</TableCell>
                                    <TableCell align="center" sx={{ color: theme.palette.primary.main, fontWeight: 'bold' }}>可用點數餘額</TableCell>
                                    <TableCell align="center" sx={{ color: theme.palette.primary.main, fontWeight: 'bold' }}>備註</TableCell>
                                    <TableCell align="center" sx={{ color: theme.palette.primary.main, fontWeight: 'bold' }}></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows.map((row) => (
                                    <TableRow
                                        hover
                                        key={row.name}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        {/* time, number, product, spentPoint,point, note */}
                                        <TableCell align="center" scope="row">
                                            {row.time}
                                        </TableCell>
                                        <TableCell align="center">{row.number}</TableCell>
                                        <TableCell align="center">{row.product}</TableCell>
                                        <TableCell align="center">{row.spentPoint}</TableCell>
                                        <TableCell align="center">{row.point}</TableCell>
                                        <TableCell align="center">{row.note}</TableCell>
                                        {row.success &&
                                        <TableCell align="center">
                                        <Button variant="outlined">簡訊內容</Button>
                                    </TableCell>
                                    }
                                        
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Box>
            </Container>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={{ ...modalBoxStyle }}>
                    <Typography id="modal-modal-title" variant="h5" textAlign="center" sx={{mb:2}}>
                        點數設定
                    </Typography>
                    <Typography variant='subtitle1' color="text.secondray" textAlign="center">
                        會員帳號:aa111 剩餘點數:65
                    </Typography>
                    <Divider />
                    <Box id="modal-modal-description" sx={{ mt: 2 }}>
                        <Box sx={{ mb: 2 }} textAlign="center">
                            <Box sx={{ display: 'inline-block', width: '80px' }}>增加/扣除:</Box>
                            <TextField
                                id="outlined-number"
                                type="number"
                                sx={{ ml: 2 }}
                            />

                        </Box>
                        <Box textAlign="center">
                            <Box sx={{ display: 'inline-block', width: '80px' }} >備註:</Box>

                            <TextField
                                placeholder=""
                                multiline
                                rows={2}
                                maxRows={4}
                                sx={{ ml: 2 }}
                            />

                        </Box>
                    </Box>
                    <Box textAlign="center" sx={{my:1.5}}>
                        <Button variant="outlined" sx={{mx:1}}>取消</Button>
                        <Button variant="contained" sx={{mx:1}}>送出</Button>
                    </Box>
                    
                </Box>
                
            </Modal>
        </>
    )
};

export default History;
