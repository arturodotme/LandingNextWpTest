import "../styles/globals.css";
import { ApolloProvider } from "@apollo/client/react";
import { LandingProvider } from "../context/LandingProvider";
import { WordpressProvider } from "../context/WordpressProvider";
import { client } from "../lib/apollo";

function MyApp({ Component, pageProps }) {
	return (
		<ApolloProvider client={client}>
			<WordpressProvider>
				<LandingProvider>
					<Component {...pageProps} />
				</LandingProvider>
			</WordpressProvider>
		</ApolloProvider>
	);
}

export default MyApp;
