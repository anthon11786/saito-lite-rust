module.exports = MixinWithdrawTemplate = (app, mod, withdraw_this) => {

  let html = `

  <form class="withdrawal-form" id="withdrawal-form" action="/" method="POST">

    <div class="saito-overlay-form" id="saito-withdraw-overlay">
        <div class="saito-overlay-form-header">
          <div class="saito-overlay-form-header-title">Send Token</div>
        </div>


        <div id="withdraw-step-one">
          <div class="dropdown-cont">
            <div class="saito-overlay-form-input">
                <div class="token-dropdown">

                  <div id="withdraw-logo-cont"> 
                    <img src="https://saito.io/saito/img/touch/pwa-192x192.png">
                  </div>
                  <select class="withdraw-select-crypto" id="withdraw-select-crypto">
                   
                  </select>
                </div>
            </div>

            <div class="withdraw-info-cont">
              <span class="withdraw-info-title">balance</span> 
              <div class="withdraw-info-value balance">${withdraw_this.withdraw_balance} ${withdraw_this.deposit_ticker}</div>
            </div>


            <div class="withdraw-info-cont">
              <span class="withdraw-info-title">network fee</span>
              <div class="withdraw-info-value fee">2 SAITO</div>
            </div>
          </div>

          <div class="saito-overlay-form-input">
            <div class="withdraw-address-cont">
              <input type="text" class="input-elem withdraw_address" value=""
              id="withdraw-input-address" required="" placeholder="receiving address">
            </div>
          </div>

          <div class="input-elements-container">
            <div class="saito-overlay-form-input">
              <div class="withdraw-address-cont">
                <input data-amount-avl="${withdraw_this.withdraw_balance}" type="text" min="0" step="0.00000001" 
                class="input-elem withdraw-input-amount" id="withdraw-input-amount" value="" required="" placeholder="withdraw amount">
                <div class="withdraw-options-cont">
                  <span id="withdraw-max-btn">MAX</span>
                </div>
              </div>
            </div>  
          </div>

          <input type="hidden" id="withdraw-ticker"  value="SAITO">
          <input type="hidden" id="withdraw-balance"  value="0">
          <input type="hidden" id="withdraw-asset-id"  value="">
          <input type="hidden" id="withdraw-sender"  value="">
          <input type="hidden" id="withdraw-fee"  value="">


          <div class="saito-overlay-form-submitline form-submit-container">
            <button type="submit" class="withdraw-submit saito-button-primary fat saito-overlay-form-submit" id="saito-overlay-submit">Send</button>
          </div>

        </div>


        <div id="withdraw-step-two" class="hide-element">
          <div class="confirm-msg-container">
            <i class="withdraw-msg-icon fa-solid fa-circle-exclamation"></i>
            <div class="confirm-msg">
              <span class="withdraw-msg-text">Send</span> <b><span class="withdraw-confirm-amount">42 SAITO</span></b> to address <b><span class="withdraw-confirm-address">wcyj2qSvmPsNcbEx9PnjXtNzsDoCf1Xtv9SqWH6wYxnk</span></b><span class="withdraw-msg-question">?</span> <br>
              <span class="withdraw-confirm-fee">(fee: 2 SAITO)</span>      
            </div>
          </div>

          <div class="saito-overlay-form-submitline confirm-submit">
            <button type="submit" class="saito-button-secondary" id="withdraw-cancel">Cancel</button> 
            <button type="submit" class="saito-button-primary" id="withdraw-confirm">Confirm</button>
          </div>
        </div>

    </div>


  </form>

  `;

  return html;

}
