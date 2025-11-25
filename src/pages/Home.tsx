import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Users, UserPlus, LayoutDashboard, TrendingUp } from "lucide-react";
import StatsCard from "@/components/StatsCard";
import Header from "@/components/Header";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-hero">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 animate-fade-in">
        <div className="container mx-auto text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
              Sistema de Registo de
              <span className="block bg-gradient-accent bg-clip-text text-transparent">
                Conferências Automático
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Plataforma moderna e elegante para gestão completa de participantes em eventos académicos
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <Link to="/registar">
                <Button size="lg" className="bg-gradient-accent hover:opacity-90 transition-opacity">
                  <UserPlus className="mr-2 h-5 w-5" />
                  Registar Participante
                </Button>
              </Link>
              <Link to="/dashboard">
                <Button size="lg" variant="outline" className="hover-scale">
                  <LayoutDashboard className="mr-2 h-5 w-5" />
                  Dashboard Admin
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 animate-slide-up">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <StatsCard
              title="Total de Inscritos"
              value={248}
              icon={Users}
              trend="+12% este mês"
              delay={0}
            />
            <StatsCard
              title="Investigadores"
              value={142}
              icon={TrendingUp}
              trend="+8% este mês"
              delay={100}
            />
            <StatsCard
              title="Estudantes"
              value={89}
              icon={UserPlus}
              trend="+15% este mês"
              delay={200}
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="glass p-8 rounded-xl text-center space-y-4 hover-scale transition-smooth">
              <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center mx-auto">
                <UserPlus className="h-8 w-8 text-accent-foreground" />
              </div>
              <h3 className="text-xl font-semibold">Registo Simples</h3>
              <p className="text-muted-foreground">
                Formulário intuitivo com validações robustas e conformidade RGPD
              </p>
            </div>

            <div className="glass p-8 rounded-xl text-center space-y-4 hover-scale transition-smooth">
              <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center mx-auto">
                <LayoutDashboard className="h-8 w-8 text-accent-foreground" />
              </div>
              <h3 className="text-xl font-semibold">Dashboard Avançado</h3>
              <p className="text-muted-foreground">
                Gestão completa com filtros, pesquisa e exportação em tempo real
              </p>
            </div>

            <div className="glass p-8 rounded-xl text-center space-y-4 hover-scale transition-smooth">
              <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center mx-auto">
                <TrendingUp className="h-8 w-8 text-accent-foreground" />
              </div>
              <h3 className="text-xl font-semibold">Análise em Tempo Real</h3>
              <p className="text-muted-foreground">
                Estatísticas atualizadas instantaneamente com visualizações modernas
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/50 py-8 px-4 mt-20">
        <div className="container mx-auto text-center text-sm text-muted-foreground">
          <p>© 2025 SRCA. Todos os direitos reservados.</p>
          <div className="flex justify-center gap-6 mt-4">
            <Link to="/termos" className="hover:text-foreground transition-colors">
              Termos de Serviço
            </Link>
            <Link to="/privacidade" className="hover:text-foreground transition-colors">
              Política de Privacidade
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
