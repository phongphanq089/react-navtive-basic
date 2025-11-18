import * as Font from 'expo-font'
import { SplashScreen } from 'expo-router'
import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react'

SplashScreen.preventAutoHideAsync()

type FontsProviderProps = {
  children: ReactNode
}

const FontsContext = createContext<{ fontsLoaded: boolean }>({
  fontsLoaded: false,
})

const FontsProvider = ({ children }: FontsProviderProps) => {
  const [fontsLoaded, setFontsLoaded] = useState(false)

  useEffect(() => {
    async function loadFonts() {
      try {
        await Font.loadAsync({
          'Roboto-Light': require('../assets/fonts/Roboto-Light.ttf'),
          'Roboto-Regular': require('../assets/fonts/Roboto-Regular.ttf'),
          'Roboto-Medium': require('../assets/fonts/Roboto-Medium.ttf'),
          'Roboto-SemiBold': require('../assets/fonts/Roboto-SemiBold.ttf'),
          'Roboto-Bold': require('../assets/fonts/Roboto-Bold.ttf'),
          'MomoSignature-Regular': require('../assets/fonts/MomoSignature-Regular.ttf'),
        })
      } catch (error) {
        console.warn('Error loading fonts:', error)
      } finally {
        setFontsLoaded(true)
        await SplashScreen.hideAsync()
      }
    }

    loadFonts()
  }, [])
  return (
    <FontsContext.Provider value={{ fontsLoaded }}>
      {children}
    </FontsContext.Provider>
  )
}

FontsProvider.displayName = 'FontsProvider'

export default FontsProvider

export const useFonts = () => useContext(FontsContext)
