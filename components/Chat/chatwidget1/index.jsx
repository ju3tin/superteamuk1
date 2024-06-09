
  import { useEffect, useState } from 'react';

  function chatwidget1() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }
    return (

<aside id="chat-widget-message" className="chat-widget chat-widget-overlay hidden sidebar right">
    {/* CHAT WIDGET HEADER */}
    <div className="chat-widget-header">
      {/* CHAT WIDGET CLOSE BUTTON */}
      <div className="chat-widget-close-button">
        {/* CHAT WIDGET CLOSE BUTTON ICON */}
        <svg className="chat-widget-close-button-icon icon-back-arrow">
          <use xlinkHref="#svg-back-arrow"></use>
        </svg>
        {/* CHAT WIDGET CLOSE BUTTON ICON */}
      </div>
      {/* /CHAT WIDGET CLOSE BUTTON */}

      {/* USER STATUS */}
      <div className="user-status">
        {/* USER STATUS AVATAR */}
        <div className="user-status-avatar">
          {/* USER AVATAR */}
          <div className="user-avatar small no-outline online">
            {/* USER AVATAR CONTENT */}
            <div className="user-avatar-content">
              {/* HEXAGON */}
              <div className="hexagon-image-30-32" data-src="/img/avatar/03.jpg"></div>
              {/* /HEXAGON */}
            </div>
            {/* /USER AVATAR CONTENT */}
        
            {/* USER AVATAR PROGRESS */}
            <div className="user-avatar-progress">
              {/* HEXAGON */}
              <div className="hexagon-progress-40-44"></div>
              {/* /HEXAGON */}
            </div>
            {/* /USER AVATAR PROGRESS */}
        
            {/* USER AVATAR PROGRESS BORDER */}
            <div className="user-avatar-progress-border">
              {/* HEXAGON */}
              <div className="hexagon-border-40-44"></div>
              {/* /HEXAGON */}
            </div>
            {/* /USER AVATAR PROGRESS BORDER */}
        
            {/* USER AVATAR BADGE */}
            <div className="user-avatar-badge">
              {/* USER AVATAR BADGE BORDER */}
              <div className="user-avatar-badge-border">
                {/* HEXAGON */}
                <div className="hexagon-22-24"></div>
                {/* /HEXAGON */}
              </div>
              {/* /USER AVATAR BADGE BORDER */}
        
              {/* USER AVATAR BADGE CONTENT */}
              <div className="user-avatar-badge-content">
                {/* HEXAGON */}
                <div className="hexagon-dark-16-18"></div>
                {/* /HEXAGON */}
              </div>
              {/* /USER AVATAR BADGE CONTENT */}
        
              {/* USER AVATAR BADGE TEXT */}
              <p className="user-avatar-badge-text">16</p>
              {/* /USER AVATAR BADGE TEXT */}
            </div>
            {/* /USER AVATAR BADGE */}
          </div>
          {/* /USER AVATAR */}
        </div>
        {/* /USER STATUS AVATAR */}

        {/* USER STATUS TITLE */}
        <p className="user-status-title"><span className="bold">Nick Grissom</span></p>
        {/* /USER STATUS TITLE */}

        {/* USER STATUS TAG */}
        <p className="user-status-tag online">Online</p>
        {/* /USER STATUS TAG */}
      </div>
      {/* /USER STATUS */}
    </div>
    {/* /CHAT WIDGET HEADER */}

    {/* CHAT WIDGET CONVERSATION */}
    <div className="chat-widget-conversation" data-simplebar>
      {/* CHAT WIDGET SPEAKER */}
      <div className="chat-widget-speaker left">
        {/* CHAT WIDGET SPEAKER AVATAR */}
        <div className="chat-widget-speaker-avatar">
          {/* USER AVATAR */}
          <div className="user-avatar tiny no-border">
            {/* USER AVATAR CONTENT */}
            <div className="user-avatar-content">
              {/* HEXAGON */}
              <div className="hexagon-image-24-26" data-src="/img/avatar/03.jpg"></div>
              {/* /HEXAGON */}
            </div>
            {/* /USER AVATAR CONTENT */}
          </div>
          {/* /USER AVATAR */}
        </div>
        {/* /CHAT WIDGET SPEAKER AVATAR */}

        {/* CHAT WIDGET SPEAKER MESSAGE */}
        <p className="chat-widget-speaker-message">Hi Marina! It's been a long time!</p>
        {/* /CHAT WIDGET SPEAKER MESSAGE */}

        {/* CHAT WIDGET SPEAKER TIMESTAMP */}
        <p className="chat-widget-speaker-timestamp">Yesterday at 8:36PM</p>
        {/* /CHAT WIDGET SPEAKER TIMESTAMP */}
      </div>
      {/* /CHAT WIDGET SPEAKER */}

      {/* CHAT WIDGET SPEAKER */}
      <div className="chat-widget-speaker right">
        {/* CHAT WIDGET SPEAKER MESSAGE */}
        <p className="chat-widget-speaker-message">Hey Nick!</p>
        {/* /CHAT WIDGET SPEAKER MESSAGE */}

        {/* CHAT WIDGET SPEAKER MESSAGE */}
        <p className="chat-widget-speaker-message">You're right, it's been a really long time! I think the last time we saw was at Neko's party</p>
        {/* /CHAT WIDGET SPEAKER MESSAGE */}

        {/* CHAT WIDGET SPEAKER TIMESTAMP */}
        <p className="chat-widget-speaker-timestamp">10:05AM</p>
        {/* /CHAT WIDGET SPEAKER TIMESTAMP */}
      </div>
      {/* /CHAT WIDGET SPEAKER */}

      {/* CHAT WIDGET SPEAKER */}
      <div className="chat-widget-speaker left">
        {/* CHAT WIDGET SPEAKER AVATAR */}
        <div className="chat-widget-speaker-avatar">
          {/* USER AVATAR */}
          <div className="user-avatar tiny no-border">
            {/* USER AVATAR CONTENT */}
            <div className="user-avatar-content">
              {/* HEXAGON */}
              <div className="hexagon-image-24-26" data-src="/img/avatar/03.jpg"></div>
              {/* /HEXAGON */}
            </div>
            {/* /USER AVATAR CONTENT */}
          </div>
          {/* /USER AVATAR */}
        </div>
        {/* /CHAT WIDGET SPEAKER AVATAR */}

        {/* CHAT WIDGET SPEAKER MESSAGE */}
        <p className="chat-widget-speaker-message">Yeah! I remember now! The stream launch party</p>
        {/* /CHAT WIDGET SPEAKER MESSAGE */}

        {/* CHAT WIDGET SPEAKER MESSAGE */}
        <p className="chat-widget-speaker-message">That reminds me that I wanted to ask you something</p>
        {/* /CHAT WIDGET SPEAKER MESSAGE */}

        {/* CHAT WIDGET SPEAKER MESSAGE */}
        <p className="chat-widget-speaker-message">Can you stream the new game?</p>
        {/* /CHAT WIDGET SPEAKER MESSAGE */}
      </div>
      {/* /CHAT WIDGET SPEAKER */}
    </div>
    {/* /CHAT WIDGET CONVERSATION */}

    {/* CHAT WIDGET FORM */}
    <form className="chat-widget-form">
      {/* INTERACTIVE INPUT */}
      <div className="interactive-input small">
        <input type="text" id="chat-widget-message-text" name="chat_widget_message_text" placeholder="Write a message..." />
        {/* INTERACTIVE INPUT ICON WRAP */}
        <div className="interactive-input-icon-wrap">
          {/* INTERACTIVE INPUT ICON */}
          <svg className="interactive-input-icon icon-send-message">
            <use xlinkHref="#svg-send-message"></use>
          </svg>
          {/* /INTERACTIVE INPUT ICON */}
        </div>
        {/* /INTERACTIVE INPUT ICON WRAP */}

        {/* INTERACTIVE INPUT ACTION */}
        <div className="interactive-input-action">
          {/* INTERACTIVE INPUT ACTION ICON */}
          <svg className="interactive-input-action-icon icon-cross-thin">
            <use xlinkHref="#svg-cross-thin"></use>
          </svg>
          {/* /INTERACTIVE INPUT ACTION ICON */}
        </div>
        {/* /INTERACTIVE INPUT ACTION */}
      </div>
      {/* /INTERACTIVE INPUT */}
    </form>
    {/* /CHAT WIDGET FORM */}
  </aside>

 );
}
export default chatwidget1;