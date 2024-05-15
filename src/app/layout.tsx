import { fonts } from '@/styles/themes/fonts'
import Header from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Providers } from './providers'
import Head from 'next/head'

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en" className={fonts.inter.variable}>
            <Head>
                <meta name="viewport" content="viewport-fit=cover" />
            </Head>
            <body>
                <Providers>
                    <Header />
                    {children}
                    <Footer />
                </Providers>
            </body>
        </html>
    )
}
