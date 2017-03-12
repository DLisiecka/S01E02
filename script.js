(function($) {
	
	$(document).ready(function(){
		
		// Wszystkie elementy <div>, posiadające zarówno klasę “grid” oraz klasę “grid-12”.
		
		var divGrid = $("div.grid.grid-12");
		
		
		// Wszystkie elementy <a>, których atrybut “href" zaczyna się na “http”, znajdujące się w elemencie o klasie “nav”.
		  
		var externalLinks = $(".nav a[href^='http']");
		
		
		// Wszystkie elementy <input>, których typ to “radio” lub “checkbox” oraz dodatkowo nie są aktualnie zaznaczone (checked).
		
		var notChecked = $("input[type='radio'],input[type='checkbox']").not(":checked");
		
		
		// Wyłącznie pierwszy element <p>, który jest pusty (nie zawiera dzieci) oraz znajduje się w elemencie <div> z identyfikatorem “text”.
		
		var firstParagraph = $("div#text p:empty:first");
		
		
		// Wszystkie elementy z klasą “pagination-item”, które nie są elementem <span>.
		
		var paginationItem = $(".pagination-item:not(span)");
		
	});
	
})(jQuery);
		
		
		
		