// Compiled by ClojureScript 1.11.4 {:optimizations :none}
goog.provide('figwheel.core');
goog.require('cljs.core');
goog.require('figwheel.tools.heads_up');
goog.require('goog.string');
goog.require('goog.string.format');
goog.require('goog.log');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('goog.debug.Console');
goog.require('goog.async.Deferred');
goog.require('goog.Promise');
goog.require('goog.events.EventTarget');
goog.require('goog.events.Event');
goog.require('goog.object');
goog.scope(function(){
figwheel.core.goog$module$goog$object = goog.module.get('goog.object');
});
figwheel.core.distinct_by = (function figwheel$core$distinct_by(f,coll){
var seen = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentHashSet.EMPTY);
return cljs.core.filter.call(null,(function (p1__12851_SHARP_){
var k = f.call(null,p1__12851_SHARP_);
var res = cljs.core.not.call(null,cljs.core.deref.call(null,seen).call(null,k));
cljs.core._vreset_BANG_.call(null,seen,cljs.core.conj.call(null,cljs.core._deref.call(null,seen),k));

return res;
}),coll);
});
figwheel.core.map_keys = (function figwheel$core$map_keys(f,coll){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__12852){
var vec__12853 = p__12852;
var k = cljs.core.nth.call(null,vec__12853,(0),null);
var v = cljs.core.nth.call(null,vec__12853,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f.call(null,k),v], null);
})),coll);
});
figwheel.core._STAR_inline_code_message_max_column_STAR_ = (80);
figwheel.core.wrap_line = (function figwheel$core$wrap_line(text,size){
return cljs.core.re_seq.call(null,cljs.core.re_pattern.call(null,[".{1,",cljs.core.str.cljs$core$IFn$_invoke$arity$1(size),"}\\s|.{1,",cljs.core.str.cljs$core$IFn$_invoke$arity$1(size),"}"].join('')),[clojure.string.replace.call(null,text,/\n/," ")," "].join(''));
});
figwheel.core.cross_format = (function figwheel$core$cross_format(var_args){
var args__4870__auto__ = [];
var len__4864__auto___12857 = arguments.length;
var i__4865__auto___12858 = (0);
while(true){
if((i__4865__auto___12858 < len__4864__auto___12857)){
args__4870__auto__.push((arguments[i__4865__auto___12858]));

var G__12859 = (i__4865__auto___12858 + (1));
i__4865__auto___12858 = G__12859;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return figwheel.core.cross_format.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(figwheel.core.cross_format.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,goog.string.format,args);
}));

(figwheel.core.cross_format.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(figwheel.core.cross_format.cljs$lang$applyTo = (function (seq12856){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12856));
}));

