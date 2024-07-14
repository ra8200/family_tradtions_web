"use client";

import { Inter } from 'next/font/google'
import { cn } from '../lib/utils'
import '../styles/globals.css'
import NavBar from '@/components/navBar'

const fontHeading = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-heading',
})

const fontBody = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-body',
})

import React, { ReactNode } from 'react';

export default function RootLayout({ children } : { children : ReactNode }) {
  return (
    <html lang="en">
      <body 
        className={cn(
          'antialiased',
          fontHeading.variable,
          fontBody.variable
        )}
      >
        <NavBar />
            <main 
              className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'
            >
              {children}
            </main>
      </body>
    </html>
  )
}