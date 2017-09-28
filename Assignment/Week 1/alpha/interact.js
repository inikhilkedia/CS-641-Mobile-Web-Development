<script type="text/javascript">
	var springinfo='In the first semester and I took 3 classes namely:'+
					'<ol>'+
						'<li>'+' Professor Sung-Hyuk Cha\'s CS 608 - Algorithms & Computing Theory'+ '</li>'+
						'<li>'+' Professor Tamer Avcilar\'s CS 610 - Introduction to Parallel & Distributed Computing'+ '</li>'+
						'<li>'+' Professor Teresa Brooks\'s CS 612 - Concepts & Structures : Internet Computing'+ '</li>'+
					'</ol>'+
					'I  enjoyed the most is CS 612 because the faculty understands the students very well as she has been in the same place as us. And most importantly it alligns with my career path. So CS 612 was my favorite.';
	var summerinfo='In Summer I took 2 classes namely:'+
					'<ol>'+
						'<li>'+'Summer 1: Dr. Christelle Scharff\'s CS 623 - Database Management Systems'+ '</li>'+
						'<li>'+'Summer 2: Professor Lixin Tao\'s CS 644 - Web Computing'+ '</li>'+
					'</ol>'+
					'I enjoyed CS 644 b the most because it taught enterprise level Java Web Application Development which also alligns with my career.';
	var fallinfo='So, This is my second major semester and I am taking 3 classes namely:'+
					'<ol>'+
						'<li>'+' Professor Haik Sahakian\'s CS 641 - Mobile Web Computing'+ '</li>'+
						'<li>'+' Professor Yuri Chernak\'s CS 691 - Computer Science Project 1'+ '</li>'+
						'<li>'+' Professor Stacey Sarris\'s IS 660S - Multimedia and User Interface Design'+ '</li>'+
					'</ol>';
	function semester(semester) {
		if(semester=='spring')
				{
					document.getElementById('home').innerHTML = springinfo;
				}
		if(semester=='summer')
				{
					document.getElementById('home').innerHTML = summerinfo;
				}
		if(semester=='fall')
				{
					document.getElementById('home').innerHTML = fallinfo;
				}
				
			}
</script>