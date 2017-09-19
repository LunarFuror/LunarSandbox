<template>
  <div>
    <div class="usa-width-one-half">
      <div class="lf-standard-div">
        <label for="selNameStyle">Name Style</label>
        <select id="selNameStyle" v-model="nameStyle">
          <option value="Standard">Standard d20</option>
          <option value="Expanded">Expanded d100</option>
          <option value="Kobold">Kobold Press Kobold</option>
        </select>

        <div v-if="nameStyle === 'Kobold'">
          <label for="selGender">Gender</label>
          <select id="selGender" v-model="gender">
            <option>Male</option>
            <option>Female</option>
          </select>
        </div>

        <label for="inChecks">Number of names to generate</label>
        <input id="inChecks" type="number" v-model="numChecks" min="1"/>

        <br/>
        <button @click="generate()" class="lf-btn">Generate</button>
      </div>
    </div>


    <div class="usa-width-one-half">
      <div class="lf-standard-div">
        <div v-if="output">
          <li v-for="name in output">
            {{name}}
          </li>
        </div>
        <div v-else>
          Your names will show up here when you click "Generate"
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./NameGenerator.js" type="text/javascript" ></script>
