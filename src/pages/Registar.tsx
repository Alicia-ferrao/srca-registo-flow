import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { ArrowLeft, CheckCircle2, UserPlus } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";

const formSchema = z.object({
  nomeCompleto: z
    .string()
    .min(3, "Nome deve ter pelo menos 3 caracteres")
    .max(100, "Nome muito longo"),
  email: z
    .string()
    .email("Email inválido")
    .max(255, "Email muito longo"),
  instituicao: z
    .string()
    .min(2, "Instituição deve ter pelo menos 2 caracteres")
    .max(200, "Nome da instituição muito longo"),
  tipoInscricao: z.enum(["Estudante", "Investigador", "Convidado"], {
    required_error: "Selecione um tipo de inscrição",
  }),
  pais: z
    .string()
    .min(2, "País deve ter pelo menos 2 caracteres")
    .max(100, "Nome do país muito longo"),
  consentimentoRGPD: z.boolean().refine((val) => val === true, {
    message: "Deve aceitar os termos RGPD para continuar",
  }),
});

type FormData = z.infer<typeof formSchema>;

const Registar = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const consentimentoRGPD = watch("consentimentoRGPD");

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    console.log("Form submitted:", data);
    
    setIsSuccess(true);
    toast({
      title: "Inscrição confirmada!",
      description: `Bem-vindo, ${data.nomeCompleto}. Receberá um email de confirmação em breve.`,
    });

    setIsSubmitting(false);
  };

  if (isSuccess) {
    return (
      <div className="min-h-screen bg-gradient-hero">
        <Header />
        <div className="pt-32 pb-20 px-4">
          <div className="container mx-auto max-w-2xl">
            <Card className="glass p-12 text-center space-y-6 animate-scale-in">
              <div className="w-20 h-20 bg-gradient-accent rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="h-10 w-10 text-accent-foreground" />
              </div>
              <h2 className="text-3xl font-bold">Inscrição Confirmada!</h2>
              <p className="text-lg text-muted-foreground">
                A sua inscrição foi registada com sucesso. Receberá um email de confirmação em breve.
              </p>
              <div className="pt-6">
                <Link to="/">
                  <Button className="bg-gradient-accent hover:opacity-90">
                    Voltar ao Início
                  </Button>
                </Link>
              </div>
            </Card>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-hero">
      <Header />
      <div className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-2xl">
          <div className="mb-8 animate-fade-in">
            <Link to="/" className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Voltar
            </Link>
          </div>

          <Card className="glass p-8 animate-slide-up">
            <div className="mb-8">
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-3 bg-gradient-accent rounded-lg">
                  <UserPlus className="h-6 w-6 text-accent-foreground" />
                </div>
                <div>
                  <h1 className="text-3xl font-bold">Registar Participante</h1>
                  <p className="text-muted-foreground">Preencha o formulário abaixo</p>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="nomeCompleto">Nome Completo *</Label>
                <Input
                  id="nomeCompleto"
                  {...register("nomeCompleto")}
                  placeholder="João Silva"
                  className={errors.nomeCompleto ? "border-destructive" : ""}
                />
                {errors.nomeCompleto && (
                  <p className="text-sm text-destructive">{errors.nomeCompleto.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email *</Label>
                <Input
                  id="email"
                  type="email"
                  {...register("email")}
                  placeholder="joao.silva@exemplo.com"
                  className={errors.email ? "border-destructive" : ""}
                />
                {errors.email && (
                  <p className="text-sm text-destructive">{errors.email.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="instituicao">Instituição *</Label>
                <Input
                  id="instituicao"
                  {...register("instituicao")}
                  placeholder="Universidade de Lisboa"
                  className={errors.instituicao ? "border-destructive" : ""}
                />
                {errors.instituicao && (
                  <p className="text-sm text-destructive">{errors.instituicao.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="tipoInscricao">Tipo de Inscrição *</Label>
                <Select onValueChange={(value) => setValue("tipoInscricao", value as any)}>
                  <SelectTrigger className={errors.tipoInscricao ? "border-destructive" : ""}>
                    <SelectValue placeholder="Selecione o tipo" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Estudante">Estudante</SelectItem>
                    <SelectItem value="Investigador">Investigador</SelectItem>
                    <SelectItem value="Convidado">Convidado</SelectItem>
                  </SelectContent>
                </Select>
                {errors.tipoInscricao && (
                  <p className="text-sm text-destructive">{errors.tipoInscricao.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="pais">País *</Label>
                <Input
                  id="pais"
                  {...register("pais")}
                  placeholder="Portugal"
                  className={errors.pais ? "border-destructive" : ""}
                />
                {errors.pais && (
                  <p className="text-sm text-destructive">{errors.pais.message}</p>
                )}
              </div>

              <div className="flex items-start space-x-3 p-4 glass rounded-lg">
                <Checkbox
                  id="consentimentoRGPD"
                  checked={consentimentoRGPD}
                  onCheckedChange={(checked) => setValue("consentimentoRGPD", checked as boolean)}
                  className={errors.consentimentoRGPD ? "border-destructive" : ""}
                />
                <div className="space-y-1">
                  <Label htmlFor="consentimentoRGPD" className="text-sm font-normal cursor-pointer">
                    Aceito os{" "}
                    <Link to="/termos" className="text-accent hover:underline">
                      termos de serviço
                    </Link>{" "}
                    e a{" "}
                    <Link to="/privacidade" className="text-accent hover:underline">
                      política de privacidade
                    </Link>{" "}
                    (RGPD) *
                  </Label>
                  {errors.consentimentoRGPD && (
                    <p className="text-sm text-destructive">{errors.consentimentoRGPD.message}</p>
                  )}
                </div>
              </div>

              <Button
                type="submit"
                className="w-full bg-gradient-accent hover:opacity-90 transition-opacity"
                disabled={isSubmitting}
              >
                {isSubmitting ? "A processar..." : "Registar Inscrição"}
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Registar;
