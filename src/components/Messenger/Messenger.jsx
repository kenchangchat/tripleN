import React from 'react';
import MessengerCustomerChat from 'react-messenger-embedded';

const Messenger = () => {
  return (
    <div>
      <MessengerCustomerChat
        pageId="YOUR_PAGE_ID"
        appId="768635905041651"
      />
    </div>
  );
}

export default Messenger;