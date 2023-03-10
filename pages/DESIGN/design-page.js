import Head from 'next/head';
import Link from 'next/link';

export default function DesignPage() {
    return (
        <>
            <Head>
                <title>Design Page</title>
            </Head>
            <h1>Portfolio of my design work</h1>
            <h2>
                <Link href="/">Back to home</Link>
            </h2>
        </>
    );
    }