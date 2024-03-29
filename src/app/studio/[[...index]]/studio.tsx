'use client'

import { NextStudio } from 'next-sanity/studio'
import { StudioLayout, StudioProvider } from 'sanity'
import config from 'sanity.config'

export function Studio() {
  return (
    <NextStudio config={config}>
      <StudioProvider config={config}>
        {/* Put components here and you'll have access to the same React hooks as Studio gives you when writing plugins */}
        <StudioLayout />
      </StudioProvider>
    </NextStudio>
  )
}
