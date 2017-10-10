<template>
  <div>
    <div class="usa-width-one-half">
      <div class="lf-standard-div">
        <label for="selDiceType">Dice Type</label>
        <select id="selDiceType" v-model="diceType">
          <option value="standard">Standard</option>
          <option value="skill">Skill Dice</option>
        </select>

        <div v-if="diceType == 'standard'">
          <div>
            <br/><hr class="lf-hr"/><br/>
          </div>
          <div style="display: inline-block;">
            <div style="display: table;">

              <div style="display: table-row;">
                <div style="display: table-cell;">
                  <input type="number" v-model="numStandardD4" style="width:5em" min="0" max="999">
                </div>
                <div style="display: table-cell; padding-top: 12px;">
                  <span class="lf-dice-label">&nbsp;D4&nbsp;+&nbsp;</span>
                </div>
                <div style="display: table-cell;">
                  <input type="number" v-model="modStandardD4" style="width:5em" min="-999" max="999" >
                </div>
              </div>

              <div style="display: table-row;">
                <div style="display: table-cell;">
                  <input type="number" v-model="numStandardD6" style="width:5em" min="0" max="999">
                </div>
                <div style="display: table-cell; padding-top: 12px;">
                  <span class="lf-dice-label">&nbsp;D6&nbsp;+&nbsp;</span>
                </div>
                <div style="display: table-cell;">
                  <input type="number" v-model="modStandardD6" style="width:5em" min="-999" max="999" >
                </div>
              </div>

              <div style="display: table-row;">
                <div style="display: table-cell;">
                  <input type="number" v-model="numStandardD8" style="width:5em" min="0" max="999">
                </div>
                <div style="display: table-cell; padding-top: 12px;">
                  <span class="lf-dice-label">&nbsp;D8&nbsp;+&nbsp;</span>
                </div>
                <div style="display: table-cell;">
                  <input type="number" v-model="modStandardD8" style="width:5em" min="-999" max="999" >
                </div>
              </div>

              <div style="display: table-row;">
                <div style="display: table-cell;">
                  <input type="number" v-model="numStandardD10" style="width:5em" min="0" max="999">
                </div>
                <div style="display: table-cell; padding-top: 12px;">
                  <span class="lf-dice-label">&nbsp;D10&nbsp;+&nbsp;</span>
                </div>
                <div style="display: table-cell;">
                  <input type="number" v-model="modStandardD10" style="width:5em" min="-999" max="999" >
                </div>
              </div>

              <div style="display: table-row;">
                <div style="display: table-cell;">
                  <input type="number" v-model="numStandardD12" style="width:5em" min="0" max="999">
                </div>
                <div style="display: table-cell; padding-top: 12px;">
                  <span class="lf-dice-label">&nbsp;D12&nbsp;+&nbsp;</span>
                </div>
                <div style="display: table-cell;">
                  <input type="number" v-model="modStandardD12" style="width:5em" min="-999" max="999" >
                </div>
              </div>

              <div style="display: table-row;">
                <div style="display: table-cell;">
                  <input type="number" v-model="numStandardD20" style="width:5em" min="0" max="999">
                </div>
                <div style="display: table-cell; padding-top: 12px;">
                  <span class="lf-dice-label">&nbsp;D20&nbsp;+&nbsp;</span>
                </div>
                <div style="display: table-cell;">
                  <input type="number" v-model="modStandardD20" style="width:5em" min="-999" max="999" >
                </div>
              </div>

              <div style="display: table-row;">
                <div style="display: table-cell;">
                  <input type="number" v-model="numStandardD100" style="width:5em" min="0" max="999">
                </div>
                <div style="display: table-cell; padding-top: 12px;">
                  <span class="lf-dice-label">&nbsp;D100&nbsp;+&nbsp;</span>
                </div>
                <div style="display: table-cell;">
                  <input type="number" v-model="modStandardD100" style="width:5em" min="-999" max="999" >
                </div>
              </div>

            </div>
          </div>
          <div>
            <br/><hr class="lf-hr"/><br/>
            <button class="lf-btn" @click="rollStandard()">Roll</button>
          </div>
        </div>

        <div v-if="diceType == 'skill'">
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
                  <input type="number" v-model="numSkillYel" style="width:4em" min="0" max="9">
                </div>
              </div>
              <div style="display: table-row;">
                <div style="display: table-cell;">
                  <span class="lf-dice-label">Green:&nbsp;</span>
                </div>
                <div style="display: flex;">
                  <input type="number" v-model="numSkillGre" style="width:4em" min="0" max="9">
                </div>
              </div>
              <div style="display: table-row;">
                <div style="display: table-cell;">
                  <span class="lf-dice-label">Blue:&nbsp;</span>
                </div>
                <div style="display: flex;">
                  <input type="number" v-model="numSkillBlu" style="width:4em" min="0" max="9">
                </div>
              </div>
              <div style="display: table-row;"><br/></div>
              <div style="display: table-row;">
                <div style="display: table-cell;">
                  <span class="lf-dice-label">Red:&nbsp;</span>
                </div>
                <div style="display: flex;">
                  <input type="number" v-model="numSkillRed" style="width:4em" min="0" max="9">
                </div>
              </div>
              <div style="display: table-row;">
                <div style="display: table-cell;">
                  <span class="lf-dice-label">Purple:&nbsp;</span>
                </div>
                <div style="display: flex;">
                  <input type="number" v-model="numSkillPur" style="width:4em" min="0" max="9">
                </div>
              </div>
              <div style="display: table-row;">
                <div style="display: table-cell;">
                  <span class="lf-dice-label">Black:&nbsp;</span>
                </div>
                <div style="display: flex;">
                  <input type="number" v-model="numSkillBla" style="width:4em" min="0" max="9">
                </div>
              </div>
            </div>
          </div>
          <div>
            <br/><hr class="lf-hr"/><br/>
            <button class="lf-btn" @click="rollSkill()">Roll</button>
          </div>
        </div>
      </div>
    </div>


    <div class="usa-width-one-half">
      <div class="lf-standard-div" >
        <div v-if="(standardRollResults && standardRollResults.length) || (skillRollResults && skillRollResults.length)">
          <button class="lf-btn" @click="clearResults()">Clear Results</button>
          <br/><br/><hr class="lf-hr"/>
        </div>

        <div v-if="standardRollResults && standardRollResults.length">
          <ul>
            <li v-for="result of standardRollResults">
              <span v-if="result.d4Result"> {{result.d4Result}}<br/></span>
              <span v-if="result.d6Result"> {{result.d6Result}}<br/></span>
              <span v-if="result.d8Result"> {{result.d8Result}}<br/></span>
              <span v-if="result.d10Result"> {{result.d10Result}}<br/></span>
              <span v-if="result.d12Result"> {{result.d12Result}}<br/></span>
              <span v-if="result.d20Result"> {{result.d20Result}}<br/></span>
              <span v-if="result.d100Result"> {{result.d100Result}}<br/></span>
              <br/>
            </li>
          </ul>
        </div>

        <div class="lf-standard-div" v-if="skillRollResults && skillRollResults.length">
          <ul>
            <li v-for="result of skillRollResults">
              <span v-if="result.yelResult"> {{result.yelResult}}<br/></span>
              <span v-if="result.greResult"> {{result.greResult}}<br/></span>
              <span v-if="result.bluResult"> {{result.bluResult}}<br/></span>
              <span v-if="result.redResult"> {{result.redResult}}<br/></span>
              <span v-if="result.purResult"> {{result.purResult}}<br/></span>
              <span v-if="result.blaResult"> {{result.blaResult}}<br/></span>
              <span v-if="result.triumphResult > 0"> Total Triumph: {{result.triumphResult}}<br/></span>
              <span v-if="result.successResult > 0"> Total Success: {{result.successResult}}<br/></span>
              <span v-if="result.advantageResult > 0"> Total Advantage: {{result.advantageResult}}<br/></span>
              <br/><br/>
            </li>
          </ul>
        </div>

        <div v-if="!((standardRollResults && standardRollResults.length) || (skillRollResults && skillRollResults.length))">
          Results will appear here.
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./DiceRoller.js" type="text/javascript" ></script>
