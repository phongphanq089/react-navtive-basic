import { Text, styled } from 'tamagui'

export const BaseText = styled(Text, {
  fontFamily: 'Roboto-Regular' as any,
  color: '$color',
  variants: {
    weight: {
      light: { fontFamily: 'Roboto-Light' as any },
      regular: { fontFamily: 'Roboto-Regular' as any },
      medium: { fontFamily: 'Roboto-Medium' as any },
      semibold: { fontFamily: 'Roboto-SemiBold' as any },
      bold: { fontFamily: 'Roboto-Bold' as any },
    },
    signature: {
      true: { fontFamily: 'MomoSignature-Regular' as any },
    },
  } as const,
})

export type BaseTextProps = React.ComponentProps<typeof BaseText>
