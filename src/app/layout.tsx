import type { Metadata } from 'next'
import { fonts } from '@/styles/themes/fonts'
import { Providers } from './providers'
import Head from 'next/head'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/header'

export const metadata: Metadata = {
    title: 'Portifolio RJ',
    description:
        'Portifolio para mostrar meus projetos, falar um pouco sobre mim e mostrar as tecnologias que estou por dentro.',
    keywords: ['Portifolio', 'Rogerio', 'RJ', 'Desenvolvedor', 'Progrmador', 'Front-end'],
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
                </Providers>
            </body>
        </html>
    )
}
