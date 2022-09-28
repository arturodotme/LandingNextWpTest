import React from 'react'
import { createContext, useState } from "react";
import { client } from "../lib/apollo";
import { gql } from "@apollo/client";

const WordpressContext = createContext()

const WordpressProvider = ({post,children}) => {
    return (
        <WordpressContext.Provider 
        value={{
          post
        }}
        >
            {children}
        </WordpressContext.Provider>
    )
}
export {
    WordpressProvider
};
export default WordpressContext

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
