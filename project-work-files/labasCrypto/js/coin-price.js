$.get("https://api.coinmarketcap.com/v1/ticker/", function(data, status) {
  for (var i = 0; i < data.length - 1; i++) {
    if (data[i].id == "litecoin") {
      $("#price").html(data[i].price_usd);
      $("#change").html(data[i]. percent_change_24h);
    }
     if (data[i].id == "bitcoin") {
      $("#bprice").html(data[i].price_usd);
      $("#bchange").html(data[i]. percent_change_24h);
    }
     if (data[i].id == "ethereum") {
      $("#eprice").html(data[i].price_usd);
      $("#echange").html(data[i]. percent_change_24h);
    } 
      if (data[i].id == "bitcoin-cash") {
      $("#chprice").html(data[i].price_usd);
      $("#chchange").html(data[i]. percent_change_24h);
    }
    
     if (data[i].id == "dash") {
      $("#daprice").html(data[i].price_usd);
      $("#dachange").html(data[i]. percent_change_24h);
    }
     if (data[i].id == "ripple") {
      $("#ripprice").html(data[i].price_usd);
      $("#ripchange").html(data[i]. percent_change_24h);
    } 
      if (data[i].id == "monero") {
      $("#mprice").html(data[i].price_usd);
      $("#mchange").html(data[i]. percent_change_24h);
    }  
     if (data[i].id == "neo") {
      $("#neprice").html(data[i].price_usd);
      $("#nechange").html(data[i]. percent_change_24h);
    }
    
    
    
  }
  
  
});