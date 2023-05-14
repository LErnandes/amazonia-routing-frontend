<template>
  <v-container fluid fill-height>
    <RoutingList/>
  </v-container>
</template>

<script>
import RoutingList from "@/components/RoutingList.vue";

export default {
  name: "HomeView",

  components: {
    RoutingList,
  },
};
</script>
