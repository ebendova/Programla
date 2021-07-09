import {ajaxRequest} from "/model/ajax.js";

 const viewCourses = function(data){
 	 const courses = data;
	 const coursesFragment = document.createDocumentFragment();
 	 courses.forEach(function(course){
		 const newLi = document.createElement('li');
		 newLi.className = 'list';
		 const newLink = document.createElement('a');
		 newLink.className = 'list-names';
		 newLink.setAttribute("href", "details.html?id=" + course.id);

		 newLink.textContent = `${course.name}`;
		 
		 coursesFragment.appendChild(newLi);
		 newLi.appendChild(newLink);
		 
		 });
	 const coursesUl = document.querySelector('.courses-list');
	 coursesUl.appendChild(coursesFragment)
 }
 ajaxRequest("/model/data.json",viewCourses);
