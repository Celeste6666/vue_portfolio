<template>
  <div>
    <svg id="decoration" width="100vw" height="100vh">
      <defs>
        <pattern id="dot" x="6" y="3" width="10" height="10" patternUnits="userSpaceOnUse">
          <circle cx="5" cy="5" r="2" fill="#ec9412" />
        </pattern>
        <pattern id="triangle" width="1" height="1">
          <polygon points="0 20,20 20,10 0" stroke="#1fc586" stroke-width="1" fill="transparent" />
          <polygon points="4 23,24 23,14 2" fill="#1fc586" opacity="0.8" />
        </pattern>
      </defs>
      <circle cx="50%" cy="-20" r="80" stroke-width="20" class="color-change" fill="transparent" />
      <rect x="40%" y="200" width="45" height="120" fill="url(#triangle)" />
      <rect x="3%" y="400" width="40" height="100" fill="url(#dot)" />
      <rect
        x="90%"
        y="80%"
        width="30"
        height="30"
        fill="transparent"
        stroke-width="5"
        stroke="#9966cc"
      />
      <polygon
        points="420,550 470,500 470,550 420,500"
        stroke-width="5"
        stroke="#2eb1ed"
        fill="none"
        stroke-linejoin="round"
        transform="rotate(30 420,500)"
      />
    </svg>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss">
#decoration {
  position: absolute;
}
.v-application.pinkTheme .color-change {
  stroke: $pinkTheme;
}

.v-application.orangeTheme .color-change {
  stroke: $orangeTheme;
}

.v-application.greenTheme .color-change {
  stroke: $greenTheme;
}

.v-application.blueTheme .color-change {
  stroke: $blueTheme;
}

.v-application.redTheme .color-change {
  stroke: $redTheme;
}
</style>