figwheel.core.pointer_message_lines = (function figwheel$core$pointer_message_lines(p__12862){
var map__12863 = p__12862;
var map__12863__$1 = cljs.core.__destructure_map.call(null,map__12863);
var message = cljs.core.get.call(null,map__12863__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var column = cljs.core.get.call(null,map__12863__$1,new cljs.core.Keyword(null,"column","column",2078222095));
if(((column + cljs.core.count.call(null,message)) > figwheel.core._STAR_inline_code_message_max_column_STAR_)){
return cljs.core.mapv.call(null,(function (p1__12861_SHARP_){
return cljs.core.vec.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error-message","error-message",1756021561),null], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__12861_SHARP_], null)));
}),cljs.core.cons.call(null,figwheel.core.cross_format.call(null,(function (){var col = (column - (1));
return ["%",cljs.core.str.cljs$core$IFn$_invoke$arity$1((((col === (0)))?null:col)),"s%s"].join('');
})(),"","^---"),cljs.core.map.call(null,(function (p1__12860_SHARP_){
return figwheel.core.cross_format.call(null,["%",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.core._STAR_inline_code_message_max_column_STAR_),"s"].join(''),p1__12860_SHARP_);
}),figwheel.core.wrap_line.call(null,message,(figwheel.core._STAR_inline_code_message_max_column_STAR_ - (10))))));
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error-message","error-message",1756021561),null,figwheel.core.cross_format.call(null,(function (){var col = (column - (1));
return ["%",cljs.core.str.cljs$core$IFn$_invoke$arity$1((((col === (0)))?null:col)),"s%s %s"].join('');
})(),"","^---",message)], null)], null);
}
});
figwheel.core.inline_message_display_data = (function figwheel$core$inline_message_display_data(p__12865){
var map__12866 = p__12865;
var map__12866__$1 = cljs.core.__destructure_map.call(null,map__12866);
var message_data = map__12866__$1;
var message = cljs.core.get.call(null,map__12866__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var line = cljs.core.get.call(null,map__12866__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__12866__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var file_excerpt = cljs.core.get.call(null,map__12866__$1,new cljs.core.Keyword(null,"file-excerpt","file-excerpt",-1132330744));
if(cljs.core.truth_(file_excerpt)){
var map__12867 = file_excerpt;
var map__12867__$1 = cljs.core.__destructure_map.call(null,map__12867);
var start_line = cljs.core.get.call(null,map__12867__$1,new cljs.core.Keyword(null,"start-line","start-line",-41746654));
var path = cljs.core.get.call(null,map__12867__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var excerpt = cljs.core.get.call(null,map__12867__$1,new cljs.core.Keyword(null,"excerpt","excerpt",219850763));
var lines = cljs.core.map_indexed.call(null,(function (i,l){
var ln = (i + start_line);
return (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[((cljs.core._EQ_.call(null,line,ln))?new cljs.core.Keyword(null,"error-in-code","error-in-code",-1661931357):new cljs.core.Keyword(null,"code-line","code-line",-2138627853)),ln,l],null));
}),clojure.string.split_lines.call(null,excerpt));
var vec__12868 = cljs.core.split_with.call(null,(function (p1__12864_SHARP_){
return cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"error-in-code","error-in-code",-1661931357),cljs.core.first.call(null,p1__12864_SHARP_));
}),lines);
var begin = cljs.core.nth.call(null,vec__12868,(0),null);
var end = cljs.core.nth.call(null,vec__12868,(1),null);
return cljs.core.concat.call(null,cljs.core.take_last.call(null,(5),begin),cljs.core.take.call(null,(1),end),figwheel.core.pointer_message_lines.call(null,message_data),cljs.core.take.call(null,(5),cljs.core.rest.call(null,end)));
} else {
return null;
}
});
figwheel.core.file_line_column = (function figwheel$core$file_line_column(p__12871){
var map__12872 = p__12871;
var map__12872__$1 = cljs.core.__destructure_map.call(null,map__12872);
var file = cljs.core.get.call(null,map__12872__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__12872__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__12872__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__12873 = "";
var G__12873__$1 = (cljs.core.truth_(file)?[G__12873,"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__12873);
var G__12873__$2 = (cljs.core.truth_(line)?[G__12873__$1," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__12873__$1);
if(cljs.core.truth_((function (){var and__4251__auto__ = line;
if(cljs.core.truth_(and__4251__auto__)){
return column;
} else {
return and__4251__auto__;
}
})())){
return [G__12873__$2,", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__12873__$2;
}
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.core !== 'undefined') && (typeof figwheel.core.logger !== 'undefined')){
} else {
figwheel.core.logger = goog.log.getLogger.call(null,"Figwheel");
}

figwheel.core.glog_info = (function figwheel$core$glog_info(log,msg){
return goog.log.info.call(null,log,msg);
});

figwheel.core.glog_warning = (function figwheel$core$glog_warning(log,msg){
return goog.log.warning.call(null,log,msg);
});

figwheel.core.glog_error = (function figwheel$core$glog_error(log,msg){
return goog.log.error.call(null,log,msg);
});

figwheel.core.console_logging = (function figwheel$core$console_logging(){
if(cljs.core.truth_(figwheel.core.goog$module$goog$object.get.call(null,goog.debug.Console,"instance"))){
} else {
var c_12931 = (new goog.debug.Console());
var G__12880_12932 = c_12931.getFormatter();
figwheel.core.goog$module$goog$object.set.call(null,G__12880_12932,"showAbsoluteTime",false);

figwheel.core.goog$module$goog$object.set.call(null,G__12880_12932,"showRelativeTime",false);


figwheel.core.goog$module$goog$object.set.call(null,goog.debug.Console,"instance",c_12931);

}

var temp__5720__auto__ = figwheel.core.goog$module$goog$object.get.call(null,goog.debug.Console,"instance");
if(cljs.core.truth_(temp__5720__auto__)){
var console_instance = temp__5720__auto__;
console_instance.setCapturing(true);

return true;
} else {
return null;
}
});
goog.exportSymbol('figwheel.core.console_logging', figwheel.core.console_logging);

if((typeof figwheel !== 'undefined') && (typeof figwheel.core !== 'undefined') && (typeof figwheel.core.log_console !== 'undefined')){
} else {
figwheel.core.log_console = figwheel.core.console_logging.call(null);
}

figwheel.core.event_target = (((typeof document !== 'undefined'))?document:(new goog.events.EventTarget()));
goog.exportSymbol('figwheel.core.event_target', figwheel.core.event_target);

if((typeof figwheel !== 'undefined') && (typeof figwheel.core !== 'undefined') && (typeof figwheel.core.listener_key_map !== 'undefined')){
} else {
figwheel.core.listener_key_map = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}

figwheel.core.unlisten = (function figwheel$core$unlisten(ky,event_name){
var temp__5720__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.core.listener_key_map),ky);
if(cljs.core.truth_(temp__5720__auto__)){
var f = temp__5720__auto__;
return figwheel.core.event_target.removeEventListener(cljs.core.name.call(null,event_name),f);
} else {
return null;
}
});

figwheel.core.listen = (function figwheel$core$listen(ky,event_name,f){
figwheel.core.unlisten.call(null,ky,event_name);

figwheel.core.event_target.addEventListener(cljs.core.name.call(null,event_name),f);

return cljs.core.swap_BANG_.call(null,figwheel.core.listener_key_map,cljs.core.assoc,ky,f);
});

figwheel.core.dispatch_event = (function figwheel$core$dispatch_event(event_name,data){
return figwheel.core.event_target.dispatchEvent((function (){var G__12881 = (((figwheel.core.event_target instanceof goog.events.EventTarget))?(new goog.events.Event(cljs.core.name.call(null,event_name),figwheel.core.event_target)):(new Event(cljs.core.name.call(null,event_name),figwheel.core.event_target)));
figwheel.core.goog$module$goog$object.add.call(null,G__12881,"data",(function (){var or__4253__auto__ = data;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})());

return G__12881;
})());
});

figwheel.core.event_data = (function figwheel$core$event_data(e){
return figwheel.core.goog$module$goog$object.get.call(null,(function (){var temp__5718__auto__ = e.event_;
if(cljs.core.truth_(temp__5718__auto__)){
var e__$1 = temp__5718__auto__;
return e__$1;
} else {
return e;
}
})(),"data");
});


/**
 * @define {boolean}
 */
figwheel.core.load_warninged_code = goog.define("figwheel.core.load_warninged_code",false);


/**
 * @define {boolean}
 */
figwheel.core.heads_up_display = goog.define("figwheel.core.heads_up_display",true);

if((typeof figwheel !== 'undefined') && (typeof figwheel.core !== 'undefined') && (typeof figwheel.core.state !== 'undefined')){
} else {
figwheel.core.state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),cljs.core.PersistentArrayMap.EMPTY], null));
}

