const sheetDataList = SpreadsheetApp.openById(CONFIG('BD_ID'));
const sheetUsuarios = sheetDataList.getSheetByName(CONFIG('BD_NAME'));

const url = CONFIG('URL');

function doGet(e) {
  var startTime = new Date();
  console.log("Inicio de la ejecución: " + startTime);
  var u = e.parameter.u || "ValorPorDefecto";
if (e.parameter.p){
  var page = e.parameter.p;
} else {
  var page ="src/index";  
}
  var template = HtmlService.createTemplateFromFile(page);
  template.pubUrl = url;
  template.u = u; 

  var html = template.evaluate().setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
  html.addMetaTag('viewport', 'width=device-width, initial-scale=1');

  var endTime = new Date();
  console.log("Fin de la ejecución: " + endTime);
  console.log("Tiempo total de ejecución: " + (endTime - startTime) + " milisegundos");
  return html
        .setTitle('DILAB - Aplicativo Web: Registro del Stock de Insumos Regionales');
     } 


function include(filename){
return HtmlService.createHtmlOutputFromFile(filename).getContent();
}

     function obtenerUsuario(usernumberValue) {

  var rangoUsuarios = sheetUsuarios.getDataRange().getDisplayValues();
  let arregloDatosUsuario = [];

  rangoUsuarios.forEach(function(registro) {
    if (registro[4] === usernumberValue) {
      arregloDatosUsuario.push(registro);
    }
  });

  return arregloDatosUsuario;
}


function verificarPassword(form){
const dataUsuarios = sheetUsuarios.getDataRange().getValues();
console.log("data usuarios: ", dataUsuarios);
  for ( let i in dataUsuarios){
    if (dataUsuarios[i][1] == form.usuario && dataUsuarios[i][2] == form.contrasena){
      const usuario = {        
        parametro:dataUsuarios[i][4],
        contrasena:dataUsuarios[i][2],
        user:dataUsuarios[i][1],
        nombre:dataUsuarios[i][0],
        cargo:dataUsuarios[i][5],
        sede:dataUsuarios[i][6],
        rol:dataUsuarios[i][7],
      }
       return usuario;
         }
        }
    throw ("La contraseña es incorrecta. Actualiza la página. ");
    }


    function cambiarPassword(user, contrasena, base){  

const dataUsuarios = sheetUsuarios.getDataRange().getValues();
  for ( let i in dataUsuarios){
    if (dataUsuarios[i][1] === user){
      const INT_R = Number(i)+1
      const password = [
      [contrasena]
      ];
      sheetUsuarios.getRange(INT_R, 3 , 1, 1).setValues(password);
       return true;
         }
      }
    }
    
      function registrarCorreo(user, correo, base){  
const dataUsuarios = sheetUsuarios.getDataRange().getValues();
  for ( let i in dataUsuarios){
    if (dataUsuarios[i][1] === user){
      const INT_R = Number(i)+1
      const email = [
      [correo]
      ];
      sheetUsuarios.getRange(INT_R, 4, 1, 1).setValues(email);
       return true;
         }
      }
    }


    function verificarPassword2(form){
var dataUsuarios = sheetUsuarios.getDataRange().getValues();
  for ( var i in dataUsuarios){
    if (dataUsuarios[i][1] == form.usuarioM && dataUsuarios[i][2] == form.contrasenaM){
      var usuario = {
        nombre:dataUsuarios[i][0]
      }
       return usuario;
         }
        }
    throw ("La contraseña es incorrecta. Actualiza la página. ");
    }

    function agregarNuevoPass(form){
 //console.log(form);

const contrasenaMN = form.contrasenaMN;

var dataUsuarios = sheetUsuarios.getDataRange().getValues();
  for ( var i in dataUsuarios){
    if (dataUsuarios[i][1] == form.usuarioM && dataUsuarios[i][2] == form.contrasenaM){
      //console.log("ok hasta aqui");
      var INT_R = Number(i)+1
      var valoresR = [
      [contrasenaMN]
      ];
      //console.log(valoresR);
      //console.log(INT_R);
      sheetUsuarios.getRange(INT_R, 3 , 1, 1).setValues(valoresR);

      var usuario = {
        nombre:dataUsuarios[i][0]
      }
    //console.log(usuario);
       return usuario;
         }
        }
      }




