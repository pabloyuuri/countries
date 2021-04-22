public class LEXPaises {
    @AuraEnabled
    public static CountriesNow CalloutsPaises() {
        Http http = new Http(); // ínicio 
        HttpRequest request =  new HttpRequest(); // meio
        request.setHeader('Content-Type', 'application/json'); // 
        request.setEndpoint('https://countriesnow.space/api/v0.1/countries/info?returns=,flag,unicodeFlag,population');
        request.setMethod('GET');
        HttpResponse response = http.send(request);
        System.debug(response.getBody());
        
        if (response.getStatusCode() == 200) {    
            return CountriesNow.parse(response.getBody());
        }
        return null;
    }    
}