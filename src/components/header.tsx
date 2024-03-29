import { Image, Text, View, TouchableOpacity } from "react-native";
import { Feather } from '@expo/vector-icons';
import { Link } from "expo-router";
import colors from "tailwindcss/colors";

type HeaderProps = {
    title: string;
    cartQuantityItems?: number
}

export default function Header({ title, cartQuantityItems = 0 }: HeaderProps) {
    return (
        <View className="flex-row items-center border-b border-slate-700 pb-5 mx-5">
            <View className="flex-1">
                <Image source={require('@/assets/logo.png')} className="h-6 w-32"/>
                <Text className="text-white text-2xl font-heading mt-2">{title}</Text>
            </View>

        {
            cartQuantityItems > 0 && (
                <Link href="/cart" asChild>
                    <TouchableOpacity activeOpacity={0.7} className="relative">
                <View className="top-2 z-10 -right-3.5 bg-lime-300 w-4 h-4 rounded-full items-center justify-center">
                     <Text className="font-bold text-slate-900 text-xs ">{cartQuantityItems}</Text>
                 </View>
                 <Feather name="shopping-bag" color={colors.white} size={24}/>
                </TouchableOpacity>
                </Link>
            )
        }

        </View>
    )
}