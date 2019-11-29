export default {
  name: "intersect",
  abstact: true,
  props: {
    threshold: {
      type: Array,
      required: false,
      default: () =>
        Array(100)
          .fill(0)
          .map((d, i) => i / 100)
    },
    root: {
      type: HTMLElement,
      required: false,
      default: () => null
    },
    rootMargin: {
      type: String,
      required: false,
      default: () => "100%"
    }
  },
  created() {
    this.observer = new IntersectionObserver(
      entries => {
        const rect = entries[0].boundingClientRect;
        const factor = (rect.top / rect.height) * -1.8;
        if (factor > 0 && factor < 1) {
          this.$emit("ratio", factor);
        }
      },
      {
        threshold: this.threshold,
        root: this.root,
        rootMargin: this.rootMargin
      }
    );
  },
  mounted() {
    this.$nextTick(() => {
      this.observer.observe(this.$slots.default[0].elm);
    });
  },
  destroyed() {
    console.log("destroyed");
    this.observer.disconnect();
  },
  renders: function(createElement, context) {
    console.log("render", context);
    return createElement("div", context.data, context.children);
  },
  render() {
    // console.log(this);
    return this.$slots.default ? this.$slots.default[0] : null;
  }
};
