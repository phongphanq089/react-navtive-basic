import { Body, H1, H2, Signature } from '@/components/ui/typography'
import { BgSafeAreaView } from '@/constants/theme'
import { useSignIn } from '@clerk/clerk-expo'
import { Link } from 'expo-router'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ScrollView, View, YStack } from 'tamagui'

const Page = () => {
  const { signIn, setActive, isLoaded } = useSignIn()

  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: BgSafeAreaView }}
      edges={['top', 'bottom']}
    >
      <ScrollView
        flex={1}
        bg='$background'
        contentContainerStyle={{ paddingBlockEnd: 100 }}
      >
        <H1 text={'left'} color={'$accent1'}>
          Welcome Back!
        </H1>
        <H2>Đăng nhập để tiếp tục</H2>
        <Body bg={'$purple1'}>
          Chúng tôi rất vui được gặp lại bạn. Hãy trải nghiệm dịch vụ tốt nhất.
        </Body>

        <Signature text={'right'}>— Momo Team —</Signature>
        <Link href={'/design'}>Design Component </Link>

        <YStack gap='$2' style={{ padding: 80 }}>
          {Array.from({ length: 20 }).map((_, i) => (
            <View key={i} style={{ padding: 10 }} rounded={7} bg={'$purple3'}>
              <Body>{i + 1}</Body>
            </View>
          ))}
        </YStack>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Page
