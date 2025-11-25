import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import Header from "@/components/Header";

const Privacidade = () => {
  return (
    <div className="min-h-screen bg-gradient-hero">
      <Header />
      <div className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="mb-8 animate-fade-in">
            <Link
              to="/"
              className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Voltar
            </Link>
          </div>

          <Card className="glass p-8 md:p-12 animate-slide-up">
            <h1 className="text-4xl font-bold mb-8">Política de Privacidade</h1>

            <div className="prose prose-invert max-w-none space-y-6">
              <section>
                <h2 className="text-2xl font-semibold mb-4">1. Introdução</h2>
                <p className="text-muted-foreground">
                  A sua privacidade é importante para nós. Esta política explica como o SRCA 
                  recolhe, utiliza e protege os seus dados pessoais em conformidade com o RGPD.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">2. Dados Recolhidos</h2>
                <p className="text-muted-foreground mb-4">
                  Recolhemos os seguintes dados pessoais:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Nome completo</li>
                  <li>Endereço de email</li>
                  <li>Instituição de afiliação</li>
                  <li>País de origem</li>
                  <li>Tipo de inscrição (Estudante, Investigador ou Convidado)</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">3. Finalidade do Tratamento</h2>
                <p className="text-muted-foreground">
                  Os seus dados são utilizados exclusivamente para:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 mt-4">
                  <li>Processar o seu registo na conferência</li>
                  <li>Enviar comunicações relacionadas com o evento</li>
                  <li>Elaborar estatísticas agregadas e anónimas</li>
                  <li>Cumprir obrigações legais</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">4. Base Legal</h2>
                <p className="text-muted-foreground">
                  O tratamento dos seus dados baseia-se no seu consentimento explícito, 
                  fornecido através da checkbox de consentimento RGPD no formulário de registo.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">5. Partilha de Dados</h2>
                <p className="text-muted-foreground">
                  Os seus dados não são partilhados com terceiros, exceto quando:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 mt-4">
                  <li>Exigido por lei</li>
                  <li>Necessário para o funcionamento da conferência (ex: prestadores de serviços)</li>
                  <li>Você der consentimento explícito</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">6. Direitos do Titular dos Dados</h2>
                <p className="text-muted-foreground mb-4">
                  Você tem os seguintes direitos:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Acesso aos seus dados pessoais</li>
                  <li>Retificação de dados incorretos</li>
                  <li>Eliminação dos seus dados (direito ao esquecimento)</li>
                  <li>Portabilidade dos dados</li>
                  <li>Oposição ao tratamento</li>
                  <li>Limitação do tratamento</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">7. Segurança dos Dados</h2>
                <p className="text-muted-foreground">
                  Implementamos medidas técnicas e organizacionais adequadas para proteger 
                  os seus dados contra acesso não autorizado, perda ou destruição.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">8. Retenção de Dados</h2>
                <p className="text-muted-foreground">
                  Os seus dados serão mantidos apenas pelo período necessário para as 
                  finalidades descritas ou conforme exigido por lei.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">9. Cookies</h2>
                <p className="text-muted-foreground">
                  O SRCA utiliza cookies essenciais para o funcionamento do sistema. 
                  Não utilizamos cookies de rastreamento ou publicidade.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">10. Exercício dos Direitos</h2>
                <p className="text-muted-foreground">
                  Para exercer qualquer dos seus direitos, por favor contacte-nos através 
                  do email: privacidade@srca.pt
                </p>
              </section>

              <div className="mt-8 pt-8 border-t border-border/50">
                <p className="text-sm text-muted-foreground">
                  Última atualização: 25 de novembro de 2025
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Privacidade;