figwheel.core.heads_up_display_QMARK_ = (function figwheel$core$heads_up_display_QMARK_(){
var and__4251__auto__ = figwheel.core.heads_up_display;
if(cljs.core.truth_(and__4251__auto__)){
return (!((goog.global.document == null)));
} else {
return and__4251__auto__;
}
});

var last_reload_timestamp_12933 = cljs.core.atom.call(null,(0));
var promise_chain_12934 = (new goog.Promise((function (r,_){
return r.call(null,true);
})));
figwheel.core.render_watcher = (function figwheel$core$render_watcher(_,___$1,o,n){
if(cljs.core.truth_(figwheel.core.heads_up_display_QMARK_.call(null))){
var temp__5718__auto__ = (function (){var temp__5720__auto__ = cljs.core.get_in.call(null,n,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"reload-started","reload-started",-1932451477)], null));
if(cljs.core.truth_(temp__5720__auto__)){
var ts = temp__5720__auto__;
var and__4251__auto__ = (cljs.core.deref.call(null,last_reload_timestamp_12933) < ts);
if(and__4251__auto__){
return ts;
} else {
return and__4251__auto__;
}
} else {
return null;
}
})();
if(cljs.core.truth_(temp__5718__auto__)){
var ts = temp__5718__auto__;
var warnings = cljs.core.not_empty.call(null,cljs.core.get_in.call(null,n,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"warnings","warnings",-735437651)], null)));
var exception = cljs.core.get_in.call(null,n,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"exception","exception",-335277064)], null));
cljs.core.reset_BANG_.call(null,last_reload_timestamp_12933,ts);

