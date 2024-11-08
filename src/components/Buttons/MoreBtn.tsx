import { FC } from 'react';

type MoreBtnProps = {
    onClick: () => void;
}
const MoreBtn: FC<MoreBtnProps> = ({onClick}) => {
    return (
        <button className='moreinfo-btn' onClick={onClick}>
            More info
        </button>
    );
};

export default MoreBtn;