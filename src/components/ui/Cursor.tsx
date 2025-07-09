import AnimatedCursor from 'react-animated-cursor'

export default function Cursor() {
  return (
    <AnimatedCursor
      innerSize={8}
      outerSize={8}
      color="243, 181, 27"
      outerAlpha={0.2}
      innerScale={0.8}
      outerScale={4}
      showSystemCursor={true}
      innerStyle={{
        mixBlendMode: 'difference',
      }}
      outerStyle={{
        mixBlendMode: 'difference',
      }}
      clickables={[
        'a',
        'input[type="text"]',
        'input[type="email"]',
        'input[type="number"]',
        'input[type="submit"]',
        'input[type="image"]',
        'label[for]',
        'select',
        'textarea',
        'button',
        '.link',
      ]}
    />
  )
}
