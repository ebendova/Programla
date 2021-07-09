export function ajaxRequest(url,callback)
{
 	fetch(url).then(function(response) {
 		return response.json();
 	}).then(function(json) {
 		callback(json)
 	});
}