import type { Metadata } from 'next'
import { fonts } from '@/styles/themes/fonts'
import { Providers } from './providers'
import Head from 'next/head'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/header'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'

export const metadata: Metadata = {
    title: 'Portifolio RJ | Desenvolvedor Front-end',
    description:
        'Portfólio de Rogério, mostrando projetos, habilidades e tecnologias dominadas no desenvolvimento Front-end.',
    keywords: ['Portfólio', 'Rogério', 'RJ', 'Desenvolvedor', 'Programador', 'Front-end'],
    openGraph: {
        images: [`${process.env.PROJECT_URL}/preview.png`],
    },
    robots: {
        index: true,
        follow: true,
        nocache: true,
        googleBot: {
            index: true,
            follow: true,
            noimageindex: true,
        },
    },
}

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
                    <Analytics />
                    <SpeedInsights />
                </Providers>
            </body>
        </html>
    )
}
