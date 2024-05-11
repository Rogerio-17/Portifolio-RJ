import { Providers } from './providers'
import { fonts } from '@/styles/themes/fonts'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
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
                <Header />
                <Providers>{children}</Providers>
                <Footer />
            </body>
        </html>
    )
}
