/** @jsx jsx */
import React, { memo } from 'react'
import { css, jsx } from '@emotion/react'

const Slide = ({ content, width }) => {
  return (
    <div
      css={css`
        height: 100%;
        width: ${width}px;
        background-image: url(${content});
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center center;
      `}
    />
  )
}

export default memo(Slide)
