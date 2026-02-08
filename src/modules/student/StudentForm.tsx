import FormLayout from "../../layout/FormLayout";

import FormDateInput from "../../layout/components/FormDateInput";
import FormSubtitle from "../../layout/components/FormSubtitle";
import FormInputMask from "../../layout/components/FormInputMask";
import FormNumberInput from "../../layout/components/FormNumberInput";
import FormTextInput from "../../layout/components/FormTextInput";
import Button from "../../components/Button";
import FormMultiSelect from "../../layout/components/FormMultiSelect";

const universitieOptions = [
  { label: 'Universidade de São Paulo', value: 'USP' },
  { label: 'Universidade Estadual de Campinas', value: 'UNICAMP' },
  { label: 'Universidade Federal do Rio de Janeiro', value: 'UFRJ' },
  { label: 'Universidade Federal de Minas Gerais', value: 'UFMG' },
  { label: 'Universidade Federal do Rio Grande do Sul', value: 'UFRGS' },
  { label: 'Universidade Federal de Santa Catarina', value: 'UFSC' },
  { label: 'Universidade de Brasília', value: 'UNB' },
  { label: 'Universidade Estadual Paulista', value: 'UNESP' },
  { label: 'Universidade Federal do Paraná', value: 'UFPR' },
  { label: 'Universidade Federal de São Paulo', value: 'UNIFESP' },
  { label: 'Universidade Federal de São Carlos', value: 'UFSCAR' },
  { label: 'Universidade Federal de Pernambuco', value: 'UFPE' },
  { label: 'Universidade Federal da Bahia', value: 'UFBA' },
  { label: 'Universidade Federal do Ceará', value: 'UFC' },
  { label: 'Universidade Federal de Viçosa', value: 'UFV' },
  { label: 'Universidade Federal de Juiz de Fora', value: 'UFJF' },
  { label: 'Universidade Federal de Pelotas', value: 'UFPEL' },
  { label: 'Universidade Federal de Goiás', value: 'UFG' },
  { label: 'Universidade Federal do Rio Grande do Norte', value: 'UFRN' },
  { label: 'Universidade Federal do Espírito Santo', value: 'UFES' },
  { label: 'Universidade Federal de Mato Grosso do Sul', value: 'UFMS' },
  { label: 'Universidade Federal da Paraíba', value: 'UFPB' },
  { label: 'Universidade Federal de Alagoas', value: 'UFAL' },
  { label: 'Universidade Federal do Amazonas', value: 'UFAM' },
  { label: 'Universidade Federal do Pará', value: 'UFPA' },
  { label: 'Pontifícia Universidade Católica de São Paulo', value: 'PUCSP' },
  { label: 'Pontifícia Universidade Católica do Rio de Janeiro', value: 'PUCRJ' },
  { label: 'Pontifícia Universidade Católica do Rio Grande do Sul', value: 'PUCRS' },
  { label: 'Pontifícia Universidade Católica de Minas Gerais', value: 'PUCMG' },
  { label: 'Universidade Presbiteriana Mackenzie', value: 'MACKENZIE' },
  { label: 'Fundação Getulio Vargas', value: 'FGV' },
  { label: 'Instituto Tecnológico de Aeronáutica', value: 'ITA' },
  { label: 'Instituto Militar de Engenharia', value: 'IME' },
  { label: 'Universidade do Estado do Rio de Janeiro', value: 'UERJ' },
  { label: 'Universidade Estadual do Ceará', value: 'UECE' },
  { label: 'Universidade Estadual de Maringá', value: 'UEM' },
  { label: 'Universidade Estadual de Londrina', value: 'UEL' },
  { label: 'Universidade Federal de Santa Maria', value: 'UFSM' },
  { label: 'Universidade Federal de Ouro Preto', value: 'UFOP' },
  { label: 'Universidade Federal de Uberlândia', value: 'UFU' }
]

