import { FC, PropsWithChildren } from 'react';
import tw, { styled, css } from 'twin.macro';
import CircularProgress from './CircularProgress';
import AuthorIcon from './icons/Author';
import DateIcon from './icons/Date';
import NoteIcon from './icons/Note';
import StarIcon from './icons/Star';
import TopicIcon from './icons/Topic';

const CardWrapper = styled.div(() => [
    // tw`border border-lime-light shadow-lime bg-white p-4 rounded-lg text-dark-grey min-w-[64%] min-h-[64%] flex flex-col cursor-pointer`,
    tw`border border-lime-light shadow-lg bg-white p-4 rounded-lg text-dark-grey flex flex-col cursor-pointer`,
    css`
    width: max-content;
    min-width: 16rem;
    max-width: 24rem;
    transition: box-shadow 0.3s cubic-bezier(0.4, 0, 0.2, 1), transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    &:hover,
    &:focus {
      ${tw`shadow-2xl scale-105`}
    }
  
    &:active {
      ${tw`shadow-inner scale-95`}
    }
    `
]);

const CardHeader = tw.h2`
    flex justify-between items-center
`;

const CardTitle = tw.h2`
  font-bold mb-2
`;

const CardBody = tw.div`
  flex-grow space-y-2
`;

const CardFooter = styled.div(({ footerColor }: { footerColor: string }) => [
    tw`h-1 mt-2 rounded`,
    css`background-color: ${footerColor}`
]);

const CardInfo = tw.div`
  text-gray-600 flex items-center space-x-1
`;


const Tag = tw.span`border border-lime-light text-dark-grey rounded-full py-0.5 px-2 mr-1 mb-1 inline-flex items-center text-xs`

const AccessLevel = styled.span(({ level }: { level: string }) => [
    tw`inline-flex items-center rounded-lg py-1 px-2 text-white font-semibold text-xs uppercase`,
    level === 'Private' ? tw`bg-red-500` : level === 'Public' ? tw`bg-green-500` : tw`bg-yellow-500`
]);


export interface Props {
    title: string,
    type: string,
    author: string,
    lastModified: string,
    createdDate: number,
    tags: string[],
    accessLevel: string,
    progress: number,
    topicsCount: number,
    isFavorite: boolean,
    notesCount: number,
    stripColor?: string,
}

const Card: FC<PropsWithChildren<Props>> = (props) => {
    const randomColor = props.stripColor ? props.stripColor : '#' + Math.floor(Math.random() * 16777215).toString(16);

    return (
        <CardWrapper>
            <CardHeader>
                <CardTitle>{props.title}</CardTitle>
                <StarIcon isFavourite={props.isFavorite} />
            </CardHeader>
            <CardBody>
                <CardInfo>
                    <AuthorIcon />
                    <span>
                        {props.author}
                    </span>
                </CardInfo>
                {/* <CardInfo>Last modified: {lastModified}</CardInfo> */}
                <CardInfo>
                    <DateIcon />
                    <span>
                        {new Date(props.createdDate).toISOString()}
                    </span>
                </CardInfo>
                {props.type === 'Vault' && (
                    <>
                        <CardInfo>
                            <span>📂</span>
                            {/* <TopicIcon /> */}
                            {/* Topics: {props.topicsCount} */}
                            <span>{props.topicsCount} topic{props.topicsCount === 1 ? '' : 's'}</span>
                        </CardInfo>
                        <CardInfo>
                            {/* Notes: {props.notesCount}
                             */}
                            <span>📝</span>
                            {/* <NoteIcon /> */}
                            <span>{props.notesCount} note{props.notesCount === 1 ? '' : 's'}</span>
                        </CardInfo>
                    </>
                )}
                {props.type === 'Topic' && <CardInfo>
                    <span>📝</span>
                    <span>{props.notesCount} note{props.notesCount === 1 ? '' : 's'}</span>
                </CardInfo>}
                <AccessLevel level={props.accessLevel}>{props.accessLevel}</AccessLevel>
                <div>
                    {props.tags.map((tag, index) => (
                        <Tag key={index}>{tag}</Tag>
                    ))}
                </div>
                {props.type === 'Topic' && (
                    <CircularProgress progress={props.progress} time={0.5} />
                )}
            </CardBody>
            <CardFooter footerColor={randomColor} />
        </CardWrapper>
    )
}

export default Card;