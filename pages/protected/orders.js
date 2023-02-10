import { Divider, Grid, Typography } from '@mui/material';
import axios from 'axios';
import useCreateOrderCards from '../../components/customHooks/useCreateOrderCards';
import utilStyles from '../../styles/utils.module.css';

export const getServerSideProps = async (ctx) => {
  const res = await axios.get('http://localhost:8080/api/orders', {
    data: { cookies: ctx.req.cookies },
  });
  const data = res.data;

  return {
    props: { orders: data },
  };
};

export default function Orders({ orders }) {
  // have auth functionality connected to seeing your order and checking out. No checkout page, just a checkout button that checks session auth, if no auth, redirect to auth.

  // cancel order is a delete request, have an ARE YOU SURE button. cancel multiple orders functionality?

  const orderCards = useCreateOrderCards(orders);

  return (
    <Grid container spacing={2}>
      <Grid item sm={12}>
        <Typography variant="h2" className={utilStyles.h2}>
          Orders
        </Typography>
        <Divider />
      </Grid>
      <Grid container spacing={2}>
        {orderCards.activeCards}

        {orderCards.cancelledCards}
      </Grid>
    </Grid>
  );
}
