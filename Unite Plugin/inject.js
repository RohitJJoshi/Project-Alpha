(function () {

	var detailsElement = document.createElement("details");

	function getGCContexts() {
		var xhr = new XMLHttpRequest();
		xhr.open("GET", "https://21e23227-128c-4643-a89b-7569770f9dd2.mock.pstmn.io/unite/gccontext", true);
		xhr.onreadystatechange = function (data) {
			console.log(xhr.responseText);
			if (xhr.readyState == 4) {
				var dataArray = JSON.parse(xhr.responseText);
				var ulElement = document.createElement("ul");
				ulElement.setAttribute("class", "dropdown-menu dropdown-menu-sw");

				var liSeperator = document.createElement("li");
				liSeperator.setAttribute("role", "none");
				liSeperator.setAttribute("class", "d-block d-md-none dropdown-divider");

				for (i = 0; i < dataArray.length; i++) {
					var liElement = document.createElement("li");
					var buttonElement = document.createElement("button");
					buttonElement.setAttribute("class", "dropdown-item btn-link");
					buttonElement.textContent = dataArray[i].name;
					liElement.appendChild(buttonElement);
					ulElement.appendChild(liElement);
				}
				detailsElement.appendChild(ulElement);
			}
		}
		xhr.send();
	}

	function populateGCContextDropDown() {
		// Delegating to get resources from backend
		getGCContexts();

		// Enable following if you do not want to get resources from backend.
		// var ulElement = document.createElement("ul");
		// ulElement.setAttribute("class", "dropdown-menu dropdown-menu-sw");

		// var liSeperator = document.createElement("li");
		// liSeperator.setAttribute("role", "none");
		// liSeperator.setAttribute("class", "d-block d-md-none dropdown-divider");

		// for (i = 0; i < 5; i++) {
		// 	var liElement = document.createElement("li");
		// 	var buttonElement = document.createElement("button");
		// 	buttonElement.setAttribute("class", "dropdown-item btn-link");
		// 	buttonElement.textContent = "GC_Context_" + (i + 1);
		// 	liElement.appendChild(buttonElement);
		// 	ulElement.appendChild(liElement);
		// }
		// return ulElement;
	}

	// Creating new Tab...
	var aElement = document.createElement("a");
	aElement.classList.add("js-selected-navigation-item");
	aElement.classList.add("UnderlineNav-item");
	aElement.classList.add("hx_underlinenav-item");
	aElement.classList.add("no-wrap");
	aElement.classList.add("js-responsive-underlinenav-item");
	aElement.setAttribute("data-tab-item", "settings-tab");
	aElement.setAttribute("href", "#");
	aElement.id = "associatedLinksLink";

	//var iconSVG = document.createElement("svg"); -> this will not work, for SVG you need to provide the namespace.
	var iconSVG = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
	iconSVG.setAttribute("height", "16");
	iconSVG.setAttribute("class_names", "UnderlineNav-octicon");
	iconSVG.setAttribute("display", "none inline");
	iconSVG.setAttribute("viewBox", "0 0 16 16");
	iconSVG.setAttribute("version", "1.1");
	iconSVG.setAttribute("width", "16");
	iconSVG.setAttribute("aria-hidden", "true");
	iconSVG.classList.add("octicon");
	iconSVG.classList.add("octicon-gear");
	iconSVG.classList.add("UnderlineNav-octicon");
	iconSVG.classList.add("d-none");
	iconSVG.classList.add("d-sm-inline");

	//var pathELement = document.createElement("path");
	var pathELement = document.createElementNS("http://www.w3.org/2000/svg", "path");
	pathELement.setAttribute("d", "M7.429 1.525a6.593 6.593 0 011.142 0c.036.003.108.036.137.146l.289 1.105c.147.56.55.967.997 1.189.174.086.341.183.501.29.417.278.97.423 1.53.27l1.102-.303c.11-.03.175.016.195.046.219.31.41.641.573.989.014.031.022.11-.059.19l-.815.806c-.411.406-.562.957-.53 1.456a4.588 4.588 0 010 .582c-.032.499.119 1.05.53 1.456l.815.806c.08.08.073.159.059.19a6.494 6.494 0 01-.573.99c-.02.029-.086.074-.195.045l-1.103-.303c-.559-.153-1.112-.008-1.529.27-.16.107-.327.204-.5.29-.449.222-.851.628-.998 1.189l-.289 1.105c-.029.11-.101.143-.137.146a6.613 6.613 0 01-1.142 0c-.036-.003-.108-.037-.137-.146l-.289-1.105c-.147-.56-.55-.967-.997-1.189a4.502 4.502 0 01-.501-.29c-.417-.278-.97-.423-1.53-.27l-1.102.303c-.11.03-.175-.016-.195-.046a6.492 6.492 0 01-.573-.989c-.014-.031-.022-.11.059-.19l.815-.806c.411-.406.562-.957.53-1.456a4.587 4.587 0 010-.582c.032-.499-.119-1.05-.53-1.456l-.815-.806c-.08-.08-.073-.159-.059-.19a6.44 6.44 0 01.573-.99c.02-.029.086-.075.195-.045l1.103.303c.559.153 1.112.008 1.529-.27.16-.107.327-.204.5-.29.449-.222.851-.628.998-1.189l.289-1.105c.029-.11.101-.143.137-.146zM8 0c-.236 0-.47.01-.701.03-.743.065-1.29.615-1.458 1.261l-.29 1.106c-.017.066-.078.158-.211.224a5.994 5.994 0 00-.668.386c-.123.082-.233.09-.3.071L3.27 2.776c-.644-.177-1.392.02-1.82.63a7.977 7.977 0 00-.704 1.217c-.315.675-.111 1.422.363 1.891l.815.806c.05.048.098.147.088.294a6.084 6.084 0 000 .772c.01.147-.038.246-.088.294l-.815.806c-.474.469-.678 1.216-.363 1.891.2.428.436.835.704 1.218.428.609 1.176.806 1.82.63l1.103-.303c.066-.019.176-.011.299.071.213.143.436.272.668.386.133.066.194.158.212.224l.289 1.106c.169.646.715 1.196 1.458 1.26a8.094 8.094 0 001.402 0c.743-.064 1.29-.614 1.458-1.26l.29-1.106c.017-.066.078-.158.211-.224a5.98 5.98 0 00.668-.386c.123-.082.233-.09.3-.071l1.102.302c.644.177 1.392-.02 1.82-.63.268-.382.505-.789.704-1.217.315-.675.111-1.422-.364-1.891l-.814-.806c-.05-.048-.098-.147-.088-.294a6.1 6.1 0 000-.772c-.01-.147.039-.246.088-.294l.814-.806c.475-.469.679-1.216.364-1.891a7.992 7.992 0 00-.704-1.218c-.428-.609-1.176-.806-1.82-.63l-1.103.303c-.066.019-.176.011-.299-.071a5.991 5.991 0 00-.668-.386c-.133-.066-.194-.158-.212-.224L10.16 1.29C9.99.645 9.444.095 8.701.031A8.094 8.094 0 008 0zm1.5 8a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM11 8a3 3 0 11-6 0 3 3 0 016 0z");

	pathELement.setAttribute("fill-rule", "evenodd");
	iconSVG.appendChild(pathELement);

	var spanElement = document.createElement("span");
	spanElement.setAttribute("data-content", "Elm");
	spanElement.textContent = "Associated Links";

	aElement.appendChild(iconSVG);
	aElement.appendChild(spanElement);

	// li Element
	var liElement = document.createElement("li");
	liElement.appendChild(aElement);

	var menuUIElement = document.getElementsByClassName("UnderlineNav-body list-style-none")[0];
	menuUIElement.appendChild(liElement);

	// Adding dropdown

	var menubarDiv = document.getElementsByClassName("file-navigation  mb-3 d-flex flex-items-start")[0];

	// creating button element...


	detailsElement.setAttribute("class", "details-overlay details-reset position-relative");

	var summaryElement = document.createElement("summary");
	summaryElement.setAttribute("role", "button");
	summaryElement.setAttribute("class", "ml-2");
	detailsElement.appendChild(summaryElement);

	var labelSpan = document.createElement("span");
	labelSpan.setAttribute("class", "btn d-none d-md-flex flex-items-center");
	labelSpan.textContent = "No global configuration selected";

	var caretSpan = document.createElement("span");
	caretSpan.setAttribute("class", "dropdown-caret ml-1");
	labelSpan.appendChild(caretSpan);

	summaryElement.appendChild(labelSpan);

	// var ulElement = document.createElement("ul");
	// ulElement.setAttribute("class", "dropdown-menu dropdown-menu-sw");

	detailsElement.appendChild(summaryElement);
	var ulElement = populateGCContextDropDown();
	// detailsElement.appendChild(ulElement);

	//////////////////////////////

	var inserPositionElement = document.getElementById("branch-select-menu").nextSibling;
	menubarDiv.insertBefore(detailsElement, inserPositionElement);

	console.log("Added Elements");

	document.getElementById("associatedLinksLink").addEventListener("click", function () {
		console.log("Generate Tab called");

		var menuItems = menuUIElement.children;
		var menuItemsArray = [].slice.call(menuItems);
		menuItemsArray.forEach(function (element, index) {
			var aElement = element.children[0];
			aElement.classList.remove("selected");
		});

		document.getElementById("associatedLinksLink").classList.add("selected");

		var repositoryContentSelectorDivs = document.getElementsByClassName("repository-content");
		var repositoryContent = repositoryContentSelectorDivs[0];
		repositoryContent.innerHTML = "";

		var outerDiv = document.createElement("div");
		outerDiv.setAttribute("class", "gutter-condensed gutter-lg d-flex");

		var lgDiv = document.createElement("div");
		lgDiv.setAttribute("class", "flex-shrink-0 col-12");
		outerDiv.appendChild(lgDiv);

		var optionBucketDiv = document.createElement("div");
		optionBucketDiv.id = "options_bucket";
		lgDiv.appendChild(optionBucketDiv);

		var linkTable = document.createElement("table");
		linkTable.style.width = "100%";
		var linkPrefix = "https://sample.persistent.com:9443/rm/spaceX/artifacts/";
		for (i = 0; i < 10; i++) {
			var trElement = document.createElement("tr");
			var tdElementOne = document.createElement("td");
			tdElementOne.style.width = "75%";
			tdElementOne.textContent = linkPrefix + (i + 1);
			trElement.appendChild(tdElementOne);
			var tdElementTwo = document.createElement("td");
			tdElementTwo.style.width = "25%";
			tdElementTwo.style.textAlign = "right";
			tdElementTwo.textContent = "Delete";
			trElement.appendChild(tdElementTwo);
			linkTable.appendChild(trElement);
		}

		optionBucketDiv.appendChild(linkTable);
		
		var button = document.createElement("button");
		button.innerHTML = "Add Link";

		// 2. Append somewhere
		
		optionBucketDiv.appendChild(button);

		// 3. Add event handler
		button.addEventListener ("click", function() {
		
		 var width = 500;
		 var height = 400;
		 var left = parseInt((screen.availWidth/2) - (width/2));
		 var top = parseInt((screen.availHeight/2) - (height/2));
		 var windowFeatures = "location=no, toolbar=no, menubar=no, width=" + width + ",height=" + height + ",left=" + left + ",top=" + top + "screenX=" + left + ",screenY=" + top;

		 window.open(
		 "https://ngl014633.persistent.co.in:9443/jts",
		 "Jazz login",
		 windowFeatures
		 );

		

	});
	
		var ifrm = document.createElement('iframe');
		ifrm.setAttribute('id', 'ifrm'); // assign an id

		var x = document.createElement("BR");
		var y = document.createElement("BR");

		// to place before another page element
		optionBucketDiv.appendChild(x);
		optionBucketDiv.appendChild(y);
		optionBucketDiv.appendChild(ifrm);

		// assign url
		ifrm.setAttribute('src', 'https://ngl014633.persistent.co.in:9443/jts');

		repositoryContent.appendChild(outerDiv);

});
	console.log("Listeners added");

})();

// Documentation : https://developer.chrome.com/extensions/getstarted 