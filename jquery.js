/* Pegando dados do arquivo jason , pelo URL */

$(() => {
  $.ajax({
    type: "GET",
    dataType: "json",
    url: "https://rafaelescalfoni.github.io/desenv_web/filmes.json",
    data: { get_param: "value" },
    success: (data) => {
      createCard(data);
    },
  });

  function createCard(data) {
    let catalog = $("#catalog");

    data.forEach((el) => {
      let card = $("<article>");
      card.addClass("card");
      card.attr("id", `card${el.id}`);

      let imgLink = $("<a>");
      imgLink.attr("href", "#");

      let banner = $("<img>");
      banner.addClass("banner");

      let header = $("<header>");

      let titleCard = $("<div>");
      titleCard.addClass("cardT");

      let titleMovie = $("<h2>");

      let categories = $("<small>");

      let note = $("<div>");
      note.addClass("note");

      let highNumber = $("<span>");
      highNumber.addClass("high-number");

      let smallNumber = $("<small>");

      let age = $("<span>");
      age.addClass("age");

      let section = $("<section>");

      let resumo = $("<p>");
      resumo.addClass("resumo");

      let elenco = $("<h3>");
      elenco.addClass("elenco");

      let elencoDestaque = $("<span>");

      let titlecomentarioss = $("<h3>");

      let comentarioss = $("<div>");
      comentarioss.addClass("comentarios");

      let footer = $("<footer>");
      let titleFooter = $("<h2>");
      let like = $("<div>");
      like.addClass("like");

      for (let i = 0; i < data.length; i++) {
        if (el.titulosSemelhantes.includes(i)) {
          let imgLink = $("<a>");
          imgLink.attr("href", `#card${i}`);

          let imgLike = $("<img>");
          imgLike.attr("src", data[i - 1].figura);

          imgLink.append(imgLike);
          like.append(imgLink);
        }
      }

      banner.attr("src", el.figura);
      imgLink.append(banner);

      titleMovie.html(el.titulo);
      categories.html(el.generos.join(", "));

      note.append(highNumber);
      note.append(smallNumber);

      titleCard.append(titleMovie);
      titleCard.append(categories);

      let classification = el.classificacao == 0 ? "Livre" : el.classificacao;
      age.html(classification);
      age.addClass(`class-${el.classificacao}`);

      header.append(titleCard);
      header.append(age);

      resumo.html(el.resumo);

      elencoDestaque.html("Elenco: ");
      let elencoNames = el.elenco.join(", ");

      elenco.append(elencoDestaque);
      elencoDestaque.html += elencoNames;

      for (let i = 0; i < el.opinioes.length; i++) {
        let comentarios = $("<p>");
        comentarios.html(`"${el.opinioes[i].descricao}"`);
        comentarioss.append(comentarios);
      }

      titlecomentarioss.html("Comentários");

      section.append(resumo);
      section.append(elencoDestaque);
      section.append(elencoNames);
      section.append(titlecomentarioss);
      section.append(comentarioss);

      titleFooter.html("Títulos Similares");
      footer.append(titleFooter);
      footer.append(like);

      card.append(imgLink);
      card.append(header);
      card.append(section);
      card.append(footer);

      catalog.append(card);
    });
  }
});
