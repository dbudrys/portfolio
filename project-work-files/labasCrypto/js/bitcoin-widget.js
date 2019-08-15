$(document).ready(function() {
      $.getJSON("https://blockchain.info/ticker?cors=true", function(json) {
        var html = "";
        var usd = "";
        var gbp = "";
        var eur = "";
        
        
        
        html = '<table class="table"><thead><tr><th>Currency</th><th>Price</th></thead><tbody>';
        jQuery.each(json, function(key, val) {
          html += "<tr><td><strong>" + key + "</strong></td><td>" + val["last"] + "</td></tr>"
          
          if (key == "USD"){
            usd += "1 BTC = " + val["last"] + " " + key ;
          }
          else if (key == "GBP"){
            gbp += "1 BTC = " + val["last"] + " " + key;
          }
          else if (key == "EUR"){
            eur += "1 BTC = " + val["last"] + " " + key;
          }
        });
        html += "</tbody></table>";
        $(".prices").html(html);
        $(".usd-price").html(usd);
        $(".gbp-price").html(gbp);
        $(".eur-price").html(eur);
    });
});
      