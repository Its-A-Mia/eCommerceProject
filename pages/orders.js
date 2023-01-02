import PrimaryLayout from "../components/PrimaryLayout";

export default function Orders(props) {
  // have auth functionality connected to seeing your order and checking out. No checkout page, just a checkout button that checks session auth, if no auth, redirect to auth.

  // cancel order is a delete request, have an ARE YOU SURE button. cancel multiple orders functionality?

  return (
    <>
      <h1>Order Page</h1>
    </>
  );
}

// Orders.getLayout = function getLayout(page, cookies) {
//   return <PrimaryLayout>{page}</PrimaryLayout>;
// };

// Orders.getInitialProps = async (ctx) => {
//   console.log(ctx);
//   const cookies = ctx.req.cookies;
//   return {
//     props: {
//       cookies,
//     },
//   };
// };
