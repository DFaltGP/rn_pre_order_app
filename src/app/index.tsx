import { View, FlatList } from 'react-native';
import CategoryButton from '@/components/category-button';
import Header from '@/components/header';

import { useState } from 'react';

import { CATEGORIES } from '@/utils/data/products'

export default function Home() {
    const [category, setCategory] = useState(CATEGORIES[0]);

    function handleCategorySelected(selectedCategory: string) {
        setCategory(selectedCategory);
    }

    return (
        <View className="flex-1 pt-8">
            <Header title="Faça seu pedido" cartQuantityItems={3}/>
            <FlatList 
                data={CATEGORIES}
                keyExtractor={(item) => item}
                renderItem={({ item }) =>  <CategoryButton isselected={item === category} title={item} onPress={() => handleCategorySelected(item)}/> }
                horizontal
                className='max-h10 mt-5'
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ gap: 12, paddingHorizontal: 20 }}
            />
        </View>
        )
}