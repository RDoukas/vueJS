var app = new Vue({
  el: "#app",
  data: {
    message: "Hello from JavaScript!",
    movies: ["Pretty in Pink", "Dirty Dancing", "Fight Club", "Breakfast Club"],
    newMovie: "",
  },
  methods: {
    addNewMovie: function() {
      this.movies.push(this.newMovie);
      this.newMovie = "";
    },
  },
});
