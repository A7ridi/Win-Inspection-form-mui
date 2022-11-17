import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";

const SubscribeEmail = () => {
	const [email, setEmail] = useState("");
	return (
		<div>
			<Box sx={{ pt: 3, pb: 3 }}>
				<Grid container spacing={2}>
					<Grid item xs={12}>
						<Typography
							variant="h4"
							align="center"
							sx={{ color: "#000", fontWeight: 600 }}
						>
							Subscribe to our emails
						</Typography>
					</Grid>
					<Grid item xs={12}>
						<Typography
							variant="subtitle2"
							gutterBottom
							align="center"
							sx={{ color: "#000" }}
						>
							Enter your email address to receive the latest notifications, newsletters
							and updates from WIN!
						</Typography>
					</Grid>
					<Grid
						item
						xs={12}
						align="center"
						sx={{
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
							gap: 2,
						}}
					>
						<FormControl variant="standard">
							<input
								type="email"
								value={email}
								className="subscribe-email-input"
								placeholder="Your email address"
								onChange={(e) => setEmail(e.target.value)}
							/>
						</FormControl>
						<Button
							type="submit"
							variant="contained"
							sx={{
								padding: "10px 40px",
								borderRadius: "10px",
								background: "#d4a656",
								boxShadow: "none",
							}}
						>
							Subscribe
						</Button>
					</Grid>
				</Grid>
			</Box>
		</div>
	);
};

export default SubscribeEmail;
