import Head from 'next/head'

export default function About() {
    return (
        <>
            <Head>
                <title>About Page</title>
                <link rel="icon" href="/react.svg" />
            </Head>
            <h1 className='greenColor'>About</h1>
            <style jsx>{`
                .greenColor{
                    color: green;
                }
            `}</style>
        </>
    )
}
