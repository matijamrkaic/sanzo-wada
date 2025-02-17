import React from 'react'
import styled from 'styled-components'
import { comboData, SwatchHeader, CopyHex } from './../components'
import { flexRow, SwatchLink, ComboTitle, ComboHex } from './../styles'
import { spacing, shared } from './../styles/theme.json'

const Swatch = (props) =>
  <React.Fragment>
    <SwatchHeader>
      <ComboTitle>Combination: {props.slug}</ComboTitle>
      <ComboHex>
        {props.colors.map((color, i) =>
          <CopyHex hex={color.hex } key={`${props.slug}-title-${i}`}/>
        )}
      </ComboHex>
    </SwatchHeader>
    <ComboSection>
      <ComboWrapper>
        {props.colors.map((color, i) =>
          <ColorBar key={`${props.slug}-${i}`} style={{ backgroundColor: color.hex }}>
            <SwatchLink to={`/swatch/${color.slug}`}>
              <p className={'name'}>{color.name}</p>
            </SwatchLink>
          </ColorBar>
        )}
      </ComboWrapper>
    </ComboSection>
  </React.Fragment>

export default comboData(Swatch)

// STYLES
const ComboSection = styled.section`
  display: flex;
  width: 100%;
  height: 100vh;
  padding-top: calc(${spacing.single_pad} + ${shared.nav_height});
  padding-left: ${spacing.single_pad};
  padding-right: ${spacing.single_pad};
  padding-bottom: ${spacing.double_pad};
`

const ComboWrapper = styled.div`
  ${flexRow};
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  z-index: 0;
`

const ColorBar = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  flex: 1;
  padding: ${spacing.single_pad};
  p {
    position: absolute;
    display: block;
    opacity: 0;
    transition: opacity 300ms ease;
    will-change: opacity;
  }
  .name {
    left: ${spacing.single_pad};
    top: calc(${spacing.single_pad} + ${shared.nav_height});
    text-align: right;
  }
  .hex {
    right: ${spacing.single_pad};
    top: calc(${spacing.single_pad} + ${shared.nav_height});
  }
  &:hover {
    p {
      opacity: 1;
    }
  }
`
