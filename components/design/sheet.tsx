import React, { useState } from 'react'
import { Button, Sheet, Text, View, YStack } from 'tamagui'

const SheetDemo = () => {
  const [position, setPosition] = React.useState(0)

  const [open, setOpen] = useState(false)

  return (
    <>
      <Button width={150} onPress={() => setOpen(!open)}>
        Open sheet
      </Button>
      <Sheet
        modal
        open={open}
        onOpenChange={setOpen}
        position={position}
        onPositionChange={setPosition}
        snapPointsMode='percent'
        snapPoints={[50, 50]}
        dismissOnSnapToBottom
        dismissOnOverlayPress
        animation='bouncy'
        animationConfig={{
          type: 'spring',
          damping: 20,
          mass: 0.8,
          stiffness: 300,
          overshootClamping: false,
        }}
      >
        <Sheet.Overlay
          animation='lazy'
          enterStyle={{ opacity: 0 }}
          exitStyle={{ opacity: 0 }}
          bg='$shadow6'
        />

        <Sheet.Handle bg='$borderColor' height={4} marginTop='$4' />

        <Sheet.Frame bg='$background'>
          <Sheet.ScrollView>
            <YStack gap='$2' style={{ padding: 20 }}>
              {Array.from({ length: 20 }).map((_, i) => (
                <View key={i} p={20} rounded={7} bg={'$purple3'}>
                  <Text>{i + 1}</Text>
                </View>
              ))}
            </YStack>
          </Sheet.ScrollView>
        </Sheet.Frame>
      </Sheet>
    </>
  )
}

export default SheetDemo
