<template>
  <div>
    <img v-if="loading" src="../../assets/img/loading.gif"/>
    <div class="usa-width-one-half">
      <div class="lf-inline-div" v-if="viewState == 'Add'">
        <input v-model="name" placeholder="Name"/>
        <input v-model="description" placeholder="Description"/>
        <input v-model="job" placeholder="Job"/>
        <button @click="postHero()" class="lf-btn">Add Hero</button>
      </div>
      <div class="lf-inline-div" v-if="viewState == 'Edit'">
        <input v-model="newName" placeholder="Name"/>
        <input v-model="newDescription" placeholder="Description"/>
        <input v-model="newJob" placeholder="Job"/>
        <button @click="switchToAddHero()" class="lf-btn">Cancel</button>
        <button @click="putHero()" class="lf-btn">Update Hero</button>
      </div>
      <div class="lf-inline-div" v-if="viewState == 'Delete'">
        <p>Are you sure you want to delete {{deleteHeroName}}?</p>
        <button @click="switchToAddHero()" class="lf-btn">Cancel</button>
        <button @click="deleteHero()" class="lf-btn-warning">Delete Hero</button>
      </div>
      <ul v-if="errors && errors.length && false">
        <li v-for="error of errors">
          {{error}}
        </li>
      </ul>
    </div>

    <div class="usa-width-one-half">
      <ul v-if="posts && posts.length">
        <li v-for="post of posts">

          <div class="lf-standard-div">
            <div class="usa-grid-full">
              <div class="usa-width-five-sixths">
                <span style="float: left">
                  {{post.name}}: {{post.job}}
                </span>
              </div>
              <div class="usa-width-one-sixth">
                <span style="float: right">
                  <button @click="switchToUpdateHero(post.id, post.name, post.description, post.job)" class="fa fa-pencil lf-ico-btn"></button>
                  <button @click="switchToDeleteHero(post.id, post.name)" class="fa fa-trash lf-ico-btn"></button>
                </span>
              </div>
            </div>
            <hr class="lf-hr"/>
            <p style="text-align: justify">
              {{post.description}}
            </p>
          </div>

          <br/>

        </li>
      </ul>
      <ul v-else-if="!loading">
        <li>
          <div class="lf-standard-div">
            No data found.
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>


<script src="./HallOfHeroes.js" type="text/javascript" ></script>
