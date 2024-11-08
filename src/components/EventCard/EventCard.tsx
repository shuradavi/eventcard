import { ReactNode, FC } from 'react';
import ActionBar from './ActionBar';
import Title from './Title';
import Content from './Content';

type EventCardExtensions = {
    Title: typeof Title;
    Content: typeof Content;
    ActionBar: typeof ActionBar;
}
type EventCardProps = {
    children: ReactNode
}

export const EventCard: FC<EventCardProps> & EventCardExtensions = ({children}) => {
    return <article className='eventcard'>{children}</article>
};

EventCard.Title = Title;
EventCard.Content = Content;
EventCard.ActionBar = ActionBar;

export default EventCard;

