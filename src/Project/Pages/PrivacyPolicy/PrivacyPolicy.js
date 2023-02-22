import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import {
  Box,
  Container,
  Grid,
  AppBar,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import Header from "../../Component/Header/Header";
import Footer from "../../Component/Footer/Footer";

const useStyle = makeStyles({
  wrap12: {
    padding: "3rem 0 2rem",
  },
  bag41: {
    color: "#000 !important",
    fontSize: "12px !important",
  },
  bag42: {
    margin: "2rem 0 1rem 0",
    "& p": {
      fontSize: "1rem",
    },
  },
  bag43:{
    marginTop:"1rem",
    "& h5":{
        margin: "13px 0", fontSize: "1rem", fontWeight: "bold"
    },
    "& h6":{
        fontSize: "1.6rem", fontWeight: "bold", margin: "3rem 0 0"
    },
  },
});

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}
const PrivacyPolicy = () => {
  const classes = useStyle();
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Header />
      <Box className={classes.wrap12}>
        <Container>
          <Grid container spacing={2}>
            <Grid item md={12}>
              <Box>
                <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                  <Tabs value={value} onChange={handleChange}>
                    <Tab
                      label="Binance Connect Privacy Policy"
                      className={classes.bag41}
                      {...a11yProps(0)}
                    />
                    <Tab
                      label="Binance Connect Digital Wallet Privacy Policy"
                      className={classes.bag41}
                      {...a11yProps(1)}
                    />
                  </Tabs>
                </Box>
                <TabPanel value={value} index={0}>
                  <Box className={classes.bag43}>
                    <Typography variant="h5">
                      Privacy Policy – Binance Connect
                    </Typography>
                    <Typography variant="h6">
                      Last updated: 10 November, 2022
                    </Typography>
                  </Box>
                  <Box className={classes.bag42}>
                    <p>
                      Please note that this privacy policy will regularly be
                      updated to reflect any changes in the way we handle your
                      personal data or any changes in applicable laws.
                    </p>
                  </Box>
                  <Box className={classes.bag42}>
                    <p>
                      This Privacy Policy describes how Binance Connect (“we”,
                      “us”, “our”, “ourselves”) collects and processes your
                      personal information (“you”, “your”) through the Binance
                      Connect websites and applications that reference this
                      Privacy Policy. By using the services provided by Binance
                      Connect (“Binance Connect Services”), you are consenting
                      to the collection, storage, processing and transfer of
                      your personal information as described in this Privacy
                      Policy. Binance Connect is a registered trademark of
                      Bifinity UAB.
                    </p>
                  </Box>
                  <Box className={classes.bag42}>
                    <p>
                      Bifinity UAB, (legal entity code: 305595206, registered
                      office address: Lvivo g. 25-104, Vilnius, Lithuania, the
                      Republic of Lithuania) is the Data Controller for personal
                      information collected and processed in connection with the
                      provision of Binance Connect Services.
                    </p>
                  </Box>
                  <Box className={classes.bag42}>
                    <p>
                      We firmly believe that where the above table states that
                      we rely on our legitimate interests for a given purpose,
                      this is not overridden by your interests, rights or
                      freedoms. Therefore, if you wish to obtain further
                      information on this balancing test approach, please
                      contact{" "}
                      <a href="mailto:dpo@bifinity.com.">dpo@bifinity.com.</a>
                    </p>
                  </Box>
                  <Box className={classes.bag42}>
                    <p>
                      We will not use your personal data for purposes that are
                      incompatible with the purposes of which you have been
                      informed, unless it is required or authorized by law, or
                      it is in your own vital interest (for example, in case of
                      a medical emergency) to do so.
                    </p>
                  </Box>
                  <Box className={classes.bag42}>
                    <Typography variant="h6">Sensitive Data</Typography>
                  </Box>
                  <Box className={classes.bag42}>
                    <p>
                      The term “sensitive data” refers to the various categories
                      of personal data identified by data privacy laws or
                      regulations as requiring special treatment, including in
                      some circumstances the need to obtain explicit consent
                      from you. These categories include racial or ethnic
                      origin, political opinions, religious, philosophical or
                      other similar beliefs, membership of a trade union,
                      physical or mental health, biometric or generic data,
                      sexual life or orientation, or criminal convictions and
                      offences (including information about suspected criminal
                      activities).
                    </p>
                  </Box>
                  <Box className={classes.bag42}>
                    <p>
                      Due to the type of services provided we might need to
                      process certain types of sensitive data. In the limited
                      cases where we do collect such data, we will do this in
                      accordance with data privacy laws and regulations and/or
                      ask for your consent.
                    </p>
                  </Box>

                  <Box className={classes.bag42}>
                    <Typography variant="h6">
                      2. What About Cookies and Other Identifiers?
                    </Typography>
                    <p>
                      We use cookies and similar tools to enhance your user
                      experience, provide our services, and understand how
                      customers use our services so we can make improvements,
                      for more information about how we use cookies please visit
                      our Cookie Policy. The cookie banner on your browser will
                      tell you how to accept or refuse cookies. For more
                      information on how you can update your cookie preference
                      please visit our <a href="">cookie preference centre.</a>
                    </p>
                  </Box>
                  <Box className={classes.bag42}>
                    <Typography variant="h6">
                      3. Does Binance Connect Share My Personal Information?
                    </Typography>
                    <p>
                      Information about our users is an important part of our
                      business and we are not in the business of selling our
                      users' personal information to others. Binance Connect
                      shares users' personal information and Sensitive Personal
                      Data only as described below and with the subsidiaries or
                      affiliates of Binance Connect that are either subject to
                      this Privacy Policy or follow practices at least as
                      protective as those described in this Privacy Policy.
                    </p>

                    <p>
                      Third party service providers: We employ other companies
                      and individuals to perform functions on our behalf.
                      Examples include analysing data, providing marketing
                      assistance, processing payments, transmitting content,
                      assessing and managing credit risk, and performing
                      identity verification and other KYC functions. These
                      third-party service providers have access to personal
                      information and Sensitive Personal Data needed to perform
                      their functions but may not use it for other purposes.
                      Further, they must process the personal information in
                      accordance with this Privacy Policy and as only permitted
                      by applicable data protection laws.
                    </p>

                    <p>
                      Business transfers: As we continue to develop our
                      business, we might sell or buy other businesses or
                      services. In such transactions, user information generally
                      is one of the transferred business assets but remains
                      subject to the promises made in any pre-existing Privacy
                      Policy. Also, in the unlikely event that Binance Connect
                      or substantially all of its assets are acquired, user
                      information will be one of the transferred assets.
                    </p>

                    <p>
                      Protection of Binance Connect and others: We release
                      account and other personal information when we believe
                      such release is appropriate to comply with the law or with
                      our regulatory obligations; enforce or apply our Terms of
                      Use and other agreements; or protect the rights, property
                      or safety of Binance Connect, our users or others. This
                      includes exchanging information with other companies and
                      organisations for fraud protection and credit risk
                      reduction, and with regulatory agencies and law
                      enforcement to comply with lawful requests.
                    </p>
                  </Box>
                  <Box className={classes.bag42}>
                    <Typography variant="h6">
                      4. International transfers of personal data
                    </Typography>
                    <p>
                      Binance Connect may transfer your data outside of the
                      European Economic Area (“EEA”). Binance Connect puts in
                      place suitable safeguards to ensure that such transfers
                      are carried out in compliance with applicable data
                      protection rules, except where the country to which the
                      data is transferred has already been determined by the
                      European Commission to provide an adequate level of
                      protection.
                    </p>
                    <p>
                      Where Binance Connect transfers personal data to
                      affiliates or service providers, Binance Connect relies on
                      the latest standard contractual clauses of the European
                      Commission.
                    </p>
                  </Box>
                  <Box className={classes.bag42}>
                    <Typography variant="h6">
                      5. How Secure is My Information?
                    </Typography>
                    <p>
                      We design our systems with your security and privacy in
                      mind. We work to protect the security of your personal
                      information during transmission by using encryption
                      protocols and software.
                    </p>
                    <p>
                      We maintain physical, electronic and procedural safeguards
                      in connection with the collection, storage and disclosure
                      of your personal information. Our security procedures mean
                      that we may ask you to verify your identity before we
                      disclose personal information to you.
                    </p>
                    <p>
                      It is important for you to protect against unauthorised
                      access to your account password. We recommend using a
                      unique password for your Binance Connect account that is
                      not utilized for other online accounts. Be sure to sign
                      off when you finish using a shared computer.
                    </p>
                  </Box>
                  <Box className={classes.bag42}>
                    <Typography variant="h6">
                      6. What About Advertising?
                    </Typography>
                    <p>
                      We may share your personal information with our marketing
                      partners for the purposes of targeting, modelling, and/or
                      analytics as well as marketing and advertising. You may
                      opt out of receiving directly from the emails you receive.
                    </p>
                  </Box>
                  <Box className={classes.bag42}>
                    <Typography variant="h6">
                      7. What Information Can I Access?
                    </Typography>
                    <p>
                      You can access your information, including your name,
                      address, payment options, profile information, and
                      transaction history in the "Your Account" section of the
                      website.
                    </p>
                  </Box>
                  <Box className={classes.bag42}>
                    <Typography variant="h6">
                      8. What Rights Do I Have?
                    </Typography>
                    <p>
                      If you have any questions or objections as to how we
                      collect and process your personal information, please
                      contact{" "}
                      <a href="mailto:dpo@bifinity.com.">dpo@bifinity.com.</a>
                    </p>
                    <p>
                      When you consent to our processing your personal
                      information for a specified purpose, you may withdraw your
                      consent at any time, and we will stop any further
                      processing of your data for that purpose.
                    </p>
                    <p>
                      In addition, subject to applicable law, you have the right
                      to request access to, correct, and delete your personal
                      data, and to ask for data portability. You may also object
                      to our processing of your personal data or ask that we
                      restrict the processing of your personal data in certain
                      instances. If you wish to do any of these things, please
                      contact{" "}
                      <a href="mailto:dpo@bifinity.com">dpo@bifinity.com</a>.
                    </p>
                  </Box>
                  <Box className={classes.bag42}>
                    <Typography variant="h6">
                      9. How Long Does Binance Connect Keep My Personal
                      Information?
                    </Typography>
                    <p>
                      We keep your personal information to enable your continued
                      use of Binance Connect Services, for as long as it is
                      required in order to fulfil the relevant purposes
                      described in this Privacy Policy, as may be required by
                      law such as for tax and accounting purposes, or as
                      otherwise communicated to you. Additionally, identity
                      information and Sensitive Personal Data may be retained
                      for eight years to comply with Anti-Money Laundering laws.
                    </p>
                  </Box>
                  <Box className={classes.bag42}>
                    <Typography variant="h6">9. Contact Information</Typography>
                    <p>
                      Our data protection officer can be contacted at{" "}
                      <a href="mailto:dpo@bifinity.com">dpo@bifinity.com</a>,
                      and will work to address any questions or issues that you
                      have with respect to the collection and processing of your
                      personal information.
                    </p>
                  </Box>
                </TabPanel>

                <TabPanel value={value} index={1}>
                  Item Two
                </TabPanel>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Footer/>
    </>
  );
};

export default PrivacyPolicy;