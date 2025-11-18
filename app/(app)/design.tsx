import SheetDemo from '@/components/design/sheet'
import { Body, H1, H2, Signature } from '@/components/ui/typography'
import React from 'react'
import { View } from 'tamagui'

const Page = () => {
  return (
    <View>
      <View>
        <H1 text={'left'} color={'$accent1'}>
          Welcome Back!
        </H1>
        <H2>Đăng nhập để tiếp tục</H2>
        <Body bg={'$purple1'}>
          Chúng tôi rất vui được gặp lại bạn. Hãy trải nghiệm dịch vụ tốt nhất.
        </Body>

        <Signature text={'right'}>— Momo Team —</Signature>

        <SheetDemo />
      </View>
    </View>
  )
}

export default Page