if(cljs.core.truth_(warnings)){
return promise_chain_12934.then((function (){
var warn = cljs.core.first.call(null,warnings);
var _STAR_inline_code_message_max_column_STAR__orig_val__12882 = figwheel.core._STAR_inline_code_message_max_column_STAR_;
var _STAR_inline_code_message_max_column_STAR__temp_val__12883 = (132);
(figwheel.core._STAR_inline_code_message_max_column_STAR_ = _STAR_inline_code_message_max_column_STAR__temp_val__12883);

try{return figwheel.tools.heads_up.display_warning.call(null,cljs.core.assoc.call(null,warn,new cljs.core.Keyword(null,"error-inline","error-inline",1073987185),figwheel.core.inline_message_display_data.call(null,warn))).then((function (){
var seq__12884 = cljs.core.seq.call(null,cljs.core.rest.call(null,warnings));
var chunk__12885 = null;
var count__12886 = (0);
var i__12887 = (0);
while(true){
if((i__12887 < count__12886)){
var w = cljs.core._nth.call(null,chunk__12885,i__12887);
figwheel.tools.heads_up.append_warning_message.call(null,w);


var G__12935 = seq__12884;
var G__12936 = chunk__12885;
var G__12937 = count__12886;
var G__12938 = (i__12887 + (1));
seq__12884 = G__12935;
chunk__12885 = G__12936;
count__12886 = G__12937;
i__12887 = G__12938;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__12884);
if(temp__5720__auto__){
var seq__12884__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12884__$1)){
var c__4679__auto__ = cljs.core.chunk_first.call(null,seq__12884__$1);
var G__12939 = cljs.core.chunk_rest.call(null,seq__12884__$1);
var G__12940 = c__4679__auto__;
var G__12941 = cljs.core.count.call(null,c__4679__auto__);
var G__12942 = (0);
seq__12884 = G__12939;
chunk__12885 = G__12940;
count__12886 = G__12941;
i__12887 = G__12942;
continue;
} else {
var w = cljs.core.first.call(null,seq__12884__$1);
figwheel.tools.heads_up.append_warning_message.call(null,w);


var G__12943 = cljs.core.next.call(null,seq__12884__$1);
var G__12944 = null;
var G__12945 = (0);
var G__12946 = (0);
seq__12884 = G__12943;
chunk__12885 = G__12944;
count__12886 = G__12945;
i__12887 = G__12946;
continue;
}
} else {
return null;
}
}
break;
}
}));
}finally {(figwheel.core._STAR_inline_code_message_max_column_STAR_ = _STAR_inline_code_message_max_column_STAR__orig_val__12882);
}}));
} else {
if(cljs.core.truth_(exception)){
return promise_chain_12934.then((function (){
var _STAR_inline_code_message_max_column_STAR__orig_val__12888 = figwheel.core._STAR_inline_code_message_max_column_STAR_;
var _STAR_inline_code_message_max_column_STAR__temp_val__12889 = (132);
(figwheel.core._STAR_inline_code_message_max_column_STAR_ = _STAR_inline_code_message_max_column_STAR__temp_val__12889);

try{return figwheel.tools.heads_up.display_exception.call(null,cljs.core.assoc.call(null,exception,new cljs.core.Keyword(null,"error-inline","error-inline",1073987185),figwheel.core.inline_message_display_data.call(null,exception)));
}finally {(figwheel.core._STAR_inline_code_message_max_column_STAR_ = _STAR_inline_code_message_max_column_STAR__orig_val__12888);
}}));
} else {
return promise_chain_12934.then((function (){
return figwheel.tools.heads_up.flash_loaded.call(null);
}));

}
}
} else {
return null;
}
} else {
return null;
}
});

cljs.core.add_watch.call(null,figwheel.core.state,new cljs.core.Keyword("figwheel.core","render-watcher","figwheel.core/render-watcher",2046135910),figwheel.core.render_watcher);

figwheel.core.immutable_ns_QMARK_ = (function figwheel$core$immutable_ns_QMARK_(ns){
var ns__$1 = cljs.core.name.call(null,ns);
var or__4253__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, ["cljs.nodejs",null,"goog",null,"figwheel.connect",null,"cljs.core",null,"figwheel.preload",null], null), null).call(null,ns__$1);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return ((goog.string.startsWith("clojure.",ns__$1)) || (goog.string.startsWith("goog.",ns__$1)));
}
});

figwheel.core.ns_exists_QMARK_ = (function figwheel$core$ns_exists_QMARK_(ns){
return (!((cljs.core.reduce.call(null,cljs.core.fnil.call(null,figwheel.core.goog$module$goog$object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,ns),".")) == null)));
});

