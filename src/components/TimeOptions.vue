<template>
  <v-container>
    <v-row>
      <v-col cols="12" sm="2">
        <v-select
          :items="timeOptions"
          label="Select Period"
          v-model="selectedPeriod"
          @change="updateTimeline"
        ></v-select>
      </v-col>
      <v-col cols="12" sm="2">
        <v-btn @click="goBackInTime">Go Back a Year</v-btn>
      </v-col>
    </v-row>
    <v-timeline :dense="dense">
      <v-timeline-item
        v-for="event in filteredEvents"
        :key="event.id"
        :color="getColor(event.difficulty)"
        small
      >
        <template v-slot:opposite>
          {{ formatDate(event.created_at) }}
        </template>
         {{ event.title }}
      </v-timeline-item>
    </v-timeline>
  </v-container>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      selectedPeriod: 'year', // Default to yearly view
      timeOptions: ['year', 'month', 'week', 'day', 'hour'],
      events: [], // This will hold our dynamic data
      currentYear: new Date().getFullYear(),
      dense: false
    };
  },
  computed: {
    filteredEvents() {
      return this.events.filter(event => {
        const eventYear = new Date(event.created_at).getFullYear();
        return eventYear === this.currentYear;
      }).sort((a, b) => new Date(b.created_at) - new Date(a.created_at)); // Sort by most recent
    }
  },
  mounted() {
    this.fetchEvents();
  },
  methods: {
    async fetchEvents() {
      try {
        const response = await axios.get('http://127.0.0.1:5000/user/1/newspapers');
        this.events = response.data;
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    },
    goBackInTime() {
      this.currentYear--;
    },
    updateTimeline() {
      // Update the timeline based on the selected period
      this.dense = this.selectedPeriod !== 'year';
    },
    getColor(difficulty) {
      // Map difficulty level to a color
      const colors = ['green', 'blue', 'orange', 'red'];
      return colors[Math.min(difficulty, colors.length) - 1];
    },
    formatDate(dateString) {
      // Format the date
      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      return new Date(dateString).toLocaleDateString(undefined, options);
    }
  }
};
</script>
