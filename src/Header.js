import React from 'react'

import { Helmet } from 'react-helmet'

const TITLE = '李冠霖 | Resume'

class PageHeader extends React.PureComponent {
  render () {
    return (
      <>
        <Helmet>
          <title>{ TITLE }</title>
          <meta name="description" content="resume" />
          <meta name="author" content="guan_lin" />
          <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
          {/* CSS */}
          <link rel="stylesheet" href="css/default.css" />
          <link rel="stylesheet" href="css/layout.css" />
          <link rel="stylesheet" href="css/media-queries.css" />
          <link rel="stylesheet" href="css/magnific-popup.css" />

          {/* Favicons */}
          <link rel="shortcut icon" href="favicon.png" />

        </Helmet>
      </>
    )
  }
}

export default PageHeader
