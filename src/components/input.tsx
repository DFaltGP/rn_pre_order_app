import { TextInput, TextInputProps } from "react-native"
import colors from "tailwindcss/colors"



export default function Input({ ...rest }: TextInputProps) {
    return (
        <TextInput className="pl-5 rounded-md bg-slate-800 h-32 px-4 py-3 font-body text-sm text-white" multiline textAlignVertical="top" placeholderTextColor={colors.slate[400]} {...rest}/>
    )
}