import { Button, CardMedia, Divider, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Link from "next/link";

import tShirtBG from "../../public/images/tshirts.png";
import hoodiesBG from "../../public/images/hoodies.png";
import jeansBG from "../../public/images/jeans.png";
import shoesBG from "../../public/images/shoes.png";
import sweatersBG from "../../public/images/sweaters.png";
import sweatpantsBG from "../../public/images/sweatpants.png";

import { useState } from "react";
import axios from "axios";

export default function useCreateOrderCards(orders) {
  const [showAlert, setShowAlert] = useState(false);

  // cancel order handler
  const handleOrderButton = async (index) => {
    console.log(index);
    try {
      await axios.patch("/api/protected/updateOrder", {
        data: { orderNumber: orders[index].orderNumber },
      });
      setTimeout(() => location.reload(), 1000);
    } catch (error) {
      if (error.response.data === "unauthorized") {
        return (window.location = "/auth");
      }
      console.log(error);
    }
  };

  // decide image for order item
  function itemImage(category) {
    switch (category) {
      case "shirt":
        return tShirtBG.src;

      case "sweater":
        return sweatersBG.src;

      case "hoodie":
        return hoodiesBG.src;

      case "sweatpants":
        return sweatpantsBG.src;

      case "jeans":
        return jeansBG.src;

      case "shoe":
        return shoesBG.src;
    }
  }

  const createOrderCards = () => {
    // temp arr to hold cards
    let activeCards = [];
    let cancelledCards = [];

    for (let i = 0; i < orders.length; i++) {
      // first create order details
      const orderDetails = orders[i].orderDetails.map((orderDetail) => (
        <li key={orderDetail.productId} style={{ listStyle: "none", display: "flex" }}>
          <Box display="flex" width="75%" justifyContent="start" gap="12px">
            <Box width="7rem">
              <CardMedia component="img" image={itemImage(orderDetail.productInfo.category)} />
            </Box>
            <Link href={`/products/${orderDetail.productId}`} style={{ textDecoration: "none" }}>
              {orderDetail.productInfo.title}
            </Link>
          </Box>
          <Box display="flex" width="25%" flexDirection="column" alignItems="flex-end">
            <Typography fontWeight="bold">${Number(orderDetail.unitPrice).toFixed(2)}</Typography>
            <Typography>Quantity: {orderDetail.quantity}</Typography>
          </Box>
        </li>
      ));

      //place all unitPrices in arr
      const unitPriceArr = orders[i].orderDetails.map((orderDetail) =>
        Number(orderDetail.unitPrice)
      );

      //order total price
      const orderTotal = unitPriceArr.reduce((totalPrice, priceOfProd) => totalPrice + priceOfProd);

      if (orders[i].orderStatus === "Active") {
        activeCards.push(
          <Grid item xs={12} width="50%" display="flex" flexDirection="column" m="5px" gap="10px">
            <Box display="flex" justifyContent="space-between">
              <Typography variant="h4">Order #{orders[i].orderNumber}</Typography>
              <Box display="flex" flexDirection="column" alignItems="flex-end">
                <Typography>Ordered: {orders[i].createdAt.substring(0, 10)}</Typography>
                <Typography>Order Status: {orders[i].orderStatus}</Typography>
              </Box>
            </Box>
            <Box display="flex" flexDirection="column" gap="12px">
              {orderDetails}
            </Box>
            <Box display="flex" justifyContent="space-between" alignItems="center">
              <Button variant="contained" onClick={() => handleOrderButton(i)}>
                Cancel Order
              </Button>
              <Typography fontWeight="bold">TOTAL: ${orderTotal}</Typography>
            </Box>
            <Divider />
          </Grid>
        );
      } else {
        cancelledCards.push(
          <Grid item xs={12} width="50%" display="flex" flexDirection="column" m="5px" gap="10px">
            <Box display="flex" justifyContent="space-between">
              <Typography variant="h4">Order #{orders[i].orderNumber}</Typography>
              <Box display="flex" flexDirection="column" alignItems="flex-end">
                <Typography>Ordered: {orders[i].createdAt.substring(0, 10)}</Typography>
                <Typography>Order Status: {orders[i].orderStatus}</Typography>
              </Box>
            </Box>
            <Box display="flex" flexDirection="column" gap="12px">
              {orderDetails}
            </Box>
            <Box display="flex" justifyContent="space-between" alignItems="center">
              <Button variant="contained" onClick={() => handleOrderButton(i)}>
                Reinstate Order
              </Button>
              <Typography fontWeight="bold">TOTAL: ${orderTotal}</Typography>
            </Box>
            <Divider />
          </Grid>
        );
      }
    }
    return { activeCards, cancelledCards };
  };

  const orderCards = createOrderCards();

  return orderCards;
}