figwheel.core.reload_ns_QMARK_ = (function figwheel$core$reload_ns_QMARK_(namespace){
var meta_data = cljs.core.meta.call(null,namespace);
var and__4251__auto__ = cljs.core.not.call(null,figwheel.core.immutable_ns_QMARK_.call(null,namespace));
if(and__4251__auto__){
var and__4251__auto____$1 = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_data));
if(and__4251__auto____$1){
var or__4253__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_data);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
var or__4253__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_data);
if(cljs.core.truth_(or__4253__auto____$1)){
return or__4253__auto____$1;
} else {
return figwheel.core.ns_exists_QMARK_.call(null,namespace);
}
}
} else {
return and__4251__auto____$1;
}
} else {
return and__4251__auto__;
}
});

figwheel.core.call_hooks = (function figwheel$core$call_hooks(var_args){
var args__4870__auto__ = [];
var len__4864__auto___12947 = arguments.length;
var i__4865__auto___12948 = (0);
while(true){
if((i__4865__auto___12948 < len__4864__auto___12947)){
args__4870__auto__.push((arguments[i__4865__auto___12948]));

var G__12949 = (i__4865__auto___12948 + (1));
i__4865__auto___12948 = G__12949;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return figwheel.core.call_hooks.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(figwheel.core.call_hooks.cljs$core$IFn$_invoke$arity$variadic = (function (hook_key,args){
var hooks = cljs.core.keep.call(null,(function (p__12892){
var vec__12893 = p__12892;
var n = cljs.core.nth.call(null,vec__12893,(0),null);
var mdata = cljs.core.nth.call(null,vec__12893,(1),null);
var temp__5720__auto__ = cljs.core.get_in.call(null,mdata,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"figwheel-hooks","figwheel-hooks",720015356),hook_key], null));
if(cljs.core.truth_(temp__5720__auto__)){
var f = temp__5720__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,f], null);
} else {
return null;
}
}),new cljs.core.Keyword("figwheel.core","metadata","figwheel.core/metadata",-720139885).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,figwheel.core.state)));
var seq__12896 = cljs.core.seq.call(null,hooks);
var chunk__12897 = null;
var count__12898 = (0);
var i__12899 = (0);
while(true){
if((i__12899 < count__12898)){
var vec__12908 = cljs.core._nth.call(null,chunk__12897,i__12899);
var n = cljs.core.nth.call(null,vec__12908,(0),null);
var f = cljs.core.nth.call(null,vec__12908,(1),null);
var temp__5718__auto___12950 = cljs.core.reduce.call(null,((function (seq__12896,chunk__12897,count__12898,i__12899,vec__12908,n,f,hooks){
return (function (p1__12874_SHARP_,p2__12875_SHARP_){
if(cljs.core.truth_(p1__12874_SHARP_)){
return figwheel.core.goog$module$goog$object.get.call(null,p1__12874_SHARP_,p2__12875_SHARP_);
} else {
return null;
}
});})(seq__12896,chunk__12897,count__12898,i__12899,vec__12908,n,f,hooks))
,goog.global,cljs.core.map.call(null,cljs.core.str,cljs.core.concat.call(null,clojure.string.split.call(null,n,/\./),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [f], null))));
if(cljs.core.truth_(temp__5718__auto___12950)){
var hook_12951 = temp__5718__auto___12950;
figwheel.core.glog_info.call(null,figwheel.core.logger,["Calling ",cljs.core.pr_str.call(null,hook_key)," hook - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f)].join(''));

try{cljs.core.apply.call(null,hook_12951,args);
}catch (e12911){if((e12911 instanceof Error)){
var e_12952 = e12911;
figwheel.core.glog_error.call(null,figwheel.core.logger,e_12952);
} else {
throw e12911;

}
}} else {
figwheel.core.glog_warning.call(null,figwheel.core.logger,["Unable to find ",cljs.core.pr_str.call(null,hook_key)," hook - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f)].join(''));
}


var G__12953 = seq__12896;
var G__12954 = chunk__12897;
var G__12955 = count__12898;
var G__12956 = (i__12899 + (1));
seq__12896 = G__12953;
chunk__12897 = G__12954;
count__12898 = G__12955;
i__12899 = G__12956;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__12896);
if(temp__5720__auto__){
var seq__12896__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12896__$1)){
var c__4679__auto__ = cljs.core.chunk_first.call(null,seq__12896__$1);
var G__12957 = cljs.core.chunk_rest.call(null,seq__12896__$1);
var G__12958 = c__4679__auto__;
var G__12959 = cljs.core.count.call(null,c__4679__auto__);
var G__12960 = (0);
seq__12896 = G__12957;
chunk__12897 = G__12958;
count__12898 = G__12959;
i__12899 = G__12960;
continue;
} else {
var vec__12912 = cljs.core.first.call(null,seq__12896__$1);
var n = cljs.core.nth.call(null,vec__12912,(0),null);
var f = cljs.core.nth.call(null,vec__12912,(1),null);
var temp__5718__auto___12961 = cljs.core.reduce.call(null,((function (seq__12896,chunk__12897,count__12898,i__12899,vec__12912,n,f,seq__12896__$1,temp__5720__auto__,hooks){
return (function (p1__12874_SHARP_,p2__12875_SHARP_){
if(cljs.core.truth_(p1__12874_SHARP_)){
return figwheel.core.goog$module$goog$object.get.call(null,p1__12874_SHARP_,p2__12875_SHARP_);
} else {
return null;
}
});})(seq__12896,chunk__12897,count__12898,i__12899,vec__12912,n,f,seq__12896__$1,temp__5720__auto__,hooks))
,goog.global,cljs.core.map.call(null,cljs.core.str,cljs.core.concat.call(null,clojure.string.split.call(null,n,/\./),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [f], null))));
if(cljs.core.truth_(temp__5718__auto___12961)){
var hook_12962 = temp__5718__auto___12961;
figwheel.core.glog_info.call(null,figwheel.core.logger,["Calling ",cljs.core.pr_str.call(null,hook_key)," hook - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f)].join(''));

try{cljs.core.apply.call(null,hook_12962,args);
}catch (e12915){if((e12915 instanceof Error)){
var e_12963 = e12915;
figwheel.core.glog_error.call(null,figwheel.core.logger,e_12963);
} else {
throw e12915;

}
}} else {
figwheel.core.glog_warning.call(null,figwheel.core.logger,["Unable to find ",cljs.core.pr_str.call(null,hook_key)," hook - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f)].join(''));
}


var G__12964 = cljs.core.next.call(null,seq__12896__$1);
var G__12965 = null;
var G__12966 = (0);
var G__12967 = (0);
seq__12896 = G__12964;
chunk__12897 = G__12965;
count__12898 = G__12966;
i__12899 = G__12967;
continue;
}
} else {
return null;
}
}
break;
}
}));

