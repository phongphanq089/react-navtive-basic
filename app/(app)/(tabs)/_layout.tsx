import { HapticTab } from '@/components/haptic-tab'
import Feather from '@expo/vector-icons/Feather'
import FontAwesome from '@expo/vector-icons/FontAwesome'
import { Tabs, useRouter } from 'expo-router'
import React from 'react'
import { Pressable, StyleSheet } from 'react-native'
import { Card } from 'tamagui'

const LayoutTabs = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#ffd33d',
        tabBarButton: HapticTab,
        tabBarStyle: {
          backgroundColor: 'white',
          borderTopWidth: 1,
          borderTopColor: '#ce1414ff',
          height: 80,
          paddingBottom: 20,
          paddingTop: 10,
          borderRadius: 30,
          width: '95%',
          margin: 'auto',
          bottom: 10,
        },
      }}
    >
      <Tabs.Screen
        name='test-ui'
        options={{
          title: 'Test Ui',
          tabBarIcon: ({ color }) => {
            return <Feather name='edit' size={24} color={color} />
          },
        }}
      />
      <Tabs.Screen
        name='index'
        options={{
          title: '',
          tabBarIcon: () => null,
          tabBarLabel: () => null,
          tabBarButton: () => <HomeButton />,
        }}
      />
      <Tabs.Screen
        name='design'
        options={{
          title: 'Design',
          tabBarIcon: ({ color }) => {
            return <FontAwesome name='tachometer' size={24} color={color} />
          },
        }}
      />
    </Tabs>
  )
}

export default LayoutTabs

function HomeButton() {
  const router = useRouter()
  return (
    <Card
      bg='$purple9'
      position='absolute'
      top={-20}
      borderColor='$purple9'
      borderRadius='$10'
      width={60}
      height={60}
      alignSelf='center'
    >
      <Pressable
        onPress={() => router.replace('/' as `/(app)/(tabs)/index`)}
        style={({ pressed }) => [
          { opacity: pressed ? 0.8 : 1 },
          styles.plusButtonInner,
        ]}
      >
        <Feather name='home' size={24} color='black' />
      </Pressable>
    </Card>
  )
}

const styles = StyleSheet.create({
  plusButtonInner: {
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
