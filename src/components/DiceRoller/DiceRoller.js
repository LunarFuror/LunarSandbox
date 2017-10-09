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
    },
    rollStandard: function () {
      var fullRollResult = {d4Result: '', d6Result: '', d8Result: '', d10Result: '', d12Result: '', d20Result: '', d100Result: ''};

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
        d4Output += ') + ' + this.modStandardD4 + ' = ' + totalD4result + '\r\n';
        fullRollResult.d4Result = d4Output;
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
        d6Output += ') + ' + this.modStandardD6 + ' = ' + totalD6result + '\r\n';
        fullRollResult.d6Result = d6Output;
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
        d8Output += ') + ' + this.modStandardD8 + ' = ' + totalD8result + '\r\n';
        fullRollResult.d8Result = d8Output;
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
        d10Output += ') + ' + this.modStandardD10 + ' = ' + totalD10result + '\r\n';
        fullRollResult.d10Result = d10Output;
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
        d12Output += ') + ' + this.modStandardD12 + ' = ' + totalD12result + '\r\n';
        fullRollResult.d12Result = d12Output;
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
        d20Output += ') + ' + this.modStandardD20 + ' = ' + totalD20result + '\r\n';
        fullRollResult.d20Result = d20Output;
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
        d100Output += ') + ' + this.modStandardD100 + ' = ' + totalD100result + '\r\n';
        fullRollResult.d100Result = d100Output;
      }
      this.standardRollResults.push(fullRollResult);
    },
    rollSkill: function () {
      var fullRollResult = {yelResult: '', greResult: '', bluResult: '', redResult: '', purResult: '', blaResult: '', };
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
        for(var yeli = 0; yeli > this.numSkillYel; yeli ++){
          yelRoll = Math.floor(Math.random() * 12) +1;
          switch(yelRoll){
            case 1: yelOutput += 'blank, '
              break;
            case 2:
            case 1: yelOutput += 'blank, '
              break;
            case 3:
            case 1: yelOutput += 'blank, '
              break;
            case 4:
            case 1: yelOutput += 'blank, '
              break;
            case 5:
            case 1: yelOutput += 'blank, '
              break;
            case 6:
            case 1: yelOutput += 'blank, '
              break;
            case 7:
            case 1: yelOutput += 'blank, '
              break;
            case 8:
            case 1: yelOutput += 'blank, '
              break;
            case 9:
            case 1: yelOutput += 'blank, '
              break;
            case 10:
            case 1: yelOutput += 'blank, '
              break;
            case 11:
            case 1: yelOutput += 'blank, '
              break;
            case 12:
            case 1: yelOutput += 'blank, '
              break;
          }
        }
      }
    }
  }
}
