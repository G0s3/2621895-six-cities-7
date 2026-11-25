import { useState, ChangeEvent, FormEvent } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../store';
import { postCommentAction } from '../../store/api-actions';

type FormState = {
  rating: string;
  review: string;
};

const MIN_REVIEW_LENGTH = 50;
const MAX_REVIEW_LENGTH = 300;

const INITIAL_FORM_STATE: FormState = {
  rating: '',
  review: '',
};

export const CommentSubmissionForm = () => {
  const [formData, setFormData] = useState<FormState>(INITIAL_FORM_STATE);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [hasError, setHasError] = useState(false);

  const { id: offerId } = useParams();
  const dispatch = useDispatch<AppDispatch>();

  const handleChange = (
    evt: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value });
  };

  const handleSubmit = async (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    if (!offerId) {
      return;
    }

    setIsSubmitting(true);
    setHasError(false);

    try {
      await dispatch(
        postCommentAction({
          comment: formData.review,
          rating: Number(formData.rating),
          offerId,
        }),
      ).unwrap();

      setFormData(INITIAL_FORM_STATE);
    } catch {
      setHasError(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const isSubmitDisabled =
    isSubmitting ||
    !formData.rating ||
    formData.review.length < MIN_REVIEW_LENGTH ||
    formData.review.length > MAX_REVIEW_LENGTH;

  return (
    <form
      className="reviews__form form"
      action="#"
      method="post"
      onSubmit={(evt) => {
        void handleSubmit(evt);
      }}
    >
      <label className="reviews__label form__label" htmlFor="review">
        Your review
      </label>
      <div className="reviews__rating-form form__rating">
        <input
          className="form__rating-input visually-hidden"
          name="rating"
          value="5"
          id="5-stars"
          type="radio"
          checked={formData.rating === '5'}
          onChange={handleChange}
          disabled={isSubmitting}
        />
        <label
          htmlFor="5-stars"
          className="reviews__rating-label form__rating-label"
          title="perfect"
        >
          <svg className="form__star-image" width="37" height="33">
            <use href="#icon-star"></use>
          </svg>
        </label>
        <input
          className="form__rating-input visually-hidden"
          name="rating"
          value="4"
          id="4-stars"
          type="radio"
          checked={formData.rating === '4'}
          onChange={handleChange}
          disabled={isSubmitting}
        />
        <label
          htmlFor="4-stars"
          className="reviews__rating-label form__rating-label"
          title="good"
        >
          <svg className="form__star-image" width="37" height="33">
            <use href="#icon-star"></use>
          </svg>
        </label>
        <input
          className="form__rating-input visually-hidden"
          name="rating"
          value="3"
          id="3-stars"
          type="radio"
          checked={formData.rating === '3'}
          onChange={handleChange}
          disabled={isSubmitting}
        />
        <label
          htmlFor="3-stars"
          className="reviews__rating-label form__rating-label"
          title="not bad"
        >
          <svg className="form__star-image" width="37" height="33">
            <use href="#icon-star"></use>
          </svg>
        </label>
        <input
          className="form__rating-input visually-hidden"
          name="rating"
          value="2"
          id="2-stars"
          type="radio"
          checked={formData.rating === '2'}
          onChange={handleChange}
          disabled={isSubmitting}
        />
        <label
          htmlFor="2-stars"
          className="reviews__rating-label form__rating-label"
          title="badly"
        >
          <svg className="form__star-image" width="37" height="33">
            <use href="#icon-star"></use>
          </svg>
        </label>
        <input
          className="form__rating-input visually-hidden"
          name="rating"
          value="1"
          id="1-star"
          type="radio"
          checked={formData.rating === '1'}
          onChange={handleChange}
          disabled={isSubmitting}
        />
        <label
          htmlFor="1-star"
          className="reviews__rating-label form__rating-label"
          title="terribly"
        >
          <svg className="form__star-image" width="37" height="33">
            <use href="#icon-star"></use>
          </svg>
        </label>
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        value={formData.review}
        onChange={handleChange}
        disabled={isSubmitting}
      >
      </textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set{' '}
          <span className="reviews__star">rating</span> and describe your stay
          with at least{' '}
          <b className="reviews__text-amount">{MIN_REVIEW_LENGTH} characters</b>
          .
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={isSubmitDisabled}
        >
          Submit
        </button>
      </div>
      {hasError && (
        <p style={{ color: 'red', marginTop: '10px' }}>
          Failed to submit review. Please try again.
        </p>
      )}
    </form>
  );
};
