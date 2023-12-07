import React from 'react';
import NextLink from 'next/link';
import { Text } from '../StyledText';

type CustomLinkProps = {
    url: any,
    text: string,
    color?: string,
    size?:"small" | "medium" | "large" | "xlarge" | 'xxlarge' | 'xxxlarge',
    weight?:string,
}

const CustomLink = (props: CustomLinkProps) => {
  return (
    <NextLink href={props.url} style={{cursor:'pointer'}}>
      <Text color={props?.color} size={props?.size}>{props.text}</Text>
    </NextLink>
  )
}

export default CustomLink;