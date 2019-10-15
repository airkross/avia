<template>
  <div>
    <div class="container">
      <div class="avia">
        <div class="container">
          <div class="row">
            <div class="col-12 d-flex justify-content-between mb-3">
              <span class="price">{{ticket.price}} Р</span>
              <div class="ticket-logo">
                <img src="@/assets/S7_Logo.png" alt="Логотп" />
              </div>
            </div>
            <div class="col-12">
              <div class="row">
                <div class="col-4 d-flex">
                  <div class="trail">
                    <span
                      class="cities"
                    >{{ticket.segments[0].origin}} – {{ticket.segments[0].destination}}</span>
                    <span
                      class="time"
                    >{{getTime(ticket.segments[0].date, ticket.segments[0].duration)}}</span>
                  </div>
                </div>
                <div class="col-4 d-flex justify-content-center">
                  <div class="trail">
                    <span class="cities">В пути</span>
                    <span class="time">{{getTimeInFlight(ticket.segments[0].duration)}}</span>
                  </div>
                </div>
                <div class="col-4 d-flex justify-content-center">
                  <div class="trail">
                    <span class="cities">{{countStops(ticket.segments[0].stops)}}</span>
                    <span class="time">{{stops(ticket.segments[0].stops)}}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ticket",
  props: ["ticket"],
  methods: {
    getTimeInFlight(duration) {
      const hour = Math.trunc(duration / 60);
      const minut = Math.trunc(
        (duration / 60 - Math.trunc(duration / 60)) * 60
      );
      return `${hour}ч ${minut}м`;
    },
    getTime(timeSending, duration) {
      const startTime = new Date(timeSending);
      const startHours = startTime.getHours();
      const startMinutes = startTime.getMinutes() < 10 ? '0' + startTime.getMinutes() : startTime.getMinutes();

      const finishTime = new Date(startTime.setMinutes(startTime.getMinutes() + duration));
      const finishHours = finishTime.getHours();
      const finishMinutes = finishTime.getMinutes() < 10 ? '0' + finishTime.getMinutes() : finishTime.getMinutes();

      return `${startHours}:${startMinutes} - ${finishHours}:${finishMinutes}`;
    },
    stops(stops) {
      if (!stops.length) {
        return `Прямой`;
      }
      return `${stops}`;
    },
    countStops(stops) {
      if (!stops.length) {
        return "0 пересадок";
      } else if (stops.length === 1) {
        return "1 пересадка";
      } else {
        return `${stops.length} пересадки`;
      }
    }
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Open+Sans:400,700,800&display=swap");
.avia {
  background: #ffffff;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  padding: 20px;
  margin-bottom: 20px;
}
.price {
  font-family: Open Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 24px;
  color: #2196f3;
}
.trail {
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
}
.cities {
  font-family: Open Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 18px;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  color: #a0b0b9;
}
.time {
  font-family: Open Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 21px;
  color: #4a4a4a;
}
</style>