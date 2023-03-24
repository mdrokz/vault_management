import tw, { styled, css } from 'twin.macro';


const StyledCircularProgress = tw.div`
  relative w-16 h-16
`;

const Circle = tw.svg`
  absolute w-full h-full
`;

const StyledCircleProgress = styled.circle(({ progress, time = 0.3 }: { progress: number, time: number }) => [
    // tw`transform -rotate-90`,
    css`transition: stroke-dashoffset ${time}3s cubic-bezier(0.4, 0, 0.2, 1), transform ${time}s cubic-bezier(0.4, 0, 0.2, 1);`,
    css`stroke-dashoffset: ${(1 - progress / 100) * 251.32741228718345};`
]);

const CircularProgress = ({progress,time = 0.3}: { progress: number, time?: number }) => <StyledCircularProgress>
    <Circle viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="40" strokeWidth="10" fill="none" stroke="#e6e6e6" />
        <StyledCircleProgress
            cx="50"
            cy="50"
            r="40"
            strokeWidth="10"
            fill="none"
            stroke="lime"
            strokeLinecap="round"
            strokeDasharray="251.32741228718345"
            progress={progress}
            time={time}
        />
    </Circle>
</StyledCircularProgress>

export default CircularProgress;