(figwheel.core.call_hooks.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(figwheel.core.call_hooks.cljs$lang$applyTo = (function (seq12890){
var G__12891 = cljs.core.first.call(null,seq12890);
var seq12890__$1 = cljs.core.next.call(null,seq12890);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__12891,seq12890__$1);
}));


figwheel.core.reload_namespaces = (function figwheel$core$reload_namespaces(namespaces,figwheel_meta){
var figwheel_meta__$1 = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__12916){
var vec__12917 = p__12916;
var k = cljs.core.nth.call(null,vec__12917,(0),null);
var v = cljs.core.nth.call(null,vec__12917,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.name.call(null,k),v], null);
})),cljs.core.js__GT_clj.call(null,figwheel_meta,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true));
var namespaces__$1 = cljs.core.map.call(null,(function (p1__12876_SHARP_){
return cljs.core.with_meta.call(null,cljs.core.symbol.call(null,p1__12876_SHARP_),cljs.core.get.call(null,figwheel_meta__$1,p1__12876_SHARP_));
}),namespaces);
cljs.core.swap_BANG_.call(null,figwheel.core.state,(function (p1__12877_SHARP_){
return cljs.core.assoc_in.call(null,cljs.core.assoc.call(null,p1__12877_SHARP_,new cljs.core.Keyword("figwheel.core","metadata","figwheel.core/metadata",-720139885),figwheel_meta__$1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"reload-started","reload-started",-1932451477)], null),(new Date()).getTime());
}));

var to_reload = (cljs.core.truth_((function (){var and__4251__auto__ = cljs.core.not.call(null,figwheel.core.load_warninged_code);
if(and__4251__auto__){
return cljs.core.not_empty.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.core.state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"warnings","warnings",-735437651)], null)));
} else {
return and__4251__auto__;
}
})())?null:cljs.core.filter.call(null,(function (p1__12878_SHARP_){
return figwheel.core.reload_ns_QMARK_.call(null,p1__12878_SHARP_);
}),namespaces__$1));
if(cljs.core.empty_QMARK_.call(null,to_reload)){
} else {
figwheel.core.call_hooks.call(null,new cljs.core.Keyword(null,"before-load","before-load",-2060117064),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),namespaces__$1], null));

