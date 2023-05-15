<template>
  <v-container>
    <v-form v-model="valid">
      <v-container>
        <v-row class="mt-5">
          <v-col cols="12" md="4">
            <v-text-field
              v-model="start"
              :rules="posRules"
              label="Start"
              @keyup="uppercase"
              required
            ></v-text-field>
          </v-col>

          <v-col cols="12" md="4">
            <v-text-field
              v-model="object"
              :rules="posRules"
              label="Object"
              @keyup="uppercase"
              required
            ></v-text-field>
          </v-col>

          <v-col cols="12" md="4">
            <v-text-field
              v-model="end"
              :rules="posRules"
              label="End"
              @keyup="uppercase"
              required
            ></v-text-field>
          </v-col>
        </v-row>

        <v-row justify="center">
          <v-btn @click="getPath" :disabled="!valid">Submit</v-btn>
        </v-row>
      </v-container>
    </v-form>

    <v-row class="mt-15" justify="space-around" v-if="currentPath">
      <v-card width="800">
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
        this.paths.unshift(this.currentPath);
      }

      this.currentPath = await ApiService.getPath(this.start, this.object, this.end);
    },
    uppercase() {
      this.start = this.start.toUpperCase();
      this.object = this.object.toUpperCase();
      this.end = this.end.toUpperCase();
    }
  },

  data: () => ({
    posRules: [
      (value) => {
        if (value) return true;

        return "Field is requred.";
      },
      (value) => {
        if (value?.length <= 2) return true;

        return "Field must be less than 2 characters.";
      },
      (value) => {
        if (["A", "B", "C", "D", "E", "F", "G", "H"].includes(value[0]) && ["A", "B", "C", "D", "E", "F", "G", "H"].includes(value[0])) return true;

        return "Field must be in .";
      },
    ],
    
    valid: false,
    start: "",
    object: "",
    end: "",

    currentPath: null,
    paths: [],
  }),
};
</script>
