function cov_1microysmv(){var path="D:\\DEVOPS\\daily-dose-project-Gabriel\\public\\js\\deleteNotes.js";var hash="b9bf2cf56b336accc33105ac6de9ae6bb5f4bcd3";var global=new Function("return this")();var gcv="__coverage__";var coverageData={path:"D:\\DEVOPS\\daily-dose-project-Gabriel\\public\\js\\deleteNotes.js",statementMap:{"0":{start:{line:2,column:19},end:{line:2,column:21}},"1":{start:{line:4,column:18},end:{line:4,column:38}},"2":{start:{line:6,column:4},end:{line:6,column:64}},"3":{start:{line:7,column:4},end:{line:7,column:65}},"4":{start:{line:9,column:4},end:{line:19,column:6}},"5":{start:{line:10,column:8},end:{line:10,column:52}},"6":{start:{line:12,column:8},end:{line:18,column:9}},"7":{start:{line:13,column:12},end:{line:13,column:44}},"8":{start:{line:14,column:12},end:{line:14,column:48}},"9":{start:{line:17,column:12},end:{line:17,column:44}},"10":{start:{line:21,column:4},end:{line:21,column:19}}},fnMap:{"0":{name:"deleteNotes",decl:{start:{line:1,column:9},end:{line:1,column:20}},loc:{start:{line:1,column:33},end:{line:22,column:1}},line:1},"1":{name:"(anonymous_1)",decl:{start:{line:9,column:21},end:{line:9,column:22}},loc:{start:{line:9,column:33},end:{line:19,column:5}},line:9}},branchMap:{"0":{loc:{start:{line:12,column:8},end:{line:18,column:9}},type:"if",locations:[{start:{line:12,column:8},end:{line:18,column:9}},{start:{line:16,column:13},end:{line:18,column:9}}],line:12}},s:{"0":0,"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0},f:{"0":0,"1":0},b:{"0":[0,0]},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"b9bf2cf56b336accc33105ac6de9ae6bb5f4bcd3"};var coverage=global[gcv]||(global[gcv]={});if(!coverage[path]||coverage[path].hash!==hash){coverage[path]=coverageData;}var actualCoverage=coverage[path];{// @ts-ignore
cov_1microysmv=function(){return actualCoverage;};}return actualCoverage;}cov_1microysmv();function deleteNotes(selectedId){cov_1microysmv().f[0]++;var response=(cov_1microysmv().s[0]++,"");var request=(cov_1microysmv().s[1]++,new XMLHttpRequest());cov_1microysmv().s[2]++;request.open("DELETE","/delete-notes/"+selectedId,true);cov_1microysmv().s[3]++;request.setRequestHeader('Content-Type','application/json');cov_1microysmv().s[4]++;request.onload=function(){cov_1microysmv().f[1]++;cov_1microysmv().s[5]++;response=JSON.parse(request.responseText);cov_1microysmv().s[6]++;if(response.message=="note deleted successfully!"){cov_1microysmv().b[0][0]++;cov_1microysmv().s[7]++;alert('Note has been deleted!');cov_1microysmv().s[8]++;window.location.href='index.html';}else{cov_1microysmv().b[0][1]++;cov_1microysmv().s[9]++;alert('Unable to delete Note!');}};cov_1microysmv().s[10]++;request.send();}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJjb3ZfMW1pY3JveXNtdiIsImFjdHVhbENvdmVyYWdlIiwiZGVsZXRlTm90ZXMiLCJzZWxlY3RlZElkIiwiZiIsInJlc3BvbnNlIiwicyIsInJlcXVlc3QiLCJYTUxIdHRwUmVxdWVzdCIsIm9wZW4iLCJzZXRSZXF1ZXN0SGVhZGVyIiwib25sb2FkIiwiSlNPTiIsInBhcnNlIiwicmVzcG9uc2VUZXh0IiwibWVzc2FnZSIsImIiLCJhbGVydCIsIndpbmRvdyIsImxvY2F0aW9uIiwiaHJlZiIsInNlbmQiXSwic291cmNlcyI6WyJkZWxldGVOb3Rlcy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBkZWxldGVOb3RlcyhzZWxlY3RlZElkKSB7XHJcbiAgICB2YXIgcmVzcG9uc2UgPSBcIlwiO1xyXG5cclxuICAgIHZhciByZXF1ZXN0ID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XHJcblxyXG4gICAgcmVxdWVzdC5vcGVuKFwiREVMRVRFXCIsIFwiL2RlbGV0ZS1ub3Rlcy9cIiArIHNlbGVjdGVkSWQsIHRydWUpO1xyXG4gICAgcmVxdWVzdC5zZXRSZXF1ZXN0SGVhZGVyKCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24vanNvbicpO1xyXG4gICAgXHJcbiAgICByZXF1ZXN0Lm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXNwb25zZSA9IEpTT04ucGFyc2UocmVxdWVzdC5yZXNwb25zZVRleHQpO1xyXG4gICAgXHJcbiAgICAgICAgaWYgKHJlc3BvbnNlLm1lc3NhZ2UgPT0gXCJub3RlIGRlbGV0ZWQgc3VjY2Vzc2Z1bGx5IVwiKSB7XHJcbiAgICAgICAgICAgIGFsZXJ0KCdOb3RlIGhhcyBiZWVuIGRlbGV0ZWQhJyk7XHJcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJ2luZGV4Lmh0bWwnO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgYWxlcnQoJ1VuYWJsZSB0byBkZWxldGUgTm90ZSEnKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIHJlcXVlc3Quc2VuZCgpO1xyXG59Il0sIm1hcHBpbmdzIjoieXZEQWVZO0FBQUFBLGNBQUEsU0FBQUEsQ0FBQSxTQUFBQyxjQUFBLFdBQUFBLGNBQUEsRUFBQUQsY0FBQSxHQWZaLFFBQVMsQ0FBQUUsV0FBV0EsQ0FBQ0MsVUFBVSxDQUFFLENBQUFILGNBQUEsR0FBQUksQ0FBQSxNQUM3QixHQUFJLENBQUFDLFFBQVEsRUFBQUwsY0FBQSxHQUFBTSxDQUFBLE1BQUcsRUFBRSxFQUVqQixHQUFJLENBQUFDLE9BQU8sRUFBQVAsY0FBQSxHQUFBTSxDQUFBLE1BQUcsR0FBSSxDQUFBRSxjQUFjLENBQUMsQ0FBQyxFQUFDUixjQUFBLEdBQUFNLENBQUEsTUFFbkNDLE9BQU8sQ0FBQ0UsSUFBSSxDQUFDLFFBQVEsQ0FBRSxnQkFBZ0IsQ0FBR04sVUFBVSxDQUFFLElBQUksQ0FBQyxDQUFDSCxjQUFBLEdBQUFNLENBQUEsTUFDNURDLE9BQU8sQ0FBQ0csZ0JBQWdCLENBQUMsY0FBYyxDQUFFLGtCQUFrQixDQUFDLENBQUNWLGNBQUEsR0FBQU0sQ0FBQSxNQUU3REMsT0FBTyxDQUFDSSxNQUFNLENBQUcsVUFBWSxDQUFBWCxjQUFBLEdBQUFJLENBQUEsTUFBQUosY0FBQSxHQUFBTSxDQUFBLE1BQ3pCRCxRQUFRLENBQUdPLElBQUksQ0FBQ0MsS0FBSyxDQUFDTixPQUFPLENBQUNPLFlBQVksQ0FBQyxDQUFDZCxjQUFBLEdBQUFNLENBQUEsTUFFNUMsR0FBSUQsUUFBUSxDQUFDVSxPQUFPLEVBQUksNEJBQTRCLENBQUUsQ0FBQWYsY0FBQSxHQUFBZ0IsQ0FBQSxTQUFBaEIsY0FBQSxHQUFBTSxDQUFBLE1BQ2xEVyxLQUFLLENBQUMsd0JBQXdCLENBQUMsQ0FBQ2pCLGNBQUEsR0FBQU0sQ0FBQSxNQUNoQ1ksTUFBTSxDQUFDQyxRQUFRLENBQUNDLElBQUksQ0FBRyxZQUFZLENBQ3ZDLENBQUMsSUFDSSxDQUFBcEIsY0FBQSxHQUFBZ0IsQ0FBQSxTQUFBaEIsY0FBQSxHQUFBTSxDQUFBLE1BQ0RXLEtBQUssQ0FBQyx3QkFBd0IsQ0FBQyxDQUNuQyxDQUNKLENBQUMsQ0FBQ2pCLGNBQUEsR0FBQU0sQ0FBQSxPQUVGQyxPQUFPLENBQUNjLElBQUksQ0FBQyxDQUFDLENBQ2xCIiwiaWdub3JlTGlzdCI6W119