import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

const ContactForm = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [phoneNo, setPhoneNo] = useState("");
	const [zipCode, setZipCode] = useState("");
	const [message, setMessage] = useState("");

	const payload = {
		name: name,
		email: email,
		phone: phoneNo,
		zip: zipCode,
		message: message,
	};

	const submitHandler = (e) => {
		e.preventDefault();
		fetch("/api/contact", {
			method: "POST",
			headers: {
				body: payload,
			},
		})
			.then((res) => console.log("Form successfully submitted"))
			.catch((err) => console.log("Error submitting form"));
	};

	return (
		<div>
			<Box
				sx={{
					display: "flex",
					flexDirection: "column",
				}}
			>
				<Box component="form" noValidate sx={{ mt: 3 }}>
					<Grid container spacing={2}>
						<Box component="div" sx={{ my: 2 }}>
							<Grid item xs={12} sm={6}>
								<label className="fields-text">Name</label>
								<input
									type="email"
									value={name}
									className="input-fields"
									placeholder="Full Name"
									onChange={(e) => setName(e.target.value)}
								/>
							</Grid>
						</Box>
						<Box component="div" sx={{ my: 2 }}>
							<Grid item xs={12} sm={6}>
								<label className="fields-text">Email</label>
								<input
									type="email"
									value={email}
									className="input-fields"
									placeholder="xyz@abc.com"
									onChange={(e) => setEmail(e.target.value)}
								/>
							</Grid>
						</Box>

						<Box component="div" sx={{ my: 2 }}>
							<Grid item xs={12} sm={6}>
								<label className="fields-text">Phone</label>
								<input
									type="email"
									value={phoneNo}
									className="input-fields"
									placeholder="(123)456-7890"
									onChange={(e) => setPhoneNo(e.target.value)}
								/>
							</Grid>
						</Box>
						<Box component="div" sx={{ my: 2 }}>
							<Grid item xs={12} sm={6}>
								<label className="fields-text">ZIP Code</label>
								<input
									type="email"
									value={zipCode}
									className="input-fields"
									placeholder="xxxxx"
									onChange={(e) => setZipCode(e.target.value)}
								/>
							</Grid>
						</Box>

						<Box component="div" sx={{ my: 2 }}>
							<label className="fields-text">Message</label>
							<Grid item xs={12}>
								<textarea
									type="email"
									value={message}
									className="input-fields"
									placeholder="Please type it in here..."
									style={{ width: "45vw", height: "100px" }}
									onChange={(e) => setMessage(e.target.value)}
								/>
							</Grid>
						</Box>
					</Grid>
					<Button
						type="submit"
						variant="contained"
						sx={{
							padding: "10px 25px",
							mt: 3,
							mb: 3,
							background: "#005981",
							borderRadius: "10px",
						}}
						onClick={submitHandler}
					>
						Submit
					</Button>
				</Box>
			</Box>
		</div>
	);
};

export default ContactForm;
