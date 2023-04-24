import UrlEncoderDecoder from "@/components/UrlEncoderDecoder";
import { Container } from "@mui/material";
import Head from "next/head";

function HomePage() {
    return (
        <>
            <Head>
                <title>{process.env.NEXT_PUBLIC_URL_ENCODER_PAGE_TITLE}</title>
                <meta name="description" content={process.env.NEXT_PUBLIC_URL_ENCODER_PAGE_DESCRIPTION} />
                <meta name="keywords" content={process.env.NEXT_PUBLIC_URL_ENCODER_PAGE_KEYWORDS} />
            </Head>
            <Container maxWidth="lg">
                <UrlEncoderDecoder />
            </Container>
        </>
    );
}

export default HomePage;
