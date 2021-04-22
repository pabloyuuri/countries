({
    getPaises : function(component,  event, helper) { 
        let action = component.get("c.CalloutsPaises");

        action.setCallback(this, function(response){  
            let state = response.getState(); //
            let responseValue = response.getReturnValue(); 

            if (state === "SUCCESS") { //
                let paises =  []; //

                for (var i in responseValue.data) { 
                    paises.push(responseValue.data[i]);
                }

                component.set("v.paises", paises); 
                
                component.set("v.loading", false);
            }
        });

        $A.enqueueAction(action); // 
    }
})