import FormLayout from "../../layout/FormLayout";


import FormSubtitle from "../../layout/components/FormSubtitle";
import FormInputMask from "../../layout/components/FormInputMask";
import FormNumberInput from "../../layout/components/FormNumberInput";
import FormTextInput from "../../layout/components/FormTextInput";
import Button from "../../components/Button";

function SchoolForm() {
    return (
        <FormLayout>
            <FormSubtitle text="DADOS DA ESCOLA" />
            <FormTextInput  label="RAZÃO SOCIAL" placeholder="Razão Social" />
            <FormTextInput label="EMAIL INSTITUCIONAL" placeholder="user@hotmail.com" />
            <div className="my-5 flex gap-2">
                <FormInputMask label="CNPJ" mask="00.000.000/0000-00" placeholder="00.000.000/0000-00"/>
                <FormInputMask label="TELEFONE" mask="(00) 0000-0000" placeholder="(99) 9999-9999" />
            </div>
            <div >
                <FormSubtitle text="QUANTIDADE DE TURMAS" />
                <div className="my-5 flex gap-2">
                <FormNumberInput label="1º ANO"/>
                <FormNumberInput label="2º ANO"/>
                <FormNumberInput label="3º ANO"/> 
                </div>
            <div >
                <FormSubtitle text="QUANTIDADE DE ALUNOS" />
                <div className="my-5 flex gap-2">
                <FormNumberInput label="1º ANO"/>
                <FormNumberInput label="2º ANO"/>
                <FormNumberInput label="3º ANO"/> 
                </div>
               </div>
            </div>
            <div className="mb-10 flex-col w-100">
            <FormTextInput label="SENHA"/>
            <FormTextInput label="CONFIRMAR SENHA"/>
            </div>

            <Button text="Confirmar"/>
        </FormLayout>
    )
}

export default SchoolForm;