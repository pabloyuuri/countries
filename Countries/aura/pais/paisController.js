({
    init : function(component, event, helper) {
        let pais = component.get("v.pais");
        if($A.util.isUndefinedOrNull(pais.flag)) {
            pais.flag = 'https://image.freepik.com/vetores-gratis/glitch-error-404-page_23-2148105404.jpg';
        }
        if (pais.name == "Bolivia") {
            pais.flag = 'https://upload.wikimedia.org/wikipedia/commons/d/de/Flag_of_Bolivia_%28state%29.svg';
        }
        component.set("v.pais", pais);
    },
    handleLoadImage: function(component, event, helper) {
        let pais = component.get("v.pais");
        pais.flag = 'https://image.freepik.com/vetores-gratis/glitch-error-404-page_23-2148105404.jpg';
        component.set("v.pais", pais);

    }, 

   
})