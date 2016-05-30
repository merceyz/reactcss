'use strict'

import React from 'react'
import reactCSS from 'reactcss'

import { Container } from '../layout'
import { Grid } from '../../../modules/react-basic-layout'
const { Animate } = require('../common')
import Docs from '../../../modules/react-documentation'

import docsFiles from '../../documentation'

export const DocsBody = () => {
  const styles = reactCSS({
    'default': {
      docsBody: {
        paddingBottom: '80px',
      },
    },
  })

  return (
    <div style={ styles.docsBody } className="docsBody">
      <Container>

        <Animate inDelay={ 800 }>
          <Docs markdown={ docsFiles } />
        </Animate>

      </Container>
    </div>
  )
}

export default DocsBody