setTimeout((function (){
return figwheel.core.dispatch_event.call(null,new cljs.core.Keyword(null,"figwheel.before-load","figwheel.before-load",58978771),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),namespaces__$1], null));
}),(0));
}

var seq__12920_12968 = cljs.core.seq.call(null,to_reload);
var chunk__12921_12969 = null;
var count__12922_12970 = (0);
var i__12923_12971 = (0);
while(true){
if((i__12923_12971 < count__12922_12970)){
var ns_12972 = cljs.core._nth.call(null,chunk__12921_12969,i__12923_12971);
goog.require(cljs.core.name.call(null,ns_12972),true);


var G__12973 = seq__12920_12968;
var G__12974 = chunk__12921_12969;
var G__12975 = count__12922_12970;
var G__12976 = (i__12923_12971 + (1));
seq__12920_12968 = G__12973;
chunk__12921_12969 = G__12974;
count__12922_12970 = G__12975;
i__12923_12971 = G__12976;
continue;
} else {
var temp__5720__auto___12977 = cljs.core.seq.call(null,seq__12920_12968);
if(temp__5720__auto___12977){
var seq__12920_12978__$1 = temp__5720__auto___12977;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12920_12978__$1)){
var c__4679__auto___12979 = cljs.core.chunk_first.call(null,seq__12920_12978__$1);
var G__12980 = cljs.core.chunk_rest.call(null,seq__12920_12978__$1);
var G__12981 = c__4679__auto___12979;
var G__12982 = cljs.core.count.call(null,c__4679__auto___12979);
var G__12983 = (0);
seq__12920_12968 = G__12980;
chunk__12921_12969 = G__12981;
count__12922_12970 = G__12982;
i__12923_12971 = G__12983;
continue;
} else {
var ns_12984 = cljs.core.first.call(null,seq__12920_12978__$1);
goog.require(cljs.core.name.call(null,ns_12984),true);


var G__12985 = cljs.core.next.call(null,seq__12920_12978__$1);
var G__12986 = null;
var G__12987 = (0);
var G__12988 = (0);
seq__12920_12968 = G__12985;
chunk__12921_12969 = G__12986;
count__12922_12970 = G__12987;
i__12923_12971 = G__12988;
continue;
}
} else {
}
}
break;
}

var after_reload_fn_12989 = (function (){
try{if(cljs.core.truth_(cljs.core.not_empty.call(null,to_reload))){
figwheel.core.glog_info.call(null,figwheel.core.logger,["loaded ",cljs.core.pr_str.call(null,to_reload)].join(''));

figwheel.core.call_hooks.call(null,new cljs.core.Keyword(null,"after-load","after-load",-1278503285),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reloaded-namespaces","reloaded-namespaces",1589557425),to_reload], null));

figwheel.core.dispatch_event.call(null,new cljs.core.Keyword(null,"figwheel.after-load","figwheel.after-load",-1913099389),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reloaded-namespaces","reloaded-namespaces",1589557425),to_reload], null));
} else {
}

var temp__5720__auto__ = cljs.core.not_empty.call(null,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.set.call(null,to_reload)),namespaces__$1));
if(cljs.core.truth_(temp__5720__auto__)){
var not_loaded = temp__5720__auto__;
return figwheel.core.glog_info.call(null,figwheel.core.logger,["did not load ",cljs.core.pr_str.call(null,not_loaded)].join(''));
} else {
return null;
}
}finally {cljs.core.swap_BANG_.call(null,figwheel.core.state,cljs.core.assoc,new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),cljs.core.PersistentArrayMap.EMPTY);
}});
if((((typeof figwheel !== 'undefined') && (typeof figwheel.repl !== 'undefined')) && ((typeof figwheel !== 'undefined') && (typeof figwheel.repl !== 'undefined') && (typeof figwheel.repl.after_reloads !== 'undefined')))){
figwheel.repl.after_reloads(after_reload_fn_12989);
} else {
setTimeout(after_reload_fn_12989,(100));
}

return null;
});
goog.exportSymbol('figwheel.core.reload_namespaces', figwheel.core.reload_namespaces);

figwheel.core.compile_warnings = (function figwheel$core$compile_warnings(warnings){
if(cljs.core.empty_QMARK_.call(null,warnings)){
} else {
setTimeout((function (){
return figwheel.core.dispatch_event.call(null,new cljs.core.Keyword(null,"figwheel.compile-warnings","figwheel.compile-warnings",-2015032448),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"warnings","warnings",-735437651),warnings], null));
}),(0));
}

