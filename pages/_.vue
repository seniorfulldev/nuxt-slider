<template>
  <section class="components-area">
    <component
      v-if="story.content.component"
      :key="story.content._uid"
      :blok="story.content"
      :is="story.content.component"
    />
  </section>
</template>
 
<script>
import StoryblokClient from "storyblok-js-client";
export default {
  data() {
    return {
      story: { content: {} },
      rss: {},
    };
  },
  created(){
  },
  mounted() {
    this.$storybridge(() => {
      // Create Story Book Instance for live edit
      const storyblokInstance = new StoryblokBridge();

      // Use the input event for instant update of content
      storyblokInstance.on("input", (event) => {
        if (event.story.id === this.story.id) {
          this.story.content = event.story.content;
        }
      });

      // Use the bridge to listen the events
      storyblokInstance.on(["published", "change"], (event) => {
        this.$nuxt.$router.go({
          path: this.$nuxt.$router.currentRoute,
          force: true,
        });
      });
    });
  },
   asyncData(context) {
    // Get DEV or PROD version (untested)
    // const version =
    //   context.query._storyblok || context.isDev ? "draft" : "published";

    // 1. Initialize the client with the preview token
    // from your space dashboard at https://app.storyblok.com
    let Storyblok = new StoryblokClient({
      accessToken: process.env.STORYBLOK_TOKEN,
      cache: {
        clear: 'auto',
        type: 'memory'
      }
    })

    // 2. extra flushCache
    Storyblok.flushCache()

    // Use full slug path from Storyblok CMS pages
    const fullSlug = context.route.path == "/" || context.route.path == ""  ? "ad" : context.route.path;

    return Storyblok
      .get(`cdn/stories/${fullSlug}`, {
        version: process.env.STORYBLOK_CONTENT_STATUS, // Set DEV of PROD version (untested)
        cv: +new Date()
      })
      .then((res) => {
        return res.data;
      })
      .catch((res) => {
        if (!res.response) {
          console.error(res);
          context.error({
            statusCode: 404,
            message: "Failed to receive content form api",
          });
        } else {
          console.error(res.response.data);
          context.error({
            statusCode: res.response.status,
            message: res.response.data,
          });
        }
      });
  },
};
</script>

<style lang="scss">
  .components-area{
    background-color: #F6F6F6;
  }
  </style>
  