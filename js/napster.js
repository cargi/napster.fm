var d=!0,e=!1,h=h||{};Math.random();var q=new function(){var a=this;a.l=function(){function b(){}function c(a){(a=a.data==YT.PlayerState.PLAYING?window.X:a.data==YT.PlayerState.ENDED?window.mb:null)&&a();j.update()}function f(){var b=new h.async.xb(function(){return window.ha});b.Wb=function(){a.W()};b.start()}window.Xb=function(){a.d=new YT.Player(k("#stream")[0],{height:"390",width:"640",Sb:"1",Lb:{onReady:f,onStateChange:c,onError:b}})};m.c().w.e.setOnDisconnect(e);m.c().w.D.setOnDisconnect(0);a.N=[]};a.ab=function(){return a.time()>=
a.length()};a.length=function(){return a.d.getDuration()};a.T=function(b,c,f){a.d.stopVideo();a.time(0,d);window.X=function(){window.X=null;window.setTimeout(function(){q.volume(0);a.time(0,d);a.play(d,d);m.b(a.n).length.set(a.length());c&&c()},2E3)};m.b(b).once("value",function(c){var l=c.val();c=c.name();j.g.bc(l.length);m.b(b).f.set(Date.now());m.b(b).J.set(r.r);m.f().push(c);a.d.loadVideoById(l.o);a.n=b;f!=d&&(m.b(b).K.set(++l.K),a.G());c=m.data.c.current.i.q;for(var p in c)l=c[p],l.V=l.id==a.n?
"now-playing":""})};a.mute=function(b){b!=e?a.d.mute():a.d.unMute()};a.W=function(b){window.mb=function(){a.play(e);window.clearInterval(j.g.Y);b&&b()}};a.play=function(b,c){a.e=b==e?e:d;a.e?a.volume(100):a.volume(0);window.clearInterval(j.g.Y);a.e&&(j.g.Y=window.setInterval(function(){!j.g.aa&&a.e&&a.time()},500));a.e?a.d.playVideo():a.d.pauseVideo();j.update();a.time();c!=d&&a.G()};a.L=function(a){a=a||0;return(60>a?"0:":"")+(10>a?"0":"")+([].add((new Date(0,0,0,0,0,a)).toLocaleTimeString().match(/[^0:].*/))[0]||
0)};a.$=function(b){b=b||r.r;var c=m.c(b);m.c(m.data.c.current.Q).w.D.off();m.c().Q.set(b);c.w.D.on("value",function(b){b=b.val();var g=(Date.now()-b)/1E3;c.m.once("value",function(b){var c=b.val(),f=c.time+(c.e?g:0);c.b!=a.n?a.T(c.b,function(){a.N[0]=window.setTimeout(function(){c.b==a.n&&a.d.pauseVideo();a.N[1]=window.setTimeout(function(){c.b==a.n&&(a.play(c.e,d),a.time(f,d))},3E3)},3E3)},d):(c.e?a.d.playVideo():a.d.pauseVideo(),a.time(f,d));j.update()})})};a.time=function(b,c){if((b=0===b?1:b)&&
5>Math.abs(b-a.time()))return b;b&&(a.h=b,c!=d?a.G():a.d.seekTo(b,d));if((b>=a.length()||a.d.getCurrentTime()>=a.length())&&a.e)a.e=e,a.h=0,j.update();a.h=a.d.getCurrentTime()||a.h;a.lb=a.L(a.h);a.h&&m.c().w.time.set(a.h);j.g.Eb(a.h);j.update();return a.h};a.G=function(){m.c().m.set({e:a.e,D:Date.now(),time:a.h,b:a.n});j.update()};a.volume=function(b){window.isNaN(b)||a.d.setVolume(b);return a.d.getVolume()}};angular.module("Napster",[]).controller("Controller",["$scope",function(a){a.Fb=r;a.Jb=m;a.Zb=s;a.M=q;a.O=j;if(r.F){a.sb=function(b){var c=a.$root.$$phase;"$apply"==c||"$digest"==c?b&&"function"===typeof b&&b():a.$apply(b)};var b=j.update;j.update=function(c){b();a.sb(c)};var c={},f=function(a,b,f){function l(c){a[b]=c.val();j.update()}c[f]=c[f]||l;return c[f]},g={},l=function(a,b){function c(b){a[b.name()]=b.val();j.update()}g[b]=g[b]||c;return g[b]},p=function(a){return h.object.Pb(a).exclude("processed").filter(function(b){return"string"==
typeof a[b]})};m.f().limit(500).on("child_added",function(a){l(m.data.f)(a);p(m.data.f).forEach(function(a){var b=m.data.f[a],c="track"+b;m.b(b).off("value",f(m.data.b,b,c));m.b(b).on("value",function(a){f(m.data.b,b,c)(a);m.data.f.q[b]=a.val()})})});m.c().on("value",function(a){f(m.data.c,r.r)(a);var b=m.data.c[r.r];if(b.C==e)m.c().C.set(d);else{for(var c in b.I){a=b.I[c];var g="group"+a,v=g+"members",y=g+"messages",g=g+"name",z=m.group(a).u().limit(500),A=m.group(a).v().limit(500),B=m.group(a).name;
m.data.group[c]=m.data.group[c]||{u:{},v:{},name:""};z.off("child_added",l(m.data.group[a].u,v));z.on("child_added",l(m.data.group[a].u,v));A.off("child_added",l(m.data.group[a].v,y));A.on("child_added",l(m.data.group[a].v,y));B.off("value",f(m.data.group[a],"name",g));B.on("value",f(m.data.group[a],"name",g))}b.i=b.i||{};b.i.q=b.i.q||{};p(b.i).map(function(a){return b.i[a]}).add(b.m.b).unique().compact().forEach(function(a){var c="track"+a;m.b(a).off("value",f(m.data.b,a,c));m.b(a).on("value",function(l){f(m.data.b,
a,c)(l);var g=l.val();g.id=a;g.length=q.L(g.length);g.f=(new Date(g.f)).format("{12hr}{tt}, {yyyy}-{MM}-{dd}");r.S(g.J,function(c){g.J=c;g.V="";if(g.id==(q.n||b.m.b))g.V="now-playing",b.Vb=g;b.i.q[a]=g;j.update();q.d.stopVideo&&!window.gb&&(window.gb=d,q.$())})})});m.data.c.current=b;window.ha=d;j.update()}})}}]);var s=new function(){var a=this;a.U=function(a,c,f){a={s:"callback",type:"master",pb:a};c&&h.object.add(a,"artist",c);(new h.j.ba("http://api.discogs.com/database/search")).send(a,function(a){var b=[],c=[];(h.object.t(a,"data","results")||[]).slice(0,20).forEach(function(a){var f=(a.title||"").split("-"),g=f.slice(1).join("").trim(),f=f[0].split("(")[0].trim(),C=(a.B||[])[0];a=a.H;var v=r.hash(g+f+a);b.add({title:g,z:f,B:C,H:a,id:v});c.add(new h.async.Deferred)});f(b,c)})};a.search=function(b,c,f){a.U(b,
c,function(b,c){for(var p=h.async.yb.Nb(c),n=0;n<b.length;++n){var x=b[n];a.M(x.title,x.z,n,function(a,b){c[b].s(a,b)})}p.Cb(function(a){function c(a){return a.o}a.forEach(function(a,c){var f=b[c];f.o=a.o;f.p=a.p;f.length=a.length});a=b.findAll(c).unique(c).sortBy(function(a){return a.p},d);a.forEach(function(a){var b=m.b(a.id);b.update({z:a.z,B:a.B,length:(a.length||0).toNumber(),title:a.title,H:(a.H||42).toNumber(),o:a.o,p:(a.p||0).toNumber()});b.update({K:0})});f(a)})})};a.M=function(a,c,f,g){c=
c.replace("Various","Song");(new h.j.ba("http://gdata.youtube.com/feeds/api/videos")).send({s:"callback",alt:"json-in-script",ec:2,pb:"{0} {1} {2}".assign({"0":a,1:c,2:[].reduce(function(f,g){var n=g.toLowerCase();return f+(!a.toLowerCase().has(n)&&!c.toLowerCase().has(n)?' -"{0}"'.assign({"0":n}):"")},"")})},function(a){if(!h.object.t(a,"feed","entry"))return g({},f);a=a.Mb.Kb.map(function(a){var b=(h.object.t(a,"id","$t")||"").split("video:")[1],c=(h.object.t(a,"yt$statistics","viewCount")||0).toNumber(),
f=h.object.t(a,"media$group","media$content",0,"duration"),g=((a.fc||{}).find(function(a){return"embed"==a.action})||{}).Yb;a=h.object.t(a,"app$control","yt$state");return{o:b,p:c,length:f,$a:!("allowed"!=g||a)}}).findAll(function(a){return a.$a}).slice(0,5).sortBy(function(a){return a.p},d);g(a[0]||{},f)})}};var r=new function(){function a(a){return"{0}@firebase.com".assign({"0":a})}var b=this;b.l=function(){b.A=5E6;b.F=h.j.k.get("napsterfm-token");b.r=h.j.k.get("napsterfm-userid");b.P=h.j.k.get("napsterfm-username");b.F&&(m.root.auth(b.F),m.c().C.set(d),m.c().C.setOnDisconnect(e))};b.S=function(a,b){m.c(a).P.once("value",function(a){b(a.val().replace("@firebase.com",""))})};b.hash=function(a){return(new h.ga.zb(new h.ga.Ab,"napster")).Ob(a).map(function(a){return a.toString(36)}).join("")};b.login=function(c,
f){var g=new h.async.Deferred;(new FirebaseAuthClient(m.root)).login("password",a(c),f,function(a,f,n){a?g.s(a):(h.j.k.set("napsterfm-token",f,b.A),h.j.k.set("napsterfm-userid",n.id,b.A),h.j.k.set("napsterfm-username",c,b.A),document.location.reload(d))});return g};b.jb=function(){m.root.unauth();h.j.k.remove("napsterfm-token");h.j.k.remove("napsterfm-userid");h.j.k.remove("napsterfm-username");document.location.reload(d)};b.createUser=function(b,f){var g=new h.async.Deferred;(new FirebaseAuthClient(m.root)).createUser(a(b),
f,function(a){a&&g.s(a)});return g};b.changePassword=function(b,f,g){var l=new h.async.Deferred;(new FirebaseAuthClient(m.root)).changePassword(a(b),f,g,function(a){a&&l.s(a)});return l}};var j=new function(){var a=this;a.l=function(){window.onhashchange=function(){function a(b,c,l){b=k(b);for(var p=0;p<b.length;++p){var n=b[p];h.a.Hb.enable(l?l(n):n,"active",n.getAttribute(c)==window.location.hash)}}a(".navbar a","href",function(a){return a.parentNode});a("[hash-location]","hash-location")};if(window.location.hash)window.onhashchange();else window.location.hash=k(".navbar li.active")[0].R()[0].getAttribute("href");var b=new h.O.ca;b.$b(h.O.ca.Db);b.ia(k("#library-table")[0]);a.g=
new h.O.Bb;a.g.ac(d);a.g.cc(d);a.g.onclick=function(){a.g.aa=d;q.time(a.g.Qb());window.setTimeout(function(){a.g.aa=e},1E3)};a.g.ia(k("#player .slider")[0])};a.update=function(){a.nb=window.isNaN(q.h)?"loading":"";a.ob=q.e?"playing":"paused"}};var t=new function(){this.log=function(a){console.log(a)};this.hb=function(){console.log("foo")};this.ib=function(a){console.log(a.val())};this.kb=function(a){m.c().i.push(a[0].id)}};var m=new function(){var a=this;a.data={group:{},f:{q:{}},b:{},c:{}};a.root=new Firebase("https://napsterfm.firebaseio.com/");a.group=function(b){b=(b||0).toString();var c=a.root.child("group").child(b);c.u=c.child("members");c.Ub=function(a){a=a.toString();return c.u.child(a)};c.v=c.child("messages");c.message=function(a){a=a.toString();a=c.v.child(a);a.Gb=a.child("author");a.Ib=a.child("created");a.text=a.child("text");return a};c.name=c.child("name");return c};a.f=function(){return a.root.child("lastPlayed")};
a.b=function(b){b=b.toString();b=a.root.child("track").child(b);b.z=b.child("artist");b.B=b.child("genre");b.f=b.child("lastPlayed");b.J=b.child("lastPlayedBy");b.length=b.child("length");b.K=b.child("playCount");b.title=b.child("title");b.H=b.child("year");b.o=b.child("youtubeid");b.p=b.child("youtubeviews");return b};a.c=function(b){b=(b||r.r).toString();var c=a.root.child("user").child(b);c.I=c.child("groups");c.group=function(a){a=a.toString();return c.I.child(a)};c.Q=c.child("following");c.Ua=
c.child("hotlist");c.Rb=function(a){a=a.toString();return c.Ua.child(a)};c.C=c.child("isOnline");c.m=c.child("nowPlaying");c.w={e:c.m.child("isPlaying"),D:c.m.child("lastChange"),time:c.m.child("time"),b:c.m.child("track")};c.i=c.child("library");c.Tb=function(a){a=a.toString();return c.i.child(a)};c.wb=c.child("transfers");c.dc=function(a){a=a.toString();a=c.wb.child(a);a.from=a.child("from");a.b=a.child("track");return a};c.P=c.child("username");return c}};function k(a){var b=u.Z(a),c=1>b.length;c&&1>(new DOMParser).parseFromString(a,"text/xml").getElementsByTagName("parsererror").length?(c=u.createElement("div"),c.innerHTML=a,b[0]=c.firstChild):c&&(b[0]={});for(var f in u){for(a=0;a<b.length;++a)b[a][f]=b[a][f]||u[f].fill(b[a]);b[f]=b[0]&&b[0][f]}return b}
var u={append:h.a.append,appendChild:h.a.appendChild,canHaveChildren:h.a.canHaveChildren,da:h.a.da,contains:h.a.contains,ea:h.a.ea,createElement:h.a.createElement,fa:h.a.fa,createTextNode:h.a.createTextNode,ja:h.a.ja,ka:h.a.ka,la:h.a.la,ma:h.a.ma,na:h.a.na,oa:h.a.oa,pa:h.a.pa,qa:h.a.qa,R:h.a.R,ra:h.a.ra,sa:h.a.sa,ta:h.a.ta,ua:h.a.ua,va:h.a.va,wa:h.a.wa,xa:h.a.xa,ya:h.a.ya,za:h.a.za,Aa:h.a.Aa,Ba:h.a.Ba,Ca:h.a.Ca,Da:h.a.Da,Ea:h.a.Ea,Fa:h.a.Fa,Ga:h.a.Ga,Ha:h.a.Ha,Ia:h.a.Ia,Ja:h.a.Ja,Ka:h.a.Ka,La:h.a.La,
Ma:h.a.Ma,Na:h.a.Na,Oa:h.a.Oa,Pa:h.a.Pa,Qa:h.a.Qa,Ra:h.a.Ra,Sa:h.a.Sa,Ta:h.a.Ta,Va:h.a.Va,Wa:h.a.Wa,Xa:h.a.Xa,Ya:h.a.Ya,Za:h.a.Za,isElement:h.a.isElement,bb:h.a.bb,cb:h.a.cb,eb:h.a.eb,fb:h.a.fb,Z:h.a.Z,qb:h.a.qb,removeNode:h.a.removeNode,rb:h.a.rb,tb:h.a.tb,ub:h.a.ub,vb:h.a.vb},w;for(w in u)k[w]=u[w];window.authentication=r;window.authentication.cookieAge=r.A;window.authentication.token=r.F;window.authentication.userid=r.r;window.authentication.username=r.P;window.authentication.init=r.l;window.authentication.getUsername=r.S;window.authentication.hash=r.hash;window.authentication.login=r.login;window.authentication.logout=r.jb;window.authentication.createUser=r.createUser;window.authentication.changePassword=r.changePassword;window.closurequery={};window.controllers={};window.datastore=m;
window.datastore.data=m.data;window.datastore.root=m.root;window.datastore.group=m.group;window.datastore.lastPlayed=m.f;window.datastore.track=m.b;window.datastore.user=m.c;window.debug=t;window.debug.log=t.log;window.debug.logFoo=t.hb;window.debug.logVal=t.ib;window.debug.lucky=t.kb;window.services=s;window.services.metadata=s.U;window.services.search=s.search;window.services.stream=s.M;window.stream=q;window.stream.isPlaying=q.e;window.stream.newTime=q.h;window.stream.newTimeProcessed=q.lb;
window.stream.player=q.d;window.stream.syncTimeouts=q.N;window.stream.init=q.l;window.stream.isFinished=q.ab;window.stream.length=q.length;window.stream.loadTrack=q.T;window.stream.mute=q.mute;window.stream.onFinished=q.W;window.stream.play=q.play;window.stream.processTime=q.L;window.stream.sync=q.$;window.stream.time=q.time;window.stream.updateNowPlaying=q.G;window.stream.volume=q.volume;window.ui=j;window.ui.pageLoadingClass=j.nb;window.ui.playButtonClass=j.ob;window.ui.slider=j.g;
window.ui.init=j.l;window.ui.update=j.update;window.datastore.data.group=m.data.group;window.datastore.data.lastPlayed=m.data.f;window.datastore.data.lastPlayed.processed=m.data.f.q;window.datastore.data.track=m.data.b;window.datastore.data.user=m.data.c;window.datastore.data.user.current=m.data.c.current;r.l();j.l();q.l();
