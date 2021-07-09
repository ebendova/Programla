import {ajaxRequest} from "/model/ajax.js";

 const viewDetails = function(data){
 	 const details = data;
	 const detailsFragment = document.createDocumentFragment();
	 
 	 details.forEach(function(content){
		 const urlParams = new URLSearchParams(window.location.search);
		 const lessonID = urlParams.get("id");
		 if(`${content.id}` == lessonID){
			 const newH = document.createElement('h4');
			 newH.textContent = `${content.name}`;
			 const newP1 = document.createElement('p');
			 newP1.textContent = `${content.description}`;
			 const newP2 = document.createElement('p');
			 newP2.textContent = `${content.challenge}`; 
			 
			 detailsFragment.appendChild(newH);
			 detailsFragment.appendChild(newP1);
			 detailsFragment.appendChild(newP2);
		 
		 }
		 });
	 const detailsDiv = document.querySelector('.block-left');
	 detailsDiv.appendChild(detailsFragment);
 }
 ajaxRequest("/model/data.json",viewDetails);