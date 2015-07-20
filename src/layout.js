'use strict';

import {fillin} from './utils';

let common, layout, inline, flex, flexAuto, flexNone;
let horizontal, horizontalReverse, vertical, verticalReverse;
let alignStart, alignCenter, alignEnd, alignStretch;
let selfAlignStart, selfAlignCenter, selfAlignEnd, selfAlignStretch;
let justifyStart, justifyCenter, justifyEnd, justifyBetween, justifyAround;
let block, hidden, invisible;
let relative, absolute;
let centered;

// Defaults
common = {
  boxSizing: 'border-box',
  flexWrap: 'wrap'
};

layout = fillin(common, {
  display: 'flex'
});

inline = fillin(common, {
  display: 'inline-flex'
});

flex = {
  flexGrow: 1,
  flexShrink: 1,
  flexBasis: '0%'
};

flexAuto = fillin(flex, {
  flexGrow: 1,
  flexShrink: 1,
  flexBasis: 'auto'
});

flexNone = {
  flexGrow: 0,
  flexShrink: 0,
  flexBasis: 'auto'
};

block = {
  display: 'block'
};

hidden = {
  display: 'none'
};

invisible = {
  visibility: 'hidden'
};

relative = {
  position: 'relative'
};

absolute = {
  position: 'absolute',
  top: 0,
  right: 0,
  bottom: 0,
  left: 0
};

horizontal = fillin(layout, {
  flexDirection: 'row'
});

horizontalReverse = fillin(layout, {
  flexDirection: 'row-reverse'
});

vertical = fillin(layout, {
  flexDirection: 'column'
});

verticalReverse = fillin(layout, {
  flexDirection: 'column-reverse'
});

alignStart = {
  alignItems: 'flex-start'
};

alignCenter = {
  alignItems: 'center'
};

alignEnd = {
  alignItems: 'flex-end'
};

alignStretch = {
  alignItems: 'stretch'
};

selfAlignStart = {
  alignSelf: 'flex-start'
};

selfAlignCenter = {
  alignSelf: 'center'
};

selfAlignEnd = {
  alignSelf: 'flex-end'
};

selfAlignStretch = {
  alignSelf: 'stretch'
};

justifyStart = {
  justifyContent: 'flex-start'
};

justifyCenter = {
  justifyContent: 'center'
};

justifyEnd = {
  justifyContent: 'flex-end'
};

justifyBetween = {
  justifyContent: 'space-between'
};

justifyAround = {
  justifyContent: 'space-around'
};

centered = fillin(layout, alignCenter, justifyCenter);

export default {
  block: block,
  hidden: hidden,
  invisible: invisible,
  centered: centered,
  relative: relative,
  absolute: absolute,
  layout: layout,
  inline: inline,
  flexAuto: flexAuto,
  flexNone: flexNone,
  horizontal: horizontal,
  horizontalReverse: horizontalReverse,
  vertical: vertical,
  verticalReverse: verticalReverse,
  alignStart: alignStart,
  alignCenter: alignCenter,
  alignEnd: alignEnd,
  alignStretch: alignStretch,
  selfAlignStart: selfAlignStart,
  selfAlignCenter: selfAlignCenter,
  selfAlignEnd: selfAlignEnd,
  selfAlignStretch: selfAlignStretch,
  justifyStart: justifyStart,
  justifyCenter: justifyCenter,
  justifyEnd: justifyEnd,
  justifyBetween: justifyBetween,
  justifyAround: justifyAround
};
