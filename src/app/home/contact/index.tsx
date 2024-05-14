'use client'
import { SendIcon } from '@/icons/send'
import {
    Box,
    Button,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    Input,
    Text,
    Textarea,
} from '@chakra-ui/react'
import * as zod from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import emailjs from '@emailjs/browser'

const MesssageSchema = zod.object({
    personalData: zod.object({
        name: zod.string().min(1, { message: 'O Campo é obrigatório' }),
        email: zod
            .string()
            .min(1, { message: 'O Campo é obrigatório' })
            .email({ message: 'O e-mail informado é inválido' })
            .toLowerCase(),
        msg: zod.string().min(1, { message: 'O Campo é obrigatório' }),
    }),
})

export type OderMessageData = zod.infer<typeof MesssageSchema>
export type ConfirmOrderForm = OderMessageData

export function Contact() {
    const confirmOrderForm = useForm<ConfirmOrderForm>({
        resolver: zodResolver(MesssageSchema),
    })

    const {
        handleSubmit,
        register,
        formState: { errors },
    } = confirmOrderForm

    console.log(process.env.PUBLIC_KEY_TEMPLATE_EMAIL)

    function handleSendEmail(data: ConfirmOrderForm) {
        const templateParams = {
            from_name: data.personalData.name,
            message: data.personalData.msg,
            email: data.personalData.email,
        }

        emailjs
            .send('service_8ipi2bs', 'template_16dogpv', templateParams, 'h22JGKcDYMwmBKKrV')
            .then(() => {
                alert('Sucesso ao enviar o email.')
            })
            .catch(() => {
                alert('Erro ao enviar email.')
            })
    }

    // -------------- Cria um interrruptor com opção de email e whats para envio de mensagens -----------------
    return (
        <Flex
            as="form"
            onSubmit={handleSubmit(handleSendEmail)}
            id="contacts"
            flexDirection="column"
            alignItems="center"
            py="2rem"
            w="90vw"
            marginTop="3rem"
        >
            <Heading fontWeight="bold">Contatos</Heading>
            <Box
                w="45px"
                h="8px"
                bg="red"
                borderRadius="5px"
                marginTop="0.5rem"
                marginBottom="0.5rem"
            ></Box>
            <Text textAlign={{ base: 'justify', md: 'center' }}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. A aliquam nihil quis odit
                omnis et facere ab consectetur tempore doloribus.
            </Text>

            <FormControl
                marginTop="1rem"
                p={{ base: '1rem', md: '2rem' }}
                bg="rgba(236, 233, 233, 0.041)"
                boxShadow="0px 4px 4px 0px rgba(0, 0, 0, 0.35)"
                borderRadius="10px"
                display="flex"
                flexDirection="column"
                gap="1.5rem"
            >
                <Box>
                    <FormLabel>Nome</FormLabel>
                    <Input
                        placeholder="Digite seu nome"
                        style={{ opacity: 0.7 }}
                        {...register('personalData.name')}
                    />
                    {errors.personalData?.name?.message && (
                        <Text fontSize="0.7rem" color="red" marginTop="0.2rem">
                            {errors.personalData?.name?.message}
                        </Text>
                    )}
                </Box>
                <Box>
                    <FormLabel>E-mail</FormLabel>
                    <Input
                        placeholder="Seuemail@mail.com"
                        style={{ opacity: 0.7 }}
                        {...register('personalData.email')}
                    />
                    {errors.personalData?.email?.message && (
                        <Text fontSize="0.7rem" color="red" marginTop="0.2rem">
                            {errors.personalData?.email?.message}
                        </Text>
                    )}
                </Box>

                <Box>
                    <FormLabel>Mensagem</FormLabel>
                    <Textarea
                        placeholder="Digite sua mensagem"
                        resize="none"
                        height="200px"
                        style={{ opacity: 0.7 }}
                        {...register('personalData.msg')}
                    />
                    {errors.personalData?.msg?.message && (
                        <Text fontSize="0.7rem" color="red" marginTop="0.2rem">
                            {errors.personalData?.msg?.message}
                        </Text>
                    )}
                </Box>

                <Button
                    type="submit"
                    bg="blue.200"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    gap="0.5rem"
                    h="50px"
                    _hover={{
                        filter: 'brightness(0.85)',
                        transition: 'filter 0.3s ease',
                    }}
                >
                    ENVIAR
                    <SendIcon w="18px" h="18px" />
                </Button>
            </FormControl>
        </Flex>
    )
}
