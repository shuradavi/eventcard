import { ReactNode, FC } from 'react';
import ShareBtn from './ShareBtn';
type TitleProps = {
    children: ReactNode;
    onShareClick: () => void;
}

const Title: FC<TitleProps> = ({children, onShareClick}) => {
    return (
        <header className='header-eventcard'>
            <h3 className='title-eventcard'>{children}</h3>
            <ShareBtn onClick={onShareClick} />
        </header>
    );
};

export default Title;