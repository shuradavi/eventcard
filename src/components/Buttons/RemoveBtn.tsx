import { FC } from 'react';

type RemoveBtnProps = {
    onClick: () => void;
}
const RemoveBtn: FC<RemoveBtnProps> = ({onClick}) => {
    return (
        <button className='remove-btn' onClick={onClick}>Remove</button>
    );
};

export default RemoveBtn;