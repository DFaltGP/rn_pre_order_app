import { View, Pressable, PressableProps,Text } from 'react-native';
import { clsx } from 'clsx';

type CategoryProps = PressableProps & {
    title: string;
    isselected?: boolean
}

export default function CategoryButton ({ title, isselected, ...rest }: CategoryProps) {
    return (
        <Pressable {...rest} className={clsx('bg-slate-800 px-4 justify-center rounded-md h-10', isselected && 'border-2 border-lime-300')}>
            <Text className='text-slate-100 font-subtitle text-sm'>{title}</Text>
        </Pressable>
    )
}