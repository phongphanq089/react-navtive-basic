import FontsProvider, { useFonts } from '@/provider/fonts-provider'
import { tamaguiConfig } from '@/tamagui.config'
import { ClerkProvider } from '@clerk/clerk-expo'
import { tokenCache } from '@clerk/clerk-expo/token-cache'
import { Slot } from 'expo-router'
import * as SplashScreen from 'expo-splash-screen'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { PortalProvider, TamaguiProvider } from 'tamagui'

export const unstable_settings = {
  anchor: '(tabs)',
}

const PUBLISHABLE_KEY = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error('Missing Publishable Key')
}

SplashScreen.preventAutoHideAsync()

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <FontsProvider>
        <FontsLoader>
          <ClerkProvider tokenCache={tokenCache}>
            <TamaguiProvider config={tamaguiConfig}>
              <PortalProvider shouldAddRootHost>
                <Slot />
              </PortalProvider>
            </TamaguiProvider>
          </ClerkProvider>
        </FontsLoader>
      </FontsProvider>
    </SafeAreaProvider>
  )
}

function FontsLoader({ children }: { children: React.ReactNode }) {
  const { fontsLoaded } = useFonts()

  if (!fontsLoaded) {
    return null
  }

  return <>{children}</>
}
