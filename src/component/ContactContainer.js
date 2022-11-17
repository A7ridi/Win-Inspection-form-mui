import React from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import ContactInfo from "./ContactInfo";
import SubscribeEmail from "./SubscribeEmail";
import ContactForm from "./ContactForm";

const ContactContainer = () => {
	return (
		<div>
			<Card sx={{ minWidth: 275, mt: 3, mb: 3, padding: "20px" }}>
				<CardContent>
					<Grid container spacing={2}>
						<Grid
							item
							md={4}
							xs={12}
							sx={{ background: "#FAFAFA", borderRadius: "20px", maxWidth: "30%" }}
						>
							<ContactInfo />
						</Grid>
						<Grid item md={8} xs={12}>
							<ContactForm />
						</Grid>
					</Grid>
				</CardContent>
			</Card>
			<Card sx={{ minWidth: 275, mt: 3, mb: 3, boxShadow: "none" }}>
				<CardContent sx={{ background: "#eeeeee" }}>
					<SubscribeEmail />
				</CardContent>
			</Card>
		</div>
	);
};

export default ContactContainer;
