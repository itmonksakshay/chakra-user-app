
import { FormProvider } from "react-hook-form"

interface IProps {
    methods: any;
    children: React.ReactNode;
    id?: string;
    onSubmit?: () => void;
}

const FormWrapper = ({ methods, children, ...extraProps }: IProps) => {
    return (
        <FormProvider {...methods}>
            <form {...extraProps}>{children}</form>
        </FormProvider>
    )
}

export default FormWrapper;
