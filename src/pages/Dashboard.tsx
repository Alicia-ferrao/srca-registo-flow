import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card } from "@/components/ui/card";
import { Search, Download, Users, TrendingUp, UserPlus } from "lucide-react";
import Header from "@/components/Header";
import StatsCard from "@/components/StatsCard";

// Mock data
const mockParticipants = [
  {
    id: 1,
    nomeCompleto: "Ana Sofia Costa",
    email: "ana.costa@exemplo.pt",
    instituicao: "Universidade de Lisboa",
    tipoInscricao: "Investigador",
    pais: "Portugal",
    criadoEm: "2025-01-15",
  },
  {
    id: 2,
    nomeCompleto: "Miguel Santos",
    email: "miguel.santos@exemplo.pt",
    instituicao: "Universidade do Porto",
    tipoInscricao: "Estudante",
    pais: "Portugal",
    criadoEm: "2025-01-16",
  },
  {
    id: 3,
    nomeCompleto: "Carla Ferreira",
    email: "carla.ferreira@exemplo.pt",
    instituicao: "Instituto Politécnico de Coimbra",
    tipoInscricao: "Convidado",
    pais: "Portugal",
    criadoEm: "2025-01-17",
  },
];

const Dashboard = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState("all");

  const filteredParticipants = mockParticipants.filter((p) => {
    const matchesSearch =
      p.nomeCompleto.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.instituicao.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesFilter =
      filterType === "all" || p.tipoInscricao === filterType;

    return matchesSearch && matchesFilter;
  });

  const handleExport = () => {
    console.log("Exporting participants...");
    // Simulate CSV export
    const csv = [
      ["Nome", "Email", "Instituição", "Tipo", "País", "Data"].join(","),
      ...filteredParticipants.map((p) =>
        [
          p.nomeCompleto,
          p.email,
          p.instituicao,
          p.tipoInscricao,
          p.pais,
          p.criadoEm,
        ].join(",")
      ),
    ].join("\n");

    const blob = new Blob([csv], { type: "text/csv" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "participantes.csv";
    a.click();
  };

  return (
    <div className="min-h-screen bg-gradient-hero">
      <Header />
      <div className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-7xl">
          {/* Header */}
          <div className="mb-8 animate-fade-in">
            <h1 className="text-4xl font-bold mb-2">Dashboard Administrativo</h1>
            <p className="text-muted-foreground">
              Gestão completa de participantes
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 animate-slide-up">
            <StatsCard
              title="Total de Inscritos"
              value={mockParticipants.length}
              icon={Users}
              delay={0}
            />
            <StatsCard
              title="Investigadores"
              value={mockParticipants.filter((p) => p.tipoInscricao === "Investigador").length}
              icon={TrendingUp}
              delay={100}
            />
            <StatsCard
              title="Estudantes"
              value={mockParticipants.filter((p) => p.tipoInscricao === "Estudante").length}
              icon={UserPlus}
              delay={200}
            />
          </div>

          {/* Filters and Search */}
          <Card className="glass p-6 mb-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Pesquisar por nome, email ou instituição..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Select value={filterType} onValueChange={setFilterType}>
                <SelectTrigger className="w-full md:w-[200px]">
                  <SelectValue placeholder="Filtrar por tipo" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Todos</SelectItem>
                  <SelectItem value="Estudante">Estudante</SelectItem>
                  <SelectItem value="Investigador">Investigador</SelectItem>
                  <SelectItem value="Convidado">Convidado</SelectItem>
                </SelectContent>
              </Select>
              <Button
                onClick={handleExport}
                className="bg-gradient-accent hover:opacity-90"
              >
                <Download className="mr-2 h-4 w-4" />
                Exportar CSV
              </Button>
            </div>
          </Card>

          {/* Table */}
          <Card className="glass overflow-hidden">
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow className="border-border/50 hover:bg-transparent">
                    <TableHead>Nome</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Instituição</TableHead>
                    <TableHead>Tipo</TableHead>
                    <TableHead>País</TableHead>
                    <TableHead>Data</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredParticipants.map((participant) => (
                    <TableRow
                      key={participant.id}
                      className="border-border/50 hover:bg-muted/50 transition-colors"
                    >
                      <TableCell className="font-medium">
                        {participant.nomeCompleto}
                      </TableCell>
                      <TableCell className="text-muted-foreground">
                        {participant.email}
                      </TableCell>
                      <TableCell className="text-muted-foreground">
                        {participant.instituicao}
                      </TableCell>
                      <TableCell>
                        <span
                          className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                            participant.tipoInscricao === "Investigador"
                              ? "bg-accent/20 text-accent"
                              : participant.tipoInscricao === "Estudante"
                              ? "bg-primary/20 text-primary"
                              : "bg-muted text-muted-foreground"
                          }`}
                        >
                          {participant.tipoInscricao}
                        </span>
                      </TableCell>
                      <TableCell className="text-muted-foreground">
                        {participant.pais}
                      </TableCell>
                      <TableCell className="text-muted-foreground">
                        {participant.criadoEm}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </Card>

          {filteredParticipants.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">
                Nenhum participante encontrado
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
