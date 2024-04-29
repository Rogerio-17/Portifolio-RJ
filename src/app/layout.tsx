import type { Metadata } from 'next'
import { Providers } from './providers'
import { fonts } from '@/styles/themes/fonts'
import { Header } from '@/components/Header'

export const metadata: Metadata = {
    title: 'Portifolio RJ',
    description:
        'Portifolio para mostrar meus projetos, falar um pouco sobre mim e mostrar as tecnologias que estou por dentro.',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en" className={fonts.inter.variable}>
            <body>
                <Header />
                <Providers>{children}</Providers>
            </body>
        </html>
    )
}
