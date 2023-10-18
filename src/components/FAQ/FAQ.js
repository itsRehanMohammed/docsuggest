import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";

const Accordion = styled((props) => <MuiAccordion disableGutters elevation={0} square {...props} />)(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => <MuiAccordionSummary expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />} {...props} />)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "rgba(255, 255, 255, .05)" : "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));
const FAQ = () => {
  const [expanded, setExpanded] = useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  return (
    <>
      <div className="lg:px-20 px-10 py-10  ">
        <h1 className="sm:text-4xl text-3xl font-medium mx-auto title-font mb-14 text-gray-900 text-center">Frequently Asked Questions</h1>
        <Accordion expanded={expanded === "panel1"} onChange={handleChange("panel1")}>
          <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
            <Typography>Delivery orders are subjected to:</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <p className="pb-2">1. Your address falling in the defined delivery area of the nearest restaurant</p>
              <p className="pb-2">2. The delivery address being mapped to the nearest restaurant that delivers in your area</p>
              <p className="pb-2">3. Availability of the restaurant online</p>
              <p className="pb-2">4. In case the delivery locality is not listed in the restaurant locator, delivery of orders cannot be placed; However you may choose to pick up your order from the nearest Domino's restaurant</p>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion expanded={expanded === "panel2"} onChange={handleChange("panel2")}>
          <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
            <Typography>What personal information we gather from you (customers)?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <p className="pb-2">• The information we gather from you helps us personalise and continually improve your ordering experience at Domino’s through various channels like mobile app, website, information provided by you during ordering process in restaurants, etc.</p>

              <p className="pb-2">
                • We use your information to assist you in handling your orders, deliver products and services, process payments, communicate with you about orders, products, services and promotional offers. We also update our records and generally maintain your accounts with us,
                display your saved order and customer reviews, recommend products and services that might be of your interest such as combos. We further use this information to improve our platform, prevent or detect fraud or abuses of our website and enable third parties to
                carry out technical, logistical or other functions on our behalf
              </p>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion expanded={expanded === "panel3"} onChange={handleChange("panel3")}>
          <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
            <Typography>We gather following types of information from you:</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <p className="pb-2">
                • Information provided by you: We receive and store any information you provide us on our website to place order or give us in any other way like sharing feedback, concerns, official social media interaction, ordering in restaurant information collected through
                aggregators during ordering and delivery like IRCTC, swiggy, food panda, etc. You can choose not to provide certain information but then you might not be able to take advantage of many of our features. Information like your name, email, mobile number, address is
                mandatory for delivery orders. We also use the information that you provide for sending you digital invoice, SMS for feedback etc
              </p>
              <p className="pb-2">
                • Automatic Information: We may receive/store information about your location and your mobile device, including a unique identifier for your device. We may use this information for internal analysis and to provide you location-based services, such as to correctly
                identify your location of delivery and other personalized content. We receive and store certain types of information whenever you interact with us. For example, like many websites, we use "cookies" and we obtain certain types of information when your web browser
                accesses our websites.
              </p>
              <p className="pb-2">• E-mail Communications: To help us make e-mails more useful and interesting, we may enable confirmation when you open e-mail from Domino’s.</p>
              <p className="pb-2">• Information from other sources: We might receive information about you from other sources and add it to our account information.</p>
              <p className="pb-2">
                {" "}
                • By using our site , services you agree to our use of your information (including sensitive personal information) in accordance with our terms and conditions, privacy policy which may be amended from time to time by Domino's. You also agree and give us your
                consent for collecting, storing, processing, transferring and sharing information (including sensitive personal information) related to you with third parties or service providers for the purposes as mentioned in T&C and privacy policy. Domino's may be required to
                share the your information with government agencies for the purposes of investigations, offences, frauds including of cyber incidents.
              </p>

              <p className="py-2 pt-4">Third Party Links</p>
              <p className="pb-2">
                The Services may contain links to third-party websites. Your use of these features may result in the collection, processing or sharing of information about you, depending on the feature. Please be aware that we are not responsible for the content or privacy
                practices of other websites or services which may be linked on our services. We do not endorse or make any representations about third-party websites or services. Our privacy policy does not cover the information you choose to provide to or that is collected by
                these third parties. We strongly encourage you to read such third parties' privacy policies
              </p>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion expanded={expanded === "panel4"} onChange={handleChange("panel4")}>
          <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
            <Typography>Do we share your information with anybody else?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Customer information is the most important part of our business and we take care this information on priority. We only share this information with our business partners for internal purpose to enhance the functionality and improve the quality of our Services, and to
              personalize your experience while using our Services. We also use this information to display relevant advertising, provide support to you, communicate with you, and comply with our legal obligations
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion expanded={expanded === "panel5"} onChange={handleChange("panel5")}>
          <AccordionSummary aria-controls="panel5d-content" id="panel5d-header">
            <Typography>How secure is your information with DocSuggest?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <p className="pb-2">
                • We have implemented appropriate physical, electronic, and managerial procedures to safeguard and help prevent unauthorized access to your information and to maintain data security. These safeguards take into account the sensitivity of the information that we
                collect, process and store and the current state of technology. We follow generally accepted industry standards to protect the personal information submitted to us, both during transmission and once we receive it. The third party service providers with respect to
                payment gateway and payment processing are all validated as compliant with the payment card industry standard{" "}
              </p>
              <p className="pb-2">• We have implemented SSL on our website so that information collected from you is encrypted during transit as per International Security Standard IS/ISO/IEC 27001:2013.</p>
              <p className="pb-2">• We don’t store any of your credit card information. While paying by credit card you are redirected to payment gateway for payment and come back to site after payment.</p>
              <p className="pb-2">• We have implemented security recommendations as per to safeguard your information as per ISO27001:2013 and PCI-DSS.</p>
              <p className="pb-2">
                • We encrypt and store your passwords in our website. We assume no liability or responsibility for disclosure of your information due to errors in transmission, unauthorized third-party access, or other causes beyond our control. You play an important role in
                keeping your personal information secure. You should not share your user name, password, or other security information for your Domino's account with anyone. If we receive instructions using your user name and password, we will consider that you have authorized
                the instructions
              </p>
              <p className="pt-5 pb-2">Beware of Phishing</p>

              <p className="pb-2">
                This is for the information & knowledge of General Public that it has been brought to the notice of the Management of Jubilant FoodWorks Limited (JFL), the exclusive Master Franchisee of Domino’s Pizza pan India that there have been some instances of frauds being
                committed by various unscrupulous elements in order to extort money from unsuspecting individuals through fake calls asking to share user confidential like OTP, CVV, Card Details, internet password, etc. The Public at large is cautioned not to share these details
                with anyone over phone or e-mail as this could lead to fraud. Domino’s never calls for any OTP or user confidential information. It is further notified that no Director, Shareholder, Officer, Employee, Partner or any other Associated Staff of JFL shall be
                accountable for any loss, harm, damage or fraud that occurs or may occur or arise to any individual/entity due to sharing of their aforesaid user confidential over fake calls or any other medium while placing online orders for Domino’s Pizza in India. The
                individual/entity shall be solely responsible for the consequences of their any such act & decision.{" "}
              </p>
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>{" "}
    </>
  );
};

export default FAQ;
