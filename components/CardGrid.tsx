
import tw, { styled, css } from 'twin.macro';

const StyledCardGrid = tw.div`
  grid grid-cols-3 gap-6 mt-24 mx-12
`;


const CardGrid = ({ children }: { children: any }) => {
    return (<StyledCardGrid>
        {children}
    </StyledCardGrid>)
}

export default CardGrid;