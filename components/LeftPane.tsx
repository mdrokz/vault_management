import tw, { styled, css, theme } from 'twin.macro';

import { keyframes } from 'styled-components'
import { FC, useState } from 'react';


const StyledLeftPane = styled.div(() => [
  tw`
    w-64 h-full fixed left-0 top-0 border-r border-lime-light space-y-2
  `
])


const clickAnimation = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(0.95);
  }
  100% {
    transform: scale(1);
  }
`;

const Tab = styled.button(() => [
  tw`relative py-2 px-4 bg-white w-full text-gray-800 border-b-[1px] border-lime-light cursor-pointer focus:outline-none`,
  css`
  
  background-clip: padding-box;
  // border-bottom: 4px solid transparent;
  transition: background-color 0.3s ease, color 0.3s ease, transform 0.3s ease;
  font-size: 1rem;
  &:hover {
    color: #333;
    background-color: rgba(0, 0, 0, 0.02);
  }

  &:active {
    animation: ${clickAnimation} 0.2s;
  }

  &.active {
    background-color: #fff;
    background-image: linear-gradient(90deg, lime, limegreen);
    // background-clip: content-box;
    color: #333;
  }
  `
]);

// const Tab = tw.button`
//   bg-gradient-to-r from-lime-light to-lime-dark text-white py-2 px-4 rounded focus:outline-none
// `;

// const Tab = styled.button(() => [
//   tw`
//   bg-white
//   w-full
//   // focus:outline-none
//   border-b-2
//   border-lime-light
//   // focus:ring-2
//   // focus:ring-lime-500
//   // focus:ring-opacity-50
//   px-4
//   py-2
//   text-lime-600
//   font-semibold
//   cursor-pointer
//   relative
//   transition-all
//   duration-300
//   `,
//   css`
//   &:hover {
//    color: lime;
//   }
//   `
// ]);

// const Tab = tw.button`bg-gradient-to-r
// from-lime-500
// to-lime-600
// w-full
// hover:from-lime-600
// hover:to-lime-700
// focus:outline-none
// focus:ring-2
// focus:ring-lime-500
// focus:ring-opacity-50
// border-r-2
// border-b-2
// border-lime-700
// px-4
// py-2
// text-white
// font-semibold
// cursor-pointer
// transition-colors
// duration-300`;

// const ActiveTab = tw(Tab)`
// border-t border-r border-l
// border-gray-300
// bg-gray-200
// `;

enum TAB {
  VAULT,
  USER
}

interface Props {
  onClick: (id: TAB) => void;
}

const LeftPane: FC<Props> = (props) => {
  const [active, setActive] = useState(['active']);
  return (<StyledLeftPane>
    <Tab className={active[0]} onClick={() => {
      setActive(['active']);
      props.onClick(TAB.VAULT);
    }}>Vault</Tab>
    <Tab className={active[1]} onClick={() => {
      setActive(['', 'active']);
      props.onClick(TAB.USER);
    }}>Users</Tab>
  </StyledLeftPane>)
}

export default LeftPane;