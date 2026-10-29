import { Review as ReviewType } from '../../mocks/reviews';
import { Review } from '../review/review';
import { CommentSubmissionForm } from '../comment-submission-form/comment-submission-form';

type ReviewsListProps = {
  reviews: ReviewType[];
};

export const ReviewsList = ({ reviews }: ReviewsListProps) => (
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
    <CommentSubmissionForm />
  </section>
);
