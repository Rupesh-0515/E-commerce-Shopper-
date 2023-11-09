import React from 'react';
import './DescriptionBox.css';

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Decription</div>
        <div className="descriptionbox-nav-box fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Voluptate sint quam corrupti obcaecati ipsum tenetur repudiandae 
            minus illo sed nihil voluptates inventore at perspiciatis adipisci
             aspernatur ad deserunt facere tempora temporibus veritatis amet, 
             fugiat itaque eveniet est. 
            Deleniti eaque perferendis voluptas excepturi earum, iure architecto?
        </p>
      </div>
    </div>
  );
}

export default DescriptionBox;
