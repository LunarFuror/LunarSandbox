/**
 * Created by grayson on 9/12/17.
 */
import _ from 'lodash'
import axios from 'axios'
import { getAccessToken } from '../../utils/auth'
import { getApiUrl } from '../../utils/config'
var baseUrl = ''

export default {
  data: () => ({
    posts: [],
    errors: [],
    name: '',
    description: '',
    job: '',
    newHeroId: '',
    newName: '',
    newDescription: '',
    newJob: '',
    deleteHeroId: '',
    deleteHeroName: '',
    viewState: 'Add'
  }),
  /**
   * Throttle makes sure we aren't requesting too much. the .2 at the end means we can send 5000 requests a second. Any more than that are dropped.
   * Every request must send authorization headers as shown.
   */
  methods: {
    switchToUpdateHero: function(id, name, description, job){
      this.viewState = 'Edit';
      this.newHeroId = id;
      this.newName = name;
      this.newDescription = description;
      this.newJob = job;
    },
    switchToDeleteHero: function(id, name){
      this.viewState = 'Delete';
      this.deleteHeroId = id;
      this.deleteHeroName = name;
    },
    switchToAddHero: function(){
      this.viewState = 'Add';
    },
    getHeroes: _.throttle(function () {
      axios.get(baseUrl + '/heroes/', {
        headers: { Authorization: 'Bearer ' + getAccessToken()}
      })
      .then(response => {
        this.posts = response.data;
        this.switchToAddHero();
      })
      .catch(e => {
        this.errors.push(e)
      })
    }, .2),
    putHero: _.throttle(function () {
      axios.put(baseUrl + '/heroes/' + this.newHeroId,
      {
        name: this.newName,
        description:  this.newDescription,
        job:  this.newJob
      },
      {
        headers: {Authorization: 'Bearer ' + getAccessToken()}
      })
      .then(response => {
        this.newName = '';
        this.newDescription = '';
        this.newJob = '';
        this.newHeroId = '';
        this.getHeroes();
      })
      .catch(e => {
        this.errors.push(e)
      })
    }, .2),
    postHero: _.throttle(function () {
      axios.post(baseUrl + '/heroes/', {
        name: this.name,
        description:  this.description,
        job:  this.job,
      },
      {
        headers: {Authorization: 'Bearer ' + getAccessToken()}
      })
      .then(response => {
        this.name = '';
        this.description = '';
        this.job = '';
        this.getHeroes();
      })
      .catch(e => {
        this.errors.push(e)
      })
    }, .2),
    deleteHero: _.throttle(function () {
      axios.delete(baseUrl + '/heroes/' + this.deleteHeroId, {
        headers: {Authorization: 'Bearer ' + getAccessToken()}
      })
      .then(response => {
        this.deleteHeroId = '';
        this.getHeroes();
      })
      .catch(e => {
        this.errors.push(e);
      })
    }, .2)
  },
  mounted () {
    baseUrl = getApiUrl();
    this.getHeroes();
  }
}
