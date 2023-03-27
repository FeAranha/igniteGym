import { VStack, Image, Center, Text, Heading, ScrollView } from "native-base";
import { AuthNavigatorRoutesProps } from "@routes/auth.routes";
import LogoSvg from "@assets/logo.svg";
import BackgroundImg from "@assets/background.png";
import { Input } from "@components/Input";
import { Button } from "@components/Button";
import { useNavigation } from "@react-navigation/native";

export function SignIn() {
  const navigation = useNavigation<AuthNavigatorRoutesProps>()

  function handleNewAccount(){
    navigation.navigate('signUp')
  }

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1}} showsHorizontalScrollIndicator={false}>
      <VStack flex={1} px={10} pb={16}>
        <Image
          source={BackgroundImg}
          defaultSource={BackgroundImg}
          alt="Pessoas treinando"
          resizeMode="contain"
          position="absolute"
        />
        <Center my={24}>
          <LogoSvg />

          <Text color="gray.100" fontSize="sm">
            Exercite seu corpo e treine sua mente
          </Text>
        </Center>

        <Center>
          <Heading color="gray.100" fontSize="xl" fontFamily="heading" mb={6}>
            Acesse sua conta
          </Heading>

          <Input
            placeholder="E-mail"
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <Input placeholder="Senha" secureTextEntry />

          <Button title="Acessar" />
        </Center>

        <Center mt={24}>
          <Text color="gray.100" fontSize="sm" fontFamily="body" mb={3}>
            Ainda não tem acesso?
          </Text>
          <Button title="Criar conta" variant="outline" onPress={handleNewAccount} />
        </Center>
      </VStack>
    </ScrollView>
  );
}
