function load() {
  $(".pics").html("");
  $(".text").text("loading . . .");

  let search = $(".search").val();

  $.ajax({
    type: "GET",
    data: {
      q: search,
      restrict_sr: "true",
    },
    url: "https://www.reddit.com/r/aww/search.json",
    success: function (response) {
      $(".text").html("");
      for (let i = 0; i < response.data.children.length; i++) {
        let image =
          "<img src='" + response.data.children[i].data.thumbnail + "'/>";
        $(".pics").append(image);
      }
    },
  });
}

$(".browse").click(load);

$(".search").on("keypress", function (e) {
  if (e.which == 13) {
    load();
  }
});
