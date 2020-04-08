/* eslint-disable */
import React from 'react';

export interface IMessage { // Turha export
  author: string;
  messageText: string; // Huonosti nimetty
}

function Message(data: IMessage) { // 'any' eikä käytetä reactin standardia 'props'
  return (
    <div>
      <b>{data.author}:</b> {data.messageText}
    </div>
  );
}

export default Message;
