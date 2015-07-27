!function(){function t(t,a,n,r){params.subjects=a;var l=d3.select("#SubjectDropdown"),i=l.selectAll(".dropdown-menu").selectAll("li").data(a);i.enter().append("li").attr("id",function(t){return t.subjectID}).attr("role","presentation").append("a").attr("role","menuitem").attr("tabindex",-1).text(function(t){return t.subjectID}),s=a[0].subjectID,l.selectAll("button").text(s).append("span").attr("class","caret"),params.edgeInfo=r;var o=d3.select("#EdgeStatTypeDropdown"),c=o.select("ul").selectAll("li").data(r);c.enter().append("li").attr("id",function(t){return t.edgeTypeID}).append("a").attr("role","menuitem").attr("tabindex",-1).text(function(t){return t.edgeTypeName}),c.exit().remove(),d=r[0].edgeTypeID;var u=r[0].edgeTypeName;o.selectAll("button").text(u).append("span").attr("class","caret"),params.visInfo=n,e()}function e(){var t="channels_"+s+".json";c=params.subjects.filter(function(t){return t.subjectID===s})[0];var e=c.brainXpixels/c.brainYpixels;l=document.getElementById("NetworkPanel").offsetWidth-k.left-k.right,i=document.getElementById("NetworkPanel").offsetWidth*(1/e)-k.top-k.bottom,o=d3.select("#NetworkPanel").selectAll("svg").data([c],function(t){return t.subjectID}),o.exit().remove(),o=o.enter().append("svg").attr("width",l+k.left+k.right).attr("height",i+k.top+k.bottom).append("g").attr("transform","translate("+k.left+","+k.top+")"),d3.json("DATA/"+t,function(t,e){params.channel=e,(0===m.length||0===h.length)&&(m=params.channel[0].channelID,h=params.channel[1].channelID),a()})}function a(){var t="edges_"+s+"_"+d+".json";d3.json("DATA/"+t,function(t,e){params.edge=e,n()})}function n(){var t="spectrogram_"+s+"_"+m+".json",e="spectrogram_"+s+"_"+h+".json";queue().defer(d3.json,"DATA/"+t).defer(d3.json,"DATA/"+e).await(r)}function r(t,r,k){function T(){pt=d3.select("#timeSlider"),gt=d3.select("#timeSlider-value"),ft=d3.select("#freqSlider"),mt=d3.select("#freqSlider-value"),At=d3.round(it[1]-it[0],4),bt=it.length-1,pt.property("min",d3.min(it)),pt.property("max",d3.max(it)),pt.property("step",At),pt.property("value",it[v]),pt.on("input",Z),gt.text(it[v]+" ms"),ft.property("min",d3.min(ot)),ft.property("max",d3.max(ot)),ft.property("step",ot[1]-ot[0]),ft.property("value",ot[x]),ft.on("input",$),mt.text(ot[x]+" Hz")}function B(){function t(t,e){return Math.abs(t)>=Math.abs(e)?e=Math.abs(t):t=-1*e,[t,e]}var e,a,n,o,s,d;ct=d3.scale.linear().domain(d3.range(0,1,1/(u-1))).range(S),Lt=d3.scale.linear().domain(d3.range(0,1,1/(u-1))).range(w),yt=d3.scale.ordinal().domain(params.visInfo.brainAreas).range(colorbrewer.Pastel1[7]),e=d3.min([d3.min(r.data,function(t){return d3.min(t,function(t){return t})}),d3.min(k.data,function(t){return d3.min(t,function(t){return t})})]),a=d3.max([d3.max(r.data,function(t){return d3.max(t,function(t){return t})}),d3.max(k.data,function(t){return d3.max(t,function(t){return t})})]),n=t(e,a),St=c.brainXLim,wt=c.brainYLim,o=d3.min(params.edge,function(t){return d3.min(t.data,function(t){return d3.min(t,function(t){return t})})}),s=d3.max(params.edge,function(t){return d3.max(t.data,function(t){return d3.max(t,function(t){return t})})}),d=t(o,s),at=d3.scale.ordinal().domain(it).rangeBands([0,I]),nt=d3.scale.linear().domain(d3.extent(it)).range([0,I]),rt=d3.scale.ordinal().domain(ot).rangeBands([D,0]),lt=d3.scale.linear().domain(n).range([0,1]),Dt=d3.scale.linear().domain(n).range([M,0]),st=d3.scale.linear().domain(St).range([0,l]),dt=d3.scale.linear().domain(wt).range([i,0]),xt=d3.scale.linear().domain(d).range([0,1]),jt=d3.scale.linear().domain(d).range([0,D])}function _(){function t(t){return Math.max(p,Math.min(l-p,t.x))}function e(t){return Math.max(p,Math.min(i-p,t.y))}function a(t){var e=75,a=100,n=2*Math.abs(Math.abs(xt(t.data)-.5)-.5)+.01;return e+a*n}function r(t){var e=d3.select(this);T=e.style("stroke"),e.style("stroke-width",2*f).style("stroke",function(){return Lt(t.data<0?0:1)});d3.selectAll("circle.node").filter(function(e){return e.channelID===t.source.channelID||e.channelID===t.target.channelID}).attr("r",1.2*p)}function u(t){var e=d3.select(this);"undefined"!=typeof T&&(e.style("stroke-width",f).style("stroke",T),d3.selectAll("circle.node").filter(function(e){return e.channelID===t.source.channelID||e.channelID===t.target.channelID}).attr("r",p))}function g(t){var e=/\d+/;m=e.exec(t.source.channelID)[0],h=e.exec(t.target.channelID)[0],y=!0,o.select("text#HOLD").remove(),n(),u.call(this,t)}function S(t){var e=d3.select(this),a=O.indexOf(t.channelID);if(a>-1?(e.selectAll("circle").attr("r",p),O.splice(a,1)):(e.selectAll("circle").attr("r",1.2*p),O.push(+t.channelID)),2===O.length){O.sort(d3.ascending);var r=/\d+/;m=r.exec(O[0])[0],h=r.exec(O[1])[0],y=!0,o.select("text#HOLD").remove(),d3.selectAll("circle.node").filter(function(t){return t.channelID===O[0].toString()||t.channelID===O[1].toString()}).attr("fill","#ddd").attr("r",p),O=[],n()}}function w(t){var e={};for(var a in t)e[a]=t[a];return e}function k(t){var e;switch(d){case"C2s_coh":case"C2s_corr":e=0===t.data?!1:!0;break;default:e=!0}switch(A){case"Within":t.source.region!=t.target.region?e=!1:e&=!0;break;case"Between":t.source.region===t.target.region?e=!1:e&=!0;break;default:e&=!0}return e}var I,D,L,T,B,j,M,C,E,z,O=[];window.history.pushState({},"","?curSubject="+s+"&edgeStat="+Mt.edgeTypeID+"&edgeArea="+A+"&networkView="+b+"&time="+it[v]+"&freq="+ot[x]+"&curCh1="+m+"&curCh2="+h),"Topological"!=b||"undefined"==typeof It?It=params.channel.map(function(t){var e=w(t);return e.x=st(t.x),e.y=dt(t.y),e.fixed="Topological"!=b?!0:!1,e}):It.forEach(function(t){t.fixed=!1}),j=params.edge.map(function(t){var e=w(t);return e.source=It.filter(function(e){return e.channelID===t.source})[0],e.target=It.filter(function(e){return e.channelID===t.target})[0],e.data=e.data[v][x],e}),j=j.filter(k),ut=d3.layout.force().nodes(It).links(j).charge(-375).linkDistance(a).size([l,i]).start(),C=o.selectAll("g#BRAIN_IMAGE").data([{}]),C.enter().append("g").attr("id","BRAIN_IMAGE"),D=o.selectAll("g#EDGES").data([{}]),D.enter().append("g").attr("id","EDGES"),I=o.selectAll("g#NODES").data([{}]),I.enter().append("g").attr("id","NODES"),M=D.selectAll(".edge").data(j,function(t){return s+"_"+t.source.channelID+"_"+t.target.channelID}),M.enter().append("line").attr("class","edge").style("stroke-width",f).attr("x1",function(e){return t(e.source)}).attr("y1",function(t){return e(t.source)}).attr("x2",function(e){return t(e.target)}).attr("y2",function(t){return e(t.target)}),M.exit().remove(),M.style("stroke",function(t){return Lt(xt(t.data))}).on("mouseover",r).on("mouseout",u).on("click",g),L=I.selectAll("g.gnode").data(It,function(t){return s+"_"+t.channelID}),L.enter().append("g").attr("class","gnode").attr("transform",function(a){return"translate("+[t(a),e(a)]+")"}).on("click",S),L.exit().remove(),E=L.selectAll("circle.node").data(function(t){return[t]}),E.enter().append("circle").attr("class","node").attr("r",p).attr("fill","#ddd").attr("opacity",1),E.attr("fill",function(t){return yt(t.region)}),z=L.selectAll("text.nodeLabel").data(function(t){return[t]}),z.enter().append("text").attr("class","nodeLabel").text(function(t){return t.channelID}),ut.on("tick",function(){L.attr("transform",function(a){return"translate("+[t(a),e(a)]+")"}),M.attr("x1",function(e){return t(e.source)}).attr("y1",function(t){return e(t.source)}).attr("x2",function(e){return t(e.target)}).attr("y2",function(t){return e(t.target)}),"Topological"!=b&&ut.stop()}),B=C.selectAll("image").data([c],function(t){return t.brainFilename}),B.enter().append("image"),B.attr("xlink:href",function(t){return"DATA/brainImages/"+t.brainFilename}).attr("width",l).attr("height",i),B.exit().remove(),"Topological"===b&&B.remove()}function V(){function t(t){t.each(function(t){var u,p,f,g,m,h,x,v,y=d3.select(this);n.rangeBands([0,c]),r.rangeBands([o,0]),u=y.selectAll("g.heatmapX").data(t),u.enter().append("g").attr("transform",function(t,e){return"translate("+n(n.domain()[e])+",0)"}).attr("class","heatmapX"),u.exit().remove(),p=u.selectAll("rect").data(function(t){return t}),p.enter().append("rect").attr("x",0).attr("y",function(t,e){return r(r.domain()[e])}).attr("height",r.rangeBand()).attr("width",n.rangeBand()).style("fill","white"),p.style("fill",function(t){return a(e(t))}).style("stroke",function(t){return a(e(t))}).on("mouseover",l).on("click",i),p.exit().remove(),f=d3.svg.axis().scale(n).orient("bottom").ticks(3).tickValues([d3.min(n.domain()),0,d3.max(n.domain())]).tickSize(0,0,0),g=d3.svg.axis().scale(r).orient("left").tickValues(["10","20","40","60","90","150","200"]).tickSize(0,0,0),h=y.selectAll("g.axis#x").data([{}]),h.enter().append("g").attr("class","axis").attr("id","x").attr("transform","translate(0,"+o+")").append("text").attr("x",n(0)).attr("y",0).attr("text-anchor","middle").attr("dy","2em").text(s),h.call(f),x=y.selectAll("g.axis#y").data([{}]),x.enter().append("g").attr("class","axis").attr("id","y").append("text").attr("x",-o/2).attr("dy","-2em").attr("transform","rotate(-90)").attr("text-anchor","middle").text(d),x.call(g),m=y.selectAll("g.zeroLine").data([[[0,o]]]),m.enter().append("g").attr("class","zeroLine"),v=m.selectAll("path").data(function(t){return t}),v.enter().append("path"),v.attr("d",d3.svg.line().x(n(0)).y(function(t){return t}).interpolate("linear")).attr("stroke","black").attr("stroke-width",2).attr("fill","none").style("opacity",.7)})}var e=d3.scale.linear(),a=d3.scale.linear(),n=d3.scale.ordinal(),r=d3.scale.ordinal(),l=function(){},i=function(){},o=500,c=500,s="",d="";return t.intensityScale=function(a){return arguments.length?(e=a,t):e},t.colorScale=function(e){return arguments.length?(a=e,t):a},t.xScale=function(e){return arguments.length?(n=e,t):n},t.yScale=function(e){return arguments.length?(r=e,t):r},t.rectMouseOver=function(e){return arguments.length?(l=e,t):l},t.rectMouseClick=function(e){return arguments.length?(i=e,t):i},t.width=function(e){return arguments.length?(c=e,t):c},t.height=function(e){return arguments.length?(o=e,t):o},t.yLabel=function(e){return arguments.length?(d=e,t):d},t.xLabel=function(e){return arguments.length?(s=e,t):s},t}function H(){var t,e,a;t=C.selectAll("text.title").data([r.channelID]),t.exit().remove(),t.enter().append("text").attr("x",nt(0)).attr("y",0).attr("dy","-0.5em").attr("text-anchor","middle").attr("class","title"),t.text(function(t){return"Spectra: Ch"+t}),e=z.selectAll("text.title").data([k.channelID]),e.exit().remove(),e.enter().append("text").attr("x",nt(0)).attr("y",0).attr("dy","-0.5em").attr("text-anchor","middle").attr("class","title"),e.text(function(t){return"Spectra: Ch"+t}),a=E.selectAll("text.title").data([kt]),a.exit().remove(),a.enter().append("text").attr("x",nt(0)).attr("y",0).attr("dy","-0.5em").attr("text-anchor","middle").attr("class","title"),a.text(function(t){return Mt.edgeTypeName+": Ch"+t.source+"-Ch"+t.target})}function X(){var t,e,a,n,r,l,i,o,c,s,d,f,g=d3.format(".1f"),m=d3.range(0,1,1/(u-1));m.push(1),a=d3.scale.ordinal().domain(m).rangeBands([0,L]),t=O.selectAll("g#powerLegend").data([{}]),t.enter().append("g").attr("id","powerLegend"),e=t.selectAll("rect.power").data(m),e.enter().append("rect").attr("class","power").attr("x",function(t){return a(t)}).attr("height",10).attr("width",a.rangeBand()),e.style("fill",function(t){return ct(t)}),r=d3.svg.axis().scale(a).orient("bottom").tickValues([m[0],m[(m.length-1)/2],m[m.length-1]]).tickFormat(function(t){return g(lt.invert(+t))}).tickSize(0,0,0),n=t.selectAll("g.axis.hideAxisLines#power").data([{}]),n.enter().append("g").attr("transform","translate(0,9)").attr("class","axis hideAxisLines").attr("id","power").append("text").attr("x",a.rangeBand()*u/2).attr("y",-10).attr("text-anchor","middle").text("Difference in Power"),n.call(r),l=N.selectAll("g#edgeStatLegend").data([{}]),l.enter().append("g").attr("id","edgeStatLegend"),i=l.selectAll("rect.edgeStat").data(m),i.enter().append("rect").attr("class","edgeStat").attr("x",function(t){return a(t)}).attr("height",10).attr("width",a.rangeBand()),i.style("fill",function(t){return Lt(t)}),c=d3.svg.axis().scale(a).orient("bottom").tickValues([m[0],m[(m.length-1)/2],m[m.length-1]]).tickFormat(function(t){return g(xt.invert(+t))}).tickSize(0,0,0),o=l.selectAll("g.axis.hideAxisLines#edgeStat").data([Mt.edgeTypeName],String),o.enter().append("g").attr("transform","translate(0,9)").attr("class","axis hideAxisLines").attr("id","edgeStat").append("text").attr("x",a.rangeBand()*u/2).attr("y",-10).attr("text-anchor","middle").text(Mt.edgeTypeName),o.exit().remove(),o.call(c),s=q.selectAll("g.anatomical").data(params.visInfo.brainAreas,String),s.enter().append("g").attr("class","anatomical").attr("transform",function(t,e){return"translate(0,"+e*(p/2*2+3)+")"}),s.exit().remove(),d=s.selectAll("circle").data(function(t){return[t]}),d.enter().append("circle").attr("r",p/2).attr("fill",function(t){return yt(t)}),f=s.selectAll("text").data(function(t){return[t]}),f.enter().append("text").attr("x",p/2*2+5).attr("font-size",p/2*2).attr("alignment-baseline","middle").text(String)}function G(){var t=P.selectAll("g#cohSlice").data([kt.data.map(function(t){return t[x]})]);t.enter().append("g").attr("id","cohSlice"),t.call(Ot);var e=P.selectAll("g#spect1Slice").data([r.data.map(function(t){return t[x]})]);e.enter().append("g").attr("id","spect1Slice"),e.call(Nt);var a=P.selectAll("g#spect2Slice").data([k.data.map(function(t){return t[x]})]);a.enter().append("g").attr("id","spect2Slice"),a.call(Nt);var n=P.selectAll("text.title").data([ot[x]]);n.enter().append("text").attr("text-anchor","middle").attr("class","title").attr("x",j/2).attr("y",0).attr("dy","-1em"),n.text(function(t){return"Time Slice @ Frequency "+t+" "+params.visInfo.funits})}function W(){function t(t){t.each(function(t){var u=d3.select(this);e.rangeBands([0,r]),a.range([n,0]);var p="right"===s?1:-1,f=d3.svg.line().x(function(t,a){return e(e.domain()[a])}).y(function(t){return a(t)}).interpolate("linear"),g=u.selectAll("path.timeseries").data([t]);g.enter().append("path").attr("class","timeseries").attr("fill","none").attr("stroke",d),g.transition().duration(5).ease("linear").attr("d",f);var m=d3.svg.axis().scale(a).orient(s).ticks(3).tickValues([d3.min(a.domain()),0,d3.max(a.domain())]).tickSize(0,0,0),h=u.selectAll("g.axis#y").data([{}]);h.enter().append("g").attr("class","axis").attr("id","y").attr("transform","translate("+("right"===s?r:0)+",0)").append("text").attr("x",p*n/2).attr("dy","-2.5em").attr("transform","rotate("+90*p+")").attr("text-anchor","middle").text(c),h.call(m);var x=d3.svg.axis().scale(e).orient("bottom").ticks(3).tickValues([d3.min(e.domain()),0,d3.max(e.domain())]).tickSize(0,0,0),v=u.selectAll("g.axis#x").data([{}]);v.enter().append("g").attr("class","axis").attr("transform","translate(0,"+n+")").attr("id","x").append("text").attr("x",e(0)).attr("y",0).attr("text-anchor","middle").attr("dy","3em").text(o),v.call(x);var y=u.selectAll("g.zeroLine").data([[[0,n]]]);y.enter().append("g").attr("class","zeroLine");var A=y.selectAll("path").data(function(t){return t});A.enter().append("path"),A.attr("d",d3.svg.line().x(e(0)).y(function(t){return t}).interpolate("linear")).attr("stroke","black").attr("stroke-width",2).attr("fill","none").style("opacity",.7);var b=u.selectAll("g.heatmapX").data(t);b.enter().append("g").attr("transform",function(t,a){return"translate("+e(e.domain()[a])+", 0)"}).attr("class","heatmapX"),b.exit().remove();var S=b.selectAll("rect").data(function(t){return t});S.enter().append("rect").attr("opacity",1e-6).attr("height",n).attr("width",e.rangeBand()).style("fill","white"),S.on("mouseover",l).on("click",i),S.exit().remove()})}var e=d3.scale.ordinal(),a=d3.scale.linear(),n=600,r=600,l=function(){},i=function(){},o="",c="",s="left",d="blue";return t.xScale=function(a){return arguments.length?(e=a,t):e},t.yScale=function(e){return arguments.length?(a=e,t):a},t.rectMouseOver=function(e){return arguments.length?(l=e,t):l},t.rectMouseClick=function(e){return arguments.length?(i=e,t):i},t.width=function(e){return arguments.length?(r=e,t):r},t.height=function(e){return arguments.length?(n=e,t):n},t.yLabel=function(e){return arguments.length?(c=e,t):c},t.xLabel=function(e){return arguments.length?(o=e,t):o},t.yAxisOrientation=function(e){return arguments.length?(s=e,t):s},t.lineColor=function(e){return arguments.length?(d=e,t):d},t}function Y(){ht=d3.select("#SubjectDropdown"),ht.selectAll("li").on("click",function(){ht.selectAll("button").text(this.id).append("span").attr("class","caret"),s=this.id,m=[],h=[],e()})}function K(){vt=d3.select("#EdgeStatTypeDropdown"),vt.selectAll("li").on("click",function(){vt.selectAll("button").text(d3.select(this).select("a").html()).append("span").attr("class","caret"),d=this.id,Tt=params.edgeInfo.filter(function(t){return t.edgeTypeID===d})[0].isFreq,x=Tt?x:0,ft.property("value",ot[x]),mt.text(ot[x]+" Hz"),ut.stop(),a()})}function R(){F=d3.select("#EdgeAreaDropdown"),F.selectAll("li").on("click",function(){F.selectAll("button").text(this.id).append("span").attr("class","caret"),A=this.id,ut.stop(),_()})}function U(){var t=d3.select("#NetworkViewPanel");t.selectAll("input").on("click",function(){var e=this.value;t.selectAll("input").property("checked",!1),d3.select(this).property("checked",!0),b=e,ut.stop(),_()})}function J(){var t=d3.select("#playButton");t.on("click",function(){d3.select("#playButton").text("Stop"),g=!g;var t=setInterval(function(){bt>v&&g===!1?(v++,Z.call({value:it[v]})):(d3.select("#playButton").text("Start"),g=!0,clearInterval(t))},100)})}function Q(){var t=d3.select("#resetButton");t.on("click",function(){v=0,g=!0,ut.stop(),Z.call({value:it[v]})})}function Z(){v=it.indexOf(+this.value),pt.property("value",it[v]),gt.text(it[v]+" ms"),ut.stop(),this.noUpdate||_()}function $(){x=Tt?ot.indexOf(+this.value):0,ft.property("value",ot[x]),mt.text(ot[x]+" Hz"),ut.stop(),this.noUpdate||_(),Tt&!this.noUpdate&&G()}function tt(t,e,a){y&&(x=Tt?e:0,v=a,ut.stop(),Z.call({value:it[v],noUpdate:!0}),$.call({value:ot[x]}))}function et(){y=!y,y?o.select("text#HOLD").remove():o.append("text").attr("x",l).attr("y",i).attr("text-anchor","end").attr("id","HOLD").text("HOLD")}var at,nt,rt,lt,it,ot,ct,st,dt,ut,pt,ft,gt,mt,ht,xt,vt,yt,At,bt,St,wt,kt,It,Dt,ct,Lt,Tt,Bt,jt;it=params.visInfo.tax,ot=params.visInfo.fax,kt=params.edge.filter(function(t){return t.source===m&&t.target===h})[0];var Mt=params.edgeInfo.filter(function(t){return t.edgeTypeID===d})[0];Tt=Mt.isFreq,Bt=Mt.isFreq,B(),T();var Ct=V().height(D).width(I).yScale(rt).xScale(at).xLabel("Time ("+params.visInfo.tunits+")").yLabel("Frequency ("+params.visInfo.funits+")").intensityScale(lt).colorScale(ct).rectMouseOver(tt).rectMouseClick(et),Et=V().height(D).width(I).yScale(rt).xScale(at).xLabel("Time ("+params.visInfo.tunits+")").yLabel("Frequency ("+params.visInfo.funits+")").intensityScale(xt).colorScale(Lt).rectMouseOver(tt).rectMouseClick(et),zt=W().height(D).width(I).yScale(jt).xScale(at).xLabel("Time ("+params.visInfo.tunits+")").yLabel(Mt.edgeTypeName).rectMouseOver(tt).rectMouseClick(et),Ot=W().height(M).width(j).yScale(jt).xScale(at).yAxisOrientation("left").xLabel("Time ("+params.visInfo.tunits+")").yLabel(Mt.edgeTypeName),Nt=W().height(M).width(j).yScale(lt).xScale(at).yAxisOrientation("right").xLabel("Time ("+params.visInfo.tunits+")").yLabel("Power Difference").lineColor("green");_(),C.datum(r.data).call(Ct),z.datum(k.data).call(Ct),Tt?(E.html(""),E.datum(kt.data).call(Et),G()):(E.html(""),P.html(""),E.datum(kt.data).call(zt)),H(),X(),Y(),K(),R(),U(),J(),Q()}spectraVis={},params={};var l,i,o,c,s,d,u=11,p=10,f=2,g=!0,m=[],h=[],x=0,v=0,y=!0,A="All",b="Anatomical";colorbrewer.PiYG[u].reverse(),colorbrewer.RdBu[u].reverse();var S=colorbrewer.PiYG[u],w=colorbrewer.RdBu[u],k={top:40,right:40,bottom:40,left:40},I=document.getElementById("SpectraCh1Panel").offsetWidth-k.left-k.right,D=.8*document.getElementById("SpectraCh1Panel").offsetWidth-k.top-k.bottom,L=document.getElementById("legendKey").offsetWidth-k.left-k.right,T=60-k.top-k.bottom,B=100-k.top-k.bottom,j=I,M=180-k.top-k.bottom,C=d3.select("#SpectraCh1Panel").append("svg").attr("width",I+k.left+k.right).attr("height",D+k.top+k.bottom).append("g").attr("transform","translate("+k.left+","+k.top+")"),E=d3.select("#EdgeStatPanel").append("svg").attr("width",I+k.left+k.right).attr("height",D+k.top+k.bottom).append("g").attr("transform","translate("+k.left+","+k.top+")"),z=d3.select("#SpectraCh2Panel").append("svg").attr("width",I+k.left+k.right).attr("height",D+k.top+k.bottom).append("g").attr("transform","translate("+k.left+","+k.top+")"),O=d3.selectAll("#legendKey").select("#spectraLegend").append("svg").attr("width",L+k.left+k.right).attr("height",T+k.top+k.bottom).append("g").attr("transform","translate("+k.left+","+k.top+")");O.append("text").attr("transform","translate(-5, -16)").attr("font-size",12).attr("font-weight",700).text("Spectra");var N=d3.selectAll("#legendKey").select("#edgeStatLegend").append("svg").attr("width",L+k.left+k.right).attr("height",T+k.top+k.bottom).append("g").attr("transform","translate("+k.left+","+k.top+")");N.append("text").attr("transform","translate(-5, -16)").attr("font-size",12).attr("font-weight",700).text("Edge Statistic");var q=d3.selectAll("#legendKey").select("#anatomicalLegend").append("svg").attr("width",L+k.left+k.right).attr("height",B+k.top+k.bottom).append("g").attr("transform","translate("+k.left+","+k.top+")");q.append("text").attr("transform","translate(-5, -16)").attr("font-size",12).attr("font-weight",700).text("Brain Areas");var P=d3.select("#timeSlice").append("svg").attr("width",j+k.left+k.right).attr("height",M+k.top+k.bottom).append("g").attr("transform","translate("+k.left+","+k.top+")"),_=d3.select("body").append("div").attr("id","helpToolTip").style("opacity",1e-6);d3.select("span.glyphicon-question-sign").on("mouseover",function(){_.style("opacity",.9).style("left",d3.event.pageX+30+"px").style("top",d3.event.pageY+"px").html(function(){return"<p><strong>Click</strong> on any two nodes or the edge between them to load the spectra and coherences between those two nodes. <br> <br><strong>Mouse over</strong> the spectra or cohereograms to see the network at that time and frequency<br> <br><strong>Click on</strong> the spectra or cohereograms to freeze the network at a particular time and frequency value</p>"})}).on("mouseout",function(){_.style("opacity",1e-6)});var F=d3.select("#EdgeAreaDropdown");F.selectAll("button").text(A).append("span").attr("class","caret"),queue().defer(d3.json,"DATA/subjects.json").defer(d3.json,"DATA/visInfo.json").defer(d3.json,"DATA/edgeTypes.json").await(t)}();