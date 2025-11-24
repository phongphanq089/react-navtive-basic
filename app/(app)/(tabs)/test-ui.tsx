import { Body } from '@/components/ui/typography'
import { BgSafeAreaView } from '@/constants/theme'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ScrollView, View, YStack } from 'tamagui'

const Page = () => {
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
