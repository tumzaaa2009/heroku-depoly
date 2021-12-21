<template>
  <section class="row pt-5">
    <div class="col-md-4 " v-bind:style="introInfo.imgStyle.align">
      <!-- <div class="profile-pic">  -->
      <!-- <img :src="getProfileImage()" alt="">  -->
      <!-- </div>  -->
    </div>
    <div class="col-md-7">
      <div class="row justify-content-center justify-content-md-between">
        <div class="col-auto">
          <h1 class="intro-title1">
            <span class="color1 bold">{{ introInfo.name }}</span>
          </h1>
          <h2 class="intro-title2">
            {{ introInfo.title }}
          </h2>
          <ul class="intro-list-contact">
            <li v-for="(contact, index) in contactInfo" :key="index">
              <h6 class="text-link" :href="`${contact.link}`">
                <i
                  :class="`fa fa-${contact.name} mb-2`"
                  :style="`${contact.style}`"
                ></i>
                <span> {{ contact.context }}</span>
              </h6>
            </li>
          </ul>
        </div>
        <div class="col-auto mt-3">
          <h1>
            <i class="fa fa-desktop" aria-hidden="true"></i> SocialMediaInfo 
          </h1>
          <ul class="">
            <li
              v-for="(social, index) in socialMediaInfo"
              :key="index"
              :href="social.link"
              class="mt-2"
            >
              <a class="text-link" :href="`${social.link}`" target="_blank">
                <i v-if="index==0"
                  :class="`fa fa-${social.name} mb-2`"
                  style="font-size: 45px;margin-right:20px"
                ></i>
                <img class="mr-2" :src="getHeroku()" v-else  style="width:60px;" alt=""> 
                <span>{{ social.displayName }}</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <!-- <p v-html="introInfo.description"></p> -->
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    introInfo: {
      type: Object,
    },
    contactInfo: {
      type: Object,
    },
    socialMediaInfo: {
      type: Object,
    },
  },

  computed: {
    getRetun() {
      return console.log("asdasdasd");
    },
  },
  methods: {
    getProfileImage() {
      return require("../assets/images/" + this.introInfo.image);
    },
        getHeroku() {
      return require("../assets/images/" + this.socialMediaInfo[1].image);
    },
  },
};
</script>

<style></style>
