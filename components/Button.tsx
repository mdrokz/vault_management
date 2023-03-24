import React, { FC, PropsWithChildren } from 'react';

import tw from 'twin.macro'

const SButton = tw.button`bg-gradient-to-r from-lime-light to-lime-dark text-white py-2 px-4 rounded shadow-lime hover:opacity-90 focus:outline-none`

interface Props {
  onClick: () => void
}


const Button: FC<PropsWithChildren<Props>> = (props) => {
  return (
    <SButton onClick={props.onClick}>
      {props.children}
    </SButton>
  )
}

export default Button;