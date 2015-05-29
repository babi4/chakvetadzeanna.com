
$(document).ready(function() 
{
	var options=
	{
		googleMap			:
		{
			coordinates		:	[48.856614,2.352222]
		}
	};
	
	var backgroundImage=
	[
		{image:'image/background/01.jpg'},	
		{image:'image/background/02.jpg'},
		{image:'image/background/03.jpg'},
		{image:'image/background/06.jpg'},
		{image:'image/background/05.jpg'},
		{image:'image/background/06.jpg'}		
	];
	
	var page=
	{
		'about':
			{menuIndex:0,imageIndex:1},
		'news':
			{menuIndex:1,imageIndex:2},	
		'bio':
			{menuIndex:2,imageIndex:3},
		'shop': 
			{menuIndex:3,imageIndex:4},
		'gallery-1': 
			{menuIndex:4,imageIndex:5},
		'gallery-2': 
			{menuIndex:4,imageIndex:5},
		'contact': 
			{menuIndex:5,imageIndex:6}
	}; 
	
	$().monaco(options,page,backgroundImage);
	
	$('label.infield').inFieldLabels();
});