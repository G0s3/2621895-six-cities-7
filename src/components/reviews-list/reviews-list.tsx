import { useSelector } from 'react-redux';
import { AuthorizationStatus, Review as ReviewType } from '../../types';
import { Review } from '../review/review';
import { CommentSubmissionForm } from '../comment-submission-form/comment-submission-form';
import { RootState } from '../../store';

type ReviewsListProps = {
  reviews: ReviewType[];
};

export const ReviewsList = ({ reviews }: ReviewsListProps) => {
  const authorizationStatus = useSelector(
    (state: RootState) => state.authorizationStatus,
  );

  return (
    <section className="offer__reviews reviews">
      <h2 className="reviews__title">
        Reviews &middot;{' '}
        <span className="reviews__amount">{reviews.length}</span>
      </h2>
      <ul className="reviews__list">
        {reviews.map((review) => (
          <Review key={review.id} review={review} />
        ))}
      </ul>
      {authorizationStatus === AuthorizationStatus.Auth && (
        <CommentSubmissionForm />
      )}
    </section>
  );
};
