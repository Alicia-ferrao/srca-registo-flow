import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import Header from "@/components/Header";

const Termos = () => {
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
            <h1 className="text-4xl font-bold mb-8">Termos de Serviço</h1>

            <div className="prose prose-invert max-w-none space-y-6">
              <section>
                <h2 className="text-2xl font-semibold mb-4">1. Aceitação dos Termos</h2>
                <p className="text-muted-foreground">
                  Ao utilizar o SRCA (Sistema de Registo de Conferências Automático), 
                  você concorda com estes termos de serviço e com a nossa política de privacidade.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">2. Uso do Serviço</h2>
                <p className="text-muted-foreground">
                  O SRCA destina-se ao registo e gestão de participantes em eventos académicos 
                  e conferências. Você compromete-se a fornecer informações verdadeiras e precisas.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">3. Dados Pessoais</h2>
                <p className="text-muted-foreground">
                  Os seus dados pessoais serão tratados de acordo com o Regulamento Geral 
                  de Proteção de Dados (RGPD) e a nossa política de privacidade. Você tem 
                  o direito de aceder, retificar e eliminar os seus dados a qualquer momento.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">4. Propriedade Intelectual</h2>
                <p className="text-muted-foreground">
                  Todo o conteúdo e funcionalidades do SRCA são propriedade exclusiva 
                  do sistema e estão protegidos por leis de direitos de autor.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">5. Limitação de Responsabilidade</h2>
                <p className="text-muted-foreground">
                  O SRCA não se responsabiliza por quaisquer danos diretos ou indiretos 
                  resultantes do uso do serviço, incluindo perda de dados ou interrupções.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">6. Alterações aos Termos</h2>
                <p className="text-muted-foreground">
                  Reservamo-nos o direito de modificar estes termos a qualquer momento. 
                  As alterações entram em vigor imediatamente após a publicação.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">7. Contacto</h2>
                <p className="text-muted-foreground">
                  Para questões sobre estes termos, por favor contacte-nos através do 
                  email: legal@srca.pt
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

export default Termos;