cljs.core.swap_BANG_.call(null,figwheel.core.state,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"warnings","warnings",-735437651)], null),cljs.core.concat,warnings);

var seq__12924 = cljs.core.seq.call(null,warnings);
var chunk__12925 = null;
var count__12926 = (0);
var i__12927 = (0);
while(true){
if((i__12927 < count__12926)){
var warning = cljs.core._nth.call(null,chunk__12925,i__12927);
figwheel.core.glog_warning.call(null,figwheel.core.logger,["Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(warning))," in ",figwheel.core.file_line_column.call(null,warning)].join(''));


var G__12990 = seq__12924;
var G__12991 = chunk__12925;
var G__12992 = count__12926;
var G__12993 = (i__12927 + (1));
seq__12924 = G__12990;
chunk__12925 = G__12991;
count__12926 = G__12992;
i__12927 = G__12993;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__12924);
if(temp__5720__auto__){
var seq__12924__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12924__$1)){
var c__4679__auto__ = cljs.core.chunk_first.call(null,seq__12924__$1);
var G__12994 = cljs.core.chunk_rest.call(null,seq__12924__$1);
var G__12995 = c__4679__auto__;
var G__12996 = cljs.core.count.call(null,c__4679__auto__);
var G__12997 = (0);
seq__12924 = G__12994;
chunk__12925 = G__12995;
count__12926 = G__12996;
i__12927 = G__12997;
continue;
} else {
var warning = cljs.core.first.call(null,seq__12924__$1);
figwheel.core.glog_warning.call(null,figwheel.core.logger,["Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(warning))," in ",figwheel.core.file_line_column.call(null,warning)].join(''));


var G__12998 = cljs.core.next.call(null,seq__12924__$1);
var G__12999 = null;
var G__13000 = (0);
var G__13001 = (0);
seq__12924 = G__12998;
chunk__12925 = G__12999;
count__12926 = G__13000;
i__12927 = G__13001;
continue;
}
} else {
return null;
}
}
break;
}
});
goog.exportSymbol('figwheel.core.compile_warnings', figwheel.core.compile_warnings);

figwheel.core.compile_warnings_remote = (function figwheel$core$compile_warnings_remote(warnings_json){
return figwheel.core.compile_warnings.call(null,cljs.core.js__GT_clj.call(null,warnings_json,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true));
});
goog.exportSymbol('figwheel.core.compile_warnings_remote', figwheel.core.compile_warnings_remote);

figwheel.core.handle_exception = (function figwheel$core$handle_exception(p__12928){
var map__12929 = p__12928;
var map__12929__$1 = cljs.core.__destructure_map.call(null,map__12929);
var exception_data = map__12929__$1;
var file = cljs.core.get.call(null,map__12929__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var type = cljs.core.get.call(null,map__12929__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__12929__$1,new cljs.core.Keyword(null,"message","message",-406056002));
try{setTimeout((function (){
return figwheel.core.dispatch_event.call(null,new cljs.core.Keyword(null,"figwheel.compile-exception","figwheel.compile-exception",1092880746),exception_data);
}),(0));

cljs.core.swap_BANG_.call(null,figwheel.core.state,(function (p1__12879_SHARP_){
return cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,p1__12879_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"reload-started","reload-started",-1932451477)], null),(new Date()).getTime()),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"exception","exception",-335277064)], null),exception_data);
}));

return figwheel.core.glog_warning.call(null,figwheel.core.logger,(function (){var G__12930 = "Compile Exception - ";
var G__12930__$1 = (cljs.core.truth_((function (){var or__4253__auto__ = type;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return message;
}
})())?[G__12930,clojure.string.join.call(null," : ",cljs.core.filter.call(null,cljs.core.some_QMARK_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,message], null)))].join(''):G__12930);
if(cljs.core.truth_(file)){
return [G__12930__$1," in ",figwheel.core.file_line_column.call(null,exception_data)].join('');
} else {
return G__12930__$1;
}
})());
}finally {cljs.core.swap_BANG_.call(null,figwheel.core.state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715)], null),cljs.core.PersistentArrayMap.EMPTY);
}});
goog.exportSymbol('figwheel.core.handle_exception', figwheel.core.handle_exception);

figwheel.core.handle_exception_remote = (function figwheel$core$handle_exception_remote(exception_data){
return figwheel.core.handle_exception.call(null,cljs.core.js__GT_clj.call(null,exception_data,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true));
});
goog.exportSymbol('figwheel.core.handle_exception_remote', figwheel.core.handle_exception_remote);

//# sourceMappingURL=core.js.map
