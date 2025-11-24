import React from 'react'
import { Dimensions, StyleSheet, Text, View } from 'react-native'
// import { Home, Search, ArrowLeft } from 'lucide-react';
import Feather from '@expo/vector-icons/Feather'

const { width } = Dimensions.get('window')

const NotFoundPage = () => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        {/* 404 Number */}
        <Text style={styles.errorCode}>404</Text>

        {/* Icon */}
        <View style={styles.iconContainer}>
          <Feather name='search' size={80} color='#CBD5E1' strokeWidth={1.5} />
        </View>

        {/* Message */}
        <Text style={styles.title}>Page Not Found</Text>
        <Text style={styles.description}>
          The page you're looking for doesn't exist or has been moved.
        </Text>

        {/* Action Buttons */}
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Feather name='arrow-left' size={20} color='#FFFFFF' />
            <Text style={styles.buttonText}>Go Back</Text>
          </View>

          <View style={[styles.button, styles.primaryButton]}>
            <Feather name='home' size={20} color='#FFFFFF' />
            <Text style={styles.buttonText}>Home</Text>
          </View>
        </View>
      </View>

      {/* Background Decoration */}
      <View style={styles.decoration1} />
      <View style={styles.decoration2} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0F172A',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    overflow: 'hidden',
  },
  content: {
    alignItems: 'center',
    paddingHorizontal: 24,
    zIndex: 1,
  },
  errorCode: {
    fontSize: 120,
    fontWeight: '800',
    color: '#1E293B',
    marginBottom: 20,
    textShadowColor: 'rgba(148, 163, 184, 0.1)',
    textShadowOffset: { width: 0, height: 4 },
    textShadowRadius: 10,
  },
  iconContainer: {
    marginBottom: 32,
    opacity: 0.8,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#F1F5F9',
    marginBottom: 12,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    color: '#94A3B8',
    textAlign: 'center',
    lineHeight: 24,
    marginBottom: 40,
    maxWidth: width * 0.8,
  },
  buttonContainer: {
    flexDirection: 'row',
    gap: 12,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    backgroundColor: '#334155',
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 12,
  },
  primaryButton: {
    backgroundColor: '#3B82F6',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  decoration1: {
    position: 'absolute',
    top: -100,
    right: -100,
    width: 300,
    height: 300,
    borderRadius: 150,
    backgroundColor: '#1E293B',
    opacity: 0.5,
  },
  decoration2: {
    position: 'absolute',
    bottom: -150,
    left: -150,
    width: 400,
    height: 400,
    borderRadius: 200,
    backgroundColor: '#1E293B',
    opacity: 0.3,
  },
})

export default NotFoundPage
