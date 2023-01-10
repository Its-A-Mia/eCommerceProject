import { Divider, Grid, Typography, Box } from "@mui/material";
import { useState } from "react";

import eShopAvatar from "../../public/images/eShopAvatar.png";
import axios from "axios";
import Image from "next/image";
import profileStyles from "../../styles/profile.module.css";
import Link from "next/link";
import PersonalInformation from "../../components/PersonalInformation";
import AccountSecurity from "../../components/AccountSecurity";

// grab user information
export const getServerSideProps = async (ctx) => {
  const res = await axios.get("http://localhost:3000/api/user", {
    data: { cookies: ctx.req.cookies },
  });
  const data = res.data;
  return {
    props: { user: data },
  };
};

export default function Profile({ user }) {
  // States for menu categories
  const [profileCategory, setProfileCategory] = useState("Personal Information");

  const handleClick = (category) => {
    setProfileCategory(category);
  };

  return (
    <>
      <Grid container spacing={3}>
        <Grid item md={3} display="flex" flexDirection="column" alignItems="center">
          <Image src={eShopAvatar.src} alt="default profile avatar" width={200} height={200} />
          <Box display="flex" flexDirection="column" alignItems="center">
            <Typography
              component="button"
              onClick={() => handleClick("Personal Information")}
              className={
                profileCategory === "Personal Information"
                  ? profileStyles.buttonSelected
                  : profileStyles.button
              }
            >
              Personal Information
            </Typography>
            <Typography
              component="button"
              onClick={() => handleClick("Account Security")}
              className={
                profileCategory === "Account Security"
                  ? profileStyles.buttonSelected
                  : profileStyles.button
              }
            >
              Account Security
            </Typography>
            <Divider sx={{ width: "100%", paddingBottom: "8px" }} />
            <Link
              href="/protected/orders"
              style={{ color: "#446CA1", textDecoration: "none", paddingTop: "5px" }}
            >
              Your Orders
            </Link>
          </Box>
        </Grid>
        <Grid item md={9}>
          <Box width="100%">
            <Typography variant="h3" sx={{ p: "0 0 20px 0" }}>
              Hi, {user.name}
            </Typography>
          </Box>
          {profileCategory === "Personal Information" ? <PersonalInformation /> : null}
          {profileCategory === "Account Security" ? <AccountSecurity /> : null}
        </Grid>
      </Grid>
    </>
  );
}
