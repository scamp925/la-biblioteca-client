/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from 'react';
import {
  Popover, OverlayTrigger, Button,
} from 'react-bootstrap';
import PropTypes from 'prop-types';
import { addReaction, removeReaction } from '../utils/data/reviewData';
import getAllReviewReactions from '../utils/data/reactionData';
import { useAuth } from '../utils/context/authContext';

function Reactions({ reviewId }) {
  const [reactions, setReactions] = useState([]);
  const [showPop, setShowPop] = useState(false);
  const { user } = useAuth();
  const getReactions = () => {
    getAllReviewReactions(reviewId).then(setReactions);
  };

  const handleClick = (e) => {
    const { value, id } = e.target;
    if (value === 'true') {
      removeReaction(reviewId, id, user.id).then(() => getReactions());
    } else {
      addReaction(reviewId, id, user.id).then(() => getReactions());
    }
    if (e.target.className === 'reactions') {
      setShowPop(!showPop);
    }
  };

  useEffect(() => {
    getReactions();
  }, [reviewId]);

  return (
    <div className="reactions-container">
      <OverlayTrigger
        show={showPop}
        placement="bottom"
        trigger="click"
        rootClose
        onToggle={() => setShowPop(!showPop)}
        overlay={(
          <Popover>
            <Popover.Body className="reactions-dropdown">
              {reactions?.map((reaction) => (
                <input className="reactions" type="image" key={reaction.id} onClick={handleClick} value={reaction.reaction_clicked} id={reaction.id} src={reaction.image_url} />
              ))}
            </Popover.Body>
          </Popover>
            )}
      >
        <Button variant="secondary">Reactions</Button>
      </OverlayTrigger>
      <div className="reactions-display">
        {reactions?.map((reaction) => (
          <div key={reaction.id}><input className={`display-reactions ${reaction.reaction_count === 0 ? 'no-show' : ''}`} type="image" onClick={handleClick} key={reaction.id} id={reaction.id} src={reaction.image_url} value={reaction.reaction_clicked} /><span className={`reaction-counter ${reaction.reaction_count === 0 ? 'no-show' : ''}`}>{reaction.reaction_count}</span></div>
        ))}
      </div>
    </div>
  );
}

Reactions.propTypes = {
  reviewId: PropTypes.number,
};

Reactions.defaultProps = {
  reviewId: 0,
};

export default Reactions;
