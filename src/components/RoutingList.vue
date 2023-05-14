<template>
  <v-container>
    <v-row justify="space-around">
      <v-card width="400">
        <v-card-title>
          {{ currentPath.title }}
        </v-card-title>

        <v-card-subtitle>
          {{ currentPath.subtitle }}
        </v-card-subtitle>

        <v-card-text>
          <div class="font-weight-bold ms-1 mb-2">Last</div>

          <v-timeline density="compact" align="start">
            <v-timeline-item
              v-for="path in paths"
              :key="path.id"
              dot-color="red"
              size="x-small"
            >
              <div class="mb-4">
                <div class="font-weight-normal">
                  <strong>{{ path.title }}</strong>
                </div>
                <div>{{ path.subtitle }}</div>
              </div>
            </v-timeline-item>
          </v-timeline>
        </v-card-text>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
import ApiService from "@/services/apiService.js";

export default {
  name: "RoutingList",

  methods: {
    async getPath() {
      if (this.currentPath != null) {
        this.paths.push(this.currentPath);
      }

      this.currentPath = await ApiService.getPath();
    },
  },

  data: () => ({
    currentPath: {
        id: 1,
        time: 220.17,
        path: {
          toObject: ["A1", "B1", "C1", "C2", "C3", "D3", "E3", "F3", "F4"],
          toEnd: ["F4", "E4", "D4", "C4", "B4", "A4"],
        },
        title: "BLA BLA",
        subtitle: "BLA BLA BLA BLA BLA BLA BLA"
      },
    paths: [
      {
        id: 1,
        time: 220.17,
        path: {
          toObject: ["A1", "B1", "C1", "C2", "C3", "D3", "E3", "F3", "F4"],
          toEnd: ["F4", "E4", "D4", "C4", "B4", "A4"],
        },
        title: "BLA BLA",
        subtitle: "BLA BLA BLA BLA BLA BLA BLA"
      }
    ],
  }),
};
</script>
