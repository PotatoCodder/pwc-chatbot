import { ImageResponse } from 'next/og'
 
// Image metadata
export const size = {
  width: 32,
  height: 32,
}
export const contentType = 'image/png'
 
// Image generation
export default function Icon() {
  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'white',
        }}
      >
        <img
          src="https://i.imgur.com/M3KH5L4.png" // Example DA logo URL - REPLACE WITH YOUR IMAGE
          alt="DA Logo"
          style={{
            width: '80%',
            height: '80%',
            objectFit: 'contain',
          }}
        />
      </div>
    ),
    // ImageResponse options
    {
      ...size,
    }
  )
}