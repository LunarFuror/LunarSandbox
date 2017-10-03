<template>
  <div>
    <div class="usa-width-one-half">
      <div class="lf-standard-div">
        <label for="selDiceType">Dice Type</label>
        <select id="selDiceType" v-model="diceType">
          <option value="standard">Standard</option>
          <option value="eote">EotE</option>
        </select>

        <div v-if="diceType == 'standard'">
          <div>
            <br/><hr class="lf-hr"/><br/>
          </div>
          <div style="display: inline-block;">
            <div style="display: table;">
              <div style="display: table-row;">
                <div style="display: table-cell;">
                  <span class="lf-dice-label">D4:&nbsp;</span>
                </div>
                <div style="display: flex;">
                  <input type="number" style="width:5em" min="0" max="999">
                  <span class="lf-dice-label">&nbsp;+&nbsp;</span>
                  <input type="number" style="width:5em" min="-999" max="999" >
                </div>
              </div>
              <div style="display: table-row;">
                <div style="display: table-cell;">
                  <span class="lf-dice-label">D6:&nbsp;</span>
                </div>
                <div style="display: flex;">
                  <input type="number" style="width:5em" min="0" max="999">
                  <span class="lf-dice-label">&nbsp;+&nbsp;</span>
                  <input type="number" style="width:5em" min="-999" max="999" >
                </div>
              </div>
              <div style="display: table-row;">
                <div style="display: table-cell;">
                  <span class="lf-dice-label">D8:&nbsp;</span>
                </div>
                <div style="display: flex;">
                  <input type="number" style="width:5em" min="0" max="999">
                  <span class="lf-dice-label">&nbsp;+&nbsp;</span>
                  <input type="number" style="width:5em" min="-999" max="999" >
                </div>
              </div>
              <div style="display: table-row;">
                <div style="display: table-cell;">
                  <span class="lf-dice-label">D10:&nbsp;</span>
                </div>
                <div style="display: flex;">
                  <input type="number" style="width:5em" min="0" max="999">
                  <span class="lf-dice-label">&nbsp;+&nbsp;</span>
                  <input type="number" style="width:5em" min="-999" max="999" >
                </div>
              </div>
              <div style="display: table-row;">
                <div style="display: table-cell;">
                  <span class="lf-dice-label">D12:&nbsp;</span>
                </div>
                <div style="display: flex;">
                  <input type="number" style="width:5em" min="0" max="999">
                  <span class="lf-dice-label">&nbsp;+&nbsp;</span>
                  <input type="number" style="width:5em" min="-999" max="999" >
                </div>
              </div>
              <div style="display: table-row;">
                <div style="display: table-cell;">
                  <span class="lf-dice-label">D20:&nbsp;</span>
                </div>
                <div style="display: flex;">
                  <input type="number" style="width:5em" min="0" max="999">
                  <span class="lf-dice-label">&nbsp;+&nbsp;</span>
                  <input type="number" style="width:5em" min="-999" max="999" >
                </div>
              </div>
              <div style="display: table-row;">
                <div style="display: table-cell;">
                  <span class="lf-dice-label">D100:&nbsp;</span>
                </div>
                <div style="display: flex;">
                  <input type="number" style="width:5em" min="0" max="999">
                  <span class="lf-dice-label">&nbsp;+&nbsp;</span>
                  <input type="number" style="width:5em" min="-999" max="999" >
                </div>
              </div>
            </div>
          </div>
          <div>
            <br/><hr class="lf-hr"/><br/>
            <button class="lf-btn">Roll</button>
          </div>
        </div>

        <div v-if="diceType == 'eote'">
          <div style="width:100%;">
            <br/><hr class="lf-hr"/><br/>
          </div>
          <div style="display: inline-block;">
            <div style="display: table;">
              <div style="display: table-row;">
                <div style="display: table-cell;">
                  <span class="lf-dice-label">Yellow:&nbsp;</span>
                </div>
                <div style="display: flex;">
                  <input type="number" style="width:4em" min="0" max="9">
                </div>
              </div>
              <div style="display: table-row;">
                <div style="display: table-cell;">
                  <span class="lf-dice-label">Green:&nbsp;</span>
                </div>
                <div style="display: flex;">
                  <input type="number" style="width:4em" min="0" max="9">
                </div>
              </div>
              <div style="display: table-row;">
                <div style="display: table-cell;">
                  <span class="lf-dice-label">Blue:&nbsp;</span>
                </div>
                <div style="display: flex;">
                  <input type="number" style="width:4em" min="0" max="9">
                </div>
              </div>
              <div style="display: table-row;"><br/></div>
              <div style="display: table-row;">
                <div style="display: table-cell;">
                  <span class="lf-dice-label">Red:&nbsp;</span>
                </div>
                <div style="display: flex;">
                  <input type="number" style="width:4em" min="0" max="9">
                </div>
              </div>
              <div style="display: table-row;">
                <div style="display: table-cell;">
                  <span class="lf-dice-label">Purple:&nbsp;</span>
                </div>
                <div style="display: flex;">
                  <input type="number" style="width:4em" min="0" max="9">
                </div>
              </div>
              <div style="display: table-row;">
                <div style="display: table-cell;">
                  <span class="lf-dice-label">Black:&nbsp;</span>
                </div>
                <div style="display: flex;">
                  <input type="number" style="width:4em" min="0" max="9">
                </div>
              </div>
            </div>
          </div>
          <div>
            <br/><hr class="lf-hr"/><br/>
            <button class="lf-btn">Roll</button>
          </div>
        </div>
      </div>
    </div>


    <div class="usa-width-one-half">
      <div class="lf-standard-div">
        Results will appear here
      </div>
    </div>
  </div>
</template>

<script src="./DiceRoller.js" type="text/javascript" ></script>
