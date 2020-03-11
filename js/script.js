$(function () {

  // Let's further improve the Pokédex while diving deeper into AJAX with jQuery.
  var pokeapi = "https://pokeapi.co/api/v2/generation/1";
  var pokeapi2 = "https://pokeapi.co/api/v2/generation/2";
  var pokeapi3 = "https://pokeapi.co/api/v2/generation/3";
  var pokeapi4 = "https://pokeapi.co/api/v2/generation/4";
  var pokeapi5 = "https://pokeapi.co/api/v2/generation/5";
  var pokeapi6 = "https://pokeapi.co/api/v2/generation/6";
  var pokeapi7 = "https://pokeapi.co/api/v2/generation/7";
  var pokemonByName = "https://pokeapi.co/api/v2/pokemon/";
  var pokemonBy = "https://pokeapi.co/api/v2/";
/*$.getJSON(pokemonBy).done(function(data) {
    console.log(data);  // Explore available 
  });*/


  $.getJSON(pokeapi).done(function(data) {
   /* console.log(data); */ // Explore available data in the Developer Tools Console
    $.each(data.pokemon_species, function(index, pokemon) {
      var name = capitalize(pokemon.name);

      // Add an additional link to show image of the Pokémon.
      var boldName = $("<strong>").text(name);
      var link = $("<a class='red'>")
          .attr("id", pokemon.name)
          .attr("href", "#")
          .append(boldName);

      var paragraph = $("<p>")
          .html("No." + (index+1)+' ').append(link);
      paragraph.appendTo("#pokedex");

      // Add handler to the link to fetch and display image.
      // The helper function showPokemon is defined below.
      link.click(function() {
        showPokemon(pokemon.name);  // API needs the non-capitalized name
      });
    });
  }).fail(function() {
    // Handle error case
    console.log("Call to PokéAPI failed.");
  }).always(function() {
    // Will always be executed (in either case).
   /* console.log("Pokémon is awesome.")*/
  });

  // Only select this element once and store in variable.
  var detailsDiv = $("#poke");

  function showPokemon(name) {
    $.getJSON(pokemonByName + name).done(function(details) {
     /* console.log(details); */ // To explore data in browser

      // Show selected Pokémon in the details div.
      var image = $("<img>").attr("src", details.sprites.front_default);
      var imageblack = $("<img>").attr("src", details.sprites.back_default);
      var imagesin = $("<img>").attr("src", details.sprites.front_shiny);
      var imagesinblack = $("<img>").attr("src", details.sprites.back_shiny);
      detailsDiv.empty()
          .append("<h2>" + capitalize(name) + "</h2>")
          .append(image)
          .append(imageblack)
          .append(imagesin)
          .append(imagesinblack);

    }).fail(function(error) {
      console.log("Could not retrieve details for " + name);
    });
  }

  $.getJSON(pokeapi2).done(function(data) {
   /* console.log(data); */ // Explore available data in the Developer Tools Console
    $.each(data.pokemon_species, function(index, pokemon) {
      var name = capitalize(pokemon.name);

      // Add an additional link to show image of the Pokémon.
      var boldName = $("<strong>").text(name);
      var link = $("<a class='red'>")
          .attr("id", pokemon.name)
          .attr("href", "#")
          .append(boldName);

      var paragraph = $("<p>")
          .html("No." + (index+1)+ " ").append(link);
      paragraph.appendTo("#pokedex2");

      // Add handler to the link to fetch and display image.
      // The helper function showPokemon is defined below.
      link.click(function() {
        showPokemon(pokemon.name);  // API needs the non-capitalized name
      });
    });
  }).fail(function() {
    // Handle error case
    console.log("Call to PokéAPI failed.");
  }).always(function() {
    // Will always be executed (in either case).
   /* console.log("Pokémon is awesome.")*/
  });

  // Only select this element once and store in variable.
  var detailsDiv = $("#poke");

  function showPokemon(name) {
    $.getJSON(pokemonByName + name).done(function(details) {
    /*  console.log(details); */ // To explore data in browser

      // Show selected Pokémon in the details div.
      var image = $("<img>").attr("src", details.sprites.front_default);
      var imageblack = $("<img>").attr("src", details.sprites.back_default);
      var imagesin = $("<img>").attr("src", details.sprites.front_shiny);
      var imagesinblack = $("<img>").attr("src", details.sprites.back_shiny);
      detailsDiv.empty()
          .append("<h2>" + capitalize(name) + "</h2>")
          .append(image)
          .append(imageblack)
          .append(imagesin)
          .append(imagesinblack);

    }).fail(function(error) {
      console.log("Could not retrieve details for " + name);
    });
  }
  $.getJSON(pokeapi3).done(function(data) {
    /*console.log(data);*/  // Explore available data in the Developer Tools Console
    $.each(data.pokemon_species, function(index, pokemon) {
      var name = capitalize(pokemon.name);

      // Add an additional link to show image of the Pokémon.
      var boldName = $("<strong>").text(name);
      var link = $("<a class='red'>")
          .attr("id", pokemon.name)
          .attr("href", "#")
          .append(boldName);

      var paragraph = $("<p>")
          .html("No." + (index+1)+ ' ').append(link);
      paragraph.appendTo("#pokedex3");

      // Add handler to the link to fetch and display image.
      // The helper function showPokemon is defined below.
      link.click(function() {
        showPokemon(pokemon.name);  // API needs the non-capitalized name
      });
    });
  }).fail(function() {
    // Handle error case
    console.log("Call to PokéAPI failed.");
  }).always(function() {
    // Will always be executed (in either case).
    /*console.log("Pokémon is awesome.")*/
  });

  // Only select this element once and store in variable.
  var detailsDiv = $("#poke");

  function showPokemon(name) {
    $.getJSON(pokemonByName + name).done(function(details) {
      /*console.log(details);*/  // To explore data in browser

      // Show selected Pokémon in the details div.
      var image = $("<img>").attr("src", details.sprites.front_default);
      var imageblack = $("<img>").attr("src", details.sprites.back_default);
      var imagesin = $("<img>").attr("src", details.sprites.front_shiny);
      var imagesinblack = $("<img>").attr("src", details.sprites.back_shiny);
      detailsDiv.empty()
          .append("<h2>" + capitalize(name) + "</h2>")
          .append(image)
          .append(imageblack)
          .append(imagesin)
          .append(imagesinblack);

    }).fail(function(error) {
      console.log("Could not retrieve details for " + name);
    });
  }

$.getJSON(pokeapi4).done(function(data) {
   /* console.log(data); */ // Explore available data in the Developer Tools Console
    $.each(data.pokemon_species, function(index, pokemon) {
      var name = capitalize(pokemon.name);

      // Add an additional link to show image of the Pokémon.
      var boldName = $("<strong>").text(name);
      var link = $("<a class='red'>")
          .attr("id", pokemon.name)
          .attr("href", "#")
          .append(boldName);

      var paragraph = $("<p>")
          .html("No." + (index+1) + " ").append(link);
      paragraph.appendTo("#pokedex4");

      // Add handler to the link to fetch and display image.
      // The helper function showPokemon is defined below.
      link.click(function() {
        showPokemon(pokemon.name);  // API needs the non-capitalized name
      });
    });
  }).fail(function() {
    // Handle error case
    console.log("Call to PokéAPI failed.");
  }).always(function() {
    // Will always be executed (in either case).
    /*console.log("Pokémon is awesome.")*/
  });

  // Only select this element once and store in variable.
  var detailsDiv = $("#poke");

  function showPokemon(name) {
    $.getJSON(pokemonByName + name).done(function(details) {
     /* console.log(details); */ // To explore data in browser

      // Show selected Pokémon in the details div.
      var image = $("<img>").attr("src", details.sprites.front_default);
      var imageblack = $("<img>").attr("src", details.sprites.back_default);
      var imagesin = $("<img>").attr("src", details.sprites.front_shiny);
      var imagesinblack = $("<img>").attr("src", details.sprites.back_shiny);
      detailsDiv.empty()
          .append("<h2>" + capitalize(name) + "</h2>")
          .append(image)
          .append(imageblack)
          .append(imagesin)
          .append(imagesinblack);

    }).fail(function(error) {
      console.log("Could not retrieve details for " + name);
    });
  }

  $.getJSON(pokeapi5).done(function(data) {
    /*console.log(data);*/  // Explore available data in the Developer Tools Console
    $.each(data.pokemon_species, function(index, pokemon) {
      var name = capitalize(pokemon.name);

      // Add an additional link to show image of the Pokémon.
      var boldName = $("<strong>").text(name);
      var link = $("<a class='red'>")
          .attr("id", pokemon.name)
          .attr("href", "#")
          .append(boldName);

      var paragraph = $("<p>")
          .html("No." + (index+1) +" ").append(link);
      paragraph.appendTo("#pokedex5");

      // Add handler to the link to fetch and display image.
      // The helper function showPokemon is defined below.
      link.click(function() {
        showPokemon(pokemon.name);  // API needs the non-capitalized name
      });
    });
  }).fail(function() {
    // Handle error case
    console.log("Call to PokéAPI failed.");
  }).always(function() {
    // Will always be executed (in either case).
/*    console.log("Pokémon is awesome.")*/
  });

  // Only select this element once and store in variable.
  var detailsDiv = $("#poke");

  function showPokemon(name) {
    $.getJSON(pokemonByName + name).done(function(details) {
     /* console.log(details);*/  // To explore data in browser

      // Show selected Pokémon in the details div.
      var image = $("<img>").attr("src", details.sprites.front_default);
      var imageblack = $("<img>").attr("src", details.sprites.back_default);
      var imagesin = $("<img>").attr("src", details.sprites.front_shiny);
      var imagesinblack = $("<img>").attr("src", details.sprites.back_shiny);
      detailsDiv.empty()
          .append("<h2>" + capitalize(name) + "</h2>")
          .append(image)
          .append(imageblack)
          .append(imagesin)
          .append(imagesinblack);

    }).fail(function(error) {
      console.log("Could not retrieve details for " + name);
    });
  }

$.getJSON(pokeapi6).done(function(data) {
   /* console.log(data);  */// Explore available data in the Developer Tools Console
    $.each(data.pokemon_species, function(index, pokemon) {
      var name = capitalize(pokemon.name);

      // Add an additional link to show image of the Pokémon.
      var boldName = $("<strong>").text(name);
      var link = $("<a class='red'>")
          .attr("id", pokemon.name)
          .attr("href", "#")
          .append(boldName);

      var paragraph = $("<p>")
          .html("No." + (index+1) +" ").append(link);
      paragraph.appendTo("#pokedex6");

      // Add handler to the link to fetch and display image.
      // The helper function showPokemon is defined below.
      link.click(function() {
        showPokemon(pokemon.name);  // API needs the non-capitalized name
      });
    });
  }).fail(function() {
    // Handle error case
    console.log("Call to PokéAPI failed.");
  }).always(function() {
    // Will always be executed (in either case).
   /* console.log("Pokémon is awesome.")*/
  });

  // Only select this element once and store in variable.
  var detailsDiv = $("#poke");

  function showPokemon(name) {
    $.getJSON(pokemonByName + name).done(function(details) {
      /*console.log(details); */ // To explore data in browser

      // Show selected Pokémon in the details div.
      var image = $("<img>").attr("src", details.sprites.front_default);
      var imageblack = $("<img>").attr("src", details.sprites.back_default);
      var imagesin = $("<img>").attr("src", details.sprites.front_shiny);
      var imagesinblack = $("<img>").attr("src", details.sprites.back_shiny);
      detailsDiv.empty()
          .append("<h2>" + capitalize(name) + "</h2>")
          .append(image)
          .append(imageblack)
          .append(imagesin)
          .append(imagesinblack);

    }).fail(function(error) {
      console.log("Could not retrieve details for " + name);
    });
  }


  $.getJSON(pokeapi7).done(function(data) {
   /* console.log(data); */ // Explore available data in the Developer Tools Console
    $.each(data.pokemon_species, function(index, pokemon) {
      var name = capitalize(pokemon.name);

      // Add an additional link to show image of the Pokémon.
      var boldName = $("<strong>").text(name);
      var link = $("<a class='red'>")
          .attr("id", pokemon.name)
          .attr("href", "#")
          .append(boldName);

      var paragraph = $("<p>")
          .html("No." + (index+1) + " ").append(link);
      paragraph.appendTo("#pokedex7");

      // Add handler to the link to fetch and display image.
      // The helper function showPokemon is defined below.
      link.click(function() {
        showPokemon(pokemon.name);  // API needs the non-capitalized name
      });
    });
  }).fail(function() {
    // Handle error case
    console.log("Call to PokéAPI failed.");
  }).always(function() {
    // Will always be executed (in either case).
  /*  console.log("Pokémon is awesome.")*/
  });

  // Only select this element once and store in variable.
  var detailsDiv = $("#poke");

  function showPokemon(name) {
    $.getJSON(pokemonByName + name).done(function(details) {
      /*console.log(details);*/  // To explore data in browser

      // Show selected Pokémon in the details div.
      var image = $("<img>").attr("src", details.sprites.front_default);
      var imageblack = $("<img>").attr("src", details.sprites.back_default);
      var imagesin = $("<img>").attr("src", details.sprites.front_shiny);
      var imagesinblack = $("<img>").attr("src", details.sprites.back_shiny);
      detailsDiv.empty()
          .append("<h2>" + capitalize(name) + "</h2>")
          .append(image)
          .append(imageblack)
          .append(imagesin)
          .append(imagesinblack);

    }).fail(function(error) {
      console.log("Could not retrieve details for " + name);
    });
  }
});

$(function() {
  var pokego = " https://pokemon-go1.p.rapidapi.com/pokemon_stats.json";

  $.getJSON(pokego).done(function(data) {
    console.log(data);  // Explore available 
  });
});



// Capitalizes a given string.
function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
