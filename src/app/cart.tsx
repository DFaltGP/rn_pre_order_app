import { Alert, ScrollView, Text, View } from "react-native";

import Header from "@/components/header";
import { Product } from "@/components/product";
import { useState } from "react";

import { ProductCartProps, useCartStore } from "@/stores/cart-store";
import { formatCurrency } from "@/utils/functions/format-currency";
import Input from "@/components/input";
import { Button } from "@/components/button";
import { Feather } from "@expo/vector-icons";
import { LinkButton } from "@/components/link-button";

export default function Cart() {
  const [address, setAddress] = useState("")
  const cartStore = useCartStore();
  const total = formatCurrency(cartStore.products.reduce((total, product) => total + product.price * product.quantity, 0)) // Estude o reduce, interessante

    function handleProductRemove(product: ProductCartProps) {
        Alert.alert("Remover", `Deseja remover ${product.title} do carrinho?`, [
            {
                text: "Cancelar",
            }, {
                text: "Remover",
                onPress: () => cartStore.remove(product.id)
            }
        ])
    }

    function handleOrder() {
      if(address.trim().length === 0) {
        return Alert.alert("Pedido", "Informe os dados de entrega")
      }

      const products = cartStore.products.map((product) => `\n ${product.quantity} || ${product.title}`).join("")
      
      const message = `
      NOVO PEDIDO
      \n Entregar em: ${address}

      ${products}

      \n Valor total: ${total}
      `
console.log(message)
    }

  return (
    <View className="flex-1 pt-8">
      <Header title="Seu carrinho" />
        <ScrollView>
           <View className="p-5 flex-1">
        {cartStore.products.length > 0 ? (
            <View className="border-b border-slate-700">
          {cartStore.products.map((product) => (
            <Product onPress={() => handleProductRemove(product)} data={product} key={product.id} />
          ))}
        </View>
      ) : (
        <Text className="text-slate-400 font-body text-center my-8">
          Seu carrinho está vazio
        </Text>
      )}
      <View className="flex-row gap-2 items-center mt-5 mb-4">
        <Text className="text-white text-xl font-subtitle">Total:</Text>
        <Text className="text-lime-400 text-2xl font-heading">{total}</Text>
      </View>
      <Input placeholder="Informe o endereço de entrega com Rua, Bairro, CEP, Número e Complemento" onChangeText={setAddress}/>
      </View>
        </ScrollView>
        <View className="p-5 gap-5 ">
            <Button onPress={handleOrder}>
                <Button.Text>
                    Enviar pedido
                </Button.Text>
                <Button.Icon>
                    <Feather name="arrow-right-circle" size={20}/>
                </Button.Icon>
            </Button>
            <LinkButton href="/"  title="Voltar ao cardápio"/>
        </View>
    </View>
  );
}
