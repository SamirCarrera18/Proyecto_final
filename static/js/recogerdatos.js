
//Profesor, disculpe, no llegue a entender bien todo lo de localstorage y no se bien como devolver los datos para imprimirlos
document.getElementById("email_login")
document.getElementById("pswr_login")
function recogerDatos() {
    email.value = l.getItem("email");
    pswr.value = l.getItem("pswr");
    
    if(email.value == email_login && pswr.value == pswr_login){
        nombre.value = l.getItem("nombre");
        apellidos.value = l.getItem("apellidos");
        dni.value = l.getItem("dni");
        presentacion.value = l.getItem("presentacion");
        nmr.value = l.getItem("nmr");
        cod_pos.value = l.getItem("cod_pos");
        fb.value = l.getItem("fb");
        ig.value = l.getItem("ig");
        twt.value = l.getItem("twt");
        skill1.value = l.getItem("skill1");
        skill2.value = l.getItem("skill2");
        skill3.value = l.getItem("skill3");
        skill4.value = l.getItem("skill4");
        skill5.value = l.getItem("skill5");
        work1.value = l.getItem("work1");
        work2.value = l.getItem("work2");
        work3.value = l.getItem("work3");
        workexp1_1.value = l.getItem("workexp1_1");
        workexp1_2.value = l.getItem("workexp1_2");
        workexp1_3.value = l.getItem("workexp1_3");
        workexp2_1.value = l.getItem("workexp2_1");
        workexp2_2.value = l.getItem("workexp2_2");
        workexp2_3.value = l.getItem("workexp2_3");
        workexp3_1.value = l.getItem("workexp3_1");
        workexp3_2.value = l.getItem("workexp3_2");
        workexp3_3.value = l.getItem("workexp3_3");
        sec.value = l.getItem("sec");
        sup.value = l.getItem("sup");
        mstr.value = l.getItem("mstr");
        doc.value = l.getItem("doc");
        hobbie1.value = l.getItem("hobbie1");
        hobbie2.value = l.getItem("hobbie2");
        hobbie3.value = l.getItem("hobbie3");
        hobbie4.value = l.getItem("hobbie4");
    }else{
        return("ERROR AL LOGUEAR: USUARIO NO ENCONTRADO")
    }
}
$(document).ready(function(){
    recogerDatos();
});