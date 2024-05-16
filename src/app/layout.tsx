import { fonts } from '@/styles/themes/fonts'
import { Providers } from './providers'
import Head from 'next/head'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/header'

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
