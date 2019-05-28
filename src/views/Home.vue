<template>
  <span>
    <home-page></home-page>
    <app-info></app-info>
    <app-games></app-games>
    <social-media></social-media>
    <app-contact></app-contact>
  </span>
</template>

<script>
import HomePage from "@/components/HomePage";
import AppInfo from "@/components/AppInfo";
import AppGames from "@/components/AppGames";
import SocialMedia from "@/components/SocialMedia";
import AppContact from "@/components/AppContact";

export default {
  name: "home",
  components: {
    HomePage,
    AppContact,
    AppInfo,
    AppGames,
    SocialMedia
  }
};
</script>