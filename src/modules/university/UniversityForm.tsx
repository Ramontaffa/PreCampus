import FormLayout from "../../layout/FormLayout";
import FormSubtitle from "../../layout/components/FormSubtitle";
import FormInputMask from "../../layout/components/FormInputMask";
import FormTextInput from "../../layout/components/FormTextInput";
import Button from "../../components/Button";
import FormMultiSelect from "../../layout/components/FormMultiSelect";

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

function UniversityForm() {
    return (
        <FormLayout>
            <FormSubtitle text="DADOS DA UNIVERSIDADE" />
            <FormTextInput  label="RAZÃO SOCIAL" placeholder="Razão Social" />
            <FormTextInput label="EMAIL INSTITUCIONAL" placeholder="user@hotmail.com" />
            <div className="my-5 flex gap-2">
                <FormInputMask label="CNPJ" mask="00.000.000/0000-00" placeholder="00.000.000/0000-00"/>
                <FormInputMask label="TELEFONE" mask="(00) 0000-0000" placeholder="(99) 9999-9999" />
            </div>
            <div>
                <FormSubtitle text="CURSOS OFERECIDOS" />
                <FormMultiSelect label="CURSOS OFERECIDOS" options={courseOptions}/>

            </div>
            <div className="mb-10 flex-col mt-10    w-100">
            <FormTextInput label="SENHA"/>
            <FormTextInput label="CONFIRMAR SENHA"/>
            </div>

            <Button text="Confirmar"/>
        </FormLayout>
    )
}

export default UniversityForm;