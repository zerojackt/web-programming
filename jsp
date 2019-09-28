<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
<%
int total = 0;
 for(int i =0;i<11;i++) {
	total = total+i; 
 }
%>

1~10 까지의 합 : <%=total %>

</body>
</html>
