import './styles.css';

import React, { useEffect, useState } from 'react';

import Message, { IMessage } from './Message';

let messages: IMessage[] = []; // 'let' turhaan ja ei käytä reactin statea

export default function GuestBook() {
  const [messageText, setMessageText] = useState('');
  const [author, setAuthor] = useState('');

  // EiTälläCasellaPls
  const RenderMessages = () => {
    let elements: any[] = []; // 'let' turhaan

    // turha foreach
    messages.forEach(m => {
      elements.push(
        <Message // ei 'key' proppia
          author={m.author}
          messageText={m.messageText}
        />
      ) // ; puuttuu
    })  // ; puuttuu

    return elements;
  };
  
  useEffect(() => {
    console.log(messageText);
  }, [messageText]);

  // 'any' ja turhat ja konfliktoivat argumentit funktiolla
  const sendMessage = (messageText: any, author: any) => {

    // ?????????????? if-lause
    if (messageText == '' || author == '') {
      if (messageText == '' && author == '') {
        alert('Aseta viestin teksti ja oma nimesi');
        return;
      }

      if (messageText == '') {
        alert('Aseta viestin teksti');
        return;
      }

      if (author == '') {
        alert('Aseta viestin teksti');
        return;
      }
    }

    // ei käytä reactin statea
    messages.push({
      author: author,
      messageText: messageText,  // vois käyttää object prop value shorthandia
    });

    setMessageText('');
    setAuthor('');
  }

  return (
    <div className="container">
      <h2>Mun eka react vieraskirja</h2>
      
      <div className="grid">
        <div className="message">
          <textarea
            placeholder="Kirjoita viestisi..."
            spellCheck={false}
            value={messageText}
            onChange={event => {
              setMessageText(event.currentTarget.value); // ei null checkiä
            }}
          ></textarea> {/* ei päätetä JSX textareaa näin */}
        </div>

        <div className="name">
          <input
            type="text"
            placeholder="Nimesi..."
            value={author}
            onChange={event => {
              setAuthor(event.currentTarget.value); // ei null checkiä
            }}
          />
        </div>
        
        <div className="send-button">
          <button onClick={
            () => sendMessage(messageText, author) 
          }>Jätä terveiset</button>
        </div>
      </div>
        
      {RenderMessages()}
    </div>
  );
}
