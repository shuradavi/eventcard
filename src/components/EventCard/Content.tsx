import { FC, ReactNode } from 'react';

type ContentProps = {
    children: ReactNode
}
const Content: FC<ContentProps> = ({children}) => {
    return (
        <div className='description'>
            {children}
        </div>
    );
};

export default Content;