import { useToast } from "@chakra-ui/react";

export const CustomToast = () => {
    const toast = useToast();
    // types are: "success", "info", "warning", "error"

    const addToast = (newRes: any) => {
        toast({
            description: newRes.message,
            status: newRes.type,
            position: "bottom",
            isClosable: true,
            duration: 5000,
            variant: 'left-accent'
        })
    }

    return { addToast };
}