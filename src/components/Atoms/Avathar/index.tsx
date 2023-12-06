import React from 'react';
import * as AvatarPrimitive from '@radix-ui/react-avatar';
import  styled from '@emotion/styled';

export const AvatarRoot = styled(AvatarPrimitive.Root)({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  verticalAlign: 'middle',
  overflow: 'hidden',
  userSelect: 'none',
  width: 45,
  height: 45,
  borderRadius: '100%',
  backgroundColor: '#fff',
  color:'#000',
  border: '1px solid #000'
});

export const AvatarImage = styled(AvatarPrimitive.Image)( {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  borderRadius: 'inherit',
});

export const AvatarFallback = styled(AvatarPrimitive.Fallback)( {
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: 'white',
  fontSize: 15,
  lineHeight: 1,
  fontWeight: 500,
  color:'#000',
});