<template>
  <div>
    <aside class="sidebar">
      <h5>Количество пересадок</h5>
      <div>
        <label for="check1">
          <input type="checkbox" id="check1" value="all" class="check" v-model="checked" />
          <span class="box"></span>
          Все
        </label>
      </div>
      <div>
        <label for="check2">
          <input type="checkbox" id="check2" value="without" class="check" v-model="checked" />
          <span class="box"></span>
          Без пересадок
        </label>
      </div>
      <div>
        <label for="check3">
          <input type="checkbox" id="check3" value="1" class="check" v-model="checked" />
          <span class="box"></span>
          1 пересадка
        </label>
      </div>
      <div>
        <label for="check4">
          <input type="checkbox" id="check4" value="2" class="check" v-model="checked" />
          <span class="box"></span>
          2 пересадки
        </label>
      </div>
      <div>
        <label for="check5">
          <input type="checkbox" id="check5" value="3" class="check" v-model="checked" />
          <span class="box"></span>
          3 пересадки
        </label>
      </div>
    </aside>
  </div>
</template>

<script>
export default {
  name: "sidebar",
  data() {
    return {
      checked: []
    };
  },
  watch:{
    checked(value){
      this.$emit('checked', value);
    }
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Open+Sans:400,700,800&display=swap");
h5 {
  text-transform: uppercase;
  font-family: "Open Sans", sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 12px;
  letter-spacing: 0.5px;
  color: #4a4a4a;
  margin-bottom: 20px;
}
.sidebar {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: left;
  background: #ffffff;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  padding: 20px;
}
label {
  display: flex;
}
.check {
  display: none;
}
.check:checked + .box {
  background: url("../assets/check.png") no-repeat center center;
  border: 1px solid #2196f3;
}
.box {
  display: block;
  width: 20px;
  height: 20px;
  border-radius: 2px;
  border: 1px solid #9abbce;
  margin-right: 10px;
}
</style>