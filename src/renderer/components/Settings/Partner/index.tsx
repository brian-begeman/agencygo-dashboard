import { Box, Typography } from '@mui/material';
import partnerImg from '../../../assets/png/Frame 97.png'
import styles from './styles.module.css';


function Partner() {
  return (
    <Box sx={{ textAlign: 'center', marginTop: '150px' }}>
      <Typography fontWeight={700} fontSize="53px" sx={{ color: '#fff' }}>
        AgencyGO
      </Typography>
      <img src={partnerImg}  className={styles.creatorImg} />
     
    </Box>
  );
}

export default Partner;
