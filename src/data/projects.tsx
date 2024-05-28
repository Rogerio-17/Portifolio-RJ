import ignite from '@/assets/ignite_shop.png'
import coffeDelivery from '@/assets/coffe_delivery.png'
import nlwExpert from '@/assets/nlw_expert.png'
import igniteTimer from '@/assets/ignite_timer.png'
import blogPessoal from '@/assets/blog_pessoal.png'
import { TsIcon } from '@/icons/typeScripts'
import { NextJsIcon } from '@/icons/nextJs'
import { NodeJsIcon } from '@/icons/nodeJs'
import { StyledComponentsIcon } from '@/icons/styledComponents'
import { RadixUiIcon } from '@/icons/radixUi'
import { GitHubIcon } from '@/icons/github'
import { ReactIcon } from '@/icons/react'
import { TailwindCssIcon } from '@/icons/tailwindCss'

export const projects = [
    {
        id: '1',
        name: 'Ignite Shop',
        imgUrl: ignite.src,
        description: `Esse projeto foi desenvolvido em uma trilha de React da Rocketseat. 
        O objetivo do projeto foi apresentar o framework Next.js e todas as suas vantagens. 
        Este projeto simula um e-commerce de roupas, onde é possível selecionar 
        os itens e a quantidade desejada. Após isso, ao finalizar a compra, o usuário 
        é redirecionado para a página de pagamento do Stripe. Após inserir as informações 
        bancárias e confirmar a transação, o usuário é direcionado para uma página de 
        agradecimento. Este projeto, por ser um desafio, exigiu bastante raciocínio para 
        a resolução de problemas e proporcionou a oportunidade de praticar amplamente o 
        que foi aprendido ao longo do curso.`,
        tools: [
            {
                id: 3,
                name: 'TypeScript',
                svg: <TsIcon w="22px" h="22px" />,
            },
            {
                id: 5,
                name: 'Next JS',
                svg: <NextJsIcon w="22px" h="22px" />,
            },
            {
                id: 9,
                name: 'Node JS',
                svg: <NodeJsIcon w="22px" h="22px" color="#8CC84B" />,
            },
            {
                id: 9,
                name: 'Radix UI',
                svg: <RadixUiIcon w="22px" h="22px" color="#000" />,
            },
            {
                id: 7,
                name: 'Styled Components',
                svg: <StyledComponentsIcon w="22px" h="22px" />,
            },
            {
                id: 10,
                name: 'Github',
                svg: <GitHubIcon w="22px" h="22px" color="#000" />,
            },
        ],
        linkRepository: 'https://github.com/Rogerio-17/igniteShop',
        linkDeploy: 'https://ignite-shop-rogerio-17.vercel.app/',
    },
    {
        id: '2',
        name: 'Coffe Delivery',
        imgUrl: coffeDelivery.src,
        description: `
        O Coffee Delivery foi um dos primeiros projetos desenvolvidos no curso completo de desenvolvedor front-end da Rocketseat. 
        Este projeto também faz parte de um desafio do segundo módulo do curso. Ele simula a página de uma cafeteria, 
        permitindo que o cliente visualize, selecione os cafés e até mesmo faça uma solicitação de pedido, 
        tudo através da página web. Esse projeto foi feito com React e exercitou muito a parte de hooks, 
        especialmente a Context API do React.
        `,
        tools: [
            {
                id: 3,
                name: 'TypeScript',
                svg: <TsIcon w="22px" h="22px" />,
            },
            {
                id: 4,
                name: 'React JS',
                svg: <ReactIcon w="22px" h="22px" />,
            },
            {
                id: 9,
                name: 'Node JS',
                svg: <NodeJsIcon w="22px" h="22px" color="#8CC84B" />,
            },
            {
                id: 7,
                name: 'Styled Components',
                svg: <StyledComponentsIcon w="22px" h="22px" />,
            },
            {
                id: 10,
                name: 'Github',
                svg: <GitHubIcon w="22px" h="22px" color="#000" />,
            },
        ],
        linkRepository: 'https://github.com/Rogerio-17/coffe-delivery',
        linkDeploy: 'https://coffe-delivery-v1.vercel.app/',
    },
    {
        id: '3',
        name: 'NLW-expert',
        imgUrl: nlwExpert.src,
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus eius
        perspiciatis, non provident saepe nesciunt officia veritatis qui id tempore.
        Suscipit saepe quod ea eius natus, cum vel reiciendis quibusdam! Lorem ipsum
        dolor sit amet consectetur adipisicing elit. Ipsum sunt corporis dolore non
        enim illo veritatis itaque tenetur neque? Impedit quos excepturi maxime
        dicta architecto placeat quis sed minus iure. Lorem, ipsum dolor sit amet
        consectetur adipisicing elit. Nulla maxime alias soluta doloremque, odit
        aliquam ipsam, debitis vero sunt veniam quasi ducimus accusantium facilis,
        nisi sequi nihil unde quis eius! Lorem ipsum dolor sit amet consectetur,
        adipisicing elit. Id, eos praesentium. `,
        tools: [
            {
                id: 3,
                name: 'TypeScript',
                svg: <TsIcon w="22px" h="22px" />,
            },
            {
                id: 4,
                name: 'React JS',
                svg: <ReactIcon w="22px" h="22px" />,
            },
            {
                id: 9,
                name: 'Node JS',
                svg: <NodeJsIcon w="22px" h="22px" color="#8CC84B" />,
            },
            {
                id: 8,
                name: 'Tailwind CSS',
                svg: <TailwindCssIcon w="22px" h="22px" />,
            },
            {
                id: 10,
                name: 'Github',
                svg: <GitHubIcon w="22px" h="22px" color="#000" />,
            },
        ],
        linkRepository: 'https://github.com/Rogerio-17/NLW-expert',
        linkDeploy: 'https://nlw-expert-git-main-rogerio-17.vercel.app',
    },
    {
        id: '4',
        name: 'Ignite Timer',
        imgUrl: igniteTimer.src,
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus eius
        perspiciatis, non provident saepe nesciunt officia veritatis qui id tempore.
        Suscipit saepe quod ea eius natus, cum vel reiciendis quibusdam! Lorem ipsum
        dolor sit amet consectetur adipisicing elit. Ipsum sunt corporis dolore non
        enim illo veritatis itaque tenetur neque? Impedit quos excepturi maxime
        dicta architecto placeat quis sed minus iure. Lorem, ipsum dolor sit amet
        consectetur adipisicing elit. Nulla maxime alias soluta doloremque, odit
        aliquam ipsam, debitis vero sunt veniam quasi ducimus accusantium facilis,
        nisi sequi nihil unde quis eius! Lorem ipsum dolor sit amet consectetur,
        adipisicing elit. Id, eos praesentium. `,
        tools: [
            {
                id: 3,
                name: 'TypeScript',
                svg: <TsIcon w="22px" h="22px" />,
            },
            {
                id: 4,
                name: 'React JS',
                svg: <ReactIcon w="22px" h="22px" />,
            },
            {
                id: 9,
                name: 'Node JS',
                svg: <NodeJsIcon w="22px" h="22px" color="#8CC84B" />,
            },
            {
                id: 7,
                name: 'Styled Components',
                svg: <StyledComponentsIcon w="22px" h="22px" />,
            },
            {
                id: 10,
                name: 'Github',
                svg: <GitHubIcon w="22px" h="22px" color="#000" />,
            },
        ],
        linkRepository: 'https://github.com/Rogerio-17/ignite-timer',
        linkDeploy: 'https://ignite-timer-one-dun.vercel.app/',
    },
    {
        id: '5',
        name: 'Blog Pessoal',
        imgUrl: blogPessoal.src,
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus eius
        perspiciatis, non provident saepe nesciunt officia veritatis qui id tempore.
        Suscipit saepe quod ea eius natus, cum vel reiciendis quibusdam! Lorem ipsum
        dolor sit amet consectetur adipisicing elit. Ipsum sunt corporis dolore non
        enim illo veritatis itaque tenetur neque? Impedit quos excepturi maxime
        dicta architecto placeat quis sed minus iure. Lorem, ipsum dolor sit amet
        consectetur adipisicing elit. Nulla maxime alias soluta doloremque, odit
        aliquam ipsam, debitis vero sunt veniam quasi ducimus accusantium facilis,
        nisi sequi nihil unde quis eius! Lorem ipsum dolor sit amet consectetur,
        adipisicing elit. Id, eos praesentium. `,
        tools: [
            {
                id: 3,
                name: 'TypeScript',
                svg: <TsIcon w="22px" h="22px" />,
            },
            {
                id: 4,
                name: 'React JS',
                svg: <ReactIcon w="22px" h="22px" />,
            },
            {
                id: 9,
                name: 'Node JS',
                svg: <NodeJsIcon w="22px" h="22px" color="#8CC84B" />,
            },
            {
                id: 7,
                name: 'Styled Components',
                svg: <StyledComponentsIcon w="22px" h="22px" />,
            },
            {
                id: 10,
                name: 'Github',
                svg: <GitHubIcon w="22px" h="22px" color="#000" />,
            },
        ],
        linkRepository: 'https://github.com/Rogerio-17/coffe-delivery',
        linkDeploy: '',
    },

    {
        id: '6',
        name: 'Em breve!',
        imgUrl: '',
        description: `Em breve`,
        tools: [],
        linkRepository: '',
        linkDeploy: '',
    },
]
