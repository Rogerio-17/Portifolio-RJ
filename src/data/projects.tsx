import ignite from '@/assets/ignite_shop.png'
import coffeDelivery from '@/assets/coffe_delivery.png'
import nlwExpert from '@/assets/nlw_expert.png'
import igniteTimer from '@/assets/ignite_timer.png'
import blogPessoal from '@/assets/blog_pessoal.png'
import belezaNordestina from '@/assets/beleza_nordestina.png'
import { TsIcon } from '@/icons/typeScripts'
import { NextJsIcon } from '@/icons/nextJs'
import { NodeJsIcon } from '@/icons/nodeJs'
import { StyledComponentsIcon } from '@/icons/styledComponents'
import { RadixUiIcon } from '@/icons/radixUi'
import { GitHubIcon } from '@/icons/github'
import { ReactIcon } from '@/icons/react'
import { TailwindCssIcon } from '@/icons/tailwindCss'
import { FirebaseIcon } from '@/icons/firebaseIcon'

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
        description: `Este projeto foi criado em conjunto com um evento da Rocketseat. 
          O mesmo foi desenvolvido com o intuito de salvar algumas anotações, sejam elas
          descritas por texto ou até mesmo por áudio. Para fazer a transcrição por áudio, 
          utilizamos uma API do próprio Google que escuta e transcreve o texto para a aplicação
          de forma bastante precisa. A aplicação tem como foco principal o front-end, 
          mas também aborda conceitos de back-end`,
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
        description: `Projeto teoricamente bem simples, porém foi muito utilizado 
        para treinar a parte de hooks do React. Ele simula um cronômetro, uma espécie
        de pomodoro em que podemos dar nome à tarefa que vamos realizar e adicionar
        o tempo. A partir desse tempo, começa uma contagem decrescente. Podemos
        parar o cronômetro quando quisermos. Além disso, este projeto também
        disponibiliza um relatório com a quantidade de tarefas, nome, tempo
        de duração, data de início e o status. Projeto bastante funcional,
        principalmente para quem gosta de usar a técnica do pomodoro, que
        detalha tudo o que foi feito durante o dia através do relatório citado.`,
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
        description: `Este projeto tem como principal funcionalidade trazer dados da API do GitHub. 
        Neste projeto, foi criado uma espécie de blog onde são usadas as issues do GitHub para 
        adicionar mais cards. A partir da API, são obtidas algumas informações, como nome de usuário, 
        empresa atual (de acordo com o que está no GitHub), número de seguidores, descrição e as principais
        informações que vêm através de um repositório específico. Esse repositório foi criado justamente para
        que, quando uma issue for criada, isso se reflita na página. Além da parte de listagem, o site também
        tem a opção de pesquisa e uma página para detalhamento de posts que podem conter markdown, que a página
        vai entender e formatar corretamente.`,
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
        linkRepository: 'https://github.com/Rogerio-17/BlogPessoal.git',
        linkDeploy: '',
    },

    {
        id: '6',
        name: 'Beleza Nordestina',
        imgUrl: belezaNordestina.src,
        description: `Este projeto surgiu de uma conversa com minha irmã, que possui uma loja de produtos de beleza. A principal dificuldade dela é a falta de tempo para postar produtos nas redes sociais e organizar os pedidos. Pensando nisso, criei uma plataforma onde ela pode cadastrar os produtos, adicionar fotos, e os clientes têm acesso a esses itens na tela principal. Quando o cliente finaliza uma compra, o estoque é automaticamente recalculado. Se o produto estiver esgotado, o cliente terá a opção de fazer um pedido, mesmo sem estoque disponível. Atualmente, todo o processo de finalização de compras e pedidos está sendo realizado diretamente pelo WhatsApp corporativo da minha irmã. No entanto, já estamos planejando o fluxo para criar um sistema de login, visando um melhor controle e identificação dos nossos clientes. Além disso, os clientes poderão fazer comentários e avaliar os produtos com estrelas, sendo que cada item exibirá a média de avaliações e os comentários feitos por outros usuários. A plataforma já possui as funcionalidades essenciais para ajudar minha irmã no dia a dia, e estamos continuamente avançando para incluir novas funcionalidades. O próximo passo é implementar o fluxo de login, garantindo uma maior proteção dos dados dos nossos futuros clientes.`,
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
                id: 10,
                name: 'Github',
                svg: <GitHubIcon w="22px" h="22px" color="#000" />,
            },
            {
                id: 11,
                name: 'Firebase',
                svg: <FirebaseIcon w="22px" h="22px" />,
            },
        ],
        linkRepository: 'https://github.com/Rogerio-17/beleza_nordestina_web',
        linkDeploy: 'https://belezanordestinarn.com.br',
    },
]