const courseOptions = [
  { label: 'Administração', value: 'administracao' },
  { label: 'Agronomia', value: 'agronomia' },
  { label: 'Análise e Desenvolvimento de Sistemas', value: 'ads' },
  { label: 'Arquitetura e Urbanismo', value: 'arquitetura_urbanismo' },
  { label: 'Artes Visuais', value: 'artes_visuais' },
  { label: 'Biomedicina', value: 'biomedicina' },
  { label: 'Ciência da Computação', value: 'ciencia_computacao' },
  { label: 'Ciências Biológicas', value: 'ciencias_biologicas' },
  { label: 'Ciências Contábeis', value: 'ciencias_contabeis' },
  { label: 'Ciências Econômicas', value: 'ciencias_economicas' },
  { label: 'Cinema e Audiovisual', value: 'cinema_audiovisual' },
  { label: 'Comércio Exterior', value: 'comercio_exterior' },
  { label: 'Design de Interiores', value: 'design_interiores' },
  { label: 'Design de Moda', value: 'design_moda' },
  { label: 'Design Gráfico', value: 'design_grafico' },
  { label: 'Direito', value: 'direito' },
  { label: 'Educação Física', value: 'educacao_fisica' },
  { label: 'Enfermagem', value: 'enfermagem' },
  { label: 'Engenharia Civil', value: 'engenharia_civil' },
  { label: 'Engenharia de Alimentos', value: 'engenharia_alimentos' },
  { label: 'Engenharia de Computação', value: 'engenharia_computacao' },
  { label: 'Engenharia de Produção', value: 'engenharia_producao' },
  { label: 'Engenharia de Software', value: 'engenharia_software' },
  { label: 'Engenharia Elétrica', value: 'engenharia_eletrica' },
  { label: 'Engenharia Mecânica', value: 'engenharia_mecanica' },
  { label: 'Engenharia Química', value: 'engenharia_quimica' },
  { label: 'Estética e Cosmética', value: 'estetica_cosmetica' },
  { label: 'Farmácia', value: 'farmacia' },
  { label: 'Fisioterapia', value: 'fisioterapia' },
  { label: 'Fonoaudiologia', value: 'fonoaudiologia' },
  { label: 'Gastronomia', value: 'gastronomia' },
  { label: 'Gestão de Recursos Humanos', value: 'gestao_rh' },
  { label: 'Gestão Financeira', value: 'gestao_financeira' },
  { label: 'Gestão Pública', value: 'gestao_publica' },
  { label: 'História', value: 'historia' },
  { label: 'Jornalismo', value: 'jornalismo' },
  { label: 'Letras', value: 'letras' },
  { label: 'Logística', value: 'logistica' },
  { label: 'Marketing', value: 'marketing' },
  { label: 'Matemática', value: 'matematica' },
  { label: 'Medicina', value: 'medicina' },
  { label: 'Medicina Veterinária', value: 'medicina_veterinaria' },
  { label: 'Nutrição', value: 'nutricao' },
  { label: 'Odontologia', value: 'odontologia' },
  { label: 'Pedagogia', value: 'pedagogia' },
  { label: 'Psicologia', value: 'psicologia' },
  { label: 'Publicidade e Propaganda', value: 'publicidade_propaganda' },
  { label: 'Radiologia', value: 'radiologia' },
  { label: 'Relações Internacionais', value: 'relacoes_internacionais' },
  { label: 'Sistemas de Informação', value: 'sistemas_informacao' }
];

function StudentForm() {
    return (
        <FormLayout>
            <FormSubtitle text="DADOS DO ALUNO" />
            <FormTextInput  label="NOME COMPLETO" placeholder="Nome do aluno" />
            <FormTextInput label="EMAIL" placeholder="user@hotmail.com" />
            <div className="my-5 flex gap-2">
                <FormDateInput label="DATA DE NASCIMENTO" />
                <FormInputMask label="TELEFONE" mask="(00) 0000-0000" placeholder="(99) 9999-9999" />
            </div>
            <div className="my-5 flex flex-col gap-2">
                <FormMultiSelect label="UNIVERSIDADE DE INTERESSE" options={universitieOptions} />
                <FormMultiSelect label="CURSOS DE INTERESSE" options={courseOptions}/>
            </div>
            <FormSubtitle text="DADOS DO RESPONSÁVEL" />
                <FormTextInput  label="NOME COMPLETO" placeholder="Nome do responsável" />
                <FormTextInput label="EMAIL" placeholder="user@hotmail.com" />
                <div className="my-5 flex gap-2">
                    <FormTextInput label="GRAU DE PARENTESCO" placeholder="Ex: Mãe, Pai, Tio, Tia..." />
                    <FormInputMask label="CPF" mask="000.000.000-00" placeholder="123.456.789-10" />
                    <FormNumberInput label="RENDA MENSAL"placeholder="R$ 2.000"/>
                </div>
                <div className="mb-10">
                    <FormTextInput label="SENHA" />
                    <FormTextInput label="CONFIRMAR SENHA" />
                </div>
                <Button text="Confirmar"/>
        </FormLayout>
    )
}

export default StudentForm;