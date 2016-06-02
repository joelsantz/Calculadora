$(function() {var num, acc, op = "";
        $("#num").on("click", 
          function(){ $("#num").val("");}
        );
          $("#cuadrado").on("click", 
          function() {
            num = $("#num");
            num.val( num.val() * num.val() );
            $("#num").focus();
          }
        );
        
        $("#inverso").on("click", 
          function() {
            num = $("#num");
            num.val( 1 / num.val() );
            $("#num").focus();
          }
        );
        
        $("#raiz").on("click", 
          function() {
            num = $("#num");
            num.val( Math.sqrt( num.val() ) );
            $("#num").focus();
          }
        );
        
        $("#parte_entera").on("click", 
          function() {
            num = $("#num");
            if( num.val() > 0 ) {
              num.val( Math.floor( num.val() ) );
            } else {
              num.val( -Math.ceil( num.val() ) );
            }
            $("#num").focus();
          }
        );
        
        $("#potencia_de_dos").on("click", 
          function() {
            num = $("#num");
            num.val( Math.pow( 2, num.val() ) );
            $("#num").focus();
          }
        );
        
        $("#factorial").on("click", 
          function() {
            num = $("#num");
            var res = num.val();
            if( $.isNumeric( num.val() ) ) {
              var counter = num.val();
              counter--;
              while( counter > 1 ) {
                res*= counter;
                counter--;
                if( !$.isNumeric( num.val() ) ) {
                  break;
                }
              } 
            } else {
              res = "Math Error" ;
            }
            num.val( res );
            $("#num").focus();
          }
        );
        
        $("#sumatoria").on("click", 
          function() {
            num = $("#num");
            var lista = num.val().split(",");
            var i = 0;
            acc = 0;
            while ( i < lista.length ) {
              acc = acc + (+lista[i]);
              i++;
            }
            num.val( acc );
            $("#num").focus();
          }
        );
        
        $("#producto").on("click", 
          function() {
            num = $("#num");
            var lista = num.val().split(",");
            var i = 0;
            acc = 1;
            while ( i < lista.length ) {
              acc = acc * (+lista[i]);
              i++;
            }
            num.val( acc );
            $("#num").focus();
          }
        );
        
        $("#suma").on("click", 
          function() {
            num = $("#num");
            acc = num.val();
            op = "+";
            num.val("");
            $("#num").focus();
          }
        );
        
        $("#resta").on("click", 
          function() {
            num = $("#num");
            acc = num.val();
            op = "-";
            num.val("");
            $("#num").focus();
          }
        );
        
        $("#multiplica").on("click", 
          function() {
            num = $("#num");
            acc = num.val();
            op = "*";
            num.val("");
            $("#num").focus();
          }
        );
        
        $("#divide").on("click", 
          function() {
            num = $("#num");
            acc = num.val();
            op = "/";
            num.val("");
            $("#num").focus();
          }
        );
        
        $("#potencia").on("click", 
          function() {
            num = $("#num");
            acc = num.val();
            op = "^";
            num.val("");
            $("#num").focus();
          }
        );
        
        $("#calcular").on("click", 
          function() {
            var res = 0;
            num = $("#num");
            var val = num.val();
            switch (op) {
              case "+":
                res = +acc + +val;
                break;
              case "-":
                res = +acc - +val;
                break;
              case "*":
                res = +acc * +val;
                break;
              case "/":
                res = +acc / +val;
                break;
              case "^":
                res = Math.pow( +acc, +val );
                break;
              default:
                res = "Math Error!";
            }
            num.val( res );
            op = "";
            $("#num").focus();
          }
        );
      });