
import { FormProvider } from 'react-hook-form';

interface IProps {
    methods: any;
    children: React.ReactNode;
    id?: string;
    onSubmit?: () => void;
}

const FormWrapper = ({ methods, children, ...extraProps }: IProps) => {
    return (
        <FormProvider {...methods}>
            <div {...extraProps}>{children}</div>
        </FormProvider>
    )
}

export default FormWrapper;
