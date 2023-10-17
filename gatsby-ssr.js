import * as React from "react"

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <link
      rel="preload"
      href="/fonts/LibreFranklin/LibreFranklin-Variable.woff"
      as="font"
      type="font/woff"
      crossOrigin="anonymous"
      key="libreFranklinVariableWoff"
    />,
    <link
      rel="preload"
      href="/fonts/LibreFranklin/LibreFranklin-Variable.woff2"
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
      key="libreFranklinVariableWoff2"
    />
  ])
}
