/**
 * Created by grayson on 9/30/17.
 */

export default {
  data: () => ({
    numStandardD4: 0,
    numStandardD6: 0,
    numStandardD8: 0,
    numStandardD10: 0,
    numStandardD12: 0,
    numStandardD20: 0,
    numStandardD100: 0,
    modStandardD4: 0,
    modStandardD6: 0,
    modStandardD8: 0,
    modStandardD10: 0,
    modStandardD12: 0,
    modStandardD20: 0,
    modStandardD100: 0,
    numSkillYel: 0,
    numSkillGre: 0,
    numSkillBlu: 0,
    numSkillRed: 0,
    numSkillPur: 0,
    numSkillBla: 0,
    diceType: 'standard',
    standardRollResults: [],
    skillRollResults:[]
  }),
  methods:{
    clearResults: function () {
      this.standardRollResults = [];
      this.skillRollResults = [];
    },
    rollStandard: function () {
      var fullStandardRollResult = {
        d4Result: '',
        d6Result: '',
        d8Result: '',
        d10Result: '',
        d12Result: '',
        d20Result: '',
        d100Result: ''
      };

      if(this.numStandardD4 > 0){
        var totalD4rolls = 0;
        var d4Roll = 0;

        var d4Output = 'D4: ('
        for(var d4i = 0; d4i < this.numStandardD4; d4i ++){
          d4Roll = Math.floor(Math.random() * 4) +1
          totalD4rolls += d4Roll;
          if(d4i == this.numStandardD4-1){
            d4Output += d4Roll;
          }
          else{
            d4Output += d4Roll+', ';
          }
        }
        var totalD4result = totalD4rolls + parseInt(this.modStandardD4);
        d4Output += ') + ' + this.modStandardD4 + ' = ' + totalD4result;
        fullStandardRollResult.d4Result = d4Output;
      }
      
      if(this.numStandardD6 > 0){
        var totalD6rolls = 0;
        var d6Roll = 0;

        var d6Output = 'D6: ('
        for(var d6i = 0; d6i < this.numStandardD6; d6i ++){
          d6Roll = Math.floor(Math.random() * 6) +1
          totalD6rolls += d6Roll;
          if(d6i == this.numStandardD6-1){
            d6Output += d6Roll;
          }
          else{
            d6Output += d6Roll+', ';
          }
        }
        var totalD6result = totalD6rolls + parseInt(this.modStandardD6);
        d6Output += ') + ' + this.modStandardD6 + ' = ' + totalD6result;
        fullStandardRollResult.d6Result = d6Output;
      }
      
      if(this.numStandardD8 > 0){
        var totalD8rolls = 0;
        var d8Roll = 0;

        var d8Output = 'D8: ('
        for(var d8i = 0; d8i < this.numStandardD8; d8i ++){
          d8Roll = Math.floor(Math.random() * 8) +1
          totalD8rolls += d8Roll;
          if(d8i == this.numStandardD8-1){
            d8Output += d8Roll;
          }
          else{
            d8Output += d8Roll+', ';
          }
        }
        var totalD8result = totalD8rolls + parseInt(this.modStandardD8);
        d8Output += ') + ' + this.modStandardD8 + ' = ' + totalD8result;
        fullStandardRollResult.d8Result = d8Output;
      }
      
      if(this.numStandardD10 > 0){
        var totalD10rolls = 0;
        var d10Roll = 0;

        var d10Output = 'D10: ('
        for(var d10i = 0; d10i < this.numStandardD10; d10i ++){
          d10Roll = Math.floor(Math.random() * 10) +1
          totalD10rolls += d10Roll;
          if(d10i == this.numStandardD10-1){
            d10Output += d10Roll;
          }
          else{
            d10Output += d10Roll+', ';
          }
        }
        var totalD10result = totalD10rolls + parseInt(this.modStandardD10);
        d10Output += ') + ' + this.modStandardD10 + ' = ' + totalD10result;
        fullStandardRollResult.d10Result = d10Output;
      }
      
      if(this.numStandardD12 > 0){
        var totalD12rolls = 0;
        var d12Roll = 0;

        var d12Output = 'D12: ('
        for(var d12i = 0; d12i < this.numStandardD12; d12i ++){
          d12Roll = Math.floor(Math.random() * 12) +1
          totalD12rolls += d12Roll;
          if(d12i == this.numStandardD12-1){
            d12Output += d12Roll;
          }
          else{
            d12Output += d12Roll+', ';
          }
        }
        var totalD12result = totalD12rolls + parseInt(this.modStandardD12);
        d12Output += ') + ' + this.modStandardD12 + ' = ' + totalD12result;
        fullStandardRollResult.d12Result = d12Output;
      }
      
      if(this.numStandardD20 > 0){
        var totalD20rolls = 0;
        var d20Roll = 0;

        var d20Output = 'D20: ('
        for(var d20i = 0; d20i < this.numStandardD20; d20i ++){
          d20Roll = Math.floor(Math.random() * 20) +1
          totalD20rolls += d20Roll;
          if(d20i == this.numStandardD20-1){
            d20Output += d20Roll;
          }
          else{
            d20Output += d20Roll+', ';
          }
        }
        var totalD20result = totalD20rolls + parseInt(this.modStandardD20);
        d20Output += ') + ' + this.modStandardD20 + ' = ' + totalD20result;
        fullStandardRollResult.d20Result = d20Output;
      }

      if(this.numStandardD100 > 0){
        var totalD100rolls = 0;
        var d100Roll = 0;

        var d100Output = 'D100: ('
        for(var d100i = 0; d100i < this.numStandardD100; d100i ++){
          d100Roll = Math.floor(Math.random() * 100) +1
          totalD100rolls += d100Roll;
          if(d100i == this.numStandardD100-1){
            d100Output += d100Roll;
          }
          else{
            d100Output += d100Roll+', ';
          }
        }
        var totalD100result = totalD100rolls + parseInt(this.modStandardD100);
        d100Output += ') + ' + this.modStandardD100 + ' = ' + totalD100result;
        fullStandardRollResult.d100Result = d100Output;
      }
      this.standardRollResults.push(fullStandardRollResult);
    },
      
    rollSkill: function () {
      var fullSkillRollResult = {
        yelResult: '',
        greResult: '',
        bluResult: '',
        redResult: '',
        purResult: '',
        blaResult: '',
        triumphResult: 0,
        successResult: 0,
        advantageResult: 0,
        despairResult: 0,
        failureResult: 0,
        disadvantageResult: 0
      };
      var totalSuccess = 0;
      var totalAdvantage = 0;
      var totalTriumph = 0;
      var totalFailure = 0;
      var totalDisadvantage = 0;
      var totalDispair = 0;
      
      if(this.numSkillYel > 0){
        var totalYelSuccess = 0;
        var totalYelAdvantage = 0;
        var totalYelTriumph = 0;
        var yelOutput = 'Yellow: (';
        for(var yeli = 0; yeli < this.numSkillYel; yeli ++){
          var yelRoll = Math.floor(Math.random() * 12) +1;
          switch(yelRoll){
            case 1: yelOutput += 'blank';
              break;
            case 2: yelOutput += '1S';
              totalYelSuccess += 1;
              break;
            case 3: yelOutput += '1S';
              totalYelSuccess += 1;
              break;
            case 4: yelOutput += '2S';
              totalYelSuccess += 2;
              break;
            case 5: yelOutput += '2S';
              totalYelSuccess += 2;
              break;
            case 6: yelOutput += '1A';
              totalYelAdvantage += 1;
              break;
            case 7: yelOutput += '1S 1A';
              totalYelSuccess += 1;
              totalYelAdvantage += 1;
              break;
            case 8: yelOutput += '1S 1A';
              totalYelSuccess += 1;
              totalYelAdvantage += 1;
              break;
            case 9: yelOutput += '1S 1A';
              totalYelSuccess += 1;
              totalYelAdvantage += 1;
              break;
            case 10: yelOutput += '2A';
              totalYelAdvantage += 2;
              break;
            case 11: yelOutput += '2A';
              totalYelAdvantage += 2;
              break;
            case 12: yelOutput += '1T';
              totalYelTriumph += 1;
              break;
          }
          if(yeli != this.numSkillYel -1){
            yelOutput += ', ';
          }
        }
        yelOutput += ')'
        if(totalYelTriumph > 0){
          yelOutput += ' T:' + totalYelTriumph;
        }
        if(totalYelSuccess > 0){
          yelOutput += ' S:' + totalYelSuccess;
        }
        if(totalYelAdvantage > 0){
          yelOutput += ' A:' + totalYelAdvantage;
        }
        totalTriumph += totalYelTriumph;
        totalSuccess += totalYelSuccess;
        totalAdvantage += totalYelSuccess;
        fullSkillRollResult.yelResult = yelOutput;
        //process rolls
      }
      
      if(this.numSkillGre > 0){
        var totalGreSuccess = 0;
        var totalGreAdvantage = 0;
        var greOutput = 'Green: (';
        for(var grei = 0; grei < this.numSkillGre; grei ++){
          var greRoll = Math.floor(Math.random() * 8) +1;
          switch(greRoll){
            case 1: greOutput += 'blank';
              break;
            case 2: greOutput += '1S';
              totalGreSuccess += 1;
              break;
            case 3: greOutput += '1S';
              totalGreSuccess += 1;
              break;
            case 4: greOutput += '2S';
              totalGreSuccess += 2;
              break;
            case 5: greOutput += '1A';
              totalGreAdvantage += 1;
              break;
            case 6: greOutput += '1A';
              totalGreAdvantage += 1;
              break;
            case 7: greOutput += '1S 1A';
              totalGreSuccess += 1;
              totalGreAdvantage += 1;
              break;
            case 8: greOutput += '2A';
              totalGreAdvantage += 2;
              break;
          }
          if(grei != this.numSkillGre -1){
            greOutput += ', ';
          }
        }
        greOutput += ')'
        if(totalGreSuccess > 0){
          greOutput += ' S:' + totalGreSuccess;
        }
        if(totalGreAdvantage > 0){
          greOutput += ' A:' + totalGreAdvantage;
        }
        totalSuccess += totalGreSuccess;
        totalAdvantage += totalGreSuccess;
        fullSkillRollResult.greResult = greOutput;
        //process rolls
      }
      
      if(this.numSkillBlu > 0){
        var totalBluSuccess = 0;
        var totalBluAdvantage = 0;
        var bluOutput = 'Blue: (';
        for(var blui = 0; blui < this.numSkillBlu; blui ++){
          var bluRoll = Math.floor(Math.random() * 6) +1;
          switch(bluRoll){
            case 1: bluOutput += 'blank';
              break;
            case 2: bluOutput += 'blank';
              break;
            case 3: bluOutput += '2A';
              totalBluAdvantage += 2;
              break;
            case 4: bluOutput += '1A';
              totalBluAdvantage += 1;
              break;
            case 5: bluOutput += '1S 1A';
              totalBluSuccess += 1;
              totalBluAdvantage += 1;
              break;
            case 6: bluOutput += '1A';
              totalBluSuccess += 1;
              break;
          }
          if(blui != this.numSkillBlu -1){
            bluOutput += ', ';
          }
        }
        bluOutput += ')'
        if(totalBluSuccess > 0){
          bluOutput += ' S:' + totalBluSuccess;
        }
        if(totalBluAdvantage > 0){
          bluOutput += ' A:' + totalBluAdvantage;
        }
        totalSuccess += totalBluSuccess;
        totalAdvantage += totalBluSuccess;
        fullSkillRollResult.bluResult = bluOutput;
        //process rolls
      }
      //more dice
      
      //process totals
      fullSkillRollResult.triumphResult = totalTriumph;
      fullSkillRollResult.successResult = totalSuccess;
      fullSkillRollResult.advantageResult = totalAdvantage;
      this.skillRollResults.push(fullSkillRollResult);
    }
  }
}
