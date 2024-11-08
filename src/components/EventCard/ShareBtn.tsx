import { FC } from 'react';
import imageShare from '../../icons/share.svg'

type ShareBtnProps = {
    onClick: () => void;
}
const ShareBtn: FC<ShareBtnProps> = ({onClick}) => {
    return (
        <div className='share-btn' onClick={onClick}>
            <img src={imageShare} width={20} height={20} alt='share icon'></img>
        </div>
    );
};

export default ShareBtn;