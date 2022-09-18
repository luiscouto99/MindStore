import {
  SidebarButton,
  SidebarForm,
  SidebarIcon,
  SidebarInput,
  SidebarInputImg,
  SidebarLabel,
} from '../../../../../components/Layout/Layout';

import arrowRight from '../../../../../assets/arrow-right.png';
import starBlack from '../../../../../assets/star-grey-darker.png';

function RatingButton({
  handleRatingFetch,
  handleRatingClick,
  isRatingClicked,
}: {
  handleRatingFetch: () => void;
  handleRatingClick: () => void;
  isRatingClicked: boolean;
}) {
  const ratingValues = [
    { min: 0, max: 1 },
    { min: 1, max: 2 },
    { min: 2, max: 3 },
    { min: 3, max: 4 },
    { min: 4, max: 5 },
  ];

  function handleRatingChange(event: any) {
    const min = ratingValues[event.target.value - 1].min;
    const max = ratingValues[event.target.value - 1].max;
    const link = `/rating?pagesize=12&min=${min}&max=${max}&direction=`;
    handleRatingFetch(link);
  }

  const StarLabelField = ({ amount }: { amount: number }) => (
    <SidebarLabel stars htmlFor="rating">
      <SidebarInput
        type="radio"
        name="rating"
        onChange={(amount: number) => handleRatingChange(amount)}
        value={amount}
      />
      {Array(amount)
        .fill(0)
        .map((_, index) => (
          <SidebarInputImg src={starBlack} alt="" key={index} />
        ))}
    </SidebarLabel>
  );

  return (
    <>
      <SidebarButton marginLeft onClick={handleRatingClick} value="rating">
        Rating
        <SidebarIcon rotation={isRatingClicked} src={arrowRight} alt="" />
      </SidebarButton>

      {isRatingClicked && (
        <SidebarForm>
          <StarLabelField amount={1} />
          <StarLabelField amount={2} />
          <StarLabelField amount={3} />
          <StarLabelField amount={4} />
          <StarLabelField amount={5} />
        </SidebarForm>
      )}
    </>
  );
}

export default RatingButton;
