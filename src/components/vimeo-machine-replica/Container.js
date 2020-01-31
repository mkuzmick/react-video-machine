import React from 'react'
import VimeoPlayer from './VimeoPlayer'
import './vimeo-markers.css'

export default (props) => {
  return(
    <div className="site">
        <header class="masthead" id="sendButton">
            <div class="masthead-buttons" id="jsonButton">
              click<br/>for<br/>JSON
            </div>
            <div class="masthead-buttons" id="sendToServer">
              send<br/>to<br/>server
            </div>
        </header>
          <div class="page-title">
              <code class="identifier"><pre>vimeo markers machine</pre></code>
              <label class="form-input">name:
                <input type="text" id="name" placeholder="first ok" />
              </label>
              <label class="form-input">password:
                <input type="text" id="password"  placeholder="not secure" />
              </label>

          </div>
          <VimeoPlayer className="player-container main-content">
          </VimeoPlayer>
          <div id="main-overlay">
            <div id="touch-zones">
            </div>
          </div>
          <div class="button-box" id="the-button-box">
            <div id="overlayOn" class="logging-button">
              click here to enable spatial markers.
            </div>
            <div id="overlayOff" class="logging-button">
              click here to disable spatial markers.
            </div>
            <div id="playButton" class="logging-button">
              click here to play.
            </div>
            <div id="pauseButton" class="logging-button">
              click here to pause.
            </div>
            <div id="logButton" class="logging-button">
              click here on the beat.
            </div>
            <div id="likeButton" class="logging-button">
              click here to like a moment.
            </div>
            <div id="inButton" class="logging-button">
              click here to mark an "in" timestamp.
            </div>
            <div id="outButton" class="logging-button">
              click here to mark an "out" timestamp.
            </div>

          </div>
          <aside class="sidebar" id="result-box">
              <code class="identifier"><pre>.userEvents</pre></code>
          </aside>
          <footer class="footer-content" id="video-button-box">
              <div id="225859135" class="video-link-button">
                Emma on Taste
              </div>
              <div id="260963404" class="video-link-button">
                Cello Tap
              </div>
              <div id="187637147" class="video-link-button">
                Portrait Profile
              </div>
              <div id="230058332" class="video-link-button">
                Yaara
              </div>
              <div id="213229325" class="video-link-button">
                Etching Montage
              </div>
              <div class="video-link-button-input">
              <input type="text" id="userVideoId" placeholder="paste your own ID here" />
              </div>
              <div id="submitVideo" class="video-link-button-submit">
                & click here to submit
              </div>
              <div id="191652238" class="video-link-button">
                OEB52: Mark
              </div>
              <div id="191652085" class="video-link-button">
                OEB52: Amy
              </div>
              <div id="257300038" class="video-link-button">
                20180103_001_MC_CC_Ex
              </div>
          </footer>
    </div>
  )
}
