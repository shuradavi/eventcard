import { FC } from 'react';
import MoreBtn from '../Buttons/MoreBtn';
import RemoveBtn from '../Buttons/RemoveBtn';
import LikeBtn from '../Buttons/LikeBtn';

type ActionBarProps = {
    onMore: () => void,
    onRemove: () => void,
    onFav: () => void
}

const ActionBar: FC<ActionBarProps> = ({onMore, onRemove, onFav}) => {
    return (
        <footer className='action-bar'>
            <div className='action-more-remove-wrapper'>
                <MoreBtn onClick={onMore}/>
                <RemoveBtn onClick={onRemove} />
            </div>
            <div className='action-like-wrapper'>
                <LikeBtn onClick={onFav} />
            </div>
        </footer>
    );
};

export default ActionBar;