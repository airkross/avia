<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-12 d-flex justify-content-center">
          <div class="block-logo">
            <router-link to="/" class="logo">
              <img src="@/assets/Logo.png" alt="Логотип" />
            </router-link>
          </div>
        </div>
        <div class="col-4">
          <app-sidebar @checked="checked($event)"></app-sidebar>
        </div>
        <div class="col-8">
          <app-ticket v-for="(ticket,index) in tickets['tickets']" :key="index" :ticket="ticket"></app-ticket>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from "@/components/Sidebar.vue";
import Ticket from "@/components/Ticket.vue";
export default {
  name: "home",
  data() {
    return {
      tickets: [],
      tempArrayTickets: []
    };
  },
  computed: {
    getTickets() {
      return this.tickets;
    }
  },
  watch:{
    tickets(){
      console.log( 'tick chenge');
    }
  },
  methods: {
    checked(checkedArr) {
      if (checkedArr.length === 0) {
        this.tickets = this.$store.state.info;
        console.log(this.tickets);
        this.tickets["tickets"].length = 5;
      }
      for (let i = 0; i < checkedArr.length; i++) {
        for (let j = 0; j < this.tickets.tickets.length; j++) {
          if (
            checkedArr[i] == this.tickets.tickets[j].segments[0].stops.length
          ) {
            this.tempArrayTickets.push(this.tickets.tickets[j]);
          }
        }
      }
      if (this.tempArrayTickets.length) {
        this.tickets.tickets = this.tempArrayTickets;
      }
    }
  },
  async mounted() {
    try {
      const searchId = await this.$store.dispatch("searchId");
      this.tickets = await this.$store.dispatch("fetchTickets", searchId);
      this.tickets["tickets"].length = 5;
    } catch (e) {
      throw e;
    }
  },
  components: {
    appSidebar: Sidebar,
    appTicket: Ticket
  }
};
</script>

<style scoped>
</style>
