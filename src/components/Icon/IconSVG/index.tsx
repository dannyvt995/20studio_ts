'use client';

import classNames from 'classnames';
import React from 'react';
import SVG, { Props } from 'react-inlinesvg';

export default function IconSVG(props: Props): React.ReactElement {
  return <SVG {...props} />;
}
