import { ReactNode } from 'react'
import { BaseText, type BaseTextProps } from './base-text'

type H1Props = Omit<BaseTextProps, 'weight'> & {
  children?: ReactNode
}
export const H1 = ({ children, ...props }: H1Props) => (
  <BaseText fontSize={32} lineHeight={40} weight='bold' {...props}>
    {children}
  </BaseText>
)
H1.displayName = 'H1'

type H2Props = Omit<BaseTextProps, 'weight'> & {
  children?: ReactNode
}
export const H2 = ({ children, ...props }: H2Props) => (
  <BaseText fontSize={28} lineHeight={36} weight='semibold' {...props}>
    {children}
  </BaseText>
)

type BodyProps = Omit<BaseTextProps, 'weight'> & {
  children?: ReactNode
}
export const Body = ({ children, ...props }: BodyProps) => (
  <BaseText fontSize={16} lineHeight={24} weight='regular' {...props}>
    {children}
  </BaseText>
)

type SignatureProps = Omit<BaseTextProps, 'weight'> & {
  children?: ReactNode
}
export const Signature = ({ children, ...props }: SignatureProps) => (
  <BaseText fontSize={24} lineHeight={32} signature={true} {...props}>
    {children}
  </BaseText>
)
