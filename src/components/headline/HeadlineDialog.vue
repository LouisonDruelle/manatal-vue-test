<template>
  <v-row justify="center">
    <v-dialog
      :value="showDialog"
      persistent
      max-width="400px"
    >
      <v-card>
        <v-card-title>
          <span class="headline">Edit headline title</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-textarea
              v-model="headline.title"
              label="Edit title"
              counter="150"
              :rules="[form.rules.required, form.rules.length]"
            ></v-textarea>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="blue darken-1"
            text
            @click="close()"
          >
            Close
          </v-btn>
          <v-btn
            color="blue darken-1"
            text
            @click="save()"
          >
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  props: ['dialog', 'headline'],

  data: () => ({
    form: {
      rules: {
        required: (v) => !!v || 'Required',
        length: (v) => v.length <= 150 || 'The title cannot have more than 150 characters',
      },
    },
    title: '',
  }),
  mounted() {
    this.baseTitle = this.headline.title;
  },
  computed: {
    showDialog() {
      return this.dialog;
    },
  },
  methods: {
    save() {
      if (this.headline.title && this.headline.title.length < 150) {
        this.$store.dispatch('updateHeadlineTitle', {
          title: this.headline.title,
          url: this.headline.url,
        });
        this.$emit('close');
      }
    },
    close() {
      this.headline.title = this.baseTitle;
      this.$emit('close');
    },
  },
};
</script>
