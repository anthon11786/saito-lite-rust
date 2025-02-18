module.exports = MixinHistoryTemplate = (app, mod, this_history) => {

  let html = `
    <div class="mixin-overlay-history">
        <h5 class="transaction-header">Transaction History (${this_history.ticker})</h5>
        <div class="mixin-txn-his-container saito-table">
            <div class="saito-table-header">
                <div>Time</div>
                 <div>Type</div>
                 <div>Amount</div>
                 <div>Status</div>
            </div>
            <div class="saito-table-body">
                <p>Loading history...</p>
            </div
        </div>
    </div>
  `;

  return html;
}

