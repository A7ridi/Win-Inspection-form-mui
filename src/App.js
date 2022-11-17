import React from "react";
import "./App.css";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import ContactContainer from "./component/ContactContainer";

const theme = createTheme({
	typography: {
		h1: {
			color: "#004461",
		},
		h4: {
			color: "#004461",
		},
		subtitle2: {
			color: "#004461",
		},
		overline: {
			color: "#2f2f2f",
		},
		fontFamily: `"Poppins", sans-serif !important`,
		fontSize: 14,
		fontWeightLight: 300,
		fontWeightRegular: 400,
		fontWeightMedium: 500,
		letterSpacing: "-1px",
	},
});

function App() {
	return (
		<ThemeProvider theme={theme}>
			<Container maxWidth="lg">
				<ContactContainer />
			</Container>
		</ThemeProvider>
	);
}

export default App;
