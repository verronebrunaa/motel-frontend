import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import Container from "@/components/ui/Container";
import Typography from "@/components/ui/Typography";
import React from "react";

const TermsPage: React.FC = () => {
    return (
        <div className="min-h-screen bg-gray-100 text-gray-900 flex flex-col">
            <div className="fixed top-0 left-0 w-full z-10">
                <Navbar />
            </div>

            <div className="flex-grow flex items-center justify-center p-4 mt-12 sm:mt-24 mb-12 sm:mb-24">
                <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md sm:max-w-lg lg:max-w-2xl">
                    <Container className="space-y-4 text-[#2D5D34]">
                        <Typography variant="h1" className="text-2xl sm:text-3xl lg:text-4xl">Termos e Condições</Typography>
                        <Typography variant="body1">
                            Bem-vindo ao nosso site. Se você continuar a navegar e usar este
                            site, você está concordando em cumprir e ser regido pelos seguintes
                            termos e condições de uso, que, juntamente com nossa política de
                            privacidade, governam o relacionamento da nossa empresa com você em
                            relação a este site.
                        </Typography>
                        <Typography variant="body1">
                            O uso deste site está sujeito aos seguintes termos de uso:
                        </Typography>
                        <Typography variant="body1">
                            - O conteúdo das páginas deste site é para sua informação geral e
                            uso apenas. Ele está sujeito a alterações sem aviso prévio.
                        </Typography>
                        <Typography variant="body1">
                            - Este site usa cookies para monitorar as preferências de navegação.
                            Se você permitir o uso de cookies, as seguintes informações pessoais
                            podem ser armazenadas por nós para uso por terceiros.
                        </Typography>
                        <Typography variant="body1">
                            - Nem nós nem terceiros fornecemos qualquer garantia quanto à
                            precisão, pontualidade, desempenho, integridade ou adequação das
                            informações e materiais encontrados ou oferecidos neste site para
                            qualquer propósito específico. Você reconhece que tais informações e
                            materiais podem conter imprecisões ou erros e nós expressamente
                            excluímos a responsabilidade por tais imprecisões ou erros na
                            extensão máxima permitida por lei.
                        </Typography>
                        <Typography variant="body1">
                            - O uso de qualquer informação ou material neste site é inteiramente
                            por sua conta e risco, pelo qual não seremos responsáveis. Será sua
                            própria responsabilidade garantir que quaisquer produtos, serviços
                            ou informações disponíveis através deste site atendam às suas
                            necessidades específicas.
                        </Typography>
                    </Container>
                </div>
            </div>
            <div className="fixed bottom-0 w-full">
                <Footer />
            </div>
        </div>
    );
};

export default TermsPage;
