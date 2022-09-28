import Head from "next/head";
import styles from "../styles/Home.module.css";
import Layout from "../components/Layout";
import FirstSight from "../components/FirstSight";
import Expires from "../components/Expires";
import Reviews from "../components/Reviews";
import Footer from "../components/Footer";
import { client } from "../lib/apollo";
import { gql } from "@apollo/client";

export default function Home({ post }) {
	const postWp = post.landing1
	
	return (
		<Layout
		post = {postWp}
		>
			<Head>
				<title>Headless WP Next Starter</title>
				<link rel="icon" href="favicon.ico"></link>
			</Head>
			<main>
				<div className={styles.container}>
					<FirstSight
					post = {postWp} />
					<Expires
					post = {postWp} />
					<Reviews
					post = {postWp} />
					<Footer
					post = {postWp} />
				</div>
			</main>
		</Layout>
	);
}
export async function getStaticProps(params) {
	const GET_POST = gql`
		query GetPostByURI($id: ID = "2022/09/22/hola-mundo/") {
			post(id: $id, idType: URI) {
				landing1 {
					texoResena2
					texto1
					texto2
					textoBtn
					textoFooter
					textoParrafo1
					textoPersona2
					textoPesona1
					textoResena1
					titulo1
					titulo2
					tituloResenas
					urlBtn
					imagen1 {
						sourceUrl
					}
					imagenResenas {
						sourceUrl
					}
					logo {
						sourceUrl
					}
				}
			}
		}
	`;

	const response = await client.query({
		query: GET_POST,
		variables: {
			id: params.uri,
		},
	});
	const post = response?.data?.post;

	return {
		props: {
			post,
		},
	};
}
