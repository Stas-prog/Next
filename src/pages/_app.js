import Image from "next/image";
import Head from "next/head";
import Layout from "../components/Layout";
import foto from "../../public/foto.jpg"
import '../styles/globals.scss';

const MyApp = ({ Component, pageProps }) => (
    <Layout>
        <Head>
            <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap" rel="stylesheet" />
        </Head>
        <main>
            <Component {...pageProps} />
        </main>
        <div style={{ display: "flex", justifyContent: "center" }}>
            <Image
                src={foto} width={750} height={360} alt="preview"
                placeholder="blur">
            </Image>
        </div>
    </Layout>
);

export default MyApp;