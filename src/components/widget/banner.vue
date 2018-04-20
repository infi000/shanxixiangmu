<template>
  <el-row>
    <el-col :span="24">
      <div class="city-banner" :style="{backgroundImage:'url('+bannerSrc+')'}">
      </div>
    </el-col>
  </el-row>
</template>
<script>
/*jshint esversion: 6 */
import citybanner from "@/assets/bn1.png";
export default {
  props: [],
  data() {
    return {
          bannerSrc: citybanner,
    };
  },
  computed: {

  },
  methods: {

  },
  components: {

  },
  created() {

  },
  mounted() {

  }

};

</script>
<style scoped>
.city-banner {
  height: 369px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  margin-bottom: 20px;
}
</style>
