import { FC } from 'react';
import imageLike from '../../icons/like.svg'

type LikeBtnProps = {
    onClick: () => void;
}
const LikeBtn: FC<LikeBtnProps> = ({onClick}) => {
    return (
        <div className='like-btn' onClick={onClick}>
            <img src={imageLike} width={20} height={20} alt='like icon'></img>
        </div>
    );
};

export default LikeBtn;